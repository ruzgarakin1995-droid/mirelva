
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

export const supplementCategories: SupplementCategory[] = [
  {
    "id": "c1",
    "name": "Protein",
    "slug": "protein",
    "icon": "Dumbbell"
  },
  {
    "id": "c2",
    "name": "Performans (Pre-Workout)",
    "slug": "performans",
    "icon": "Zap"
  },
  {
    "id": "c3",
    "name": "Amino Asit (BCAA/EAA)",
    "slug": "amino",
    "icon": "Activity"
  },
  {
    "id": "c4",
    "name": "Vitamin & Wellness",
    "slug": "vitamin",
    "icon": "Heart"
  }
];

export const supplementProducts: SupplementProduct[] = [
  {
    "id": "s-prod-1",
    "name": "VERTEX Multi-Vitamin Complex",
    "slug": "vertex-multi-vitamin-complex-1",
    "description": "VERTEX tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1301,
    "brand": "VERTEX",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-1.png",
    "images": [
      "/images/supplement/s-thumb-1.png"
    ],
    "specifications": {
      "Servis Sayısı": "55 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-2",
    "name": "TITAN Multi-Vitamin Complex",
    "slug": "titan-multi-vitamin-complex-2",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 979,
    "compareAtPrice": 1174,
    "brand": "TITAN",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-2.png",
    "images": [
      "/images/supplement/s-thumb-2.png"
    ],
    "specifications": {
      "Servis Sayısı": "37 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-3",
    "name": "PRIME BCAA 4:1:1 + Glutamin",
    "slug": "prime-bcaa-4-1-1---glutamin-3",
    "description": "PRIME tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1817,
    "compareAtPrice": 2180,
    "brand": "PRIME",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-3.png",
    "images": [
      "/images/supplement/s-thumb-3.png"
    ],
    "specifications": {
      "Servis Sayısı": "34 Servis",
      "Ağırlık": "2.3 kg",
      "Hedef": "Dayanıklılık",
      "Aroma": "Orman Meyveleri",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-4",
    "name": "AURA %100 Whey Protein",
    "slug": "aura--100-whey-protein-4",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1983,
    "compareAtPrice": 2379,
    "brand": "AURA",
    "categoryId": "c1",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-4.png",
    "images": [
      "/images/supplement/s-thumb-4.png"
    ],
    "specifications": {
      "Servis Sayısı": "33 Servis",
      "Ağırlık": "1.5 kg",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Karpuz",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-5",
    "name": "PRIME Multi-Vitamin Complex",
    "slug": "prime-multi-vitamin-complex-5",
    "description": "PRIME tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 338,
    "compareAtPrice": 405,
    "brand": "PRIME",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-5.png",
    "images": [
      "/images/supplement/s-thumb-5.png"
    ],
    "specifications": {
      "Servis Sayısı": "43 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Toparlanma",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-6",
    "name": "VERTEX BCAA 4:1:1 + Glutamin",
    "slug": "vertex-bcaa-4-1-1---glutamin-6",
    "description": "VERTEX tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 2172,
    "compareAtPrice": 2606,
    "brand": "VERTEX",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-6.png",
    "images": [
      "/images/supplement/s-thumb-6.png"
    ],
    "specifications": {
      "Servis Sayısı": "31 Servis",
      "Ağırlık": "1.2 kg",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Yeşil Elma",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-7",
    "name": "TITAN Multi-Vitamin Complex",
    "slug": "titan-multi-vitamin-complex-7",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1612,
    "brand": "TITAN",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-7.png",
    "images": [
      "/images/supplement/s-thumb-7.png"
    ],
    "specifications": {
      "Servis Sayısı": "37 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-8",
    "name": "AURA Multi-Vitamin Complex",
    "slug": "aura-multi-vitamin-complex-8",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1198,
    "compareAtPrice": 1437,
    "brand": "AURA",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-8.png",
    "images": [
      "/images/supplement/s-thumb-8.png"
    ],
    "specifications": {
      "Servis Sayısı": "31 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Toparlanma",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-9",
    "name": "TITAN BCAA 4:1:1 + Glutamin",
    "slug": "titan-bcaa-4-1-1---glutamin-9",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1453,
    "brand": "TITAN",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-9.png",
    "images": [
      "/images/supplement/s-thumb-9.png"
    ],
    "specifications": {
      "Servis Sayısı": "36 Servis",
      "Ağırlık": "1.4 kg",
      "Hedef": "Kas Gelişimi",
      "Aroma": "Kurabiye",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-10",
    "name": "NEXUS %100 Whey Protein",
    "slug": "nexus--100-whey-protein-10",
    "description": "NEXUS tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1801,
    "brand": "NEXUS",
    "categoryId": "c1",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-10.png",
    "images": [
      "/images/supplement/s-thumb-10.png"
    ],
    "specifications": {
      "Servis Sayısı": "44 Servis",
      "Ağırlık": "2.5 kg",
      "Hedef": "Toparlanma",
      "Aroma": "Çilek",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-11",
    "name": "VERTEX %100 Whey Protein",
    "slug": "vertex--100-whey-protein-11",
    "description": "VERTEX tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 2072,
    "compareAtPrice": 2486,
    "brand": "VERTEX",
    "categoryId": "c1",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-11.png",
    "images": [
      "/images/supplement/s-thumb-11.png"
    ],
    "specifications": {
      "Servis Sayısı": "36 Servis",
      "Ağırlık": "1.8 kg",
      "Hedef": "Kas Gelişimi",
      "Aroma": "Çilek",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-12",
    "name": "AURA BCAA 4:1:1 + Glutamin",
    "slug": "aura-bcaa-4-1-1---glutamin-12",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 2116,
    "brand": "AURA",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-12.png",
    "images": [
      "/images/supplement/s-thumb-12.png"
    ],
    "specifications": {
      "Servis Sayısı": "36 Servis",
      "Ağırlık": "0.8 kg",
      "Hedef": "Dayanıklılık",
      "Aroma": "Orman Meyveleri",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-13",
    "name": "AURA BCAA 4:1:1 + Glutamin",
    "slug": "aura-bcaa-4-1-1---glutamin-13",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 2085,
    "compareAtPrice": 2502,
    "brand": "AURA",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-13.png",
    "images": [
      "/images/supplement/s-thumb-13.png"
    ],
    "specifications": {
      "Servis Sayısı": "41 Servis",
      "Ağırlık": "1.6 kg",
      "Hedef": "Kas Gelişimi",
      "Aroma": "Yeşil Elma",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-14",
    "name": "TITAN BCAA 4:1:1 + Glutamin",
    "slug": "titan-bcaa-4-1-1---glutamin-14",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1836,
    "brand": "TITAN",
    "categoryId": "c3",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-14.png",
    "images": [
      "/images/supplement/s-thumb-14.png"
    ],
    "specifications": {
      "Servis Sayısı": "54 Servis",
      "Ağırlık": "1.5 kg",
      "Hedef": "Dayanıklılık",
      "Aroma": "Çilek",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-15",
    "name": "VERTEX Multi-Vitamin Complex",
    "slug": "vertex-multi-vitamin-complex-15",
    "description": "VERTEX tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 2059,
    "brand": "VERTEX",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-15.png",
    "images": [
      "/images/supplement/s-thumb-15.png"
    ],
    "specifications": {
      "Servis Sayısı": "54 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Toparlanma",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-16",
    "name": "AURA N.O.X Pre-Workout",
    "slug": "aura-n-o-x-pre-workout-16",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1707,
    "compareAtPrice": 2048,
    "brand": "AURA",
    "categoryId": "c2",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-16.png",
    "images": [
      "/images/supplement/s-thumb-16.png"
    ],
    "specifications": {
      "Servis Sayısı": "50 Servis",
      "Ağırlık": "0.6 kg",
      "Hedef": "Toparlanma",
      "Aroma": "Karpuz",
      "Kullanım Zamanı": "Antrenman Öncesi"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-17",
    "name": "NEXUS N.O.X Pre-Workout",
    "slug": "nexus-n-o-x-pre-workout-17",
    "description": "NEXUS tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1535,
    "brand": "NEXUS",
    "categoryId": "c2",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-17.png",
    "images": [
      "/images/supplement/s-thumb-17.png"
    ],
    "specifications": {
      "Servis Sayısı": "32 Servis",
      "Ağırlık": "2.1 kg",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Çikolata",
      "Kullanım Zamanı": "Antrenman Öncesi"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-18",
    "name": "TITAN %100 Whey Protein",
    "slug": "titan--100-whey-protein-18",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 1696,
    "compareAtPrice": 2035,
    "brand": "TITAN",
    "categoryId": "c1",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-18.png",
    "images": [
      "/images/supplement/s-thumb-18.png"
    ],
    "specifications": {
      "Servis Sayısı": "47 Servis",
      "Ağırlık": "2.1 kg",
      "Hedef": "Toparlanma",
      "Aroma": "Çilek",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-19",
    "name": "TITAN N.O.X Pre-Workout",
    "slug": "titan-n-o-x-pre-workout-19",
    "description": "TITAN tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 394,
    "brand": "TITAN",
    "categoryId": "c2",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-19.png",
    "images": [
      "/images/supplement/s-thumb-19.png"
    ],
    "specifications": {
      "Servis Sayısı": "30 Servis",
      "Ağırlık": "0.8 kg",
      "Hedef": "Yağ Yakımı",
      "Aroma": "Çilek",
      "Kullanım Zamanı": "Antrenman Öncesi"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  },
  {
    "id": "s-prod-20",
    "name": "AURA Multi-Vitamin Complex",
    "slug": "aura-multi-vitamin-complex-20",
    "description": "AURA tarafından formüle edilmiş bu üst düzey supplement, hedeflerinize daha hızlı ulaşmanız için özel olarak geliştirilmiştir. Sıfır ilave şeker ve aspartam içermeyen formülü ile benzersiz bir deneyim sunar.",
    "shortDescription": "Ultra saf içerikli profesyonel formül.",
    "price": 523,
    "compareAtPrice": 627,
    "brand": "AURA",
    "categoryId": "c4",
    "inStock": true,
    "thumbnail": "/images/supplement/s-thumb-20.png",
    "images": [
      "/images/supplement/s-thumb-20.png"
    ],
    "specifications": {
      "Servis Sayısı": "54 Servis",
      "Ağırlık": "120 Kapsül",
      "Hedef": "Toparlanma",
      "Aroma": "Aromasız",
      "Kullanım Zamanı": "Antrenman Sonrası"
    },
    "features": [
      "Gelişmiş emilim formülü",
      "Yüksek hammadde kalitesi",
      "GMP ve ISO sertifikalı tesislerde üretim",
      "Mükemmel çözünme ve tat"
    ]
  }
];
