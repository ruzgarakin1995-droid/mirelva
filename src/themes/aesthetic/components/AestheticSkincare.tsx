"use client";

import { motion } from 'framer-motion';

export function AestheticSkincare() {
  return (
    <section className="py-16 md:py-32 bg-[#FDFCF9] text-[#1C1C1C] px-6 lg:px-8 border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Laboratuvardan Kliniğe</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8"
          >
            Medikal <br/>
            <span className="italic font-light text-[#C4A79A]">Kozmetik.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans font-light text-[#1C1C1C]/70 leading-relaxed max-w-md mb-10 text-sm md:text-base"
          >
            Tedavi protokollerimizi, saf etken maddelerden oluşan medikal (cosmeceutical) ürünlerle destekliyoruz. Cilt sağlığınızı kliniğin dışına taşıyan, sadece uzman hekimler tarafından önerilebilen premium serimizle tanışın.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6 pt-8 border-t border-[#1C1C1C]/10"
          >
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-[#C4A79A]">01</span>
              <p className="font-sans font-medium text-sm text-[#1C1C1C]">Klinik Seviye Saf Hyalüronik Asit</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-[#C4A79A]">02</span>
              <p className="font-sans font-medium text-sm text-[#1C1C1C]">Leke Karşıtı Antioksidan Serumlar</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl text-[#C4A79A]">03</span>
              <p className="font-sans font-medium text-sm text-[#1C1C1C]">SPF 50+ Medikal Koruyucular</p>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-md mx-auto"
          >
            {/* Minimalist Backdrop */}
            <div className="absolute inset-0 bg-[#C4A79A]/10 rounded-full blur-3xl transform -translate-y-8 translate-x-8"></div>
            
            <img 
              src="/aesthetic/aesthetic_skincare.jpg" 
              alt="Medical Skincare" 
              className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl"
            />
            
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#1C1C1C] rounded-full flex items-center justify-center z-20 shadow-xl">
              <span className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9] text-center px-4 leading-relaxed">
                Reçeteli<br/>Satış
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
