"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Onlarla çalışmak bir aydınlanmaydı. Sadece bir ev tasarlamadılar; ışığı ve mekanı deneyimlememiz için bize yepyeni bir yol sundular.",
    client: "Sarah Jenkins",
    project: "Zenith Evi"
  },
  {
    quote: "Saf minimalizme olan tavizsiz bağlılıkları, markamızın ruhunu kusursuz bir şekilde yansıtan bir genel merkezle sonuçlandı.",
    client: "Marcus Vane",
    project: "Monolit"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-4xl text-center relative">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-16">Müşteri Perspektifleri</p>
        
        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <h3 className="text-2xl md:text-4xl font-light leading-snug mb-8">
                "{testimonials[current].quote}"
              </h3>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">{testimonials[current].client}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{testimonials[current].project}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-12 h-px transition-colors duration-500 ${current === idx ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

