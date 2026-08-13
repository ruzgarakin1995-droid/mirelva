"use server";

import { prisma } from "@/lib/prisma";

export async function getAppointments(clientId: string, page = 1, pageSize = 10, search = "") {
  try {
    const skip = (page - 1) * pageSize;
    
    const whereClause = {
      clientId,
      ...(search ? {
        OR: [
          { customerName: { contains: search } },
          { customerPhone: { contains: search } },
        ]
      } : {})
    };

    const data = await prisma.appointment.findMany({
      where: whereClause,
      include: {
        service: true,
        staff: true
      },
      orderBy: {
        date: 'desc'
      },
      skip,
      take: pageSize,
    });

    const total = await prisma.appointment.count({
      where: whereClause
    });

    return {
      success: true,
      data: data.map(app => ({
        ...app,
        service: app.service ? {
          ...app.service,
          price: app.service.price ? Number(app.service.price) : 0
        } : null
      })),
      metadata: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
      }
    };
  } catch (error) {
    console.error("Fetch Appointments Error:", error);
    return { success: false, error: "Failed to fetch appointments" };
  }
}
