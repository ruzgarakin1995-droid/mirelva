"use client";

import { motion } from 'framer-motion';

export function SalonCallToActionHome() {
  return (
    <section className="py-40 bg-[#D4A3A3] text-[#FCFBF9] relative overflow-hidden flex items-center justify-center text-center">
      
      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#E0B6B6] mix-blend-overlay filter blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#FCFBF9]/50"></div>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase">Zaman Ayırın</span>
          <div className="w-12 h-[1px] bg-[#FCFBF9]/50"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-tight mb-8"
        >
          Kendinizi <br/> 
          <span className="italic font-light opacity-90">Şımartın.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans font-light text-base md:text-lg opacity-80 max-w-lg mb-12"
        >
          Lumina Nail Art Studio'nun rahatlatıcı atmosferinde yerinizi ayırtın. Güzellik randevunuz bir tık uzağınızda.
        </motion.p>

        <motion.button
          onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="group relative px-12 py-5 overflow-hidden border border-[#FCFBF9] text-[#FCFBF9] bg-transparent hover:text-[#D4A3A3] transition-colors duration-500 rounded-full"
        >
          <span className="absolute inset-0 bg-[#FCFBF9] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full"></span>
          <span className="relative z-10 text-[11px] font-sans tracking-[0.2em] uppercase">Randevu Oluştur</span>
        </motion.button>
      </div>
    </section>
  );
}
