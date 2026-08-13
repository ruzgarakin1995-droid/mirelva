import { prisma } from '../src/lib/prisma'

async function main() {
  console.log('Seeding veritabanı başlatılıyor...')
  
  // Önce mevcut demo müşteriyi temizle (varsa)
  await prisma.client.deleteMany({
    where: { id: "demo-client-id" }
  })

  // 1. Demo Müşteri (Örn: Güzellik Salonu)
  const client = await prisma.client.create({
    data: {
      id: "demo-client-id",
      name: "Luxury Güzellik Merkezi",
      slug: "luxury-guzellik",
      sector: "beauty",
      phone: "+90 555 123 45 67",
      email: "info@luxuryguzellik.com",
    }
  })

  // 2. Örnek Hizmetler
  const service1 = await prisma.service.create({
    data: {
      clientId: client.id,
      name: "Lazer Epilasyon (Tüm Vücut)",
      duration: 60,
      price: 1500,
    }
  })
  
  const service2 = await prisma.service.create({
    data: {
      clientId: client.id,
      name: "Medikal Cilt Bakımı",
      duration: 45,
      price: 850,
    }
  })

  // 3. Örnek Randevular (Appointments)
  await prisma.appointment.createMany({
    data: [
      {
        clientId: client.id,
        serviceId: service1.id,
        customerName: "Ayşe Yılmaz",
        customerPhone: "0532 111 22 33",
        date: new Date(new Date().setHours(10, 0, 0, 0)),
        status: "CONFIRMED"
      },
      {
        clientId: client.id,
        serviceId: service2.id,
        customerName: "Zeynep Kaya",
        customerPhone: "0533 222 33 44",
        date: new Date(new Date().setHours(14, 30, 0, 0)),
        status: "PENDING"
      },
      {
        clientId: client.id,
        serviceId: service1.id,
        customerName: "Elif Demir",
        customerPhone: "0534 333 44 55",
        date: new Date(new Date().setDate(new Date().getDate() - 1)), // Dün
        status: "COMPLETED"
      },
      {
        clientId: client.id,
        serviceId: service2.id,
        customerName: "Merve Çelik",
        customerPhone: "0535 444 55 66",
        date: new Date(new Date().setDate(new Date().getDate() + 1)), // Yarın
        status: "CANCELLED"
      }
    ]
  })

  console.log('✅ Demo veriler başarıyla eklendi!')
  console.log('Artık Business OS tablolarında dolu verileri görebilirsiniz.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
