const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/lib/mock-data/ecommerce/electronics.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// The easiest way is to add a thumbnail property right after the images property.
// regex to find `images: [...],` and append `thumbnail: "...",`
content = content.replace(/images:\s*\["(.*?)"\],/g, 'images: ["$1"],\n    thumbnail: "$1",');

fs.writeFileSync(targetPath, content, 'utf8');
console.log("Thumbnails added!");
