'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function InteriorView() {
  return (
    <section className="relative h-screen bg-zinc-900 overflow-hidden group">
      <motion.img 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop"
        alt="Car Interior"
        className="w-full h-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white mb-6"
          >
            Sürücü odaklı tasarım.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light"
          >
            Mutlak odaklanma için tasarlanmış bir kabin. Premium materyaller, minimalist estetik ve ihtiyaçlarınızı önceden sezen teknoloji.
          </motion.p>
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-8 md:mt-0"
        >
           <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-sm uppercase tracking-widest text-sm">
             İç Mekanı Keşfet
           </button>
        </motion.div>
      </div>
    </section>
  );
}
