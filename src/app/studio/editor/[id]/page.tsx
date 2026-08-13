import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditorClient from "./EditorClient";

export default async function StudioEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await prisma.client.findUnique({
    where: { id }
  });

  if (!project) {
    notFound();
  }

  return <EditorClient project={project} />;
}
