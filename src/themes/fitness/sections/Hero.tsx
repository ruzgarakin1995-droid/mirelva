"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Hero({ onOpenTrial }: { onOpenTrial: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h2 className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4">Sınırlarını Yeniden Belirle</h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter">
            VAROLUŞUNU<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">YÜCELT</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-xl font-light">
            Ultra-premium tesisimizde fiziksel dönüşümün zirvesini deneyimle. Son teknoloji ekipmanlar dünya standartlarında koçlukla buluşuyor.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onOpenTrial} className="bg-cyan-400 text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
              Ücretsiz Denemeye Başla
            </button>
            <button className="border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Dersleri Keşfet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

