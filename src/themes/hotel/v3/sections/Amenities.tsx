"use client";
import { motion } from "framer-motion";

export const Amenities = () => {
  const items = ["Özel Plaj", "Sonsuzluk Havuzu", "Helikopter Pisti", "24/7 Butler", "Kişisel Şef", "Şarap Mahzeni"];
  return (
    <section className="py-24 bg-[#F7E7CE] text-[#013220]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-3xl md:text-5xl font-serif font-light tracking-widest uppercase text-center mb-16">
          Ayrıcalıklar
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 text-center">
          {items.map((item, idx) => (
            <motion.div key={idx} 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
>
              <div className="w-px h-12 bg-[#013220] opacity-30 mx-auto mb-6"></div>
              <h3 className="text-lg tracking-widest uppercase font-light">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};