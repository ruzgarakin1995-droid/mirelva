"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const LifestyleExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-110"
      >
        <img 
          src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Lifestyle" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-[1200px] w-full px-6 md:px-12 flex justify-end"
      >
        <div className="w-full md:w-[500px] bg-white/10 backdrop-blur-3xl border border-white/20 p-10 md:p-14 rounded-[40px] shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
            Sınırsız Bir Yaşam Tarzı
          </h2>
          <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
            İster önemli bir iş toplantısı, ister özel bir gala, ister hafta sonu kaçamağı olsun. Size tahsis edilen her araç, statünüzü yansıtan pürüzsüz bir yansımadır.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Ayrıcalıkları Keşfet
          </button>
        </div>
      </motion.div>
    </section>
  );
};
