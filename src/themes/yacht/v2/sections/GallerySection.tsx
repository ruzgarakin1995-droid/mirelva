"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GallerySection() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6">Galeri</h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: '/yacht_sea.jpg', col: 'col-span-1 md:col-span-2 lg:col-span-2', h: 'h-[400px]' },
            { src: '/yacht_interior.jpg', col: 'col-span-1', h: 'h-[400px]' },
            { src: '/yacht_hero.jpg', col: 'col-span-1', h: 'h-[300px]' },
            { src: '/yacht_sea.jpg', col: 'col-span-1', h: 'h-[300px]' },
            { src: '/yacht_interior.jpg', col: 'col-span-1 md:col-span-2 lg:col-span-1', h: 'h-[300px]' }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl overflow-hidden shadow-sm ${img.col}`}
            >
              <img src={img.src} alt="Gallery" className={`w-full ${img.h} object-cover hover:scale-105 transition-transform duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}