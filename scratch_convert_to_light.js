const fs = require('fs');

const headerPath = 'src/components/ecommerce/tech/TechHeader.tsx';
const footerPath = 'src/components/ecommerce/tech/TechFooter.tsx';

let header = fs.readFileSync(headerPath, 'utf8');
// Light Mode replacements for Header
header = header
  .replace(/bg-slate-900/g, 'bg-white')
  .replace(/text-white sticky/g, 'text-slate-900 sticky')
  .replace(/border-slate-800/g, 'border-slate-200')
  .replace(/text-slate-300/g, 'text-slate-600')
  .replace(/hover:text-white/g, 'hover:text-blue-600')
  .replace(/from-white via-slate-100 to-slate-400/g, 'from-slate-900 via-slate-800 to-blue-600')
  .replace(/bg-slate-800/g, 'bg-slate-100')
  .replace(/border-slate-700/g, 'border-slate-200')
  .replace(/text-white rounded-lg/g, 'text-slate-900 rounded-lg')
  .replace(/text-slate-400 hover:text-white/g, 'text-slate-400 hover:text-white') // keep button text white
  .replace(/text-blue-400/g, 'text-blue-600')
  .replace(/text-blue-300/g, 'text-blue-700')
  .replace(/bg-white\/95/g, 'bg-white/95'); // fix if multiple runs

fs.writeFileSync(headerPath, header);

let footer = fs.readFileSync(footerPath, 'utf8');
footer = footer
  .replace(/bg-slate-900/g, 'bg-slate-50')
  .replace(/text-slate-300/g, 'text-slate-600')
  .replace(/border-slate-800/g, 'border-slate-200')
  .replace(/text-white/g, 'text-slate-900')
  .replace(/text-slate-400/g, 'text-slate-500')
  .replace(/bg-slate-800/g, 'bg-white')
  .replace(/from-white via-slate-100 to-slate-400/g, 'from-slate-900 via-slate-800 to-blue-600')
  .replace(/text-slate-900 px-3/g, 'text-slate-900 px-3');

fs.writeFileSync(footerPath, footer);
console.log('Header and Footer converted to Light Mode.');
