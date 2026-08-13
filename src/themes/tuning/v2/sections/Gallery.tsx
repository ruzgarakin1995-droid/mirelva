"use client";
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1627429188812-70b13d2bb071?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1620882727192-3d712ce19688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611016186353-9af24d5b2bc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const Gallery = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
          <span className="text-red-500">Projelerimiz</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="aspect-square overflow-hidden relative group"
          >
            <img 
              src={src} 
              alt="Build Gallery" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-color z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
