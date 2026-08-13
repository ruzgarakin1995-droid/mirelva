"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const projectSchema = z.object({
  name: z.string().min(2, "Proje adı en az 2 karakter olmalıdır"),
  slug: z.string().min(2, "URL Slug en az 2 karakter olmalıdır"),
  sector: z.string().min(2, "Sektör zorunludur"),
  status: z.enum(["DRAFT", "LIVE", "ARCHIVED"]).default("DRAFT"),
  customDomain: z.string().optional().nullable(),
});

export async function getProjects(search?: string, status?: string) {
  try {
    const where: any = {};
    
    if (search) {
      where.name = { contains: search };
    }
    
    if (status && status !== "ALL") {
      where.status = status;
    }

    const projects = await prisma.client.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { success: false, error: "Projeler getirilirken bir hata oluştu." };
  }
}

export async function createProject(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      sector: formData.get("sector") as string,
      status: (formData.get("status") as string) || "DRAFT",
    };

    const validatedData = projectSchema.safeParse(rawData);
    
    if (!validatedData.success) {
      return { 
        success: false, 
        error: "Doğrulama hatası", 
        details: validatedData.error.flatten().fieldErrors 
      };
    }

    const project = await prisma.client.create({
      data: {
        name: validatedData.data.name,
        slug: validatedData.data.slug,
        sector: validatedData.data.sector,
        status: validatedData.data.status,
      }
    });

    revalidatePath("/studio/projects");
    return { success: true, data: project };
  } catch (error: any) {
    console.error("Failed to create project:", error);
    if (error.code === "P2002") {
      return { success: false, error: "Bu URL (Slug) zaten kullanılıyor." };
    }
    return { success: false, error: "Proje oluşturulurken bir hata oluştu." };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.client.delete({
      where: { id }
    });
    revalidatePath("/studio/projects");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { success: false, error: "Proje silinemedi." };
  }
}

export async function duplicateProject(id: string) {
  try {
    const existing = await prisma.client.findUnique({ where: { id } });
    if (!existing) return { success: false, error: "Proje bulunamadı." };

    const project = await prisma.client.create({
      data: {
        name: `${existing.name} (Kopya)`,
        slug: `${existing.slug}-kopya-${Math.floor(Math.random() * 10000)}`,
        sector: existing.sector,
        status: "DRAFT",
      }
    });

    revalidatePath("/studio/projects");
    return { success: true, data: project };
  } catch (error) {
    console.error("Failed to duplicate project:", error);
    return { success: false, error: "Proje çoğaltılamadı." };
  }
}
