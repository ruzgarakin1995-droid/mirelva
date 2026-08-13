"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gauge } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full px-4 py-2 shadow-xl">
        <button className="text-white text-sm font-black uppercase hover:text-red-500 transition-colors">TR</button>
        <span className="text-neutral-600 font-bold">|</span>
        <button className="text-neutral-400 text-sm font-black uppercase hover:text-white transition-colors">EN</button>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
          alt="Tuned Car" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-1 bg-red-500 rounded-full" />
            <span className="text-red-500 font-bold uppercase tracking-[0.2em]">Oto Tuning V2</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
            Canavarı <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Serbest Bırak
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl font-light border-l-2 border-red-500 pl-4">
            Özel ECU yazılımı, performans parçaları ve dyno testli sonuçlar. Aracınızın performansını fabrika sınırlarının ötesine taşıyın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase italic tracking-widest flex items-center justify-center gap-2 group transition-all"
            >
              Tuning'e Başla
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-900/50 hover:bg-neutral-800 backdrop-blur-md border border-neutral-700 text-white px-8 py-4 font-bold uppercase italic tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              <Gauge className="w-5 h-5 text-red-500" />
              Dyno Sonuçları
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-neutral-400">Aşağı Kaydır</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
