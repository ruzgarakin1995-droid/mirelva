"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ name, onQuoteClick }: { name: string, onQuoteClick: () => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-white" id="home">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" 
          alt="Architecture Hero" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
            {name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <p className="text-lg md:text-xl font-light text-white/80 tracking-wide mb-12 uppercase text-center max-w-lg">
            Cesur geometri ve zamansız minimalizm ile mekansal deneyimi yeniden tanımlıyoruz.
          </p>
          
          <button 
            onClick={onQuoteClick}
            className="group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Projenizi Başlatın</span>
            <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4 text-white/50">Kaydır</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}


