"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getSettings() {
  try {
    const settings = await prisma.studioSetting.findMany();
    // Convert array of {key, value} to object
    const settingsObj = settings.reduce((acc: any, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});
    
    return { success: true, data: settingsObj };
  } catch (error) {
    return { success: false, error: "Ayarlar getirilemedi." };
  }
}

export async function updateSetting(key: string, value: string) {
  try {
    await prisma.studioSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value }
    });
    revalidatePath("/studio/settings");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Ayar kaydedilemedi." };
  }
}

export async function getApiKeys() {
  try {
    const keys = await prisma.apiKey.findMany();
    return { success: true, data: keys };
  } catch (error) {
    return { success: false, error: "API Key'ler getirilemedi." };
  }
}

export async function addApiKey(provider: string, key: string) {
  try {
    await prisma.apiKey.create({
      data: { provider, key }
    });
    revalidatePath("/studio/settings");
    return { success: true };
  } catch (error) {
    return { success: false, error: "API Key eklenemedi." };
  }
}

export async function deleteApiKey(id: string) {
  try {
    await prisma.apiKey.delete({ where: { id } });
    revalidatePath("/studio/settings");
    return { success: true };
  } catch (error) {
    return { success: false, error: "API Key silinemedi." };
  }
}
