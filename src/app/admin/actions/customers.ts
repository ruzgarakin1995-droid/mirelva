"use server";
import { prisma } from "@/lib/prisma";

export async function getCustomers(clientId: string) {
  try {
    return await prisma.user.findMany({
      where: {
        clientId,
        role: "CUSTOMER"
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
}
