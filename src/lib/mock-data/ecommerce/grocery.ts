import { EcommerceProduct, EcommerceCategory } from '@/types/ecommerce';

export const groceryCategories: EcommerceCategory[] = [
  { id: 'gc-fruit', slug: 'meyve-sebze', name: 'Meyve & Sebze' },
  { id: 'gc-meat', slug: 'et-tavuk', name: 'Et, Tavuk & Balık' },
  { id: 'gc-dairy', slug: 'sut-kahvalti', name: 'Süt & Kahvaltılık' },
  { id: 'gc-bakery', slug: 'firin', name: 'Fırın & Pastane' },
  { id: 'gc-snacks', slug: 'atistirmalik-icecek', name: 'Atıştırmalık & İçecek' }
];

export const groceryProducts: EcommerceProduct[] = [
  // ==========================================
  // MEYVE & SEBZE (10 Ürün)
  // ==========================================
  {
    id: 'groc-1',
    slug: 'yerli-muz-kg',
    name: 'Yerli Muz (Kg)',
    shortDescription: 'Taptaze yerli anamur muzu.',
    description: 'Günlük olarak taze hasat edilen, lezzetli ve besleyici yerli muz. Ortalama 1 kg paketlenmiştir.',
    price: 45.90,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Taze Pazar',
    categoryIds: ['gc-fruit'],
    stock: 250,
    sku: 'GRC-MZ-01',
    rating: 4.5,
    reviewCount: 42,
    bestseller: true,
    specifications: {
      'Birim': 'Kg',
      'Menşei': 'Türkiye',
      'Muhafaza Şartı': 'Oda sıcaklığında muhafaza ediniz.'
    }
  },
  {
    id: 'groc-2',
    slug: 'organik-domates-salkim',
    name: 'Organik Salkım Domates (500g)',
    shortDescription: 'Dalından koparılmış doğal salkım domates.',
    description: 'Sera kullanmadan tamamen organik yöntemlerle yetiştirilmiş kokulu salkım domates.',
    price: 32.50,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Doğal Sera',
    categoryIds: ['gc-fruit'],
    stock: 150,
    sku: 'GRC-FR-02',
    rating: 4.8,
    reviewCount: 110,
    isNew: true,
    specifications: {
      'Birim': '500g Paket',
      'Menşei': 'Türkiye',
      'Sertifika': 'Organik Tarım'
    }
  },
  {
    id: 'groc-3',
    slug: 'avokado-adet',
    name: 'Hass Avokado (Adet)',
    shortDescription: 'Yemeye hazır, yumuşak Hass avokado.',
    description: 'Kahvaltılarınızın vazgeçilmezi, olgunlaştırılmış ve anında tüketime uygun premium avokado.',
    price: 39.90,
    compareAtPrice: 45.00,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Tropik Sepet',
    categoryIds: ['gc-fruit'],
    stock: 80,
    sku: 'GRC-FR-03',
    rating: 4.9,
    reviewCount: 340,
    specifications: {
      'Birim': 'Adet (200-250g)',
      'Menşei': 'Kenya',
      'Durum': 'Yemeye Hazır'
    }
  },
  {
    id: 'groc-4',
    slug: 'taze-bebek-ispanak',
    name: 'Yıkanmış Bebek Ispanak (200g)',
    shortDescription: 'Kumdan arındırılmış, tüketime hazır.',
    description: 'Salatalarınız ve yemekleriniz için özenle seçilip 3 kez yıkanmış taze bebek ıspanak yaprakları.',
    price: 24.50,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Taze Pazar',
    categoryIds: ['gc-fruit'],
    stock: 120,
    sku: 'GRC-FR-04',
    rating: 4.6,
    reviewCount: 75,
    specifications: {
      'Birim': '200g Paket',
      'Hazırlık': 'Yıkanmış',
      'Muhafaza': 'Buzdolabında saklayınız'
    }
  },
  {
    id: 'groc-5',
    slug: 'washington-portakal',
    name: 'Washington Portakal Sıkmalık (Kg)',
    shortDescription: 'Bol sulu, tatlı sıkmalık portakal.',
    description: 'Sabah kahvaltıları için ideal, ince kabuklu ve ekstra sulu taze portakal.',
    price: 22.90,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Meyve Bahçesi',
    categoryIds: ['gc-fruit'],
    stock: 300,
    sku: 'GRC-FR-05',
    rating: 4.7,
    reviewCount: 220,
    bestseller: true,
    specifications: {
      'Birim': 'Kg',
      'Türü': 'Sıkmalık',
      'Menşei': 'Türkiye / Antalya'
    }
  },
  {
    id: 'groc-6',
    slug: 'kivircik-marul',
    name: 'Taze Kıvırcık Marul (Adet)',
    shortDescription: 'Çıtır çıtır taze marul.',
    description: 'Salatalarınız için günlük hasat edilmiş taptaze kıvırcık marul.',
    price: 15.90,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Taze Pazar',
    categoryIds: ['gc-fruit'],
    stock: 100,
    sku: 'GRC-FR-06',
    rating: 4.4,
    reviewCount: 50,
    specifications: {
      'Birim': 'Adet',
      'Muhafaza': 'Buzdolabında (Sebzelik)'
    }
  },
  {
    id: 'groc-7',
    slug: 'organik-limon-file',
    name: 'Organik Limon (500g File)',
    shortDescription: 'İnce kabuklu, bol sulu limon.',
    description: 'Yemeklerinize ve salatalarınıza lezzet katacak, ilaçsız tarımla üretilmiş organik limon.',
    price: 27.50,
    compareAtPrice: 32.00,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Doğal Sera',
    categoryIds: ['gc-fruit'],
    stock: 180,
    sku: 'GRC-FR-07',
    rating: 4.8,
    reviewCount: 95,
    specifications: {
      'Birim': '500g',
      'Sertifika': 'Organik'
    }
  },
  {
    id: 'groc-8',
    slug: 'taze-zencefil',
    name: 'Taze Zencefil (250g)',
    shortDescription: 'Bağışıklık dostu taze kök zencefil.',
    description: 'Çaylarınıza, yemeklerinize veya detoks sularınıza aroma katacak taze zencefil.',
    price: 45.00,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Tropik Sepet',
    categoryIds: ['gc-fruit'],
    stock: 60,
    sku: 'GRC-FR-08',
    rating: 4.5,
    reviewCount: 30,
    specifications: {
      'Birim': '250g',
      'Menşei': 'İthal'
    }
  },
  {
    id: 'groc-9',
    slug: 'sari-patates',
    name: 'Sarı Patates Kızartmalık (2 Kg)',
    shortDescription: 'Kızartmaya uygun, lezzetli sarı patates.',
    description: 'İçi sarı, çıtır çıtır kızaran, yemeklik ve kızartmalık kullanıma uygun patates.',
    price: 49.90,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Taze Pazar',
    categoryIds: ['gc-fruit'],
    stock: 250,
    sku: 'GRC-FR-09',
    rating: 4.6,
    reviewCount: 140,
    specifications: {
      'Birim': '2 Kg File',
      'Türü': 'Kızartmalık'
    }
  },
  {
    id: 'groc-10',
    slug: 'kirmizi-elma',
    name: 'Amasya Elması (Kg)',
    shortDescription: 'Tatlı ve sulu yerli Amasya elması.',
    description: 'Kendine has kokusu ve lezzetiyle meşhur, çıtır Amasya elması.',
    price: 29.50,
    currency: '₺',
    images: ['/images/grocery/fruit.jpg'],
    thumbnail: '/images/grocery/fruit.jpg',
    brand: 'Meyve Bahçesi',
    categoryIds: ['gc-fruit'],
    stock: 120,
    sku: 'GRC-FR-10',
    rating: 4.7,
    reviewCount: 88,
    bestseller: true,
    specifications: {
      'Birim': 'Kg',
      'Menşei': 'Türkiye / Amasya'
    }
  },

  // ==========================================
  // ET, TAVUK & BALIK (10 Ürün)
  // ==========================================
  {
    id: 'groc-11',
    slug: 'dana-kiymalik-et',
    name: 'Dana Kıyma (%10-15 Yağlı) 500g',
    shortDescription: 'Taze çekilmiş %100 dana eti.',
    description: 'Günlük olarak hijyenik şartlarda çekilmiş, az yağlı taze dana kıyma. Köfte ve yemeklik kullanım için idealdir.',
    price: 215.00,
    compareAtPrice: 245.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Kasap Reyonu',
    categoryIds: ['gc-meat'],
    stock: 45,
    sku: 'GRC-ET-01',
    rating: 4.6,
    reviewCount: 89,
    bestseller: true,
    specifications: {
      'Miktar': '500g',
      'Et Tipi': 'Dana Kıyma (%10-15 Yağlı)',
      'Raf Ömrü': '0-4°C\'de 3 gün'
    }
  },
  {
    id: 'groc-12',
    slug: 'tavuk-gogus-fileto',
    name: 'Piliç Göğüs Fileto 500g',
    shortDescription: 'Derisiz, kemiksiz taze tavuk göğsü.',
    description: 'Yüksek proteinli, yağsız ve sağlıklı öğünleriniz için taze tavuk fileto.',
    price: 85.90,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Banvit',
    categoryIds: ['gc-meat'],
    stock: 120,
    sku: 'GRC-ET-02',
    rating: 4.8,
    reviewCount: 245,
    specifications: {
      'Miktar': '500g Tabak',
      'Türü': 'Kemiksiz, Derisiz'
    }
  },
  {
    id: 'groc-13',
    slug: 'dana-antrikot',
    name: 'Dana Antrikot Izgaralık (300g)',
    shortDescription: 'Yumuşak dokulu, mermer desenli premium et.',
    description: '28 gün dinlendirilmiş (Dry Aged), ızgara ve döküm tava için mükemmel dana antrikot.',
    price: 289.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Premium Kasap',
    categoryIds: ['gc-meat'],
    stock: 20,
    sku: 'GRC-ET-03',
    rating: 4.9,
    reviewCount: 65,
    isNew: true,
    specifications: {
      'Miktar': '300g (1 Dilim)',
      'İşlem': '28 Gün Dinlendirilmiş'
    }
  },
  {
    id: 'groc-14',
    slug: 'kasap-sucuk',
    name: 'Yüzde Yüz Dana Kasap Sucuk (400g)',
    shortDescription: 'Geleneksel fermente ev yapımı sucuk.',
    description: 'Özel baharat karışımı ile fermente edilmiş, katkısız, %100 dana eti kasap sucuk.',
    price: 235.50,
    compareAtPrice: 260.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Kasap Reyonu',
    categoryIds: ['gc-meat'],
    stock: 50,
    sku: 'GRC-ET-04',
    rating: 4.7,
    reviewCount: 120,
    specifications: {
      'Miktar': '400g',
      'İçerik': '%100 Dana Eti',
      'Türü': 'Fermente'
    }
  },
  {
    id: 'groc-15',
    slug: 'somon-fileto',
    name: 'Norveç Somon Fileto (Dilim 250g)',
    shortDescription: 'Taze, kılçıksız somon dilimi.',
    description: 'Omega-3 zengini, taze ithal Norveç somonu. Izgara veya fırın için ideal porsiyon.',
    price: 195.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Denizden',
    categoryIds: ['gc-meat'],
    stock: 35,
    sku: 'GRC-ET-05',
    rating: 4.8,
    reviewCount: 90,
    specifications: {
      'Miktar': '250g Dilim',
      'Menşei': 'Norveç'
    }
  },
  {
    id: 'groc-16',
    slug: 'dana-kusbasi',
    name: 'Dana Kuşbaşı (500g)',
    shortDescription: 'Yemeklik doğranmış yumuşak et.',
    description: 'Tencere yemekleri için özenle sinirleri alınmış, az yağlı taze dana kuşbaşı.',
    price: 225.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Kasap Reyonu',
    categoryIds: ['gc-meat'],
    stock: 60,
    sku: 'GRC-ET-06',
    rating: 4.6,
    reviewCount: 78,
    specifications: {
      'Miktar': '500g',
      'Türü': 'Az Yağlı'
    }
  },
  {
    id: 'groc-17',
    slug: 'pilic-baget',
    name: 'Piliç Baget (700g)',
    shortDescription: 'Fırın ve mangal için taze baget.',
    description: 'Soslayıp fırınlamak için mükemmel boyutlarda taze tavuk bagetleri.',
    price: 89.90,
    compareAtPrice: 99.90,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Erpiliç',
    categoryIds: ['gc-meat'],
    stock: 80,
    sku: 'GRC-ET-07',
    rating: 4.5,
    reviewCount: 110,
    specifications: {
      'Miktar': '700g Tabak',
      'Türü': 'Derili'
    }
  },
  {
    id: 'groc-18',
    slug: 'taze-levrek',
    name: 'Deniz Levreği (Temizlenmiş 500g)',
    shortDescription: 'Günlük taze deniz levreği.',
    description: 'İçi temizlenmiş, pulları alınmış, fırın veya ızgaraya hazır taze levrek.',
    price: 145.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Denizden',
    categoryIds: ['gc-meat'],
    stock: 25,
    sku: 'GRC-ET-08',
    rating: 4.7,
    reviewCount: 45,
    specifications: {
      'Miktar': '500g (2 Adet)',
      'Durum': 'Temizlenmiş'
    }
  },
  {
    id: 'groc-19',
    slug: 'dana-burger-kofte',
    name: 'Ev Tipi Hamburger Köftesi (4x100g)',
    shortDescription: 'Premium dana etinden kalın burger köftesi.',
    description: 'Sadece tuz ve karabiber ile tatlandırılmış, %100 dana etinden, sulu ve kalın hamburger köftesi.',
    price: 175.00,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Premium Kasap',
    categoryIds: ['gc-meat'],
    stock: 40,
    sku: 'GRC-ET-09',
    rating: 4.9,
    reviewCount: 230,
    specifications: {
      'Miktar': '400g (4 Adet)',
      'İçerik': '%100 Dana Eti'
    }
  },
  {
    id: 'groc-20',
    slug: 'hindi-fume',
    name: 'Dilimli Hindi Füme (150g)',
    shortDescription: 'Yüksek proteinli sandviçlik füme et.',
    description: 'Düşük yağ, yüksek protein oranıyla kahvaltı ve sandviçlerinizin vazgeçilmezi.',
    price: 48.50,
    currency: '₺',
    images: ['/images/grocery/meat.jpg'],
    thumbnail: '/images/grocery/meat.jpg',
    brand: 'Polonez',
    categoryIds: ['gc-meat'],
    stock: 100,
    sku: 'GRC-ET-10',
    rating: 4.6,
    reviewCount: 310,
    specifications: {
      'Miktar': '150g Paket',
      'Türü': 'Piliç/Hindi'
    }
  },

  // ==========================================
  // SÜT & KAHVALTILIK (10 Ürün)
  // ==========================================
  {
    id: 'groc-21',
    slug: 'organik-yumurta-10lu',
    name: 'Serbest Gezen Organik Yumurta 10\'lu',
    shortDescription: 'Doğal ortamında yetişen tavuklardan.',
    description: 'Açık alanda serbest dolaşan tavuklardan elde edilmiş, organik sertifikalı 10\'lu paket yumurta.',
    price: 65.50,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Doğal Çiftlik',
    categoryIds: ['gc-dairy'],
    stock: 120,
    sku: 'GRC-YM-10',
    rating: 4.8,
    reviewCount: 156,
    bestseller: true,
    specifications: {
      'Adet': '10',
      'Boyut': 'M-L (53-73g)',
      'Saklama Koşulu': '+4°C\'de buzdolabında saklayınız.'
    }
  },
  {
    id: 'groc-22',
    slug: 'tam-yagli-taze-kasar',
    name: 'Tam Yağlı Taze Kaşar Peyniri (400g)',
    shortDescription: 'Kolay eriyen lezzetli tost kaşarı.',
    description: 'Tost ve sandviçleriniz için ideal, yüksek süt oranına sahip, katkısız taze kaşar peyniri.',
    price: 115.00,
    compareAtPrice: 135.00,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Sütaş',
    categoryIds: ['gc-dairy'],
    stock: 90,
    sku: 'GRC-DR-02',
    rating: 4.7,
    reviewCount: 420,
    specifications: {
      'Miktar': '400g',
      'Tür': 'Taze Kaşar'
    }
  },
  {
    id: 'groc-23',
    slug: 'gunluk-sise-sut',
    name: 'Günlük Cam Şişe Süt (1 L)',
    shortDescription: 'Taze pastorize inek sütü.',
    description: 'Günlük olarak sağılıp şişelenen, hiçbir koruyucu madde içermeyen doğal tam yağlı inek sütü.',
    price: 42.90,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Sek',
    categoryIds: ['gc-dairy'],
    stock: 60,
    sku: 'GRC-DR-03',
    rating: 4.9,
    reviewCount: 280,
    specifications: {
      'Hacim': '1 Litre',
      'Ambalaj': 'Cam Şişe',
      'Raf Ömrü': '5 Gün'
    }
  },
  {
    id: 'groc-24',
    slug: 'suzme-cicek-bali',
    name: 'Organik Süzme Çiçek Balı (400g)',
    shortDescription: 'Yüksek rakımlı yaylalardan.',
    description: 'Hiçbir ısıl işlem görmemiş, saf, doğal ve şekersiz süzme çiçek balı.',
    price: 145.00,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Balparmak',
    categoryIds: ['gc-dairy'],
    stock: 45,
    sku: 'GRC-DR-04',
    rating: 4.9,
    reviewCount: 315,
    specifications: {
      'Miktar': '400g',
      'Sertifika': 'Organik'
    }
  },
  {
    id: 'groc-25',
    slug: 'gemlik-siyah-zeytin',
    name: 'Gemlik Siyah Zeytin (XL, 500g)',
    shortDescription: 'İri boy, az tuzlu sele zeytin.',
    description: 'Dalında olgunlaşmış, etli ve ince çekirdekli, geleneksel yöntemlerle fermente edilmiş zeytin.',
    price: 95.00,
    compareAtPrice: 110.00,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Marmarabirlik',
    categoryIds: ['gc-dairy'],
    stock: 80,
    sku: 'GRC-DR-05',
    rating: 4.6,
    reviewCount: 150,
    specifications: {
      'Miktar': '500g',
      'Boyut': 'XL (İri)'
    }
  },
  {
    id: 'groc-26',
    slug: 'ezine-beyaz-peynir',
    name: 'Ezine İnek Peyniri (Tam Yağlı 600g)',
    shortDescription: 'Klasik beyaz peynir lezzeti.',
    description: 'En az 9 ay olgunlaştırılmış, ağızda dağılan kıvamı ile klasik Çanakkale Ezine peyniri.',
    price: 165.90,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Tahsildaroğlu',
    categoryIds: ['gc-dairy'],
    stock: 50,
    sku: 'GRC-DR-06',
    rating: 4.8,
    reviewCount: 190,
    specifications: {
      'Miktar': '600g Teneke',
      'Olgunlaşma': '9 Ay'
    }
  },
  {
    id: 'groc-27',
    slug: 'tereyagi-rulo',
    name: 'Geleneksel Trabzon Tereyağı (500g)',
    shortDescription: 'Katkısız, tuzsuz kahvaltılık tereyağı.',
    description: 'Yüksek yayla sütlerinden elde edilen, yemeklerinize ve kahvaltılarınıza lezzet katan saf tereyağı.',
    price: 195.00,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Doğal Çiftlik',
    categoryIds: ['gc-dairy'],
    stock: 40,
    sku: 'GRC-DR-07',
    rating: 4.9,
    reviewCount: 125,
    specifications: {
      'Miktar': '500g Rulo',
      'Özellik': 'Tuzsuz'
    }
  },
  {
    id: 'groc-28',
    slug: 'fistik-ezmesi-sekersiz',
    name: 'Şekersiz Yüzde Yüz Fıstık Ezmesi (300g)',
    shortDescription: 'Sadece kavrulmuş fıstıktan üretilmiştir.',
    description: 'İlave şeker, tuz, yağ ve koruyucu içermeyen, yüksek proteinli saf fıstık ezmesi.',
    price: 79.90,
    compareAtPrice: 95.00,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Fıstık Evi',
    categoryIds: ['gc-dairy'],
    stock: 120,
    sku: 'GRC-DR-08',
    rating: 4.8,
    reviewCount: 540,
    isNew: true,
    specifications: {
      'Miktar': '300g Cam Kavanoz',
      'İçerik': '%100 Yer Fıstığı'
    }
  },
  {
    id: 'groc-29',
    slug: 'sade-kefir',
    name: 'Sade Probiyotik Kefir (1 L)',
    shortDescription: 'Bağışıklık dostu doğal kefir.',
    description: 'Gerçek kefir tanelerinden fermente edilmiş, probiyotik açısından zengin sağlıklı içecek.',
    price: 36.50,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Altınkılıç',
    categoryIds: ['gc-dairy'],
    stock: 90,
    sku: 'GRC-DR-09',
    rating: 4.7,
    reviewCount: 220,
    specifications: {
      'Hacim': '1 Litre',
      'Özellik': 'Probiyotik'
    }
  },
  {
    id: 'groc-30',
    slug: 'badem-sutu-sekersiz',
    name: 'Şekersiz Organik Badem Sütü 1L',
    shortDescription: 'Vegan, laktozsuz ve glutensiz.',
    description: 'Kahvelerinize ve smoothielerinize çok yakışacak, katkısız ve şekersiz bitkisel süt.',
    price: 54.90,
    currency: '₺',
    images: ['/images/grocery/dairy.jpg'],
    thumbnail: '/images/grocery/dairy.jpg',
    brand: 'Alpro',
    categoryIds: ['gc-dairy'],
    stock: 200,
    sku: 'GRC-BM-01',
    rating: 4.9,
    reviewCount: 312,
    isFeatured: true,
    specifications: {
      'Hacim': '1 Litre',
      'Diyet Türü': 'Vegan, Şekersiz, Laktozsuz'
    }
  },

  // ==========================================
  // FIRIN & PASTANE (10 Ürün)
  // ==========================================
  {
    id: 'groc-31',
    slug: 'eksi-mayali-ekmek',
    name: 'Ekşi Mayalı Köy Ekmeği (Dilimli 600g)',
    shortDescription: 'Odun ateşinde pişmiş, uzun fermente.',
    description: 'Geleneksel yöntemlerle 24 saat soğuk fermantasyon yapılarak üretilmiş artizan köy ekmeği.',
    price: 45.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Taze Fırın',
    categoryIds: ['gc-bakery'],
    stock: 30,
    sku: 'GRC-BK-01',
    rating: 4.9,
    reviewCount: 450,
    bestseller: true,
    specifications: {
      'Miktar': '600g',
      'Tür': 'Ekşi Mayalı, Dilimli'
    }
  },
  {
    id: 'groc-32',
    slug: 'tereyagli-kruvasan',
    name: 'Fransız Usulü Tereyağlı Kruvasan (2 Adet)',
    shortDescription: 'Çıtır dış kabuk, katmanlı iç yapı.',
    description: '%100 gerçek tereyağı kullanılarak, günlük taze olarak pişirilmiş premium kruvasan.',
    price: 65.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Taze Fırın',
    categoryIds: ['gc-bakery'],
    stock: 40,
    sku: 'GRC-BK-02',
    rating: 4.8,
    reviewCount: 230,
    specifications: {
      'Adet': '2 Adet',
      'Tüketim': 'Aynı gün tüketiniz.'
    }
  },
  {
    id: 'groc-33',
    slug: 'cikolatali-muffin',
    name: 'Çifte Çikolatalı Muffin (3 Adet)',
    shortDescription: 'Akışkan çikolata dolgulu.',
    description: 'İçi ıslak ve yoğun çikolata dolgulu, kahvenin yanına harika eşlik edecek yumuşacık kekler.',
    price: 75.50,
    compareAtPrice: 85.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Tatlı Atölyesi',
    categoryIds: ['gc-bakery'],
    stock: 25,
    sku: 'GRC-BK-03',
    rating: 4.7,
    reviewCount: 112,
    specifications: {
      'Adet': '3 Adet Paket',
      'İçerik': 'Belçika Çikolatası'
    }
  },
  {
    id: 'groc-34',
    slug: 'tam-bugday-sandvic-ekmegi',
    name: 'Tam Buğday Sandviç Ekmeği (4 Adet)',
    shortDescription: 'Lif kaynağı yumuşak sandviç ekmeği.',
    description: 'Okul beslenmeleri ve sağlıklı sandviçleriniz için ideal tam buğday unundan üretilmiştir.',
    price: 32.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Uno',
    categoryIds: ['gc-bakery'],
    stock: 60,
    sku: 'GRC-BK-04',
    rating: 4.5,
    reviewCount: 95,
    specifications: {
      'Adet': '4 Adet',
      'Özellik': 'Yüksek Lifli'
    }
  },
  {
    id: 'groc-35',
    slug: 'san-sebastian-cheesecake',
    name: 'San Sebastian Cheesecake (Dilim)',
    shortDescription: 'Üstü yanık, içi akışkan İspanyol lezzeti.',
    description: 'Günlük olarak taze hazırlanan, pürüzsüz ve kremamsı dokusuyla efsanevi cheesecake dilimi.',
    price: 110.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Tatlı Atölyesi',
    categoryIds: ['gc-bakery'],
    stock: 15,
    sku: 'GRC-BK-05',
    rating: 4.9,
    reviewCount: 340,
    specifications: {
      'Miktar': '1 Dilim (Yaklaşık 180g)',
      'Saklama': '+4°C\'de muhafaza ediniz.'
    }
  },
  {
    id: 'groc-36',
    slug: 'sade-gevrek-simit',
    name: 'Sokak Simidi (Gevrek, 2 Adet)',
    shortDescription: 'Odun ateşinde pişmiş bol susamlı simit.',
    description: 'Kahvaltıların vazgeçilmezi, çıtır çıtır ve taptaze sokak simidi.',
    price: 25.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Taze Fırın',
    categoryIds: ['gc-bakery'],
    stock: 100,
    sku: 'GRC-BK-06',
    rating: 4.8,
    reviewCount: 220,
    specifications: {
      'Adet': '2 Adet'
    }
  },
  {
    id: 'groc-37',
    slug: 'dereotlu-peynirli-pogaca',
    name: 'Dereotlu Peynirli Poğaça (3 Adet)',
    shortDescription: 'Ağızda dağılan kıyır kıyır poğaça.',
    description: 'İçerisinde bol beyaz peynir ve taze dereotu bulunan, ev yapımı tadında sıcak poğaçalar.',
    price: 45.00,
    compareAtPrice: 55.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Taze Fırın',
    categoryIds: ['gc-bakery'],
    stock: 50,
    sku: 'GRC-BK-07',
    rating: 4.6,
    reviewCount: 140,
    specifications: {
      'Adet': '3 Adet'
    }
  },
  {
    id: 'groc-38',
    slug: 'glutensiz-karabugday-ekmegi',
    name: 'Glutensiz Karabuğday Ekmeği (Dilimli 400g)',
    shortDescription: 'Çölyak hastalarına uygun, %100 karabuğday.',
    description: 'Özel glutensiz fırınımızda üretilmiş, besleyici ve hazmı kolay sağlıklı ekmek.',
    price: 65.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Sağlıklı Fırın',
    categoryIds: ['gc-bakery'],
    stock: 20,
    sku: 'GRC-BK-08',
    rating: 4.7,
    reviewCount: 98,
    isNew: true,
    specifications: {
      'Miktar': '400g',
      'Özellik': 'Glutensiz, Vegan'
    }
  },
  {
    id: 'groc-39',
    slug: 'cevizli-baklava',
    name: 'Günlük Taze Cevizli Baklava (500g)',
    shortDescription: 'İnce yufka, bol ceviz, tereyağlı şerbetli tatlı.',
    description: 'Antep usulü günlük olarak hazırlanan, incecik yufkasıyla ağızda dağılan premium baklava.',
    price: 240.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Tatlı Atölyesi',
    categoryIds: ['gc-bakery'],
    stock: 10,
    sku: 'GRC-BK-09',
    rating: 4.9,
    reviewCount: 200,
    specifications: {
      'Miktar': '500g (Kutu)'
    }
  },
  {
    id: 'groc-40',
    slug: 'sutlu-filtre-kahve-kurabiyesi',
    name: 'Damla Çikolatalı Kurabiye (Cookie, 4 Adet)',
    shortDescription: 'Amerikan usulü dev cookie.',
    description: 'İçi yumuşak, dışı çıtır, kahvenin yanına en iyi giden bol çikolatalı dev kurabiyeler.',
    price: 85.00,
    currency: '₺',
    images: ['/images/grocery/bakery.jpg'],
    thumbnail: '/images/grocery/bakery.jpg',
    brand: 'Tatlı Atölyesi',
    categoryIds: ['gc-bakery'],
    stock: 40,
    sku: 'GRC-BK-10',
    rating: 4.8,
    reviewCount: 160,
    specifications: {
      'Adet': '4 Adet'
    }
  },

  // ==========================================
  // ATIŞTIRMALIK & İÇECEK (10 Ürün)
  // ==========================================
  {
    id: 'groc-41',
    slug: 'kavrulmus-karisik-kuruyemis',
    name: 'Premium Karışık Kuruyemiş (250g)',
    shortDescription: 'Kavrulmuş badem, kaju, fındık ve antep fıstığı.',
    description: 'Taze kavrulmuş, birinci kalite kuruyemişlerden oluşan özel premium lüks karışım.',
    price: 125.00,
    compareAtPrice: 145.00,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Tadım',
    categoryIds: ['gc-snacks'],
    stock: 120,
    sku: 'GRC-SN-01',
    rating: 4.8,
    reviewCount: 310,
    bestseller: true,
    specifications: {
      'Miktar': '250g Paket'
    }
  },
  {
    id: 'groc-42',
    slug: 'bitter-cikolata-yuzde-70',
    name: 'Eti Karam Gurme Bitter Çikolata (50g x 3)',
    shortDescription: 'Yoğun kakao kremalı çıtır gofret.',
    description: '%70 kakao içeren, kahvenizin vazgeçilmez eşlikçisi yoğun bitter çikolata ve gofret lezzeti.',
    price: 38.50,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Eti',
    categoryIds: ['gc-snacks'],
    stock: 200,
    sku: 'GRC-SN-02',
    rating: 4.9,
    reviewCount: 650,
    specifications: {
      'Miktar': '3 Adet (3x50g)'
    }
  },
  {
    id: 'groc-43',
    slug: 'organik-elma-cipsi',
    name: 'Fırınlanmış Organik Elma Cipsi (40g)',
    shortDescription: 'İlave şekersiz, sağlıklı atıştırmalık.',
    description: 'İncecik dilimlenip düşük ısıda fırınlanmış, çıtır çıtır ve %100 doğal elma cipsi.',
    price: 24.90,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Doğal Atıştırmalık',
    categoryIds: ['gc-snacks'],
    stock: 80,
    sku: 'GRC-SN-03',
    rating: 4.6,
    reviewCount: 95,
    specifications: {
      'Miktar': '40g',
      'Özellik': 'Vegan, Glutensiz, İlave Şekersiz'
    }
  },
  {
    id: 'groc-44',
    slug: 'taze-sikim-portakal-suyu',
    name: 'Soğuk Sıkım %100 Portakal Suyu (1 L)',
    shortDescription: 'Katkısız, taze sıkılmış meyve suyu.',
    description: 'Pastörize edilmeden, soğuk sıkım teknolojisiyle günlük şişelenen gerçek portakal suyu.',
    price: 75.00,
    compareAtPrice: 85.00,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Juice Factory',
    categoryIds: ['gc-snacks'],
    stock: 40,
    sku: 'GRC-SN-04',
    rating: 4.9,
    reviewCount: 420,
    specifications: {
      'Hacim': '1 Litre Cam Şişe',
      'Raf Ömrü': '3 Gün (Buzdolabında)'
    }
  },
  {
    id: 'groc-45',
    slug: 'sekersiz-kola',
    name: 'Coca-Cola Zero Sugar (6x330ml)',
    shortDescription: 'Şekersiz, kalorisi sıfır serinletici içecek.',
    description: 'Orijinal Coca-Cola lezzetini şekersiz sunan kutu içecek 6\'lı paket.',
    price: 110.00,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Coca-Cola',
    categoryIds: ['gc-snacks'],
    stock: 300,
    sku: 'GRC-SN-05',
    rating: 4.7,
    reviewCount: 1500,
    specifications: {
      'Hacim': '6 Adet x 330ml',
      'Özellik': 'Şekersiz'
    }
  },
  {
    id: 'groc-46',
    slug: 'deniz-tuzlu-patates-cipsi',
    name: 'Fırınlanmış Deniz Tuzlu Patates Cipsi (150g)',
    shortDescription: 'Daha az yağlı fırın cips.',
    description: 'Kızartılmadan fırınlanan, gerçek deniz tuzuyla lezzetlendirilmiş çıtır patates cipsi.',
    price: 35.50,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Ruffles',
    categoryIds: ['gc-snacks'],
    stock: 150,
    sku: 'GRC-SN-06',
    rating: 4.5,
    reviewCount: 220,
    specifications: {
      'Miktar': '150g',
      'Özellik': '%50 Daha Az Yağlı'
    }
  },
  {
    id: 'groc-47',
    slug: 'kombucha-zencefil-limon',
    name: 'Organik Zencefil & Limon Kombucha (250ml)',
    shortDescription: 'Canlandırıcı ve ferahlatıcı probiyotik içecek.',
    description: 'Yeşil çay tabanlı, zencefil ve limon ile tatlandırılmış doğal fermente kombu çayı.',
    price: 39.90,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'KombuCo',
    categoryIds: ['gc-snacks'],
    stock: 60,
    sku: 'GRC-SN-07',
    rating: 4.6,
    reviewCount: 110,
    isNew: true,
    specifications: {
      'Hacim': '250ml Cam Şişe',
      'Özellik': 'Probiyotik, Organik'
    }
  },
  {
    id: 'groc-48',
    slug: 'protein-bari-yerfistikli',
    name: 'Yüksek Protein Barı Yer Fıstıklı (50g)',
    shortDescription: 'Spor öncesi/sonrası için 15g protein.',
    description: 'İlave şeker içermeyen, yüksek proteinli ve lifli doyurucu atıştırmalık bar.',
    price: 28.50,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Fellas',
    categoryIds: ['gc-snacks'],
    stock: 200,
    sku: 'GRC-SN-08',
    rating: 4.8,
    reviewCount: 340,
    specifications: {
      'Miktar': '50g',
      'Protein': '15g'
    }
  },
  {
    id: 'groc-49',
    slug: 'dogal-maden-suyu',
    name: 'Doğal Mineralli Maden Suyu (6x200ml)',
    shortDescription: 'Zengin mineralli ferahlatıcı su.',
    description: 'Kaynağından şişelenmiş, yüksek magnezyum ve kalsiyum içeren doğal maden suyu.',
    price: 45.00,
    compareAtPrice: 55.00,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Beypazarı',
    categoryIds: ['gc-snacks'],
    stock: 400,
    sku: 'GRC-SN-09',
    rating: 4.9,
    reviewCount: 1800,
    specifications: {
      'Hacim': '6 x 200ml Cam Şişe'
    }
  },
  {
    id: 'groc-50',
    slug: 'soğuk-kahve-latte',
    name: 'Soğuk Kahve Caffe Latte (250ml)',
    shortDescription: 'Buz gibi, serinletici sütlü kahve.',
    description: 'Özenle kavrulmuş kahve çekirdekleri ve taze sütün mükemmel uyumu.',
    price: 32.50,
    currency: '₺',
    images: ['/images/grocery/snacks.jpg'],
    thumbnail: '/images/grocery/snacks.jpg',
    brand: 'Starbucks',
    categoryIds: ['gc-snacks'],
    stock: 120,
    sku: 'GRC-SN-10',
    rating: 4.7,
    reviewCount: 420,
    specifications: {
      'Hacim': '250ml Bardak'
    }
  }
];
