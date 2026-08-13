"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { AestheticDoctors } from '@/themes/aesthetic/components/AestheticDoctors';
import { motion } from 'framer-motion';

export default function UzmanKadroPage() {
  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader isDarkBackground={true} />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-6 lg:px-8 bg-[#1C1C1C] text-[#FDFCF9] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/aesthetic/aesthetic_hero_face.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Lider İsimler</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Uzman Kadro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#FDFCF9]/60 max-w-xl mx-auto text-lg"
          >
            Uluslararası deneyime sahip medikal direktörlerimiz ve uzman estetiysenlerimizle tanışın.
          </motion.p>
        </div>
      </section>

      {/* Reuse the animated Doctors component but in a page context */}
      <div className="bg-[#1C1C1C] pb-24">
         <AestheticDoctors />
      </div>

      <AestheticFooter />
    </main>
  );
}
