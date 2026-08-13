"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardMetrics(clientId: string) {
  try {
    // Toplam Randevu sayısı
    const appointments = await prisma.appointment.count({
      where: { clientId }
    });
    
    // Toplam Kullanıcı sayısı
    const users = await prisma.user.count({
      where: { clientId, role: "CUSTOMER" }
    });
    
    // Toplam Hizmet
    const services = await prisma.service.count({
      where: { clientId }
    });

    // Son işlemler (Activity Feed)
    const recentAppointments = await prisma.appointment.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: { service: true }
    });

    return {
      success: true,
      data: {
        totalAppointments: appointments,
        totalCustomers: users,
        totalServices: services,
        recentActivities: recentAppointments.map(app => ({
          ...app,
          service: app.service ? {
            ...app.service,
            price: app.service.price ? Number(app.service.price) : 0
          } : null
        })),
      }
    };
  } catch (error) {
    console.error("Dashboard Metrics Error:", error);
    return { success: false, error: "Failed to fetch metrics" };
  }
}
