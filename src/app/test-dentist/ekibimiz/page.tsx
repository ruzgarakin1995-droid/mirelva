"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Doctors } from '@/themes/dentist/components/Doctors';

export default function EkibimizPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Kadromuz
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Gülüş <span className="italic text-[#D4C9C3] font-light">Sanatçıları</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans font-light text-[#1A1A1A]/60 leading-relaxed">
            Alanında dünya çapında üne sahip, estetik vizyonu ve medikal hassasiyeti harmanlayan uzman kadromuzla tanışın.
          </p>
        </motion.div>

        {/* Reusing the Doctors component but in a page context */}
        <div className="mb-24">
          <Doctors theme="light" />
        </div>

        {/* Manifesto/Quote */}
        <div className="py-24 border-t border-[#1A1A1A]/10 mt-12 text-center max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-3xl md:text-5xl font-serif leading-snug text-[#1A1A1A]"
          >
            "Bir yüzün mimarisi, doğru ölçülerle yeniden inşa edildiğinde, ortaya çıkan eser sadece estetik değil, aynı zamanda yeni bir <span className="italic font-light text-[#D4C9C3]">özgüvenin</span> inşasıdır."
          </motion.p>
        </div>

      </div>
    </div>
  );
}
