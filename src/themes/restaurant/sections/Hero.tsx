"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from "@/components/animations/TextReveal";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop"
          alt="Luxury Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 flex items-center justify-center space-x-4"
        >
          <span className="h-[1px] w-12 bg-gold"></span>
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold">Yüksek Gastronomi</span>
          <span className="h-[1px] w-12 bg-gold"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-6xl md:text-8xl text-white mb-6 leading-tight"
        >
          <TextReveal text="Zarafetin Aurası" highlightedWords={["Aurası"]} highlightClassName="text-gold italic" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-gray-300 font-sans text-lg md:text-xl max-w-2xl mb-10"
        >
          Sıradanlığı aşan eşsiz bir lezzet serüveni. Modern gastronominin zamansız lüks ile buluştuğu, unutulmaz bir deneyim.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="btn-outline"
        >
          Menüyü Keşfedin
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Aşağı Kaydır</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;



