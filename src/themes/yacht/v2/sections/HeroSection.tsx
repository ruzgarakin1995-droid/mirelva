"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <img src="/yacht_hero.jpg" alt="Luxury Yacht" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-800 tracking-[0.3em] text-sm md:text-base font-medium uppercase mb-6 block">Sessiz Lüks, Açık Denizler</span>
          <h1 className="text-5xl md:text-7xl font-light text-blue-950 mb-8 leading-tight">
            Okyanusun Sükunetini <br/><span className="italic">Keşfedin</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-900/80 mb-12 max-w-2xl mx-auto font-light">
            Modern ve aydınlık tasarımıyla, denizin mavisini ruhunuzda hissedeceğiniz kusursuz yat kiralama deneyimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 transition-colors tracking-wide text-sm">
              Filoyu İncele
            </button>
            <button className="px-10 py-4 bg-white/80 backdrop-blur-md border border-cyan-100 text-cyan-900 rounded-full hover:bg-white transition-all tracking-wide text-sm flex items-center gap-2">
              <Compass size={18} />
              Rotanızı Çizin
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}