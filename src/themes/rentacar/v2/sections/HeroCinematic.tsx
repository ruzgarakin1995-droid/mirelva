"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

export const HeroCinematic = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black flex items-end md:items-center justify-center">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2500&auto=format&fit=crop" 
          alt="Premium Car Cinematic" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 flex flex-col md:flex-row items-center md:items-end justify-between pb-24 md:pb-32"
      >
        <div className="text-center md:text-left mb-12 md:mb-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/60 text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-6"
          >
            Ötesini Keşfet
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.9]"
          >
            KUSURSUZ<br className="hidden md:block"/> SÜRÜŞ.
          </motion.h1>
        </div>

        {/* Floating Glass Booking Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full md:w-[400px] bg-white/10 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl"
        >
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
              <MapPin className="w-5 h-5 text-white/50" />
              <div>
                <p className="text-xs text-white/50 font-medium">Alış Lokasyonu</p>
                <p className="text-white font-semibold">İstanbul Havalimanı (IST)</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <p className="text-xs text-white/50 font-medium mb-1">Alış</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/50" />
                  <span className="text-white font-semibold text-sm">12 Ağu</span>
                </div>
              </div>
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <p className="text-xs text-white/50 font-medium mb-1">Dönüş</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/50" />
                  <span className="text-white font-semibold text-sm">15 Ağu</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors mt-2">
              Araçları Bul
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold">KAYDIR</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
