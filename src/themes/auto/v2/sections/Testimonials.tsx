'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { text: "Hızlanması tek kelimeyle akıllara durgunluk verici. Bir otomobilin yapabileceklerini yeniden tanımlıyor.", author: "MotorTrend" },
  { text: "Mühendislik ve tasarımın başyapıtı. Elektrikli araçlar için yeni referans noktası.", author: "TopGear" },
  { text: "Kusursuz minimalist iç mekan, saf ve eşsiz bir güçle buluşuyor.", author: "Car & Driver" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900 text-white px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Dünya çapında övgü topladı.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="flex gap-1 text-white">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl font-light italic leading-relaxed text-gray-300">"{review.text}"</p>
              <p className="text-sm uppercase tracking-widest font-medium">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
