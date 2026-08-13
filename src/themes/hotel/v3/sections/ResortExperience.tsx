"use client";
import { motion } from "framer-motion";

export const ResortExperience = () => {
  return (
    <section className="py-24 bg-zinc-900 text-[#F7E7CE]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
          <p className="text-xs tracking-widest uppercase mb-4 text-zinc-400">01. Deneyim</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-widest mb-8 uppercase">
            Doğayla<br />Bütünleşik
          </h2>
          <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8">
            Yeşilin en derin tonları ve mimarinin zarafeti bir araya geliyor. Burada her adım, ruhunuzu tazeleyen bir yolculuk.
          </p>
          <button className="border-b border-[#F7E7CE] pb-2 tracking-widest uppercase text-sm hover:opacity-70 transition-opacity">
            Keşfet
          </button>
        </motion.div>
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="aspect-[3/4] relative">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt="Resort" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};