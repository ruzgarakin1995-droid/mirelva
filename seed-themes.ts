import { prisma } from './src/lib/prisma';

const themes = [
  // TIER 1 - LUXURY THEMES
  {
    name: 'Luxury Güzellik Merkezi',
    category: 'Beauty',
    description: 'Modern, zarif ve lüks hissettiren güzellik salonu & klinik teması.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },
  {
    name: 'Premium Restoran',
    category: 'Restaurant',
    description: 'Michelin yıldızlı restoranlar ve fine-dining mekanlar için şık tasarım.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },
  {
    name: 'Kurumsal Hukuk Bürosu',
    category: 'Law Firm',
    description: 'Güven veren, profesyonel hukuk bürosu ve avukatlık teması.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },
  {
    name: 'Lüks Emlak & Gayrimenkul',
    category: 'Real Estate',
    description: 'Premium konut ve villa projeleri için tasarlanmış gayrimenkul teması.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },
  {
    name: 'Prestige Oto Galeri',
    category: 'Auto Gallery',
    description: 'Lüks araç galerileri için karanlık mod ağırlıklı premium tema.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },
  {
    name: 'Özel Klinik & Doktor',
    category: 'Doctor',
    description: 'Güvenilir, temiz ve modern medikal doktor kliniği teması.',
    isPremium: true,
    config: JSON.stringify({ tier: 1 })
  },

  // TIER 2 - STANDART THEMES
  {
    name: 'E-Ticaret V2 (Platform)',
    category: 'E-commerce',
    description: 'Hızlı, SEO uyumlu ve dönüşüm odaklı standart e-ticaret teması.',
    isPremium: false,
    config: JSON.stringify({ tier: 2 })
  },
  {
    name: 'Rent A Car V2 (Platform)',
    category: 'RENT_A_CAR',
    description: 'Kullanıcı dostu, rezervasyon odaklı standart araç kiralama teması.',
    isPremium: false,
    config: JSON.stringify({ tier: 2 })
  },
  {
    name: 'Emlak V2 (Platform)',
    category: 'Real Estate',
    description: 'Hızlı ilan listeleme ve arama odaklı standart emlak teması.',
    isPremium: false,
    config: JSON.stringify({ tier: 2 })
  }
];

async function main() {
  console.log('Seeding Theme Templates...');
  
  // Önce mevcut temaları temizleyelim ki çift kayıt olmasın
  await prisma.themeTemplate.deleteMany({});
  
  for (const theme of themes) {
    await prisma.themeTemplate.create({
      data: theme
    });
    console.log(`Created theme: ${theme.name} (Tier: ${JSON.parse(theme.config).tier})`);
  }
  
  console.log('Themes seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
