"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function DentistHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#FAFAFA]">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/lumina_smile_hero.jpg" 
          alt="Lumina Smile Design" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Very subtle gradient overlay to make text pop if needed, but we want bright aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/90" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] tracking-tight mb-6">
            Gülüşünüz, <br/>
            <span className="italic text-[#1A1A1A]/70">İmzanızdır.</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#1A1A1A]/60 font-sans max-w-2xl font-light"
        >
          Estetik diş hekimliğinde yeni bir standart. Modern teknoloji ve sanatın mükemmel uyumuyla tanışın.
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/50">Keşfet</span>
        <div className="w-[1px] h-12 bg-[#1A1A1A]/20 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-[#1A1A1A]"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
