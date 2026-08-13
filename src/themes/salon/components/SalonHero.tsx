"use client";

import { motion } from 'framer-motion';

export function SalonHero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#FCFBF9]">
      
      {/* Abstract/Soft Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="/salon/nail_hero_bg_1786239167194.jpg"
            alt="Lumina Beauty Salon"
            className="w-full h-full object-cover opacity-[0.7] saturate-[0.7]"
          />
          {/* Added stronger white overlay for text readability */}
          <div className="absolute inset-0 bg-[#FCFBF9]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FCFBF9]/20 to-[#FCFBF9]"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#4A403F]">Lüks Nail Art Deneyimi</span>
          <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-serif text-[#4A403F] leading-tight mb-8"
        >
          Parmak Uçlarınızdaki <br/>
          <span className="italic text-[#D4A3A3] font-light">Zarif Sanat.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-base md:text-lg font-sans font-light text-[#4A403F]/80 max-w-2xl leading-relaxed mb-12"
        >
          Klasik manikürden, özenle işlenmiş mikroskobik sanat eserlerine; ellerinizin güzelliğini ön plana çıkaran premium tırnak bakım stüdyosu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button className="group relative px-10 py-5 overflow-hidden border border-[#D4A3A3] text-[#4A403F] bg-white/50 backdrop-blur-sm hover:text-[#FCFBF9] transition-colors duration-500 rounded-full">
            <span className="absolute inset-0 bg-[#D4A3A3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full"></span>
            <span className="relative z-10 text-[11px] font-sans tracking-[0.2em] uppercase">Hizmetleri Keşfet</span>
          </button>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-sans tracking-widest uppercase text-[#4A403F]/50">Aşağı Kaydır</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#D4A3A3] to-transparent"
        />
      </motion.div>

    </section>
  );
}
