const fs = require('fs');
const path = require('path');

// 1. Update electronics.ts images
const electronicsPath = 'src/lib/mock-data/ecommerce/electronics.ts';
let electronics = fs.readFileSync(electronicsPath, 'utf8');
electronics = electronics.replace(/https:\/\/images\.unsplash\.com\/photo-[^'"]+/g, (match, offset, string) => {
    if (string.includes('macbook-pro') || string.includes('APP-MBP14')) return '/images/tech/macbook.jpg';
    if (string.includes('sony-wh') || string.includes('SNY-WHXM5')) return '/images/tech/sony.jpg';
    if (string.includes('iphone-15') || string.includes('APP-IP15P')) return '/images/tech/iphone.jpg';
    if (string.includes('logitech-mx') || string.includes('LOG-MX3S')) return '/images/tech/mouse.jpg';
    return match;
});
fs.writeFileSync(electronicsPath, electronics, 'utf8');

// 2. Update TEKNOEMO logo globally
const logoReplacements = [
    {
        file: 'src/components/ecommerce/tech/TechHeader.tsx',
        from: /TEKNO<span className="text-white">EMO<\/span>/g,
        to: '<span className="font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">TEKNOEMO</span>'
    },
    {
        file: 'src/components/ecommerce/tech/TechFooter.tsx',
        from: /TEKNO<span className="text-white">EMO<\/span>/g,
        to: '<span className="font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">TEKNOEMO</span>'
    },
    {
        file: 'src/components/ecommerce/tech/TechHeader.tsx',
        from: /<Link href="\/test-ecommerce-v2" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 flex items-center gap-2 drop-shadow-md">/g,
        to: '<Link href="/test-ecommerce-v2" className="text-3xl flex items-center gap-2 drop-shadow-md">'
    },
    {
        file: 'src/components/ecommerce/tech/TechFooter.tsx',
        from: /<Link href="\/test-ecommerce-v2" className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 mb-6 flex items-center gap-2">/g,
        to: '<Link href="/test-ecommerce-v2" className="text-3xl mb-6 flex items-center gap-2">'
    }
];

logoReplacements.forEach(rep => {
    let content = fs.readFileSync(rep.file, 'utf8');
    content = content.replace(rep.from, rep.to);
    fs.writeFileSync(rep.file, content, 'utf8');
});

// 3. Fix shop page filtering logic
const shopPagePath = 'src/app/test-ecommerce-v2/shop/page.tsx';
let shopPage = fs.readFileSync(shopPagePath, 'utf8');
shopPage = shopPage.replace(
    /displayedProducts = displayedProducts\.filter\(p => p\.categoryIds\.includes\(`tc-\${categoryParam}`\)\);/g,
    `const targetCategory = techCategories.find(c => c.slug === categoryParam);
       if (targetCategory) {
          displayedProducts = displayedProducts.filter(p => p.categoryIds.includes(targetCategory.id));
       }`
);
fs.writeFileSync(shopPagePath, shopPage, 'utf8');

// 4. Update V2 page.tsx Category Icons
const homePagePath = 'src/app/test-ecommerce-v2/page.tsx';
let homePage = fs.readFileSync(homePagePath, 'utf8');
homePage = homePage.replace(
    /import \{ Play, ChevronRight, BatteryCharging, Cpu, Leaf, ArrowRight \} from 'lucide-react';/,
    `import { Play, ChevronRight, BatteryCharging, Cpu, Leaf, ArrowRight, Laptop, Smartphone, Headphones, Gamepad2, Home } from 'lucide-react';`
);

const catIconCode = `
                     <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 group-hover:text-blue-500 transition-all text-slate-400 p-3">
                        {cat.slug === 'bilgisayar' && <Laptop size={28} />}
                        {cat.slug === 'telefon' && <Smartphone size={28} />}
                        {cat.slug === 'ses' && <Headphones size={28} />}
                        {cat.slug === 'oyun' && <Gamepad2 size={28} />}
                        {cat.slug === 'akilli-ev' && <Home size={28} />}
                     </div>
`;
homePage = homePage.replace(
    /<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all overflow-hidden p-3">\s*<img src=\{cat.image\}.*?\/>\s*<\/div>/,
    catIconCode
);
fs.writeFileSync(homePagePath, homePage, 'utf8');

console.log("All UI and mock data fixes completed.");
