import { prisma } from '../src/lib/prisma';

const themes = [
  { name: 'Gourmet', category: 'Restaurant', description: 'Modern ve şık restoran teması', isPremium: true },
  { name: 'Glow', category: 'Beauty', description: 'Güzellik salonları ve klinikler için zarif tasarım', isPremium: false },
  { name: 'Iron', category: 'Fitness', description: 'Spor salonları için dinamik ve güçlü görünüm', isPremium: true },
  { name: 'Horizon', category: 'Real Estate', description: 'Gayrimenkul ofisleri için profesyonel vitrin', isPremium: false },
  { name: 'Oasis', category: 'Hotel', description: 'Otel ve konaklama işletmeleri için lüks tema', isPremium: true },
  { name: 'Care', category: 'Doctor', description: 'Doktorlar ve sağlık klinikleri için güven veren tasarım', isPremium: false },
  { name: 'Justice', category: 'Law Firm', description: 'Hukuk büroları için prestijli ve kurumsal arayüz', isPremium: true },
  { name: 'Structure', category: 'Architecture', description: 'Mimarlık ofisleri için minimalist portfolyo', isPremium: true },
  { name: 'Velocity', category: 'Auto Gallery', description: 'Oto galeriler için araç sergileme odaklı tema', isPremium: false },
  { name: 'Creative', category: 'Agency', description: 'Dijital ajanslar için yaratıcı ve modern yapı', isPremium: false },
  { name: 'Academy', category: 'Education', description: 'Okul ve kurslar için eğitim odaklı tema', isPremium: true },
  { name: 'Nautical', category: 'Yacht', description: 'Yat kiralama firmaları için ultra-lüks konsept', isPremium: true },
  { name: 'Moments', category: 'Events', description: 'Düğün ve etkinlik organizatörleri için zarif tema', isPremium: true },
  { name: 'Shop', category: 'E-commerce', description: 'Modern e-ticaret siteleri için dönüşüm odaklı tasarım', isPremium: false },
  { name: 'Diamond', category: 'Jewelry', description: 'Mücevher markaları için premium vitrin', isPremium: true },
  { name: 'Lens', category: 'Photography', description: 'Fotoğrafçılar için galeri odaklı portfolyo', isPremium: false },
  { name: 'Adviser', category: 'Consulting', description: 'Danışmanlık firmaları için kurumsal arayüz', isPremium: false },
  { name: 'Transit', category: 'Logistics', description: 'Lojistik ve kargo firmaları için dinamik tema', isPremium: false },
  { name: 'Build', category: 'Construction', description: 'İnşaat firmaları için güçlü ve endüstriyel tasarım', isPremium: true },
  { name: 'Cloud', category: 'SaaS', description: 'Yazılım girişimleri için modern landing page', isPremium: true }
];

async function main() {
  console.log('Seeding themes...');
  for (const theme of themes) {
    await prisma.themeTemplate.create({
      data: theme
    });
  }
  console.log('Successfully seeded 20 themes!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
