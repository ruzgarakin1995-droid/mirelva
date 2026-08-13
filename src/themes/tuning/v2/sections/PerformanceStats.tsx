"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Flame, Wind, Anchor } from 'lucide-react';

const stats = [
  { label: "Maksimum Güç", value: "1,200+", unit: "HP", icon: <Flame className="w-8 h-8" /> },
  { label: "Maksimum Hız", value: "345", unit: "KM/H", icon: <Gauge className="w-8 h-8" /> },
  { label: "Turbo Basıncı", value: "32", unit: "PSI", icon: <Wind className="w-8 h-8" /> },
  { label: "Maksimum Tork", value: "950", unit: "NM", icon: <Anchor className="w-8 h-8" /> },
];

const PerformanceStats = () => {
  return (
    <section className="py-20 bg-neutral-900 relative border-y border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.05)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-red-500 mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all">
                {stat.icon}
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-6xl font-black italic tracking-tighter">{stat.value}</span>
                <span className="text-xl text-red-500 font-bold">{stat.unit}</span>
              </div>
              <span className="text-sm uppercase tracking-widest text-neutral-400 font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
