"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  "FERRARI", "PORSCHE", "MCLAREN", "ASTON MARTIN", "LAMBORGHINI", "ROLLS ROYCE"
];

export function Brands() {
  return (
    <section id="brands" className="py-24 bg-zinc-950 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
         <h2 className="text-gray-500 uppercase tracking-[0.3em] text-xs font-semibold">Yetkili Satış Noktaları & İş Ortakları</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-24 px-12"
        >
          {[...brands, ...brands].map((brand, index) => (
            <span key={index} className="text-3xl md:text-5xl font-bold text-white/10 uppercase tracking-tighter hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

