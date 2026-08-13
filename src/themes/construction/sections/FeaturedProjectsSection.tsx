"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: "Onyx Finans Merkezi",
      category: "TİCARİ KOMPLEKS",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000",
      size: "120.000 m²",
      status: "Tamamlandı"
    },
    {
      title: "Aura Rezidans",
      category: "LÜKS KONUT",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
      size: "45.000 m²",
      status: "Devam Ediyor"
    },
    {
      title: "Lumina Plaza",
      category: "OFİS BİNASI",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=2000",
      size: "85.000 m²",
      status: "Tamamlandı"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-amber-500"></span> Prestij Projeleri
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <TextReveal text="Mükemmelliğin İnşa Edilmiş Halleri" highlightedWords={["Mükemmelliğin"]} highlightClassName="text-amber-500" />
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-amber-500 transition-colors pb-2 border-b-2 border-amber-500">
            Tüm Portföyü İncele <ArrowUpRight className="w-5 h-5" />
          </button>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollRevealChild key={index} variant="clip-path" className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold bg-amber-500 text-slate-900 px-3 py-1 rounded-sm uppercase tracking-wider">
                      {project.status}
                    </span>
                    <span className="text-slate-300 text-sm font-medium tracking-wider">
                      {project.size}
                    </span>
                  </div>
                  
                  <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

