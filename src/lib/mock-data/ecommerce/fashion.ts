import { EcommerceProduct, EcommerceCategory } from '@/types/ecommerce';

export const fashionCategories: EcommerceCategory[] = [
  { id: 'cat-women', slug: 'kadin', name: 'Kadın', itemCount: 120 },
  { id: 'cat-men', slug: 'erkek', name: 'Erkek', itemCount: 85 },
  { id: 'cat-new', slug: 'yeni-gelenler', name: 'Yeni Gelenler', itemCount: 42 },
  { id: 'cat-shoes', slug: 'ayakkabi', name: 'Ayakkabı', itemCount: 56 },
  { id: 'cat-bags', slug: 'canta', name: 'Çanta', itemCount: 34 }
];

export const fashionProducts: EcommerceProduct[] = [
  {
    id: 'fash-1',
    slug: 'oversize-keten-ceket',
    name: 'Oversize Keten Ceket',
    shortDescription: 'Yaz ayları için ideal, nefes alabilen %100 keten kumaş.',
    description: 'Modern kesimi ve hafif yapısıyla öne çıkan bu oversize keten ceket, hem günlük hem de ofis şıklığınızın vazgeçilmezi olacak. Önü düğmeli, astarsız, kapaklı cep detaylı.',
    price: 1250,
    compareAtPrice: 1650,
    currency: '₺',
    images: [
      '/images/fashion/jacket.jpg',
      '/images/fashion/jacket.jpg'
    ],
    thumbnail: '/images/fashion/jacket.jpg',
    brand: 'LOCİZSA Studio',
    categoryIds: ['cat-women', 'cat-new'],
    stock: 25,
    sku: 'FSH-JKT-001',
    rating: 4.8,
    reviewCount: 124,
    features: ['%100 Keten', 'Oversize Kesim', 'Nefes Alabilir', 'Astarsız'],
    variants: [
      { id: 'v1', name: 'Bej', value: '#F5F5DC', sku: 'FSH-JKT-001-BEJ-S', price: 1250, stock: 10, type: 'COLOR' },
      { id: 'v2', name: 'Haki', value: '#556B2F', sku: 'FSH-JKT-001-HAK-S', price: 1250, stock: 5, type: 'COLOR' },
      { id: 'v3', name: 'S', value: 'S', sku: 'FSH-JKT-001-BEJ-S', price: 1250, stock: 15, type: 'SIZE' },
      { id: 'v4', name: 'M', value: 'M', sku: 'FSH-JKT-001-BEJ-M', price: 1250, stock: 10, type: 'SIZE' },
      { id: 'v5', name: 'L', value: 'L', sku: 'FSH-JKT-001-BEJ-L', price: 1250, stock: 0, type: 'SIZE' }
    ],
    tags: ['Yaz', 'Trend', 'Keten'],
    isNew: true,
    isFeatured: true
  },
  {
    id: 'fash-2',
    slug: 'deri-postaci-cantasi',
    name: 'Hakiki Deri Postacı Çantası',
    shortDescription: 'El işçiliği ile üretilmiş premium deri çanta.',
    description: 'Günlük kullanım için ideal boyutta. Ayarlanabilir askısı, çoklu gözleri ve hakiki deri kokusuyla yıllarca size eşlik edecek zamansız bir parça.',
    price: 3450,
    currency: '₺',
    images: [
      '/images/fashion/bag.jpg',
      '/images/fashion/bag.jpg'
    ],
    thumbnail: '/images/fashion/bag.jpg',
    brand: 'Leather Craft',
    categoryIds: ['cat-bags', 'cat-women', 'cat-men'],
    stock: 8,
    sku: 'FSH-BAG-002',
    rating: 5.0,
    reviewCount: 32,
    bestseller: true,
    variants: [
      { id: 'v2-1', name: 'Taba', value: '#8b4513', sku: 'BAG-TBA', price: 3450, stock: 3, type: 'COLOR' },
      { id: 'v2-2', name: 'Siyah', value: '#000000', sku: 'BAG-SYH', price: 3450, stock: 5, type: 'COLOR' }
    ]
  },
  {
    id: 'fash-3',
    slug: 'pamuklu-basic-tisort',
    name: 'Organik Pamuklu Basic Tişört',
    shortDescription: 'Günlük kurtarıcı, organik dokunuş.',
    description: 'Sürdürülebilir kaynaklardan elde edilen %100 organik pamuk ile üretilmiştir. Yumuşak tuşesi ve rahat kesimi ile her kombine uyar.',
    price: 350,
    compareAtPrice: 450,
    currency: '₺',
    images: [
      '/images/fashion/tshirt.jpg',
      '/images/fashion/tshirt.jpg'
    ],
    thumbnail: '/images/fashion/tshirt.jpg',
    brand: 'Eco Wear',
    categoryIds: ['cat-men', 'cat-women'],
    stock: 120,
    sku: 'FSH-TSH-003',
    rating: 4.5,
    reviewCount: 850,
    bestseller: true,
    variants: [
      { id: 't1', name: 'Beyaz', value: '#FFFFFF', sku: 'TSH-BYZ', price: 350, stock: 50, type: 'COLOR' },
      { id: 't2', name: 'Siyah', value: '#000000', sku: 'TSH-SYH', price: 350, stock: 40, type: 'COLOR' },
      { id: 't3', name: 'S', value: 'S', sku: 'TSH-S', price: 350, stock: 30, type: 'SIZE' },
      { id: 't4', name: 'M', value: 'M', sku: 'TSH-M', price: 350, stock: 50, type: 'SIZE' },
      { id: 't5', name: 'L', value: 'L', sku: 'TSH-L', price: 350, stock: 40, type: 'SIZE' }
    ]
  },
  {
    id: 'fash-4',
    slug: 'sneaker-beyaz',
    name: 'Chunky Taban Sneaker',
    shortDescription: 'Sokak modasının yıldızı.',
    description: 'Ekstra kalın tabanı ve rahat iç yapısı ile gün boyu konfor sağlar. Gerçek deri detaylarıyla kalite hissini artırır.',
    price: 2100,
    currency: '₺',
    images: [
      '/images/fashion/sneaker.jpg',
      '/images/fashion/sneaker.jpg'
    ],
    thumbnail: '/images/fashion/sneaker.jpg',
    brand: 'Street Vibe',
    categoryIds: ['cat-shoes'],
    stock: 45,
    sku: 'FSH-SNK-004',
    rating: 4.7,
    reviewCount: 210,
    variants: [
      { id: 's1', name: '37', value: '37', sku: 'SNK-37', price: 2100, stock: 10, type: 'SIZE' },
      { id: 's2', name: '38', value: '38', sku: 'SNK-38', price: 2100, stock: 15, type: 'SIZE' },
      { id: 's3', name: '39', value: '39', sku: 'SNK-39', price: 2100, stock: 20, type: 'SIZE' }
    ],
    isFeatured: true
  },
  {
    id: 'fash-5',
    slug: 'ipek-gomlek',
    name: 'Klasik İpek Gömlek',
    shortDescription: 'Zarif ve hafif saf ipek dokusu.',
    description: 'Özel davetlerden ofis şıklığına kadar her anınıza eşlik edecek, %100 saf ipekten üretilmiş premium gömlek.',
    price: 2450,
    compareAtPrice: 2800,
    currency: '₺',
    images: [
      '/images/fashion/shirt.jpg',
      '/images/fashion/shirt.jpg'
    ],
    thumbnail: '/images/fashion/shirt.jpg',
    brand: 'LOCİZSA Studio',
    categoryIds: ['cat-women', 'cat-new'],
    stock: 15,
    sku: 'FSH-SHR-005',
    rating: 4.9,
    reviewCount: 45,
    variants: [
      { id: 'v5-1', name: 'Beyaz', value: '#FFFFFF', sku: 'SHR-BYZ', price: 2450, stock: 15, type: 'COLOR' },
      { id: 'v5-2', name: 'S', value: 'S', sku: 'SHR-S', price: 2450, stock: 5, type: 'SIZE' },
      { id: 'v5-3', name: 'M', value: 'M', sku: 'SHR-M', price: 2450, stock: 10, type: 'SIZE' }
    ],
    isNew: true
  },
  {
    id: 'fash-6',
    slug: 'pileli-midi-etek',
    name: 'Pileli Midi Etek',
    shortDescription: 'Hareketli ve zarif pile detayları.',
    description: 'Yaz akşamları için mükemmel bir seçenek. Hafif kumaşı ve uçuşan pileleri ile feminen bir silüet yaratır.',
    price: 1850,
    currency: '₺',
    images: [
      '/images/fashion/skirt.jpg',
      '/images/fashion/skirt.jpg'
    ],
    thumbnail: '/images/fashion/skirt.jpg',
    brand: 'LOCİZSA Studio',
    categoryIds: ['cat-women'],
    stock: 22,
    sku: 'FSH-SKR-006',
    rating: 4.6,
    reviewCount: 89,
    variants: [
      { id: 'v6-1', name: 'Bej', value: '#F5F5DC', sku: 'SKR-BEJ', price: 1850, stock: 22, type: 'COLOR' }
    ]
  },
  {
    id: 'fash-7',
    slug: 'keten-pantolon',
    name: 'Rahat Kesim Keten Pantolon',
    shortDescription: 'Sıcak günlerin serin tutan kurtarıcısı.',
    description: 'Erkek modasının zamansız parçası. Doğal keten lifleriyle gün boyu nefes alır ve konfor sunar.',
    price: 1600,
    compareAtPrice: 1950,
    currency: '₺',
    images: [
      '/images/fashion/trousers.jpg',
      '/images/fashion/trousers.jpg'
    ],
    thumbnail: '/images/fashion/trousers.jpg',
    brand: 'LOCİZSA Men',
    categoryIds: ['cat-men', 'cat-new'],
    stock: 35,
    sku: 'FSH-PNT-007',
    rating: 4.8,
    reviewCount: 112,
    variants: [
      { id: 'v7-1', name: 'Bej', value: '#F5F5DC', sku: 'PNT-BEJ', price: 1600, stock: 35, type: 'COLOR' },
      { id: 'v7-2', name: '32', value: '32', sku: 'PNT-32', price: 1600, stock: 10, type: 'SIZE' },
      { id: 'v7-3', name: '34', value: '34', sku: 'PNT-34', price: 1600, stock: 15, type: 'SIZE' },
      { id: 'v7-4', name: '36', value: '36', sku: 'PNT-36', price: 1600, stock: 10, type: 'SIZE' }
    ],
    isNew: true
  },
  {
    id: 'fash-8',
    slug: 'gunes-gozlugu',
    name: 'Siyah Geometrik Güneş Gözlüğü',
    shortDescription: 'İddialı ve modern koruma.',
    description: '%100 UV korumalı camları ve dayanıklı asetat çerçevesiyle yazın en cool tamamlayıcısı.',
    price: 2900,
    currency: '₺',
    images: [
      '/images/fashion/sunglasses.jpg',
      '/images/fashion/sunglasses.jpg'
    ],
    thumbnail: '/images/fashion/sunglasses.jpg',
    brand: 'Visionary',
    categoryIds: ['cat-women', 'cat-men'],
    stock: 12,
    sku: 'FSH-GLS-008',
    rating: 5.0,
    reviewCount: 42,
    variants: [
      { id: 'v8-1', name: 'Siyah', value: '#000000', sku: 'GLS-SYH', price: 2900, stock: 12, type: 'COLOR' }
    ],
    isFeatured: true
  }
];