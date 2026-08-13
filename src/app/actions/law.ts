"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitConsultationRequest(formData: FormData) {
  try {
    const clientName = formData.get("clientName") as string;
    const clientEmail = formData.get("clientEmail") as string;
    const practiceArea = formData.get("practiceArea") as string;
    const description = formData.get("description") as string;

    // TODO: Gerçek sistemde bu "clientId" dinamik olmalı (Hukuk tenant ID'si). 
    // Şimdilik test amaçlı sabit bir Client oluşturup/bularak bağlıyoruz.
    let client = await prisma.client.findFirst({ where: { sector: "LAW" } });
    
    if (!client) {
      client = await prisma.client.create({
        data: {
          name: "Örnek Hukuk Bürosu",
          slug: "ornek-hukuk",
          sector: "LAW"
        }
      });
    }

    await prisma.consultation.create({
      data: {
        clientId: client.id,
        clientName: clientName,
        clientEmail: clientEmail,
        clientPhone: "Belirtilmedi", // Formda yoktu, eklenebilir
        caseDescription: `Alan: ${practiceArea}\n\n${description}`,
        date: new Date(),
        status: "PENDING"
      }
    });

    revalidatePath("/admin");
    return { success: true, message: "Talebiniz başarıyla alındı." };
  } catch (error) {
    console.error("Danışmanlık talebi hatası:", error);
    return { success: false, message: "Bir hata oluştu, lütfen tekrar deneyin." };
  }
}
