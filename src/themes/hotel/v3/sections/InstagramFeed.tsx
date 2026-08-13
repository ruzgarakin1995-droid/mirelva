"use client";
import { motion } from "framer-motion";

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-[#F5F5DC] overflow-hidden">
      <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-center mb-12">
        <h2 className="text-xl font-serif font-light tracking-widest uppercase text-zinc-900">@LuxuryHotel</h2>
      </motion.div>
      <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x">
        {[1,2,3,4,5].map((item) => (
          <motion.div key={item} 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="w-64 h-64 shrink-0 bg-zinc-200 snap-center">
            <img src={`https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop&sig=${item}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Instagram" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};