"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] pt-24 pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/50 via-[#FDFBF7]/80 to-[#FDFBF7]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/80 border border-black/5 shadow-xl shadow-zinc-200/50 mb-8"
        >
          <Compass className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium tracking-widest uppercase text-zinc-800">Geleceği İnşa Ediyoruz</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light text-zinc-900 tracking-tight leading-[1.1] mb-8 max-w-5xl"
        >
          Mimari<span className="italic font-serif"> Mükemmelliğin </span>Yeni Boyutu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mb-12 leading-relaxed"
        >
          Işık, mekan ve malzemenin kusursuz uyumuyla yaşam alanlarınızı sanata dönüştürüyoruz. Sürdürülebilir ve estetik çözümlerle tanışın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-none overflow-hidden transition-all hover:bg-zinc-800">
            <span className="relative z-10 text-sm font-medium tracking-wider uppercase">Projelerimizi İncele</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-zinc-900 border border-zinc-900/20 rounded-none transition-all hover:border-zinc-900">
            <span className="text-sm font-medium tracking-wider uppercase">Bizimle İletişime Geçin</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
