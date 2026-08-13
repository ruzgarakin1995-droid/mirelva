"use client";
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-[#013220] text-[#F7E7CE]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-3xl font-serif font-light tracking-widest uppercase mb-6">Özel Davetler</motion.h2>
        <motion.p 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="font-light mb-10 opacity-80">En yeni deneyimlerden ve ayrıcalıklardan haberdar olmak için bültenimize katılın.</motion.p>
        <motion.form 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="flex flex-col md:flex-row gap-4 justify-center">
          <input type="email" placeholder="E-Posta Adresiniz" className="bg-transparent border-b border-[#F7E7CE] px-4 py-2 outline-none w-full md:w-64 placeholder:text-[#F7E7CE] placeholder:opacity-50" />
          <button type="button" className="px-8 py-2 bg-[#F7E7CE] text-[#013220] tracking-widest uppercase text-sm font-bold">Kayıt Ol</button>
        </motion.form>
      </div>
    </section>
  );
};