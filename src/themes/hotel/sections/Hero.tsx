"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenReservation }: { onOpenReservation?: () => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hotel_hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase mb-6 text-[var(--accent)]">
            LÜKSÜN YENİ TANIMI
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8">
            Unutulmaz Bir<br />Deneyim Yaşayın
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Şehrin kalbinde, zamansız zarafet ve modern konforun buluştuğu noktada eşsiz bir konaklama deneyimine davetlisiniz.
          </p>
          
          <button 
            onClick={onOpenReservation}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase overflow-hidden border border-white/30 hover:border-white transition-colors"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              KEŞFETMEYE BAŞLAYIN
            </span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
