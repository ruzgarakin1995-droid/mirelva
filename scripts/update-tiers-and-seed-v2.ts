import { prisma } from '../src/lib/prisma';

const v2Themes = [
  { name: 'Gourmet Standart', category: 'Restaurant', description: 'Restoranlar için pratik ve hızlı tema', isPremium: false, config: JSON.stringify({ tier: 2 }) },
  { name: 'Glow Standart', category: 'Beauty', description: 'Güzellik merkezleri için kullanışlı arayüz', isPremium: false, config: JSON.stringify({ tier: 2 }) },
  { name: 'Iron Standart', category: 'Fitness', description: 'Spor salonları için enerjik ve sade tema', isPremium: false, config: JSON.stringify({ tier: 2 }) },
  { name: 'Horizon Standart', category: 'Real Estate', description: 'Emlak ofisleri için doğrudan ve net portföy', isPremium: false, config: JSON.stringify({ tier: 2 }) },
  { name: 'Oasis Standart', category: 'Hotel', description: 'Şehir otelleri için standart rezervasyon teması', isPremium: false, config: JSON.stringify({ tier: 2 }) }
];

async function main() {
  console.log('Updating existing themes to Tier 1...');
  
  // Update existing themes that don't have a config
  const existingThemes = await prisma.themeTemplate.findMany({
    where: { config: null }
  });

  for (const theme of existingThemes) {
    await prisma.themeTemplate.update({
      where: { id: theme.id },
      data: { config: JSON.stringify({ tier: 1 }) }
    });
  }

  console.log('Seeding Tier 2 themes...');
  for (const theme of v2Themes) {
    // avoid duplicates if run multiple times
    const exists = await prisma.themeTemplate.findFirst({
      where: { name: theme.name }
    });
    if (!exists) {
      await prisma.themeTemplate.create({
        data: theme
      });
    }
  }

  console.log('Successfully updated tiers and seeded v2 themes!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
