"use client";
import { motion } from "framer-motion";

export const Location = () => {
  return (
    <section className="py-24 bg-zinc-900 text-[#F7E7CE]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest uppercase mb-8">Ulaşım</h2>
          <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8">
            Saklı cennetimize ulaşım, özel transfer seçeneklerimiz ile başlar. Sizi havalimanından lüks araçlarımız veya helikopterimiz ile alıyoruz.
          </p>
          <div className="space-y-4 font-light tracking-wider">
            <p className="border-b border-zinc-700 pb-2">Havalimanı: 45 Dakika</p>
            <p className="border-b border-zinc-700 pb-2">Marina: 15 Dakika</p>
            <p className="border-b border-zinc-700 pb-2">Helipad: Tesis İçi</p>
          </div>
        </motion.div>
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="aspect-square bg-zinc-800 p-8 flex items-center justify-center">
          <p className="text-zinc-500 tracking-widest uppercase text-sm">[Harita Entegrasyonu]</p>
        </motion.div>
      </div>
    </section>
  );
};