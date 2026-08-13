"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getThemes(category?: string) {
  try {
    const where: any = {};
    if (category && category !== "ALL") {
      where.category = category;
    }
    const themes = await prisma.themeTemplate.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: themes };
  } catch (error) {
    console.error("Failed to fetch themes:", error);
    return { success: false, error: "Temalar getirilirken hata oluştu." };
  }
}

export async function deleteTheme(id: string) {
  try {
    await prisma.themeTemplate.delete({ where: { id } });
    revalidatePath("/studio/library");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Tema silinemedi." };
  }
}

export async function getComponents(type?: string) {
  try {
    const where: any = {};
    if (type && type !== "ALL") {
      where.type = type;
    }
    const components = await prisma.uIComponent.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: components };
  } catch (error) {
    return { success: false, error: "Bileşenler getirilemedi." };
  }
}
