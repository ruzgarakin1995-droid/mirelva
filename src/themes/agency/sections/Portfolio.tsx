"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Nexus Fintech', category: 'Web App & Branding', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { title: 'Aura Lifestyle', category: 'E-Commerce Platform', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Quantum AI', category: 'Corporate Website', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { title: 'Lumina', category: 'Mobile Experience', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
];

export const Portfolio = () => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Seçili Projeler</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Tasarımla Şekillenen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-white">Başarı Hikayeleri.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-neutral-900 border border-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-lime-400 text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold group-hover:text-lime-400 transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="min-h-[56px] px-10 py-4 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
            Tüm Projeleri İncele
          </button>
        </div>

      </div>
    </section>
  );
};




