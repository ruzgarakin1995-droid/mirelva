const fs = require('fs');
const mariadb = require('mariadb');

async function main() {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'website_builder',
    multipleStatements: true
  });

  console.log("Connected to DB.");

  let sql = fs.readFileSync('schema.sql', 'utf16le');
  
  // Remove BOM if present
  if (sql.charCodeAt(0) === 0xFEFF) {
    sql = sql.substring(1);
  }
  
  // Remove BOM from UTF8 conversion if present
  sql = sql.replace(/^\uFEFF/, '');
  sql = sql.replace(/^\xEF\xBB\xBF/, '');

  console.log("SQL loaded, length:", sql.length);

  // We split by standard Prisma schema separators or just execute everything if multipleStatements is true
  // Let's just execute the whole block, but wait, if a table exists it will throw an error and abort the rest.
  // So we better split by ';' and execute one by one, ignoring ER_TABLE_EXISTS_ERROR
  
  const statements = sql.split(';').map(s => s.trim()).filter(s => s.length > 0);
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    try {
      console.log(`Executing statement ${i + 1}/${statements.length}:`, stmt.substring(0, 50).replace(/\n/g, ' '));
      await conn.query(stmt);
      successCount++;
    } catch (e) {
      if (e.code === 'ER_TABLE_EXISTS_ERROR') {
        skipCount++;
      } else if (e.code === 'ER_DUP_KEYNAME') {
        skipCount++;
      } else if (e.code === 'ER_DUP_ENTRY') {
        skipCount++;
      } else {
        console.error("Error executing statement:");
        console.error(stmt.substring(0, 100) + "...");
        console.error(e.message);
        errorCount++;
      }
    }
  }

  console.log(`Done. Success: ${successCount}, Skipped (Already exists): ${skipCount}, Errors: ${errorCount}`);

  await conn.end();
}

main().catch(console.error);
