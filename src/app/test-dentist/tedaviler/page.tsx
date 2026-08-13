"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Services } from '@/themes/dentist/components/Services';

export default function TedavilerPage() {
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
            Tedavilerimiz
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Tüm <span className="italic text-[#D4C9C3] font-light">Tedavilerimiz</span>
          </h1>
          <p className="max-w-xl mx-auto font-sans font-light text-[#1A1A1A]/60 leading-relaxed">
            Sağlıklı ve estetik bir gülüş için sunduğumuz tüm modern diş hekimliği tedavilerini inceleyin.
          </p>
        </motion.div>

        {/* Reusing the Services component to list all 10 treatments */}
        <div className="mb-24">
          <Services />
        </div>

      </div>
    </div>
  );
}
