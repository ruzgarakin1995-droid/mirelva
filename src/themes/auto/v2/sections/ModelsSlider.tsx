'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const models = [
  {
    name: "Taycan",
    image: "https://images.unsplash.com/photo-1503376712344-79339ab346bd?q=80&w=2000&auto=format&fit=crop",
    specs: { menzil: "482 km", hızlanma: "2.6s", maksimum: "260 km/s" }
  },
  {
    name: "911 GT3",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
    specs: { güç: "502 bg", hızlanma: "3.2s", maksimum: "317 km/s" }
  },
  {
    name: "Panamera",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2000&auto=format&fit=crop",
    specs: { güç: "620 bg", hızlanma: "2.9s", maksimum: "315 km/s" }
  }
];

export default function ModelsSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % models.length);
  const prev = () => setCurrent((c) => (c - 1 + models.length) % models.length);

  return (
    <section className="relative h-[80vh] bg-black overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img src={models[current].image} alt={models[current].name} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-4 md:px-24 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="max-w-xl">
          <motion.h2 
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(3rem,6vw,5rem)] font-light text-white mb-8"
          >
            {models[current].name}
          </motion.h2>
          
          <div className="flex gap-12">
            {Object.entries(models[current].specs).map(([key, value], i) => (
              <motion.div 
                key={`${key}-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-medium text-white">{value}</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">{key}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-12 md:mt-0">
          <button onClick={prev} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
