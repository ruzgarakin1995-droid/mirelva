const fs = require('fs');
const path = require('path');

const targetPath = 'src/lib/mock-data/ecommerce/electronics.ts';

const content = `export const techCategories = [
  { id: 'cat-1', name: 'Bilgisayar & Laptop', slug: 'bilgisayar' },
  { id: 'cat-2', name: 'Telefonlar', slug: 'telefon' },
  { id: 'cat-3', name: 'Ses Sistemleri', slug: 'ses' },
  { id: 'cat-4', name: 'Gaming', slug: 'oyun' },
  { id: 'cat-5', name: 'Akıllı Ev', slug: 'akilli-ev' }
];

export const techProducts = [
  // ==========================================
  // BİLGİSAYAR & LAPTOP (10 Products)
  // ==========================================
  {
    id: "comp-1",
    name: "MacBook Pro M3 Max 16-inch",
    slug: "macbook-pro-m3-max-16",
    price: 135999,
    compareAtPrice: 142999,
    rating: 4.9,
    reviews: 124,
    description: "Apple M3 Max çip, 14 çekirdekli CPU, 30 çekirdekli GPU, 36GB Birleşik Bellek ve 1TB SSD. Profesyoneller için sınırları zorlayan performans.",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Apple",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Apple M3 Max",
      "RAM": "36GB Birleşik Bellek",
      "Depolama": "1TB SSD",
      "Ekran": "16.2 inç Liquid Retina XDR"
    }
  },
  {
    id: "comp-2",
    name: "Dell XPS 15",
    slug: "dell-xps-15",
    price: 84999,
    rating: 4.7,
    reviews: 89,
    description: "Intel Core i9-13900H, 32GB RAM, 1TB SSD, NVIDIA RTX 4070. İnanılmaz güç ve zarif tasarımın mükemmel uyumu.",
    images: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Dell",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Intel Core i9 13. Nesil",
      "RAM": "32GB DDR5",
      "Depolama": "1TB NVMe SSD",
      "Ekran": "15.6 inç 3.5K OLED Dokunmatik"
    }
  },
  {
    id: "comp-3",
    name: "ASUS ROG Zephyrus G14",
    slug: "asus-rog-zephyrus-g14",
    price: 65999,
    compareAtPrice: 72999,
    rating: 4.8,
    reviews: 215,
    description: "AMD Ryzen 9 7940HS, RTX 4060, 16GB RAM. Hem oyun hem içerik üretimi için kompakt ve güçlü.",
    images: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1", "cat-4"],
    brand: "ASUS",
    isNew: false,
    inStock: true,
    specs: {
      "İşlemci": "AMD Ryzen 9",
      "Ekran Kartı": "NVIDIA RTX 4060",
      "RAM": "16GB DDR5",
      "Ağırlık": "1.65 kg"
    }
  },
  {
    id: "comp-4",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    slug: "lenovo-thinkpad-x1",
    price: 78999,
    rating: 4.9,
    reviews: 312,
    description: "İş dünyasının efsanesi. 1.12kg ağırlığında, dayanıklı karbon fiber kasa ve Intel Evo platformu.",
    images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Lenovo",
    isNew: false,
    inStock: true,
    specs: {
      "İşlemci": "Intel Core i7-1355U",
      "RAM": "32GB LPDDR5",
      "Depolama": "1TB SSD",
      "Batarya": "57Wh"
    }
  },
  {
    id: "comp-5",
    name: "MacBook Air M2 13-inch",
    slug: "macbook-air-m2",
    price: 39999,
    compareAtPrice: 42999,
    rating: 4.8,
    reviews: 845,
    description: "Ultra hafif, süper hızlı M2 çip ve gün boyu süren pil ömrü ile öğrenciler ve günlük kullanım için ideal.",
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Apple",
    isNew: false,
    inStock: true,
    specs: {
      "İşlemci": "Apple M2",
      "RAM": "8GB",
      "Depolama": "256GB SSD",
      "Ağırlık": "1.24 kg"
    }
  },
  {
    id: "comp-6",
    name: "HP Spectre x360 14",
    slug: "hp-spectre-x360",
    price: 59999,
    rating: 4.6,
    reviews: 142,
    description: "2'si 1 arada dokunmatik OLED ekran, şık tasarım ve akıllı özellikler.",
    images: ["https://images.unsplash.com/photo-1588872657578-c02a5f4d1a54?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "HP",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Intel Core Ultra 7",
      "Ekran": "14 inç 2.8K OLED Dokunmatik",
      "RAM": "16GB",
      "Özellik": "360 Derece Katlanabilir"
    }
  },
  {
    id: "comp-7",
    name: "Mac Studio M2 Ultra",
    slug: "mac-studio-m2-ultra",
    price: 185999,
    rating: 5.0,
    reviews: 45,
    description: "Stüdyonuzun yeni güç merkezi. 24 çekirdekli CPU ve 60 çekirdekli GPU.",
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Apple",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Apple M2 Ultra",
      "RAM": "64GB Birleşik Bellek",
      "Depolama": "1TB SSD",
      "Bağlantı": "6x Thunderbolt 4"
    }
  },
  {
    id: "comp-8",
    name: "MSI Titan 18 HX",
    slug: "msi-titan-18",
    price: 199999,
    rating: 4.9,
    reviews: 28,
    description: "Masaüstü performansını dizüstüne taşıyan devrim niteliğinde oyuncu bilgisayarı.",
    images: ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1", "cat-4"],
    brand: "MSI",
    isNew: true,
    inStock: false,
    specs: {
      "İşlemci": "Intel Core i9-14900HX",
      "Ekran Kartı": "NVIDIA RTX 4090",
      "Ekran": "18 inç Mini-LED 4K 120Hz",
      "RAM": "64GB DDR5"
    }
  },
  {
    id: "comp-9",
    name: "Huawei MateBook X Pro",
    slug: "huawei-matebook-x",
    price: 54999,
    compareAtPrice: 58999,
    rating: 4.7,
    reviews: 176,
    description: "Magnezyum alaşımlı kasa, süper hafif ve muhteşem Real Color ekran.",
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1"],
    brand: "Huawei",
    isNew: false,
    inStock: true,
    specs: {
      "İşlemci": "Intel Core i7",
      "RAM": "16GB",
      "Depolama": "1TB",
      "Ağırlık": "1.26 kg"
    }
  },
  {
    id: "comp-10",
    name: "Acer Predator Helios 300",
    slug: "acer-predator",
    price: 49999,
    rating: 4.5,
    reviews: 320,
    description: "Rekabetçi oyuncular için fiyat/performans canavarı.",
    images: ["https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-1", "cat-4"],
    brand: "Acer",
    isNew: false,
    inStock: true,
    specs: {
      "İşlemci": "Intel Core i7-13700HX",
      "Ekran Kartı": "RTX 4060",
      "Ekran": "15.6 QHD 165Hz",
      "RAM": "16GB"
    }
  },

  // ==========================================
  // TELEFONLAR (10 Products)
  // ==========================================
  {
    id: "tel-1",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    price: 89999,
    rating: 4.9,
    reviews: 1250,
    description: "Titanyum tasarım, A17 Pro çip, yenilikçi kamera sistemi ve Type-C bağlantısı.",
    images: ["https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Apple",
    isNew: true,
    inStock: true,
    variants: [
      { id: "v1", name: "256GB - Natürel Titanyum", price: 89999 },
      { id: "v2", name: "512GB - Mavi Titanyum", price: 97999 }
    ],
    specs: {
      "Ekran": "6.7 inç Super Retina XDR",
      "İşlemci": "A17 Pro",
      "Kamera": "48MP Ana, 5x Telefoto",
      "Materyal": "Titanyum"
    }
  },
  {
    id: "tel-2",
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-s24-ultra",
    price: 74999,
    compareAtPrice: 79999,
    rating: 4.8,
    reviews: 890,
    description: "Galaxy AI ile donatılmış, titanyum çerçeveli ve S-Pen destekli Android'in zirvesi.",
    images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Samsung",
    isNew: true,
    inStock: true,
    specs: {
      "Ekran": "6.8 inç QHD+ Dynamic AMOLED",
      "İşlemci": "Snapdragon 8 Gen 3 for Galaxy",
      "Kamera": "200MP Ana",
      "Özellik": "Dahili S-Pen, Galaxy AI"
    }
  },
  {
    id: "tel-3",
    name: "Google Pixel 8 Pro",
    slug: "google-pixel-8-pro",
    price: 45999,
    rating: 4.7,
    reviews: 420,
    description: "Saf Android deneyimi, inanılmaz yapay zeka fotoğraf özellikleri.",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Google",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Google Tensor G3",
      "Kamera": "50MP, Magic Eraser",
      "Ekran": "6.7 inç LTPO OLED"
    }
  },
  {
    id: "tel-4",
    name: "Xiaomi 14 Ultra",
    slug: "xiaomi-14-ultra",
    price: 68999,
    rating: 4.6,
    reviews: 215,
    description: "Leica işbirliği ile geliştirilmiş profesyonel kamera sistemi.",
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Xiaomi",
    isNew: true,
    inStock: true,
    specs: {
      "Kamera": "Leica Optik Lensler, Dörtlü 50MP",
      "İşlemci": "Snapdragon 8 Gen 3",
      "Şarj": "90W Hızlı Şarj"
    }
  },
  {
    id: "tel-5",
    name: "iPhone 13",
    slug: "iphone-13",
    price: 35999,
    compareAtPrice: 38999,
    rating: 4.8,
    reviews: 3200,
    description: "Fiyat/performans oranı en yüksek iPhone modeli. Çift kamera ve A15 Bionic çip.",
    images: ["https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Apple",
    isNew: false,
    inStock: true,
    specs: {
      "Ekran": "6.1 inç OLED",
      "İşlemci": "A15 Bionic",
      "Depolama": "128GB",
      "Kamera": "12MP Çift Kamera"
    }
  },
  {
    id: "tel-6",
    name: "Samsung Galaxy Z Fold 5",
    slug: "samsung-z-fold-5",
    price: 84999,
    rating: 4.5,
    reviews: 180,
    description: "Katlanabilir teknolojinin ulaştığı son nokta. Tablet ve telefon deneyimi bir arada.",
    images: ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Samsung",
    isNew: false,
    inStock: true,
    specs: {
      "İç Ekran": "7.6 inç Dynamic AMOLED 2X",
      "Dış Ekran": "6.2 inç",
      "İşlemci": "Snapdragon 8 Gen 2"
    }
  },
  {
    id: "tel-7",
    name: "Nothing Phone (2)",
    slug: "nothing-phone-2",
    price: 28999,
    rating: 4.6,
    reviews: 310,
    description: "Glyph arayüzü ile farklılaşan, şeffaf tasarımlı eşsiz akıllı telefon.",
    images: ["https://images.unsplash.com/photo-1574944985070-8f3a12878530?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Nothing",
    isNew: false,
    inStock: true,
    specs: {
      "Tasarım": "Glyph Işıklı Arka Yüz",
      "Ekran": "6.7 inç LTPO OLED",
      "İşlemci": "Snapdragon 8+ Gen 1"
    }
  },
  {
    id: "tel-8",
    name: "POCO X6 Pro",
    slug: "poco-x6-pro",
    price: 18999,
    compareAtPrice: 20999,
    rating: 4.4,
    reviews: 580,
    description: "Oyun odaklı, bütçe dostu performans canavarı.",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2", "cat-4"],
    brand: "POCO",
    isNew: true,
    inStock: true,
    specs: {
      "İşlemci": "Dimensity 8300 Ultra",
      "Ekran": "1.5K AMOLED 120Hz",
      "Soğutma": "LiquidCool Technology"
    }
  },
  {
    id: "tel-9",
    name: "iPhone 15",
    slug: "iphone-15",
    price: 58999,
    rating: 4.8,
    reviews: 950,
    description: "Dynamic Island, 48MP kamera ve Type-C bağlantısı ile yeni standart.",
    images: ["https://images.unsplash.com/photo-1556656793-89a4c47f310b?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Apple",
    isNew: true,
    inStock: true,
    specs: {
      "Ekran": "6.1 inç OLED",
      "Bağlantı": "USB-C",
      "İşlemci": "A16 Bionic"
    }
  },
  {
    id: "tel-10",
    name: "Samsung Galaxy A54 5G",
    slug: "samsung-a54",
    price: 16999,
    compareAtPrice: 18999,
    rating: 4.6,
    reviews: 1400,
    description: "Orta segmentin en güçlü ve şık modeli. S23 serisine benzeyen tasarım.",
    images: ["https://images.unsplash.com/photo-1601784551446-20c9e07cd563?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-2"],
    brand: "Samsung",
    isNew: false,
    inStock: true,
    specs: {
      "Ekran": "6.4 inç Super AMOLED 120Hz",
      "Kamera": "50MP OIS",
      "Batarya": "5000 mAh"
    }
  },

  // ==========================================
  // SES SİSTEMLERİ (10 Products)
  // ==========================================
  {
    id: "ses-1",
    name: "AirPods Pro (2. Nesil)",
    slug: "airpods-pro-2",
    price: 9499,
    rating: 4.9,
    reviews: 2150,
    description: "USB-C şarj kutusu ile 2 kata kadar daha fazla Aktif Gürültü Engelleme.",
    images: ["https://images.unsplash.com/photo-1608043152269-423f7bc418fc?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Apple",
    isNew: true,
    inStock: true,
    specs: {
      "Özellik": "Aktif Gürültü Engelleme (ANC)",
      "Bağlantı": "USB-C & MagSafe",
      "Pil Ömrü": "30 Saate Kadar"
    }
  },
  {
    id: "ses-2",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    price: 12999,
    compareAtPrice: 14499,
    rating: 4.8,
    reviews: 950,
    description: "Endüstri lideri gürültü engelleme teknolojisi ve olağanüstü ses kalitesi.",
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c747dcb?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Sony",
    isNew: false,
    inStock: true,
    specs: {
      "Tip": "Kulak Üstü (Over-Ear)",
      "Özellik": "Gelişmiş ANC",
      "Pil Ömrü": "30 Saat"
    }
  },
  {
    id: "ses-3",
    name: "JBL Flip 6 Bluetooth Hoparlör",
    slug: "jbl-flip-6",
    price: 3499,
    rating: 4.7,
    reviews: 3400,
    description: "Su geçirmez tasarım, güçlü baslar ve 12 saat çalma süresi.",
    images: ["https://images.unsplash.com/photo-1608043152269-423f7bc418fc?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "JBL",
    isNew: false,
    inStock: true,
    specs: {
      "Dayanıklılık": "IP67 Su Geçirmez",
      "Pil Ömrü": "12 Saat",
      "Bağlantı": "Bluetooth 5.1"
    }
  },
  {
    id: "ses-4",
    name: "Bose QuietComfort Ultra",
    slug: "bose-qc-ultra",
    price: 15999,
    rating: 4.8,
    reviews: 420,
    description: "Mekansal ses teknolojisi ve efsanevi Bose konforu.",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Bose",
    isNew: true,
    inStock: true,
    specs: {
      "Özellik": "Bose Immersive Audio",
      "Tip": "Kulak Üstü",
      "Pil Ömrü": "24 Saat"
    }
  },
  {
    id: "ses-5",
    name: "Marshall Acton III",
    slug: "marshall-acton-3",
    price: 9999,
    compareAtPrice: 10999,
    rating: 4.9,
    reviews: 650,
    description: "Klasik Marshall tasarımı ve evinizi dolduracak muhteşem ses kalitesi.",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426fa15d0?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3", "cat-5"],
    brand: "Marshall",
    isNew: true,
    inStock: true,
    specs: {
      "Tip": "Ev Tipi Bluetooth Hoparlör",
      "Güç": "30W Class D Amfi",
      "Bağlantı": "Bluetooth 5.2 & 3.5mm"
    }
  },
  {
    id: "ses-6",
    name: "Sennheiser Momentum 4",
    slug: "sennheiser-momentum-4",
    price: 11499,
    rating: 4.7,
    reviews: 380,
    description: "Müzik tutkunları için benzersiz ses imajı ve 60 saate varan devasa pil ömrü.",
    images: ["https://images.unsplash.com/photo-1599669500516-b60092abc6cb?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Sennheiser",
    isNew: false,
    inStock: true,
    specs: {
      "Pil Ömrü": "60 Saat",
      "Özellik": "Hi-Res Audio Destekli ANC",
      "Sürücü": "42mm"
    }
  },
  {
    id: "ses-7",
    name: "Sonos Arc Soundbar",
    slug: "sonos-arc",
    price: 34999,
    rating: 4.9,
    reviews: 210,
    description: "TV'niz için Dolby Atmos destekli, sinema kalitesinde akıllı soundbar.",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426fa15d0?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3", "cat-5"],
    brand: "Sonos",
    isNew: false,
    inStock: true,
    specs: {
      "Teknoloji": "Dolby Atmos",
      "Bağlantı": "Wi-Fi & HDMI eARC",
      "Ses Asistanı": "Google Assistant & Amazon Alexa"
    }
  },
  {
    id: "ses-8",
    name: "Beats Studio Pro",
    slug: "beats-studio-pro",
    price: 10499,
    compareAtPrice: 11999,
    rating: 4.5,
    reviews: 540,
    description: "Özel akustik platform, kayıpsız ses ve uzamsal ses desteği.",
    images: ["https://images.unsplash.com/photo-1583394834720-923ca1522a11?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Beats",
    isNew: true,
    inStock: true,
    specs: {
      "Bağlantı": "USB-C ve 3.5mm",
      "Özellik": "Dinamik Kafa İzleme",
      "Uyumluluk": "Apple & Android"
    }
  },
  {
    id: "ses-9",
    name: "Jabra Elite 8 Active",
    slug: "jabra-elite-8",
    price: 6499,
    rating: 4.6,
    reviews: 890,
    description: "Dünyanın en dayanıklı kulaklıkları. Sporcular için askeri standartlarda test edildi.",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Jabra",
    isNew: false,
    inStock: true,
    specs: {
      "Dayanıklılık": "IP68 Toz ve Su Geçirmezlik",
      "Tutuş": "ShakeGrip Teknolojisi",
      "ANC": "Adaptif Hibrid ANC"
    }
  },
  {
    id: "ses-10",
    name: "Harman Kardon Aura Studio 4",
    slug: "harman-kardon-aura-4",
    price: 11999,
    rating: 4.8,
    reviews: 150,
    description: "İkonik şeffaf kubbe tasarımı ve büyüleyici ortam aydınlatması ile 360 derece ses.",
    images: ["https://images.unsplash.com/photo-1612214070643-300407a16f2c?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-3"],
    brand: "Harman Kardon",
    isNew: true,
    inStock: true,
    specs: {
      "Tasarım": "Elmas Desenli Aydınlatma",
      "Ses": "130W 360 Derece",
      "Bağlantı": "Bluetooth 4.2"
    }
  },

  // ==========================================
  // GAMING (10 Products)
  // ==========================================
  {
    id: "game-1",
    name: "PlayStation 5 Slim Edition",
    slug: "ps5-slim",
    price: 21999,
    compareAtPrice: 24999,
    rating: 4.9,
    reviews: 4500,
    description: "Yeni ince tasarımı, 1TB depolama alanı ve DualSense kontrolcüsü ile yeni nesil oyun deneyimi.",
    images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Sony",
    isNew: true,
    inStock: true,
    specs: {
      "Depolama": "1TB Özel SSD",
      "Çözünürlük": "4K 120Hz Destekli",
      "Kontrolcü": "DualSense Haptic Feedback"
    }
  },
  {
    id: "game-2",
    name: "Xbox Series X",
    slug: "xbox-series-x",
    price: 20999,
    rating: 4.8,
    reviews: 3200,
    description: "En hızlı ve en güçlü Xbox. 12 Teraflop işlem gücü ve Quick Resume özelliği.",
    images: ["https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Microsoft",
    isNew: false,
    inStock: true,
    specs: {
      "İşlem Gücü": "12 TFLOPS",
      "Depolama": "1TB NVMe SSD",
      "Özellik": "Xbox Game Pass Uyumlu"
    }
  },
  {
    id: "game-3",
    name: "Nintendo Switch OLED",
    slug: "nintendo-switch-oled",
    price: 13999,
    compareAtPrice: 15499,
    rating: 4.7,
    reviews: 2100,
    description: "Canlı 7 inç OLED ekran ile favori oyunlarınızı her yerde mükemmel kalitede oynayın.",
    images: ["https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Nintendo",
    isNew: false,
    inStock: true,
    specs: {
      "Ekran": "7 inç OLED",
      "Depolama": "64GB Dahili",
      "Stand": "Geniş Ayarlanabilir Stand"
    }
  },
  {
    id: "game-4",
    name: "Logitech G Pro X Superlight 2",
    slug: "logitech-g-pro-x-superlight-2",
    price: 4999,
    rating: 4.9,
    reviews: 850,
    description: "E-spor profesyonelleri için tasarlandı. Sadece 60 gram, yepyeni HERO 2 sensör.",
    images: ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4", "cat-1"],
    brand: "Logitech G",
    isNew: true,
    inStock: true,
    specs: {
      "Ağırlık": "60 Gram",
      "Sensör": "HERO 2",
      "Switch": "Lightforce Hibrit Anahtarlar"
    }
  },
  {
    id: "game-5",
    name: "Razer Huntsman V3 Pro",
    slug: "razer-huntsman-v3",
    price: 8499,
    rating: 4.7,
    reviews: 320,
    description: "Ayarlanabilir analog optik anahtarlar sayesinde her tuş basımında hassas kontrol.",
    images: ["https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4", "cat-1"],
    brand: "Razer",
    isNew: true,
    inStock: true,
    specs: {
      "Anahtar Türü": "Razer Analog Optik Switch Gen-2",
      "Özellik": "Hızlı Tetik (Rapid Trigger) Modu",
      "Gövde": "Fırçalanmış Alüminyum"
    }
  },
  {
    id: "game-6",
    name: "SteelSeries Arctis Nova Pro Wireless",
    slug: "steelseries-nova-pro",
    price: 12999,
    compareAtPrice: 14999,
    rating: 4.8,
    reviews: 540,
    description: "Oyun dünyasının en iyi ses deneyimi. Aktif gürültü engelleme ve sonsuz pil sistemi.",
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c747dcb?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4", "cat-3"],
    brand: "SteelSeries",
    isNew: false,
    inStock: true,
    specs: {
      "Sistem": "Nova Pro Acoustic System",
      "Pil": "Hot-swap Değiştirilebilir Pil Sistemi",
      "Mikrofon": "AI Destekli Gürültü Engelleyici"
    }
  },
  {
    id: "game-7",
    name: "Asus ROG Swift OLED PG27AQDM",
    slug: "rog-swift-oled",
    price: 38999,
    rating: 4.9,
    reviews: 120,
    description: "27 inç 1440p OLED oyuncu monitörü, 240Hz yenileme hızı ve 0.03ms tepki süresi.",
    images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4", "cat-1"],
    brand: "ASUS",
    isNew: true,
    inStock: false,
    specs: {
      "Ekran Boyutu": "27 inç",
      "Panel": "OLED 240Hz",
      "Tepki Süresi": "0.03 ms"
    }
  },
  {
    id: "game-8",
    name: "Logitech G923 Yarış Direksiyonu",
    slug: "logitech-g923",
    price: 14999,
    rating: 4.6,
    reviews: 950,
    description: "TRUEFORCE yeni nesil güç geri bildirimi ile gerçekçi yarış deneyimi.",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Logitech G",
    isNew: false,
    inStock: true,
    specs: {
      "Teknoloji": "TRUEFORCE Feedback",
      "Uyumluluk": "PS5, PS4, PC",
      "Malzeme": "Deri kaplama, Alüminyum"
    }
  },
  {
    id: "game-9",
    name: "Oculus Quest 3 (Meta Quest 3)",
    slug: "meta-quest-3",
    price: 23999,
    compareAtPrice: 25999,
    rating: 4.8,
    reviews: 780,
    description: "Sanal ve karma gerçekliğin en gelişmiş hali. Tam renkli Passthrough ve daha yüksek çözünürlük.",
    images: ["https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Meta",
    isNew: true,
    inStock: true,
    specs: {
      "Çözünürlük": "Göz başına 2064x2208",
      "İşlemci": "Snapdragon XR2 Gen 2",
      "Depolama": "128GB / 512GB"
    }
  },
  {
    id: "game-10",
    name: "Secretlab TITAN Evo 2022 Serisi",
    slug: "secretlab-titan-evo",
    price: 18999,
    rating: 4.9,
    reviews: 1420,
    description: "Dünyanın en çok ödül alan oyuncu koltuğu. Manyetik yastık ve 4 yönlü bel desteği.",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-4"],
    brand: "Secretlab",
    isNew: false,
    inStock: true,
    specs: {
      "Malzeme": "Neo Hybrid Deri",
      "Ergonomi": "L-ADAPT Bel Desteği",
      "Yastık": "Manyetik Hafızalı Sünger"
    }
  },

  // ==========================================
  // AKILLI EV (10 Products)
  // ==========================================
  {
    id: "ev-1",
    name: "Dyson V15 Detect Absolute",
    slug: "dyson-v15-detect",
    price: 28999,
    rating: 4.9,
    reviews: 3200,
    description: "Görünmeyen tozları açığa çıkaran lazer teknolojisi ve partikül sayan LCD ekran.",
    images: ["https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Dyson",
    isNew: false,
    inStock: true,
    specs: {
      "Çalışma Süresi": "60 Dakikaya Kadar",
      "Emiş Gücü": "240 AW",
      "Özellik": "Lazer Toz Algılama"
    }
  },
  {
    id: "ev-2",
    name: "Roborock S8 Pro Ultra",
    slug: "roborock-s8-pro",
    price: 45999,
    compareAtPrice: 48999,
    rating: 4.8,
    reviews: 840,
    description: "Kendi kendini temizleyen, paspas yıkayan ve toz boşaltan hepsi bir arada istasyonlu robot süpürge.",
    images: ["https://images.unsplash.com/photo-1518640467707-6811f4a4ab75?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Roborock",
    isNew: true,
    inStock: true,
    specs: {
      "Emiş Gücü": "6000 Pa",
      "İstasyon": "Yıkama, Kurutma, Boşaltma",
      "Navigasyon": "Reactive 3D Engelden Kaçınma"
    }
  },
  {
    id: "ev-3",
    name: "Philips Hue White and Color Ambiance Başlangıç Seti",
    slug: "philips-hue-starter",
    price: 5499,
    rating: 4.7,
    reviews: 1100,
    description: "16 milyon renk seçeneği ile evinizin atmosferini akıllı telefonunuzdan veya sesle kontrol edin.",
    images: ["https://images.unsplash.com/photo-1557324233-77d07994680e?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Philips",
    isNew: false,
    inStock: true,
    specs: {
      "İçerik": "3x Akıllı Ampul, 1x Hue Bridge",
      "Bağlantı": "Zigbee & Bluetooth",
      "Uyum": "Siri, Alexa, Google Assistant"
    }
  },
  {
    id: "ev-4",
    name: "Google Nest Hub (2. Nesil)",
    slug: "google-nest-hub",
    price: 2999,
    rating: 4.5,
    reviews: 560,
    description: "Akıllı evinizin merkezi. Uyku takibi, medya kontrolü ve görsel Google Asistan deneyimi.",
    images: ["https://images.unsplash.com/photo-1557438159-51e74eb44743?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Google",
    isNew: false,
    inStock: true,
    specs: {
      "Ekran": "7 inç Dokunmatik",
      "Sensörler": "Uyku Algılama (Soli Radar)",
      "Bağlantı": "Wi-Fi, Thread"
    }
  },
  {
    id: "ev-5",
    name: "Tapo C200 Wi-Fi Akıllı Güvenlik Kamerası",
    slug: "tapo-c200",
    price: 999,
    compareAtPrice: 1299,
    rating: 4.6,
    reviews: 5400,
    description: "1080p FHD video, 360 derece dönüş ve gece görüşü özellikli bütçe dostu bebek/ev kamerası.",
    images: ["https://images.unsplash.com/photo-1557324233-77d07994680e?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "TP-Link",
    isNew: false,
    inStock: true,
    specs: {
      "Çözünürlük": "1080p Full HD",
      "Görüş Açısı": "360° Yatay, 114° Dikey",
      "Gece Görüşü": "9 Metreye Kadar"
    }
  },
  {
    id: "ev-6",
    name: "Amazon Echo Dot (5. Nesil) Saatli",
    slug: "echo-dot-5",
    price: 2199,
    rating: 4.8,
    reviews: 890,
    description: "LED ekranında saati gösteren, Alexa destekli gelişmiş akıllı hoparlör.",
    images: ["https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5", "cat-3"],
    brand: "Amazon",
    isNew: true,
    inStock: true,
    specs: {
      "Asistan": "Amazon Alexa",
      "Ekran": "LED Gösterge",
      "Sensör": "Sıcaklık Sensörü"
    }
  },
  {
    id: "ev-7",
    name: "Xiaomi Akıllı Hava Temizleyici 4 Pro",
    slug: "xiaomi-air-purifier-4",
    price: 7999,
    rating: 4.7,
    reviews: 620,
    description: "Evdeki havayı dakikalar içinde temizler, PM2.5 ve formaldehit gibi zararlı maddeleri yok eder.",
    images: ["https://images.unsplash.com/photo-1586526477810-6c927f12eefc?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Xiaomi",
    isNew: false,
    inStock: true,
    specs: {
      "Kapasite": "60 metrekare",
      "Filtre": "HEPA + Aktif Karbon",
      "CADR": "500m³/saat"
    }
  },
  {
    id: "ev-8",
    name: "Nespresso Vertuo Next Kahve Makinesi",
    slug: "nespresso-vertuo-next",
    price: 5499,
    compareAtPrice: 6299,
    rating: 4.6,
    reviews: 1150,
    description: "Akıllı kapsül tanıma sistemi ile tek tuşla 5 farklı boyutta mükemmel kahve.",
    images: ["https://images.unsplash.com/photo-1519098901909-b1553a1190fa?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Nespresso",
    isNew: false,
    inStock: true,
    specs: {
      "Teknoloji": "Centrifusion",
      "Bağlantı": "Wi-Fi / Bluetooth (Yazılım güncellemeleri için)",
      "Isınma": "30 Saniye"
    }
  },
  {
    id: "ev-9",
    name: "Philips Akıllı Kapı Kilidi 7300",
    slug: "philips-smart-lock",
    price: 18999,
    rating: 4.8,
    reviews: 140,
    description: "Parmak izi, şifre, kart veya uygulama ile anahtarsız giriş imkanı sağlayan premium güvenlik.",
    images: ["https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5"],
    brand: "Philips",
    isNew: true,
    inStock: false,
    specs: {
      "Kilit Açma": "Parmak İzi, Şifre, RFID, App",
      "Uyarı": "Zorlama ve Düşük Pil Alarmı",
      "Kapasite": "100 Parmak İzi"
    }
  },
  {
    id: "ev-10",
    name: "Apple TV 4K (3. Nesil)",
    slug: "apple-tv-4k",
    price: 6499,
    rating: 4.9,
    reviews: 2800,
    description: "A15 Bionic çip ile en akıcı ve güçlü ev sineması ile akıllı ev hub deneyimi.",
    images: ["https://images.unsplash.com/photo-1546435770-a3e426fa15d0?q=80&w=800&auto=format&fit=crop"],
    categoryIds: ["cat-5", "cat-3"],
    brand: "Apple",
    isNew: false,
    inStock: true,
    specs: {
      "Çözünürlük": "4K HDR10+ ve Dolby Vision",
      "İşlemci": "A15 Bionic",
      "Kapasite": "64GB / 128GB (Ethernet)"
    }
  }
];
`;

fs.writeFileSync(targetPath, content, 'utf8');
console.log("Successfully generated electronics.ts with 50 products!");
