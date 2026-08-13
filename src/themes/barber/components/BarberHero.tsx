"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function BarberHero() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#F8F7F5]">
      
      {/* Background Graphic / Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center sepia-[0.3]"
      />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        
        {/* Availability Badge */}
        <motion.button
          onClick={() => setIsAvailable(!isAvailable)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-6 flex items-center gap-3 px-5 py-2 rounded-full border bg-[#F8F7F5]/50 backdrop-blur-md transition-colors duration-500 cursor-pointer ${
            isAvailable ? 'border-emerald-500/40' : 'border-red-500/40'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
          </span>
          <span className={`text-[10px] font-sans tracking-widest uppercase transition-colors duration-500 ${isAvailable ? 'text-emerald-800' : 'text-red-800'}`}>
            {isAvailable ? 'Şu an Müsait' : 'Şu an Doluyuz'}
          </span>
        </motion.button>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#2A2522]/50 mb-8"
        >
          Geleneksel & Kusursuz
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-serif text-[#2A2522] leading-tight">
            Erkek Bakımında <br />
            <span className="italic text-[#C1A68D] font-light">Yeni Standart.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[#2A2522]/60 font-light max-w-lg text-lg">
            Modern beyefendiler için tasarlanmış, geleneksel berberlik zanaatı ile çağdaş lüksün buluşma noktası. Bomonti Hair Studio'da mükemmelliği deneyimleyin.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
