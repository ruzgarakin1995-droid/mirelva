"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

export function BookingCTA() {
  return (
    <section className="py-32 bg-[#D4C9C3] text-[#1A1A1A] relative overflow-hidden">
      {/* Decorative large text in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10">
        <h2 className="text-[15vw] font-serif italic leading-none whitespace-nowrap">
          Dişmekan
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/60 mb-8 block"
        >
          Zamanı Geldi
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-tight mb-12"
        >
          Gülüşünüzü <br/>
          <span className="italic font-light">Tasarlamaya</span> Hazır Mısınız?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MagneticButton variant="dark" className="px-12 py-5 text-lg">
            Randevu Al
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
