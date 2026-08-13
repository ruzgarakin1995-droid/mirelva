const fs = require('fs');
const path = require('path');

// Extract products from the file
const supplementData = fs.readFileSync(path.join(__dirname, 'src/lib/mock-data/ecommerce/supplement.ts'), 'utf-8');
const productsMatch = supplementData.match(/export const supplementProducts: SupplementProduct\[\] = (\[[\s\S]*?\]);/);
const products = JSON.parse(productsMatch[1]);

const artifactDir = 'C:\\Users\\egem2\\.gemini\\antigravity\\brain\\b229830a-1309-43f9-bba5-b08ee4db74bc';
const targetDir = 'C:\\Users\\egem2\\Desktop\\website-üretici\\web-system\\public\\images\\supplement';

const images = {
  'c1': path.join(artifactDir, 'sup_protein_1786228452808.jpg'),
  'c2': path.join(artifactDir, 'sup_preworkout_1786228460444.jpg'),
  'c3': path.join(artifactDir, 'sup_amino_1786228469166.jpg'),
  'c4': path.join(artifactDir, 'sup_vitamin_1786228478478.jpg')
};

for (const product of products) {
  const sourceImage = images[product.categoryId];
  // Extract number from id (e.g. s-prod-1 -> 1)
  const idNum = product.id.split('-').pop();
  const targetImage = path.join(targetDir, `s-thumb-${idNum}.png`);
  
  fs.copyFileSync(sourceImage, targetImage);
}

console.log('Images copied successfully.');
