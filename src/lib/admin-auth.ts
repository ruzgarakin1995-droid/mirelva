import fs from 'fs';
import path from 'path';

const CREDENTIALS_FILE = path.join(process.cwd(), 'admin-credentials.json');

export function getAdminCredentials() {
  try {
    if (fs.existsSync(CREDENTIALS_FILE)) {
      const data = fs.readFileSync(CREDENTIALS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading credentials:", error);
  }
  return { username: 'emtech', password: 'yunusemre24' };
}

export function setAdminCredentials(username: string, newPassword: string) {
  fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify({ username, password: newPassword }, null, 2), 'utf8');
}
