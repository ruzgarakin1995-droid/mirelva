"use client";
import { motion } from "framer-motion";

export const Experiences = () => {
  return (
    <section className="py-24 bg-zinc-900 text-[#F7E7CE]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-4xl md:text-5xl font-serif font-light tracking-widest uppercase">
            Özel<br />Anlar
          </motion.h2>
          <motion.button 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="mt-8 md:mt-0 border-b border-[#F7E7CE] pb-2 tracking-widest uppercase text-sm">
            Tümünü Gör
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="group cursor-pointer">
            <div className="aspect-video overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Experience" />
            </div>
            <h3 className="text-2xl font-serif font-light tracking-widest uppercase mb-2">Gün Batımı Yat Turu</h3>
          </motion.div>
          <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="group cursor-pointer">
            <div className="aspect-video overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Experience" />
            </div>
            <h3 className="text-2xl font-serif font-light tracking-widest uppercase mb-2">Kişisel Tadım Atölyesi</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};