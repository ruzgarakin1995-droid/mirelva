'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'

export async function createClient(formData: FormData) {
  const name = formData.get('name') as string
  const slug = formData.get('slug') as string
  const sector = formData.get('sector') as string
  
  const primaryColor = formData.get('primaryColor') as string
  const accentColor = formData.get('accentColor') as string
  
  const hasQrMenu = formData.get('hasQrMenu') === 'true'
  const hasBooking = formData.get('hasBooking') === 'true'
  const hasEcom = formData.get('hasEcom') === 'true'

  await prisma.client.create({
    data: {
      name,
      slug,
      sector,
      themeConfig: {
        create: {
          primaryColor,
          accentColor,
          fontFamily: 'Inter'
        }
      },
      features: {
        create: {
          hasQrMenu,
          hasBooking,
          hasEcom,
          hasBlog: false
        }
      }
    }
  })

  revalidatePath('/admin/clients')
}

export async function getClients() {
  try {
    return await prisma.client.findMany({
      include: {
        themeConfig: true,
        features: true
      }
    })
  } catch (error) {
    console.error("Veritabanı bağlantı hatası:", error);
    return [];
  }
}
