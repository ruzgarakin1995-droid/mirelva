"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  { source: 'Architectural Digest', title: 'Yeni Minimalizm: Mekan Duyguları Nasıl Şekillendirir?', date: 'Eki 2025' },
  { source: 'Dezeen', title: 'Beton ve Işık Üzerine Bir Ustalık Sınıfı', date: 'Ağu 2025' },
  { source: 'Wallpaper*', title: 'Stüdyo Profili: Modern Müzeyi Yeniden Tanımlamak', date: 'May 2025' },
];

export default function Press() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 md:px-12" id="press">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-4">Medya</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter">Basın.</h2>
          </div>
        </div>

        <div className="border-t border-white/10">
          {articles.map((article, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-12 mb-4 md:mb-0 w-full md:w-2/3">
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold w-48 mb-2 md:mb-0">{article.source}</span>
                <span className="text-xl md:text-2xl font-light group-hover:translate-x-4 transition-transform duration-500">{article.title}</span>
              </div>
              
              <div className="flex items-center justify-between md:justify-end w-full md:w-1/3">
                <span className="text-sm text-white/50">{article.date}</span>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors ml-8" size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

