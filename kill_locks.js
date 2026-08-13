const mariadb = require('mariadb');
async function main() {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });
  
  const procs = await conn.query("SHOW PROCESSLIST");
  for (let p of procs) {
    // Kill other connections that might be holding locks
    if (p.Id !== conn.threadId && p.User !== 'system user') {
      try {
        await conn.query(`KILL ${p.Id}`);
        console.log(`Killed process ${p.Id}`);
      } catch (e) {
        console.log(`Could not kill ${p.Id}:`, e.message);
      }
    }
  }
  await conn.end();
}
main().catch(console.error);
