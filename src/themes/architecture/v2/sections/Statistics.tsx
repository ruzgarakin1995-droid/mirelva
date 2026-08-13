"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Yıllık Deneyim" },
  { value: "180", label: "Tamamlanan Proje" },
  { value: "42", label: "Tasarım Ödülü" },
  { value: "12", label: "Farklı Ülke" },
];

const Statistics = () => {
  return (
    <section className="py-24 bg-[#FDFBF7] border-y border-black/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-black/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center px-4"
            >
              <span className="text-5xl md:text-6xl font-light text-zinc-900 mb-4">{stat.value}</span>
              <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
