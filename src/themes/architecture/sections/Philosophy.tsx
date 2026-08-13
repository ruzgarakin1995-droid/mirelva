"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12 overflow-hidden" id="philosophy">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center mb-12"
          >
            <div className="w-2 h-2 bg-black rounded-full" />
          </motion.div>

          <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-8">Temel İlkeler</p>
          
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed tracking-tight">
            "Mimarlık, ışık altında bir araya getirilen formların ustalıkla oynandığı, kusursuz ve görkemli bir oyundur."
          </h2>
          
          <div className="w-px h-24 bg-black/20 mt-16" />
        </div>
      </div>
    </section>
  );
}

