import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const sourceDir = 'c:/Users/egem2/Desktop/website-üretici/web-system';
const targetDir = 'c:/Users/egem2/Desktop/dismekan-dental';

// Ensure clean target directory
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

// 1. Copy config files
const configFiles = [
  'package.json',
  'tailwind.config.ts',
  'postcss.config.js',
  'tsconfig.json',
  'next-env.d.ts',
  'components.json'
];

for (const file of configFiles) {
  if (fs.existsSync(path.join(sourceDir, file))) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
  }
}

// 2. Modify package.json to strip unnecessary deps
const pkgPath = path.join(targetDir, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = 'dismekan-dental';
  // Keep only what's needed
  const depsToKeep = ['next', 'react', 'react-dom', 'framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'];
  for (const key in pkg.dependencies) {
    if (!depsToKeep.includes(key)) {
      delete pkg.dependencies[key];
    }
  }
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
}

// Helper to copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 3. Copy src files
// App router
copyDir(path.join(sourceDir, 'src/app/test-dentist'), path.join(targetDir, 'src/app'));
// Root css
if (fs.existsSync(path.join(sourceDir, 'src/app/globals.css'))) {
  fs.copyFileSync(path.join(sourceDir, 'src/app/globals.css'), path.join(targetDir, 'src/app/globals.css'));
}

// Theme components
copyDir(path.join(sourceDir, 'src/themes/dentist'), path.join(targetDir, 'src/themes/dentist'));

// 4. Copy specific public assets
fs.mkdirSync(path.join(targetDir, 'public'), { recursive: true });
const publicFiles = fs.readdirSync(path.join(sourceDir, 'public'));
for (const file of publicFiles) {
  if (file.startsWith('dental_') || file.startsWith('dismekan_') || file.startsWith('lumina_') || file.endsWith('.svg')) {
    fs.copyFileSync(path.join(sourceDir, 'public', file), path.join(targetDir, 'public', file));
  }
}

// 5. Recursively replace strings in .tsx/.ts files
function replaceInFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Replace `/test-dentist` with empty string or `/`
      content = content.split('href="/test-dentist/').join('href="/');
      content = content.split('href="/test-dentist"').join('href="/"');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInFiles(path.join(targetDir, 'src'));

console.log('Extraction complete! Project is at:', targetDir);
