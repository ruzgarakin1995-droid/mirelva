"use client";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#F5F5DC] text-[#293133]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-sm tracking-widest uppercase mb-12 text-zinc-500">Misafirlerimizden</motion.p>
        <motion.h3 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-2xl md:text-4xl font-serif font-light tracking-wider leading-relaxed italic mb-12">
          "Hayatımın en huzurlu haftasıydı. Mimari ile doğanın bu kadar kusursuz birleştiği başka bir yer görmedim."
        </motion.h3>
        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="tracking-widest uppercase text-sm font-bold">— A. Yıldırım</motion.p>
      </div>
    </section>
  );
};