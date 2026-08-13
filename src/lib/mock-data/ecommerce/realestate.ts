export type RealEstateProperty = {
  id: string;
  slug: string;
  title: string;
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Loft';
  price: number;
  location: {
    city: string;
    neighborhood: string;
    country: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    areaSqM: number;
    yearBuilt: number;
  };
  amenities: string[];
  description: string;
  images: string[];
  agent: {
    name: string;
    phone: string;
    avatar: string;
  };
  status: 'Satılık' | 'Kiralık' | 'Satıldı';
};

export type Architect = {
  id: string;
  name: string;
  role: string;
  philosophy: string;
  image: string;
};

export const realEstateProperties: RealEstateProperty[] = [
  {
    id: "re-001",
    slug: "bogazin-incisi-yali",
    title: "Boğaz'ın İncisi Yalı",
    type: "Mansion",
    price: 125000000,
    location: {
      city: "İstanbul",
      neighborhood: "Bebek",
      country: "Türkiye"
    },
    features: {
      bedrooms: 6,
      bathrooms: 8,
      areaSqM: 950,
      yearBuilt: 2021
    },
    amenities: ["Özel İskele", "Akıllı Ev Sistemi", "Şarap Mahzeni", "Boğaz Manzarası", "Kapalı Havuz"],
    description: "Tarihi dokuyla modern lüksün eşsiz buluşması. Boğaziçi'nin en prestijli lokasyonunda yer alan bu özel yalı, tavandan tabana cam detaylarıyla denizi adeta evinizin içine taşıyor.",
    images: ["/images/realestate/villa.jpg"],
    agent: {
      name: "Caner Yılmaz",
      phone: "+90 (532) 555-0199",
      avatar: "https://i.pravatar.cc/150?u=eleanor"
    },
    status: "Satılık"
  },
  {
    id: "re-002",
    slug: "zorlu-skyline-penthouse",
    title: "Skyline Penthouse",
    type: "Penthouse",
    price: 85000000,
    location: {
      city: "İstanbul",
      neighborhood: "Levent",
      country: "Türkiye"
    },
    features: {
      bedrooms: 4,
      bathrooms: 5,
      areaSqM: 480,
      yearBuilt: 2023
    },
    amenities: ["Panoramik Şehir Manzarası", "Özel Asansör", "Teras Kış Bahçesi", "Şef Mutfağı", "7/24 Concierge"],
    description: "Şehrin zirvesinde yaşam. Levent'in merkezinde, adalar ve tarihi yarımada manzarasına hakim bu penthouse, koyu meşe zeminleri ve minimalist İtalyan mobilyalarıyla rafine bir zevki yansıtıyor.",
    images: ["/images/realestate/penthouse.jpg"],
    agent: {
      name: "Mert Demir",
      phone: "+90 (533) 555-0188",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    status: "Satılık"
  },
  {
    id: "re-003",
    slug: "urla-modern-bag-evi",
    title: "Modern Bağ Evi",
    type: "Loft",
    price: 45000000,
    location: {
      city: "İzmir",
      neighborhood: "Urla",
      country: "Türkiye"
    },
    features: {
      bedrooms: 4,
      bathrooms: 4,
      areaSqM: 600,
      yearBuilt: 2024
    },
    amenities: ["Brutalist Mimari", "Organik Üzüm Bağı", "Güneş Enerjisi", "Sanat Galerisi Duvarları", "Açık Hava Mutfağı"],
    description: "Modern brutalizmin doğayla kusursuz uyumu. Ege'nin kalbi Urla'da, uçsuz bucaksız bağların arasında yükselen bu beton yapı, gün ışığının yarattığı geometrik gölgelerle yaşanabilir bir sanat eseri sunuyor.",
    images: ["/images/realestate/brutalist.jpg"],
    agent: {
      name: "Selin Kaya",
      phone: "+90 (535) 555-0177",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    status: "Satılık"
  },
  {
    id: "re-004",
    slug: "yalikavak-sonsuzluk-villasi",
    title: "Sonsuzluk Villası",
    type: "Villa",
    price: 110000000,
    location: {
      city: "Muğla",
      neighborhood: "Bodrum (Yalıkavak)",
      country: "Türkiye"
    },
    features: {
      bedrooms: 7,
      bathrooms: 8,
      areaSqM: 1100,
      yearBuilt: 2022
    },
    amenities: ["Marina Manzarası", "Sonsuzluk Havuzu", "Spa ve Hamam", "Akıllı İklimlendirme", "Misafir Evi"],
    description: "Yalıkavak Marina'ya hakim tepede, Ege'nin maviliğiyle birleşen bembeyaz bir sığınak. Özel sonsuzluk havuzu ufuk çizgisiyle bütünleşirken, altın saatlerdeki muazzam gün batımı manzarası sizi büyüleyecek.",
    images: ["/images/realestate/seaside.jpg"],
    agent: {
      name: "Burak Yücel",
      phone: "+90 (542) 555-0166",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    status: "Satılık"
  },
  {
    id: "re-005",
    slug: "nisantasi-art-deco-daire",
    title: "Art Deco Teraslı Daire",
    type: "Penthouse",
    price: 350000,
    location: {
      city: "İstanbul",
      neighborhood: "Nişantaşı",
      country: "Türkiye"
    },
    features: {
      bedrooms: 3,
      bathrooms: 3,
      areaSqM: 240,
      yearBuilt: 2020
    },
    amenities: ["Boğaz Manzarası", "Geniş Teras", "Akıllı Ev Sistemi", "7/24 Güvenlik", "Kapalı Otopark"],
    description: "Nişantaşı'nın kalbinde, Abdi İpekçi Caddesi'ne yürüme mesafesinde yer alan bu özel penthouse, lüks yaşamı ve konforu bir araya getiriyor. Geniş terasıyla İstanbul'un tadını çıkarın.",
    images: ["/images/realestate/penthouse.jpg"],
    agent: {
      name: "Selin Kaya",
      phone: "+90 (535) 555-0177",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    status: "Kiralık"
  },
  {
    id: "re-006",
    slug: "bodrum-denize-sifir-yali-dairesi",
    title: "Denize Sıfır Yalı Dairesi",
    type: "Villa",
    price: 650000,
    location: {
      city: "Muğla",
      neighborhood: "Bodrum (Türkbükü)",
      country: "Türkiye"
    },
    features: {
      bedrooms: 4,
      bathrooms: 4,
      areaSqM: 320,
      yearBuilt: 2022
    },
    amenities: ["Özel İskele", "Sonsuzluk Havuzu", "Deniz Manzarası", "Modern Mimari", "Geniş Bahçe"],
    description: "Türkbükü'nün en prestijli koyunda, denize sıfır konumda yer alan bu yalı dairesi, modern mimarisi ve özel iskelesiyle unutulmaz bir yaz deneyimi sunuyor.",
    images: ["/images/realestate/seaside.jpg"],
    agent: {
      name: "Burak Yücel",
      phone: "+90 (542) 555-0166",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    status: "Kiralık"
  }
];

export const architects: Architect[] = [
  {
    id: "arch-001",
    name: "Emre Arolat",
    role: "Kurucu Ortak & Baş Mimar",
    philosophy: "Yapılarımız, bulundukları bağlamla kurdukları güçlü ilişki ve yere özgü çözümlerle şekillenir.",
    image: "/images/realestate/brutalist.jpg"
  },
  {
    id: "arch-002",
    name: "Melike Altınışık",
    role: "Kıdemli Tasarım Direktörü",
    philosophy: "Doğanın ve teknolojinin kesişiminde, yenilikçi malzeme kullanımıyla geleceğin mekanlarını tasarlıyoruz.",
    image: "/images/realestate/villa.jpg"
  },
  {
    id: "arch-003",
    name: "Murat Tabanlıoğlu",
    role: "Kentsel Tasarım Uzmanı",
    philosophy: "Şehirlerin silüetine saygı duyarken, modern yaşamın ihtiyaçlarına zarif ve fonksiyonel yanıtlar üretiyoruz.",
    image: "/images/realestate/penthouse.jpg"
  }
];
