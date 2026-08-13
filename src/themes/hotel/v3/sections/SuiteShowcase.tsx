"use client";
import { motion } from "framer-motion";

export const SuiteShowcase = () => {
  return (
    <section className="py-24 bg-[#F5F5DC] text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest uppercase">İmza Süitler</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div key={item} 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden relative mb-6">
                <img src={`https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=600&auto=format&fit=crop&sig=${item}`} alt="Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <h3 className="text-xl font-serif font-light tracking-widest uppercase mb-2">Premium Süit {item}</h3>
              <p className="text-zinc-500 font-light">Geniş ufuklar, sonsuz konfor.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};