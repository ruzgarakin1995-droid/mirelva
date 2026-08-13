"use client";
import { motion } from "framer-motion";

export const Gastronomy = () => {
  return (
    <section className="relative py-32 text-[#F7E7CE] bg-[#013220] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Dining" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-sm tracking-[0.4em] uppercase mb-6 opacity-80">
          Gurme Sanatı
        </motion.p>
        <motion.h2 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-5xl md:text-7xl font-serif font-light tracking-widest uppercase mb-10">
          Tatların<br />Senfonisi
        </motion.h2>
        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="max-w-2xl mx-auto text-lg font-light leading-relaxed mb-12">
          Dünyaca ünlü şeflerimizin hazırladığı eşsiz mönüler ile unutulmaz bir gastronomi deneyimi sizi bekliyor.
        </motion.p>
        <motion.button 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="border border-[#F7E7CE] px-10 py-4 tracking-widest uppercase text-sm hover:bg-[#F7E7CE] hover:text-[#013220] transition-colors duration-500">
          Rezervasyon Yap
        </motion.button>
      </div>
    </section>
  );
};