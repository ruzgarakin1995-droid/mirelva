const fs = require('fs');
const mariadb = require('mariadb');

async function main() {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    multipleStatements: true
  });
  
  console.log("Dropping and creating DB...");
  await conn.query("DROP DATABASE IF EXISTS website_builder");
  await conn.query("CREATE DATABASE website_builder");
  await conn.query("USE website_builder");
  
  let sql = fs.readFileSync('schema.sql', 'utf16le');
  if (sql.charCodeAt(0) === 0xFEFF) sql = sql.substring(1);
  sql = sql.replace(/^\uFEFF/, '');
  sql = sql.replace(/^\xEF\xBB\xBF/, '');
  
  console.log("Executing schema SQL...");
  await conn.query(sql);
  
  console.log("Schema applied!");
  await conn.end();
}
main().catch(console.error);
