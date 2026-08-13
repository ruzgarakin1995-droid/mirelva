"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: "proj-1",
      title: "Bodrum Yalıkavak Peninsula",
      status: "Satışta",
      type: "Ultra Lüks Villa Kompleksi",
      completion: "2025 Q4",
      image: "/images/realestate/seaside.jpg",
      description: "Ege'nin en seçkin koyunda, doğayla bütünleşen 12 özel malikane. Her biri kendine ait sonsuzluk havuzuna ve özel iskeleye sahip."
    },
    {
      id: "proj-2",
      title: "Levent Sky Residences",
      status: "Tamamlandı",
      type: "Rezidans & Penthouse",
      completion: "2023",
      image: "/images/realestate/penthouse.jpg",
      description: "Şehrin silüetine yeni bir imza. Akıllı bina teknolojileri ve panoramik Boğaz manzarasıyla dikey yaşamın zirvesi."
    },
    {
      id: "proj-3",
      title: "Urla Vadi Bağ Evleri",
      status: "Lansman Öncesi",
      type: "Ekolojik Yaşam Alanı",
      completion: "2027",
      image: "/images/realestate/brutalist.jpg",
      description: "Kendi üzüm bağınıza sahip olacağınız, sürdürülebilir mimari ve organik yaşamın kusursuz birleşimi."
    }
  ];

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen pt-32 pb-24 text-[#f5f5f0]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5f5f0]/50 mb-6 block">İmza Projeler</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-normal tracking-tight max-w-5xl leading-[0.9]"
          >
            Geleceğin <span className="font-serif italic text-[#f5f5f0]/60">Mirasları</span>
          </motion.h1>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 border-t border-[#f5f5f0]/10 pt-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
            >
              {/* Image */}
              <div className="w-full lg:w-3/5 overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute top-6 left-6 z-10 bg-[#0a0a0a] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]">
                    {project.status}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f5f0]/40 mb-6">
                  <span>{project.type}</span>
                  <span className="w-1 h-1 bg-[#f5f5f0]/20 rounded-full"></span>
                  <span>Teslim: {project.completion}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">
                  {project.title}
                </h2>
                
                <p className="text-lg text-[#f5f5f0]/70 font-medium leading-relaxed mb-12">
                  {project.description}
                </p>

                <Link 
                  href="/test-real-estate/contact"
                  className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] border-b border-[#f5f5f0]/30 pb-2 hover:border-[#f5f5f0] transition-colors self-start"
                >
                  Bilgi Alın <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
