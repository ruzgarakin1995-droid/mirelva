"use client";
import React from "react";
import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { value: "25+", label: "Yıllık Tecrübe" },
    { value: "5000+", label: "Çözülen Dosya" },
    { value: "98%", label: "Müvekkil Memnuniyeti" },
    { value: "15+", label: "Uzman Avukat" }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">{stat.value}</div>
              <div className="text-white/80 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
