const fs = require('fs');
const path = require('path');

const brands = ['VERTEX', 'PRIME', 'NEXUS', 'AURA', 'TITAN'];
const categories = [
  { id: 'c1', name: 'Protein', slug: 'protein', icon: 'Dumbbell' },
  { id: 'c2', name: 'Performans (Pre-Workout)', slug: 'performans', icon: 'Zap' },
  { id: 'c3', name: 'Amino Asit (BCAA/EAA)', slug: 'amino', icon: 'Activity' },
  { id: 'c4', name: 'Vitamin & Wellness', slug: 'vitamin', icon: 'Heart' }
];

const flavors = ['Çikolata', 'Çilek', 'Vanilya', 'Kurabiye', 'Yeşil Elma', 'Karpuz', 'Orman Meyveleri'];
const goals = ['Kas Gelişimi', 'Yağ Yakımı', 'Dayanıklılık', 'Toparlanma'];

const products = [];

for (let i = 1; i <= 20; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const flavor = category.slug !== 'vitamin' ? flavors[Math.floor(Math.random() * flavors.length)] : 'Aromasız';
  const goal = goals[Math.floor(Math.random() * goals.length)];
  const price = Math.floor(Math.random() * 2000) + 300;
  
  let name = '';
  if (category.slug === 'protein') name = `${brand} %100 Whey Protein`;
  if (category.slug === 'performans') name = `${brand} N.O.X Pre-Workout`;
  if (category.slug === 'amino') name = `${brand} BCAA 4:1:1 + Glutamin`;
  if (category.slug === 'vitamin') name = `${brand} Multi-Vitamin Complex`;

  products.push({
    id: `s-prod-${i}`,
    name: name,
    slug: `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i}`,
    description: `${brand} tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.`,
    shortDescription: `Ultra saf içerikli profesyonel formül.`,
    price: price,
    compareAtPrice: Math.random() > 0.5 ? price + Math.floor(price * 0.2) : undefined,
    brand: brand,
    categoryId: category.id,
    inStock: true,
    thumbnail: `/images/supplement/s-thumb-${i}.png`,
    images: [`/images/supplement/s-thumb-${i}.png`],
    specifications: {
      'Servis Sayısı': `${Math.floor(Math.random() * 30) + 30} Servis`,
      'Ağırlık': category.slug === 'vitamin' ? '120 Kapsül' : `${(Math.random() * 2 + 0.5).toFixed(1)} kg`,
      'Hedef': goal,
      'Aroma': flavor,
      'Kullanım Zamanı': category.slug === 'performans' ? 'Antrenman Öncesi' : 'Antrenman Sonrası'
    },
    features: [
      'Gelişmiş emilim formülü',
      'Yüksek hammadde kalitesi',
      'GMP ve ISO sertifikalı tesislerde üretim',
      'Mükemmel çözünme ve tat'
    ]
  });
}

const fileContent = `
export type SupplementCategory = {
  id: string;
  name: string;
  slug: string;
  icon?: string;
};

export type SupplementProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  brand: string;
  categoryId: string;
  inStock: boolean;
  thumbnail: string;
  images: string[];
  specifications?: Record<string, string | number | boolean>;
  features?: string[];
};

export const supplementCategories: SupplementCategory[] = ${JSON.stringify(categories, null, 2)};

export const supplementProducts: SupplementProduct[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'supplement.ts'), fileContent);
console.log('supplement.ts generated successfully.');
