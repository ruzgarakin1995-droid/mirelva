"use client";

import { motion } from 'framer-motion';

export function AestheticDoctors() {
  return (
    <section className="py-16 md:py-32 bg-[#1C1C1C] px-6 lg:px-8 text-[#FDFCF9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#FDFCF9]/50">Medikal Kadro</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8"
          >
            Alanında <br/>
            <span className="italic font-light text-[#C4A79A]">Öncü</span> İsimler.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans font-light text-sm md:text-base text-[#FDFCF9]/60 leading-relaxed max-w-md mb-10"
          >
            Kozmetik dermatoloji ve medikal estetik alanında uluslararası deneyime sahip, her biri kendi alanında uzman hekimlerimizle tanışın. Sizin için en doğru, en doğal ve en güvenli tedavi protokolünü birlikte belirliyoruz.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#1C1C1C] bg-[#FDFCF9] px-8 py-4 hover:bg-[#C4A79A] hover:text-[#FDFCF9] transition-colors duration-500"
          >
            Tüm Kadroyu Gör
          </motion.button>
        </div>

        {/* Image Side (Doctor Portrait) */}
        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto group cursor-pointer"
          >
            <div className="absolute inset-0 bg-[#C4A79A] translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src="/aesthetic/aesthetic_doctor_murat.jpg" 
              alt="Dr. Murat K." 
              className="relative z-10 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-sm"
            />
            
            {/* Info Card Overlay */}
            <div className="absolute -left-6 bottom-12 z-20 bg-[#FDFCF9] p-6 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-serif text-2xl text-[#1C1C1C] mb-1">Dr. Murat K.</h3>
              <p className="font-sans text-[9px] tracking-widest uppercase text-[#C4A79A]">Medikal Direktör & Dermatolog</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
