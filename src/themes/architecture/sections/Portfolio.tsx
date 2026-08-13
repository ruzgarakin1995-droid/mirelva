"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: 'Monolit', category: 'Ticari', image: '/arch_exterior.jpg' },
  { id: 2, title: 'Zenith Evi', category: 'Konut', image: '/arch_interior.jpg' },
  { id: 3, title: 'Kültür Pavyonu', category: 'Kültürel', image: '/arch_hero.jpg' },
  { id: 4, title: 'Lumina Kulesi', category: 'Ticari', image: '/arch_exterior.jpg' },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#050505] text-white py-32 px-6 md:px-12" id="portfolio">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-4">Seçilmiş İşler</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Portfolyo.</h2>
          </div>
          <a href="#all" className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors">
            Tüm Projeleri Görüntüle
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-white/5 mb-6">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="text-white/30 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-light">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <a href="#all" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-white/30 pb-1 hover:border-white transition-colors">
            Tüm Projeleri Görüntüle
          </a>
        </div>
      </div>
    </section>
  );
}


