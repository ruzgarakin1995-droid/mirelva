import { prisma } from './src/lib/prisma';

async function cleanAndRestoreLibrary() {
  console.log("Wiping existing themes...");
  await prisma.themeTemplate.deleteMany({});
  
  const themes = [
    { name: "E-Ticaret Platformu", category: "E-commerce", previewUrl: "/test-ecommerce", isPremium: true },
    { name: "Gayrimenkul Sistemi", category: "Real Estate", previewUrl: "/test-realestate", isPremium: true },
    { name: "Araç Kiralama Sistemi", category: "RENT_A_CAR", previewUrl: "/test-rentacar", isPremium: true },
    { name: "Oto Galeri Portalı", category: "AUTO", previewUrl: "/test-auto", isPremium: false },
    { name: "Restoran Sipariş & Menü", category: "RESTAURANT", previewUrl: "/test-restaurant", isPremium: false },
    { name: "Otel Rezervasyon Sistemi", category: "HOTEL", previewUrl: "/test-hotel", isPremium: true },
    { name: "Güzellik ve Bakım Merkezi", category: "BEAUTY", previewUrl: "/test-beauty", isPremium: false },
    { name: "Doktor & Klinik Sistemi", category: "MEDICAL", previewUrl: "/test-doctor", isPremium: false },
    { name: "Hukuk Bürosu", category: "LAW", previewUrl: "/test-law", isPremium: false },
    { name: "Mimarlık ve Tasarım", category: "ARCHITECTURE", previewUrl: "/test-architecture", isPremium: false },
    { name: "Dijital Kreatif Ajans", category: "Agency", previewUrl: "/test-agency", isPremium: false },
    { name: "SaaS & Teknoloji Şirketi", category: "SOFTWARE", previewUrl: "/test-software", isPremium: true },
    { name: "Lojistik & Kargo", category: "LOGISTICS", previewUrl: "/test-logistics", isPremium: false },
    { name: "Mücevherat & Takı", category: "JEWELRY", previewUrl: "/test-jewelry", isPremium: false },
    { name: "Finans & Danışmanlık", category: "FINANCE", previewUrl: "/test-finance", isPremium: false },
    { name: "Eğitim Akademisi", category: "EDUCATION", previewUrl: "/test-education", isPremium: false },
    { name: "Etkinlik & Organizasyon", category: "EVENTS", previewUrl: "/test-events", isPremium: false },
    { name: "Yat Kiralama", category: "YACHT", previewUrl: "/test-yacht", isPremium: true },
    { name: "Spor Salonu & Fitness", category: "FITNESS", previewUrl: "/test-fitness", isPremium: false },
    { name: "İnşaat ve Taahhüt", category: "Construction", previewUrl: "/test-construction", isPremium: false },
  ];

  for (const t of themes) {
    await prisma.themeTemplate.create({
      data: {
        name: t.name,
        category: t.category,
        description: `${t.name} için tam kapsamlı dijital işletme platformu.`,
        previewUrl: t.previewUrl,
        isPremium: t.isPremium,
      }
    });
  }

  console.log(`Successfully cleaned and restored ${themes.length} clean themes to the library!`);
}

cleanAndRestoreLibrary()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
