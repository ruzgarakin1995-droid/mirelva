'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2938&auto=format&fit=crop"
          alt="Luxury Car"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div className="absolute top-8 right-8 z-50 flex gap-2 text-white/70 text-sm font-medium tracking-widest">
        <button className="hover:text-white transition-colors font-bold text-white">TR</button>
        <span>|</span>
        <button className="hover:text-white transition-colors">EN</button>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(3rem,8vw,8rem)] font-light tracking-tighter text-white"
        >
          Model <span className="font-bold">S</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-[clamp(1rem,2vw,1.5rem)] text-gray-300 font-light tracking-wide"
        >
          Plaid. Sınırların Ötesinde.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-12 py-4 bg-white text-black font-medium tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300 rounded-sm">
            SİPARİŞ VER
          </button>
          <button className="px-12 py-4 bg-black/50 backdrop-blur-md text-white border border-white/20 font-medium tracking-widest text-sm hover:bg-white/10 transition-colors duration-300 rounded-sm">
            TEST SÜRÜŞÜ
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
