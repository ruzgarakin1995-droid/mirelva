"use client";

import { motion } from 'framer-motion';

export function HairSalonHero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#352F2A]">
      
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hair-salon/hair_hero_bg.jpg" 
          alt="Eclat Hair Studio"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#352F2A] via-[#352F2A]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#352F2A]/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#C4A484]"></div>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#FDFBF7]">Premium Saç Tasarım</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#FDFBF7] leading-[0.9] tracking-tighter"
        >
          Doğal <br/>
          <span className="italic font-light text-[#C4A484] ml-12 md:ml-24">Işıltınız.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-[#FDFBF7]/70 font-sans font-light max-w-md text-base leading-relaxed"
        >
          Parisian zarafetini İstanbul'un kalbine taşıyan Eclat Studio, size özel tasarlanmış lüks saç bakım deneyimleri sunar.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <button 
            onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
            className="group flex items-center gap-4 hover:gap-6 transition-all duration-500"
          >
            <span className="w-12 h-12 rounded-full border border-[#C4A484] flex items-center justify-center group-hover:bg-[#C4A484] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#C4A484] group-hover:text-[#352F2A] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#FDFBF7]">Deneyimi Keşfet</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-sans tracking-widest uppercase text-[#FDFBF7]/50">Aşağı Kaydırın</span>
        <div className="w-[1px] h-16 bg-[#FDFBF7]/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-[#C4A484]"
          />
        </div>
      </motion.div>

    </section>
  );
}
