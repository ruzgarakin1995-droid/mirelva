const mariadb = require('mariadb');
async function main() {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });
  
  console.log("Dropping database...");
  await conn.query("DROP DATABASE IF EXISTS website_builder");
  console.log("Creating database...");
  await conn.query("CREATE DATABASE website_builder");
  console.log("Database recreated!");
  
  await conn.end();
}
main().catch(console.error);
