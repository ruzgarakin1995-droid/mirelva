"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export function AestheticTransformations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const results = [
    {
      title: "Sıvı Yüz Germe",
      desc: "Ameliyatsız yüz gençleştirme, hacim kazandırma ve lifting etkisi sağlayan profesyonel dolgu uygulamaları.",
      img: "/aesthetic/aesthetic_sivi_yuz_germe.jpg",
      link: "/test-aesthetic/sivi-yuz-germe"
    },
    {
      title: "İmza Çene Hattı (Jawline)",
      desc: "Altın oran prensibiyle çene ucu ve hattının hyalüronik asit dolgularla kusursuzlaştırılması.",
      img: "/aesthetic/aesthetic_contour.jpg",
      link: "/test-aesthetic/botoks-dolgu"
    },
    {
      title: "Russian Lips Dolgusu",
      desc: "Doğallığı bozmadan, dudak kontürünün belirginleştirildiği özel hacimlendirme tekniği.",
      img: "/aesthetic/aesthetic_lips.jpg",
      link: "/test-aesthetic/botoks-dolgu"
    },
    {
      title: "Ameliyatsız Yüz Germe",
      desc: "HIFU ve fokus ultrason teknolojileriyle cerrahi işlem olmadan elde edilen sıkılaşma.",
      img: "/aesthetic/aesthetic_hero_face.jpg",
      link: "/test-aesthetic/anti-aging"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#1C1C1C] text-[#FDFCF9] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Klinik Sonuçlar</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            İmza <br/>
            <span className="italic font-light text-[#C4A79A]">Dokunuşlarımız.</span>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans font-light text-[#FDFCF9]/60 max-w-sm text-sm"
        >
          Doğallığı kaybetmeden, yüzün anatomik dengesini koruyarak yaptığımız bazı özel işlemler. Sağ kaydırarak inceleyin.
        </motion.p>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 lg:px-8 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {results.map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-[85vw] md:min-w-[600px] snap-center"
          >
            <Link href={item.link} className="flex flex-col gap-6 group block w-full h-full cursor-pointer">
              <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-sm group-hover:shadow-xl transition-shadow duration-700">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60"></div>
                
                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#FDFCF9]/10 backdrop-blur-sm border border-[#FDFCF9]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDFCF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-[#FDFCF9] mb-2 group-hover:text-[#C4A79A] transition-colors duration-500">{item.title}</h3>
                <p className="font-sans font-light text-[#FDFCF9]/50 text-sm max-w-lg">{item.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
