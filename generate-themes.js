const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src/app');
const folders = fs.readdirSync(appDir).filter(f => f.startsWith('test-') && fs.statSync(path.join(appDir, f)).isDirectory());

function toTitleCase(str) {
  return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const defaultThemes = folders.map((folder, index) => {
  // Determine tier based on folder name suffix
  let tier = 1;
  let isPremium = true;
  
  if (folder.endsWith('-v3') || folder.endsWith('-v4')) {
    tier = 3;
    isPremium = true;
  } else if (folder.endsWith('-v2')) {
    tier = 2;
    isPremium = false;
  }
  
  // Clean name
  let cleanName = folder.replace('test-', '');
  
  // Category mapping to match the translation object in LibraryClient.tsx
  let category = toTitleCase(cleanName.replace(/-v[2-4]/, ''));
  if (category === 'Ecommerce') category = 'E-commerce';
  if (category === 'Rentacar') category = 'RENT_A_CAR';
  if (category === 'Realestate') category = 'Real Estate';
  
  return {
    id: (index + 1).toString(),
    name: toTitleCase(cleanName) + ' Tema',
    category: category,
    isPremium: isPremium,
    previewUrl: '/' + folder,
    config: JSON.stringify({ tier: tier })
  };
});

const fileContent = `
  const DEFAULT_THEMES = ${JSON.stringify(defaultThemes, null, 4)};
`;

fs.writeFileSync('generated-themes.txt', fileContent);
console.log('Successfully wrote to generated-themes.txt');
