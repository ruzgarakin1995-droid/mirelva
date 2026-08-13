"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "500+", label: "Premium Araç", suffix: "" },
  { value: "99.8", label: "Müşteri Memnuniyeti", suffix: "%" },
  { value: "15", label: "Yıllık Deneyim", suffix: "+" },
  { value: "24/7", label: "Asistanlık", suffix: "" }
];

export const Metrics = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="flex items-baseline mb-2">
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">{stat.value}</span>
                {stat.suffix && <span className="text-3xl md:text-5xl font-bold text-blue-500 ml-1">{stat.suffix}</span>}
              </div>
              <span className="text-white/50 text-sm md:text-base uppercase tracking-widest font-medium mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
