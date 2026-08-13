const fs = require('fs');

const pages = [
  'src/app/test-ecommerce/about/page.tsx',
  'src/app/test-ecommerce/contact/page.tsx',
  'src/app/test-ecommerce/support/page.tsx',
  'src/app/test-ecommerce/tracking/page.tsx'
];

// For the generic pages, just React from 'react' is usually enough since they are mostly static layout + motion.
// Wait, product page might have had useState. Let's handle it manually or check its original content.

pages.forEach(file => {
  if(!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(/import React;/, "import React, { useState } from 'react';");
  fs.writeFileSync(file, text, 'utf8');
});

let prodFile = 'src/app/test-ecommerce/product/[slug]/page.tsx';
if(fs.existsSync(prodFile)) {
  let prodText = fs.readFileSync(prodFile, 'utf8');
  prodText = prodText.replace(/import React;/, "import React, { useState } from 'react';");
  fs.writeFileSync(prodFile, prodText, 'utf8');
}

console.log('Fixed imports');
