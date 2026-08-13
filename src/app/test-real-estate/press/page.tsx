"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PressPage() {
  const articles = [
    { source: "Vogue Türkiye", date: "Mayıs 2026", title: "İstanbul'un Yeni Silüeti: AURA İmzası", type: "Makale" },
    { source: "Architectural Digest", date: "Nisan 2026", title: "Urla Bağ Evlerinde Brutalist Devrim", type: "Röportaj" },
    { source: "GQ", date: "Mart 2026", title: "Lüks Gayrimenkulde 'Sessiz Lüks' Dönemi", type: "Haber" },
    { source: "Bloomberg", date: "Şubat 2026", title: "Türkiye'nin En Değerli Portföyüne Sahip Emlak Ofisi", type: "Finans" }
  ];

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
          >
            Basın <span className="font-serif italic text-[#1a1a1a]/60">Odası</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1a1a1a]/60 font-medium max-w-xl"
          >
            Sektöre yön veren vizyonumuz ve imza attığımız projelerin basındaki yankıları.
          </motion.p>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#1a1a1a]/10 pt-12">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer border border-[#1a1a1a]/10 p-8 hover:border-[#1a1a1a] transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-xl font-serif italic text-[#1a1a1a]/80">
                  {article.source}
                </span>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40">
                  <span>{article.type}</span>
                  <span className="w-1 h-1 bg-[#1a1a1a]/20 rounded-full"></span>
                  <span>{article.date}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-normal tracking-tight mb-6 line-clamp-2">
                {article.title}
              </h3>

              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors">
                Haberi Oku <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PR Contact */}
        <div className="mt-32 p-12 bg-[#0a0a0a] text-[#f5f5f0] text-center">
           <h3 className="text-2xl font-normal tracking-tight mb-4">Basın İletişimi</h3>
           <p className="text-[#f5f5f0]/60 mb-6">Basın bültenleri, yüksek çözünürlüklü görseller ve röportaj talepleri için:</p>
           <a href="mailto:pr@auraestates.com.tr" className="text-xl font-bold border-b border-[#f5f5f0] pb-1 hover:text-[#f5f5f0]/60 hover:border-[#f5f5f0]/60 transition-all">
             pr@auraestates.com.tr
           </a>
        </div>

      </div>
    </div>
  );
}
