"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getSessions() {
  try {
    // Demo purposes: using a hardcoded userId for now since auth isn't fully wired for Studio yet.
    const sessions = await prisma.copilotSession.findMany({
      where: { userId: "admin" },
      orderBy: { updatedAt: "desc" },
    });
    return { success: true, data: sessions };
  } catch (error) {
    return { success: false, error: "Oturumlar getirilemedi." };
  }
}

export async function getSession(id: string) {
  try {
    const session = await prisma.copilotSession.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: { createdAt: "asc" }
        }
      }
    });
    return { success: true, data: session };
  } catch (error) {
    return { success: false, error: "Oturum detayları getirilemedi." };
  }
}

export async function createSession(title: string = "Yeni Sohbet") {
  try {
    const session = await prisma.copilotSession.create({
      data: {
        userId: "admin",
        title
      }
    });
    revalidatePath("/studio/copilot");
    return { success: true, data: session };
  } catch (error) {
    return { success: false, error: "Oturum oluşturulamadı." };
  }
}

export async function addMessage(sessionId: string, role: string, content: string) {
  try {
    await prisma.copilotMessage.create({
      data: {
        sessionId,
        role,
        content
      }
    });
    
    await prisma.copilotSession.update({
      where: { id: sessionId },
      data: { updatedAt: new Date() }
    });

    revalidatePath(`/studio/copilot`);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Mesaj eklenemedi." };
  }
}

export async function deleteSession(id: string) {
  try {
    await prisma.copilotSession.delete({ where: { id } });
    revalidatePath("/studio/copilot");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Oturum silinemedi." };
  }
}
