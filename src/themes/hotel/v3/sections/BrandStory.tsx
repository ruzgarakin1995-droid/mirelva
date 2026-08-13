"use client";
import { motion } from "framer-motion";

export const BrandStory = () => {
  return (
    <section className="py-32 bg-[#F5F5DC] text-zinc-900 flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <motion.h2 
          
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}

          className="text-3xl md:text-5xl font-serif font-light tracking-widest mb-12 uppercase leading-relaxed"
        >
          Lüks, detayların sessizliğinde saklıdır. Biz sadece bir otel değil, bir sığınak tasarladık.
        </motion.h2>
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="w-px h-24 bg-zinc-400 mx-auto"></motion.div>
      </div>
    </section>
  );
};