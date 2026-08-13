'use client';

import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { label: "Maksimum Güç", value: "1.020 bg" },
  { label: "1/4 Mil", value: "9.23 s" },
  { label: "Maks. Hız", value: "322 km/s" },
  { label: "Menzil (Tahmini)", value: "637 km" },
];

export default function PerformanceSpecs() {
  return (
    <section className="py-24 md:py-32 bg-black text-white px-4 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight mb-8"
          >
            Tavizsiz<br/>Performans.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light max-w-md mb-12"
          >
            Çift motorlu dört çeker sistem, her koşulda benzersiz hızlanma ve yol tutuşu sunar.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {specs.map((spec, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="border-t border-white/20 pt-4"
              >
                <div className="text-3xl md:text-4xl font-medium mb-2">{spec.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full aspect-square rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop" 
            alt="Performance Details" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
