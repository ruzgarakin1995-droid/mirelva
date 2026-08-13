'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createAppointment(clientId: string, data: {
  customerName: string;
  customerPhone: string;
  date: string; // ISO string
}) {
  try {
    if (!data.customerName || !data.customerPhone || !data.date) {
      return { success: false, error: 'Lütfen tüm zorunlu alanları doldurun.' }
    }

    const parsedDate = new Date(data.date);

    // Modül tamamlanma koşulu: Her randevu bir "Service"e bağlı olmalı.
    // Eğer müşterinin henüz eklediği bir hizmet yoksa, varsayılan bir hizmet oluşturalım (Sahte veri olmaması için DB'ye kaydediyoruz)
    let service = await prisma.service.findFirst({ where: { clientId } });
    if (!service) {
      service = await prisma.service.create({
        data: {
          clientId,
          name: 'Genel Danışmanlık',
          duration: 30,
          price: 0
        }
      });
    }

    const appointment = await prisma.appointment.create({
      data: {
        clientId,
        serviceId: service.id,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        date: parsedDate,
        status: 'PENDING'
      }
    });

    // Cache'i temizleyip güncelleyelim
    revalidatePath('/[slug]', 'page');
    revalidatePath('/admin/appointments', 'page');
    
    return { success: true, appointmentId: appointment.id }

  } catch (error: any) {
    console.error('Booking Action Error:', error);
    return { success: false, error: 'Sistemsel bir hata oluştu. Lütfen tekrar deneyin.' }
  }
}
