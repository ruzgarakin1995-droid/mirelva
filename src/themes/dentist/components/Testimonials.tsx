"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Hayatım boyunca diş hekimine gitmekten çekindim. Dişmekan sadece gülüşümü değil, bu korkumu da tamamen değiştirdi. Sanki bir spadaydım.",
    name: "Melis K.",
    treatment: "Porselen Lamina"
  },
  {
    quote: "İşindeki titizlikleri ve detaylara verdikleri önem muazzam. Yeni gülüşüm o kadar doğal ki, kimse estetik olduğunu anlamıyor.",
    name: "Kaan D.",
    treatment: "Gülüş Tasarımı"
  },
  {
    quote: "Şeffaf plak tedavim boyunca gösterdikleri profesyonellik harikaydı. İlk günden son güne kadar kendimi çok özel hissettim.",
    name: "Zeynep T.",
    treatment: "Invisalign"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
           <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4C9C3] mb-4 block">
             Hasta Deneyimleri
           </span>
           <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
             Değişen Hayatlar
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testi, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col bg-white p-12 shadow-sm border border-[#1A1A1A]/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <div className="text-[#D4C9C3] text-6xl font-serif leading-none mb-6">"</div>
              <p className="text-[#1A1A1A]/70 font-sans font-light leading-relaxed mb-12 flex-1 italic">
                {testi.quote}
              </p>
              
              <div>
                <h4 className="text-lg font-serif text-[#1A1A1A] mb-1">{testi.name}</h4>
                <p className="text-xs font-sans tracking-widest text-[#D4C9C3] uppercase">{testi.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
