"use client";
import { motion } from "framer-motion";

export const CinematicHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop" alt="Hotel Hero" className="w-full h-full object-cover opacity-60" />
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center text-[#F7E7CE] px-4"
      >
        <h1 className="text-5xl md:text-8xl font-serif font-light tracking-widest uppercase mb-6">
          Sonsuzluğa<br />Uyanın
        </h1>
        <p className="text-sm md:text-lg tracking-[0.3em] uppercase font-light">
          Zamanın Durduğu Yer
        </p>
      </motion.div>
    </section>
  );
};