"use client";
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "/hotel_hero.jpg",
  "/hotel_room_1.jpg",
  "/hotel_dining.jpg",
  "/hotel_spa.jpg"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Galeri</div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)]">Göz Kamaştıran Anlar</h2>
          </div>
          <button className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--primary)] border-b border-[var(--primary)] pb-1 mt-6 md:mt-0 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
            Tüm Fotoğraflar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group overflow-hidden relative ${idx === 0 || idx === 3 ? 'h-[400px]' : 'h-[300px] mt-0 lg:mt-12'}`}
            >
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

