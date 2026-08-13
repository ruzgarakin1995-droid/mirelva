import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const themes = await prisma.themeTemplate.findMany();
  console.log(JSON.stringify(themes, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
