"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end pb-20 md:pb-32 px-6 md:px-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-medium leading-[0.9] tracking-tighter"
          style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
          Yeniden<br/>Keşfet.
        </motion.h1>
      </div>
    </section>
  );
}


