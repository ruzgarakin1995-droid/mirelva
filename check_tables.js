const mariadb = require('mariadb');
async function main() {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'website_builder'
  });
  const tables = await conn.query("SHOW TABLES;");
  console.log(tables);
  await conn.end();
}
main().catch(console.error);
