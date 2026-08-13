"use client";

import React from "react";
import { motion } from "framer-motion";

export function Showroom() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/50" />
            <span className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold">Tesisimiz</span>
            <div className="w-12 h-[1px] bg-white/50" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            LÜKSÜ <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">HİSSEDİN.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
            Son teknolojiyle donatılmış showroom'umuz, içindeki şaheserleri tamamlamak üzere tasarlandı. 
            Mimari dehanın otomotiv mükemmelliğiyle buluştuğu bir ortamı deneyimleyin.
          </p>

          <button className="px-8 py-4 bg-transparent text-white font-semibold text-sm uppercase tracking-wider border border-white/20 hover:bg-white hover:text-black transition-all rounded-sm">
            Ziyaret Planlayın
          </button>
        </motion.div>
      </div>
    </section>
  );
}


