"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSlider() {
  return (
    <section className="relative w-full h-[85vh] bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
          alt="Yeni Sezon Koleksiyonu" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-4 block"
        >
          2026 Sonbahar Koleksiyonu
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8"
        >
          Yeni<br/>Kurallar.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-3 mx-auto hover:bg-black hover:text-white transition-all duration-300">
            Koleksiyonu Keşfet <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
