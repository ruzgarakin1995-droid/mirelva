"use client";

import { motion } from 'framer-motion';

export function AestheticHero() {
  return (
    <section className="relative h-[100dvh] min-h-[700px] md:min-h-[850px] flex items-start md:items-center bg-[#FDFCF9] overflow-hidden pt-32 md:pt-0">
      
      {/* Background/Layout Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row z-0">
        <div className="w-full h-[65%] md:w-[45%] md:h-full bg-[#FDFCF9] relative">
          {/* Subtle grid pattern for clinical feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(28,28,28,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(28,28,28,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="w-full h-[35%] md:w-[55%] md:h-full relative">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="/aesthetic/aesthetic_hero_face.jpg" 
              alt="Flawless Skin" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Gradient blend to left (Desktop) */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFCF9] to-transparent"></div>
          {/* Gradient blend to top (Mobile) */}
          <div className="md:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FDFCF9] to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C4A79A]"></span>
            <span className="text-[9px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/60">Gelişmiş Medikal Estetik</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] leading-[1.1] md:text-7xl lg:text-[80px] font-serif text-[#1C1C1C] md:leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            Güzelliğe <br/>
            <span className="italic text-[#C4A79A] font-light">Bilimsel</span> Yaklaşım.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#1C1C1C]/70 font-sans font-light text-base md:text-lg max-w-md leading-relaxed mb-12"
          >
            Kişiselleştirilmiş medikal protokoller ve FDA onaylı teknolojilerle, kendi potansiyelinizin en iyi versiyonuna ulaşın.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button 
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="bg-[#1C1C1C] text-[#FDFCF9] px-10 py-5 text-[11px] font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#C4A79A] transition-colors duration-500 rounded-sm"
            >
              Randevu Oluştur
            </button>
            <button 
              className="flex items-center gap-3 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#1C1C1C] group"
            >
              <span className="w-10 h-10 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:border-[#C4A79A] transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#C4A79A] transition-colors"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              Tedavileri Keşfet
            </button>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
