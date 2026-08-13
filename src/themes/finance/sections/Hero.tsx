"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from "@/components/animations/TextReveal";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
          alt="Finance Corporate Hero" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-start"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-yellow-500 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base border-b border-yellow-500 pb-1 inline-block"
        >
          Ultra-Premium Varlık Yönetimi
        </motion.span>
        <h1 className="text-white font-serif font-light leading-tight mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          <TextReveal 
            text="Geleceğinizi Güvence Altına Alın." 
            highlightedWords={["Güvence"]} 
            highlightClassName="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"
          />
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed"
        >
          Küresel piyasalardaki derin uzmanlığımız ve kişiselleştirilmiş yatırım stratejilerimiz ile servetinizi nesilden nesile taşıyın.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="flex items-center justify-center min-h-[44px] px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold transition-colors duration-300 w-full sm:w-auto">
            Hemen Başlayın
          </button>
          <button className="flex items-center justify-center min-h-[44px] px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-blue-950 font-medium transition-colors duration-300 w-full sm:w-auto">
            Stratejilerimizi Keşfedin
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};




