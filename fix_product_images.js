const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/lib/mock-data/ecommerce/electronics.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// We have 5 image paths
const catImages = {
  'cat-1': '/images/products/laptop.jpg',
  'cat-2': '/images/products/smartphone.jpg',
  'cat-3': '/images/products/headphones.jpg',
  'cat-4': '/images/products/gaming.jpg',
  'cat-5': '/images/products/smarthome.jpg'
};

// We parse the string to manually replace images arrays and thumbnails based on the primary category id
// Since we have the products array, we can safely just do a regex replace or evaluate, edit, and write back.
// But to keep formatting exactly, a regex on the object blocks is better.

const regex = /{[\s\S]*?id:\s*"(.*?)",[\s\S]*?categoryIds:\s*\["(.*?)"[\s\S]*?}/g;

// To do it perfectly, let's just parse it, modify it, and write it back as code string.
// However, writing a JS string representation of a complex array loses comments.
// Let's use string replace on `images: [...]` and `thumbnail: "..."` by parsing block by block.

let newContent = content;
const productsBlock = newContent.substring(newContent.indexOf('export const techProducts = ['));

let processedBlock = productsBlock.replace(
  /(id:\s*"([^"]+)"[\s\S]*?images:\s*)\["[^"]+"\](,\s*thumbnail:\s*)"[^"]+"([\s\S]*?categoryIds:\s*\["([^"]+)")/g, 
  (match, p1, p2, p3, p4, p5) => {
    // p5 is the first category id like cat-1
    const newImage = catImages[p5] || '/images/products/laptop.jpg';
    return p1 + '["' + newImage + '"]' + p3 + '"' + newImage + '"' + p4;
  }
);

newContent = newContent.substring(0, newContent.indexOf('export const techProducts = [')) + processedBlock;

fs.writeFileSync(targetPath, newContent, 'utf8');
console.log("Product images replaced with local premium images!");
