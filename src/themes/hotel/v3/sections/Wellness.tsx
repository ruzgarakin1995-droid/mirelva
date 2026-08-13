"use client";
import { motion } from "framer-motion";

export const Wellness = () => {
  return (
    <section className="py-24 bg-[#F5F5DC] text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="order-2 md:order-1 aspect-square relative">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" alt="Spa" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="order-1 md:order-2">
          <p className="text-xs tracking-widest uppercase mb-4 text-zinc-500">02. Arınma</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-widest mb-8 uppercase">
            Ruhunuza<br />Dokunuş
          </h2>
          <p className="text-zinc-600 text-lg font-light leading-relaxed mb-8">
            Özel terapiler ve huzur dolu spa atmosferimiz ile kendinizi yeniden doğmuş gibi hissedeceksiniz.
          </p>
          <button className="border-b border-zinc-900 pb-2 tracking-widest uppercase text-sm hover:opacity-70 transition-opacity">
            Spa Menüsü
          </button>
        </motion.div>
      </div>
    </section>
  );
};