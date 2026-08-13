import React from "react";
import { getProjects } from "@/actions/projects";
import ProjectsClient from "./ProjectsClient";

export const dynamic = "force-dynamic";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  const { search = "", status = "ALL" } = await searchParams;

  const result = await getProjects(search, status);
  const projects = result.success ? result.data : [];

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Projeler</h1>
          <p className="mt-1 text-sm text-gray-400">Yönettiğiniz tüm web siteleri ve durumları.</p>
        </div>
      </div>
      
      <ProjectsClient initialProjects={projects || []} />
    </div>
  );
}
