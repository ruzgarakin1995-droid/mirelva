import { prisma } from './src/lib/prisma';

async function restoreLibrary() {
  console.log("Restoring library themes...");
  
  const themes = [
    { name: "Rent A Car (V1)", category: "RENT_A_CAR", previewUrl: "/test-rentacar", isPremium: false },
    { name: "Rent A Car (V2)", category: "RENT_A_CAR", previewUrl: "/test-rentacar-v2", isPremium: true },
    { name: "Restaurant (V1)", category: "RESTAURANT", previewUrl: "/test-restaurant", isPremium: false },
    { name: "Restaurant (V2)", category: "RESTAURANT", previewUrl: "/test-restaurant-v2", isPremium: false },
    { name: "Restaurant (V3)", category: "RESTAURANT", previewUrl: "/test-restaurant-v3", isPremium: true },
    { name: "Restaurant (V4)", category: "RESTAURANT", previewUrl: "/test-restaurant-v4", isPremium: true },
    { name: "Oto Galeri (V1)", category: "AUTO", previewUrl: "/test-auto", isPremium: false },
    { name: "Oto Galeri (V2)", category: "AUTO", previewUrl: "/test-auto-v2", isPremium: true },
    { name: "Güzellik Merkezi", category: "BEAUTY", previewUrl: "/test-beauty", isPremium: false },
    { name: "Doktor & Klinik", category: "MEDICAL", previewUrl: "/test-doctor", isPremium: false },
    { name: "Mimarlık & İç Mimarlık", category: "ARCHITECTURE", previewUrl: "/test-architecture", isPremium: false },
    { name: "Finans & Danışmanlık", category: "FINANCE", previewUrl: "/test-finance", isPremium: false },
    { name: "Hukuk Bürosu", category: "LAW", previewUrl: "/test-law", isPremium: false },
    { name: "Kuyumcu & Takı", category: "JEWELRY", previewUrl: "/test-jewelry", isPremium: false },
    { name: "Otel & Konaklama", category: "HOTEL", previewUrl: "/test-hotel", isPremium: false },
    { name: "Yazılım & Ajans", category: "SOFTWARE", previewUrl: "/test-software", isPremium: false },
    { name: "Lojistik & Kargo", category: "LOGISTICS", previewUrl: "/test-logistics", isPremium: false },
    { name: "Yat Kiralama", category: "YACHT", previewUrl: "/test-yacht", isPremium: true },
    { name: "Fitness & Gym", category: "FITNESS", previewUrl: "/test-fitness", isPremium: false },
    { name: "Eğitim & Kurs", category: "EDUCATION", previewUrl: "/test-education", isPremium: false },
    { name: "Etkinlik & Organizasyon", category: "EVENTS", previewUrl: "/test-events", isPremium: false },
  ];

  for (const t of themes) {
    await prisma.themeTemplate.create({
      data: {
        name: t.name,
        category: t.category,
        description: `${t.name} için profesyonel hazır tema.`,
        previewUrl: t.previewUrl,
        isPremium: t.isPremium,
      }
    });
  }

  console.log(`Successfully restored ${themes.length} themes to the library!`);
}

restoreLibrary()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
