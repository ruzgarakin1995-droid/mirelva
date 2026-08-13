const fs = require('fs');

function restoreFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');
  
  // Reverse the bad regex mapping to restore syntax
  text = text.replace(/Ü/g, 'S');
  text = text.replace(/ü/g, 's');
  text = text.replace(/Ç/g, 'C');
  text = text.replace(/ç/g, 'c');
  text = text.replace(/Ş/g, 'X');
  text = text.replace(/ş/g, 'x');
  text = text.replace(/Ğ/g, 'G');
  text = text.replace(/ğ/g, 'g');
  text = text.replace(/Ö/g, 'O');
  text = text.replace(/ö/g, 'o');
  text = text.replace(/₺/g, ' ');
  
  // Now fix specific known strings back to proper Turkish
  // Categories
  text = text.replace(/Kadin/g, 'Kadın');
  text = text.replace(/Canta/g, 'Çanta');
  text = text.replace(/Yeni Gelenler/g, 'Yeni Gelenler');
  
  // Product 1
  text = text.replace(/isikli/g, 'şıklı');
  text = text.replace(/göml/g, 'göml');
  // I will just use standard replacements for common broken turkish words in the mock data
  text = text.replace(/Siyah Kexif/g, 'Siyah Keşif');
  text = text.replace(/Tixort/g, 'Tişört');
  text = text.replace(/Gomlek/g, 'Gömlek');
  text = text.replace(/Kaxmir/g, 'Kaşmir');
  text = text.replace(/Srun/g, 'Ürün');
  text = text.replace(/Xort/g, 'Şort');
  text = text.replace(/xort/g, 'şort');
  text = text.replace(/kumas/g, 'kumaş');
  text = text.replace(/Kumas/g, 'Kumaş');
  text = text.replace(/is/g, 'iş');
  text = text.replace(/tisort/g, 'tişört');
  text = text.replace(/Tisort/g, 'Tişört');
  text = text.replace(/Sokak/g, 'Sokak');
  text = text.replace(/Ozel/g, 'Özel');
  text = text.replace(/ozel/g, 'özel');
  text = text.replace(/Gozluk/g, 'Gözlük');
  text = text.replace(/gozluk/g, 'gözlük');
  text = text.replace(/Gunes/g, 'Güneş');
  text = text.replace(/gunes/g, 'güneş');
  text = text.replace(/Sürdürülebilirlik/g, 'Sürdürülebilirlik');
  text = text.replace(/surdurulebilir/g, 'sürdürülebilir');
  text = text.replace(/Uretim/g, 'Üretim');
  text = text.replace(/uretim/g, 'üretim');
  text = text.replace(/uret/g, 'üret');
  text = text.replace(/Uret/g, 'Üret');
  text = text.replace(/Dogal/g, 'Doğal');
  text = text.replace(/dogal/g, 'doğal');
  text = text.replace(/Isci/g, 'İşçi');
  text = text.replace(/isci/g, 'işçi');
  text = text.replace(/göru/g, 'görü');
  text = text.replace(/Goru/g, 'Görü');
  text = text.replace(/goru/g, 'görü');
  text = text.replace(/xikli/g, 'şıklı');
  text = text.replace(/Xikli/g, 'Şıklı');
  text = text.replace(/ixci/g, 'işçi');
  text = text.replace(/x/g, 'ş'); // wait x was 'ş' in the original file before my corruption? "Kexfet" -> Keşfet. Yes!
  text = text.replace(/X/g, 'Ş');

  // Fix currency symbol that got lost
  text = text.replace(/currency: ' '/g, "currency: '₺'");
  
  // Specific fixes
  text = text.replace(/göml/g, 'göml');
  
  fs.writeFileSync(filePath, text, 'utf8');
  console.log('Restored text in', filePath);
}

const files = [
  'src/lib/mock-data/ecommerce/fashion.ts'
];

files.forEach(restoreFile);
