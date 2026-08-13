"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function Hero({ onTestDriveClick }: { onTestDriveClick: () => void }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-white/50" />
            <span className="text-white/70 uppercase tracking-[0.3em] text-xs font-semibold">Eşsiz Koleksiyon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter mb-8"
          >
            MÜKEMMELLİK İÇİN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              TASARLANDI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed"
          >
            Dünyanın en prestijli ve yüksek performanslı araçlarından oluşan seçkin koleksiyonu keşfedin. Otomotiv sanatının ileri mühendislikle buluştuğu yer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button
              onClick={onTestDriveClick}
              className="group relative px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider overflow-hidden rounded-sm w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Deneyim Rezervasyonu
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <a
              href="#collection"
              className="px-8 py-4 bg-transparent text-white font-semibold text-sm uppercase tracking-wider border border-white/20 hover:bg-white/5 hover:border-white/50 transition-all text-center rounded-sm w-full sm:w-auto"
            >
              Envanteri İnceleyin
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


