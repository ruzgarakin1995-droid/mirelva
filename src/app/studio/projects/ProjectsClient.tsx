"use client";

import React, { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, Globe, Clock, Copy, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { deleteProject, duplicateProject } from "@/actions/projects";
import { useRouter } from "next/navigation";

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm("Bu projeyi silmek istediğinize emin misiniz?")) {
      setIsDeleting(id);
      await deleteProject(id);
      setIsDeleting(null);
    }
  };

  const handleDuplicate = async (id: string) => {
    await duplicateProject(id);
  };

  return (
    <div className="space-y-6">
      
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#111] p-4 rounded-2xl border border-white/5">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Proje ara (İsim veya URL)..." 
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all"
              onChange={(e) => {
                const url = new URL(window.location.href);
                url.searchParams.set("search", e.target.value);
                router.push(url.toString());
              }}
            />
          </div>
          <select 
            className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none cursor-pointer hidden md:block"
            onChange={(e) => {
              const url = new URL(window.location.href);
              url.searchParams.set("status", e.target.value);
              router.push(url.toString());
            }}
          >
            <option value="ALL">Tümü</option>
            <option value="DRAFT">Taslak</option>
            <option value="LIVE">Yayında</option>
            <option value="ARCHIVED">Arşiv</option>
          </select>
        </div>
        
        <Link href="/studio/new" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 whitespace-nowrap">
          <Plus className="w-4 h-4" />
          Yeni Proje
        </Link>
      </div>

      {/* Content */}
      {initialProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#111]">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
            <Globe className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Proje Bulunamadı</h3>
          <p className="text-gray-400 max-w-sm mb-6">
            Henüz hiç projeniz yok veya arama kriterlerinize uygun proje bulunamadı.
          </p>
          <Link href="/studio/new" className="px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
            İlk Projeni Oluştur
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {initialProjects.map((project) => (
            <div key={project.id} className="group flex flex-col rounded-2xl bg-[#111] border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] relative">
              {isDeleting === project.id && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}
              
              <div className="h-40 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 relative border-b border-white/5 p-5">
                <div className="flex justify-between items-start">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border
                    ${project.status === 'LIVE' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      project.status === 'DRAFT' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                      'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}
                  >
                    {project.status}
                  </span>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <button onClick={() => handleDuplicate(project.id)} className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-white hover:bg-black/60 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(project.id)} className="w-8 h-8 rounded-lg bg-red-500/10 backdrop-blur-md flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-semibold text-white truncate">{project.name}</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Globe className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm text-gray-400 truncate">{project.customDomain || `${project.slug}.yazlik.studio`}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="capitalize">{project.sector}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{new Date(project.createdAt).toLocaleDateString("tr-TR")}</span>
                  </div>
                </div>
                
                <Link href={`/studio/editor/${project.id}`} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                  Editörde Aç
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
