"use client";

import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  { year: '2025', name: 'Pritzker Adaylığı', category: 'Mimari', project: 'Kültür Pavyonu' },
  { year: '2024', name: 'Mies van der Rohe Ödülü', category: 'Avrupa Mimarisi', project: 'Monolit' },
  { year: '2023', name: 'AIA Altın Madalya', category: 'Yılın Mimarlık Ofisi', project: 'Genel Mükemmeliyet' },
  { year: '2022', name: 'Dezeen Ödülleri', category: 'İç Mimari', project: 'Zenith Evi' },
];

export default function Awards() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 md:px-12" id="awards">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-4">Takdir</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Ödüller ve Onurlandırmalar.</h2>
        </div>

        <div className="flex flex-col">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 group cursor-default hover:bg-white/5 transition-colors px-4 -mx-4"
            >
              <div className="flex items-center space-x-8 md:space-x-16 mb-4 md:mb-0">
                <span className="text-white/40 text-sm font-light w-12">{award.year}</span>
                <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">{award.name}</span>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-white/50 pl-20 md:pl-0">
                <span className="hidden md:inline-block w-48">{award.category}</span>
                <span className="text-right w-full md:w-auto font-light text-white group-hover:text-white/50 transition-colors">{award.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

