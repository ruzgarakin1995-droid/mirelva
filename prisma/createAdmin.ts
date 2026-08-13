import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcrypt'

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@luxury.com' },
    update: {
      password: hashedPassword,
      clientId: 'demo-client-id',
      role: 'SUPERADMIN'
    },
    create: {
      email: 'admin@luxury.com',
      name: 'Sistem Yöneticisi',
      password: hashedPassword,
      clientId: 'demo-client-id',
      role: 'SUPERADMIN'
    },
  })

  console.log('✅ Admin hesabı oluşturuldu/güncellendi!')
  console.log('--------------------------------')
  console.log('E-posta: admin@luxury.com')
  console.log('Şifre: admin123')
  console.log('--------------------------------')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
