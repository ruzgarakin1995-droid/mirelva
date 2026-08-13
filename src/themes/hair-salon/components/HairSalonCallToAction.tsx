"use client";

import { motion } from 'framer-motion';

export function HairSalonCallToAction() {
  return (
    <section className="relative py-32 bg-[#352F2A] text-[#FDFBF7] overflow-hidden border-t border-[#FDFBF7]/10">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C4A484]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto text-[#C4A484]">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif leading-tight mb-8"
        >
          Yeni Bir Sen,<br/>
          <span className="italic font-light text-[#C4A484]">Yeni Bir Başlangıç.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans font-light text-[#FDFBF7]/60 mb-12 max-w-md mx-auto"
        >
          Stil danışmanlarımız eşliğinde hayalinizdeki görünüme kavuşmak için ilk adımı atın.
        </motion.p>

        <motion.button
          onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="group relative px-12 py-5 overflow-hidden border border-[#C4A484] text-[#C4A484] bg-transparent hover:text-[#352F2A] transition-colors duration-500 rounded-full"
        >
          <span className="absolute inset-0 bg-[#C4A484] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full"></span>
          <span className="relative z-10 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">Hemen Randevu Al</span>
        </motion.button>
        
      </div>
    </section>
  );
}
