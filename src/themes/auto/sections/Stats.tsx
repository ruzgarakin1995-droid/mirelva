"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Satılan Egzotik Araç" },
  { value: "15", label: "Yıllık Mükemmeliyet" },
  { value: "24/7", label: "Danışmanlık Hizmeti" },
  { value: "100%", label: "Müşteri Memnuniyeti" },
];

export function Stats() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

