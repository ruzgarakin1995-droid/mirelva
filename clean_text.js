const fs = require('fs');

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');
  
  // Specific words
  text = text.replace(/LOC0ZSA/g, 'LOCİZSA');
  text = text.replace(/LOC0zsa/g, 'Locizsa');
  
  // Header
  text = text.replace(/TRY \([^\)]+\)/g, 'TRY (₺)');
  text = text.replace(/SS'26 KOLEKSİYONU YAYINDA.*?SZERİ.*?SCRETSİZ KARGO./g, "SS'26 KOLEKSİYONU YAYINDA. 2000 ₺ ÜZERİ ÜCRETSİZ KARGO.");
  text = text.replace(/Srünleri/g, 'Ürünleri');
  text = text.replace(/!anta/g, 'Çanta');
  text = text.replace(/Kexfetmeye Baxla/g, 'Keşfetmeye Başla');
  text = text.replace(/ /g, '₺');
  
  // Footer
  text = text.replace(/İade ve Dexixim/g, 'İade ve Değişim');
  text = text.replace(/Sürdürülebilirlik/g, 'Sürdürülebilirlik');
  text = text.replace(/Maxazalar/g, 'Mağazalar');
  text = text.replace(/İletixim/g, 'İletişim');

  // Checkout
  text = text.replace(/Kexfetmeye/g, 'Keşfetmeye');
  text = text.replace(/Baxla/g, 'Başla');
  text = text.replace(/Ödeme Axaması/g, 'Ödeme Aşaması');
  text = text.replace(/İletixim/g, 'İletişim');
  text = text.replace(/Tüm Hakları/g, 'Tüm Hakları');
  text = text.replace(/Müxteri/g, 'Müşteri');
  text = text.replace(/Baxarılı/g, 'Başarılı');
  text = text.replace(/Siparixiniz/g, 'Siparişiniz');
  text = text.replace(/maxaza/g, 'mağaza');
  
  // Fashion Mock Data
  text = text.replace(/Siyah Kexif/g, 'Siyah Keşif');
  text = text.replace(/Tixört/g, 'Tişört');
  text = text.replace(/Kaxmir/g, 'Kaşmir');
  text = text.replace(/Srün/g, 'Ürün');
  text = text.replace(/xort/g, 'şort');
  text = text.replace(/Xort/g, 'Şort');
  text = text.replace(/Gömlexi/g, 'Gömleği');

  // General fixes for the bad utf8 conversion
  text = text.replace(/S/g, 'Ü');
  text = text.replace(/s/g, 'ü');
  text = text.replace(/!/g, 'Ç');
  text = text.replace(/c/g, 'ç');
  text = text.replace(/x/g, 'ş');
  text = text.replace(/X/g, 'Ş');
  text = text.replace(/x/g, 'ş');
  text = text.replace(/G/g, 'Ğ');
  text = text.replace(/g/g, 'ğ');
  text = text.replace(/O/g, 'Ö');
  text = text.replace(/o/g, 'ö');
  
  fs.writeFileSync(filePath, text, 'utf8');
  console.log('Fixed text in', filePath);
}

const files = [
  'src/components/ecommerce/fashion/FashionHeader.tsx',
  'src/components/ecommerce/fashion/FashionFooter.tsx',
  'src/lib/mock-data/ecommerce/fashion.ts',
  'src/app/test-ecommerce/checkout/page.tsx'
];

files.forEach(fixFile);
