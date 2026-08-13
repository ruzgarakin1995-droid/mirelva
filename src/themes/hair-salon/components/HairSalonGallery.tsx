"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HairSalonGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#FDFBF7] px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#352F2A]/20"></div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#352F2A]/50">Portfolyo</span>
            <div className="w-8 h-[1px] bg-[#352F2A]/20"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-[#352F2A]"
          >
            İlham <span className="italic text-[#C4A484] font-light">Kaynağımız.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 md:gap-16">
            <div className="relative group overflow-hidden">
              <img src="/hair-salon/hair_model_1.jpg" alt="Gallery" className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#352F2A]/0 group-hover:bg-[#352F2A]/20 transition-colors duration-500"></div>
            </div>
            
            <div className="bg-[#352F2A] text-[#FDFBF7] p-12 flex flex-col justify-center items-center text-center aspect-square">
              <span className="text-4xl font-serif mb-6 italic text-[#C4A484]">"</span>
              <p className="font-sans font-light leading-relaxed mb-6">Her bir saç teli, üzerinde çalışılmayı bekleyen eşsiz bir sanat eseridir.</p>
              <span className="text-[10px] uppercase tracking-widest text-[#FDFBF7]/50">- Céline V.</span>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:gap-16">
            <div className="bg-[#C4A484]/10 p-12 aspect-square flex flex-col justify-center text-center relative">
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#C4A484]/30"></div>
              <h3 className="text-2xl font-serif text-[#352F2A] mb-4">Mükemmel Doku</h3>
              <p className="font-sans font-light text-[#352F2A]/70 text-sm">Doğal yansımalar ve pürüzsüz bitişler için dünyaca ünlü teknikler kullanıyoruz.</p>
            </div>

            <div className="relative group overflow-hidden">
              <img src="/hair-salon/hair_model_2.jpg" alt="Gallery" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#352F2A]/0 group-hover:bg-[#352F2A]/20 transition-colors duration-500"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
