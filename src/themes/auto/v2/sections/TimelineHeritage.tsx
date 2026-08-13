'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: "1931", title: "Başlangıç", desc: "Mühendislik mükemmelliği üzerine inşa edilen bir mirasın temelleri." },
  { year: "1963", title: "Bir İkonun Doğuşu", desc: "Otomotiv dünyasını sonsuza dek değiştiren silüet." },
  { year: "1986", title: "Süper Otomobil Dönemi", desc: "Bir yol otomobilinin sınırlarını zorlamak." },
  { year: "2019", title: "Elektrikli Gelecek", desc: "Ruhundan ödün vermeden yeni bir çağı kucaklamak." },
];

export default function TimelineHeritage() {
  return (
    <section className="py-24 bg-black text-white px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light text-center mb-24 tracking-tight"
        >
          Onlarca Yıllık İnovasyon
        </motion.h2>

        <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:-translate-x-1/2">
          {events.map((event, index) => (
            <div key={index} className="mb-16 relative pl-8 md:pl-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-0 w-[10px] h-[10px] rounded-full bg-white"
              />
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8 md:text-right'}`}
              >
                <div className="text-xl font-bold text-gray-500 mb-2">{event.year}</div>
                <h3 className="text-2xl font-medium mb-3">{event.title}</h3>
                <p className="text-gray-400 font-light">{event.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
