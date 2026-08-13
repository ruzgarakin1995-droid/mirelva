
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="py-12 bg-white relative z-20 -mt-12">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-2xl bg-white/80 border border-blue-50/50 rounded-3xl shadow-xl shadow-blue-100/40 p-8 flex flex-wrap justify-between items-center gap-8"
        >
          <div className="text-center flex-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
            <p className="text-gray-500 font-medium">Yıllık Tecrübe</p>
          </div>
          <div className="w-px h-16 bg-blue-50 hidden md:block"></div>
          <div className="text-center flex-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">50k+</h3>
            <p className="text-gray-500 font-medium">Mutlu Hasta</p>
          </div>
          <div className="w-px h-16 bg-blue-50 hidden md:block"></div>
          <div className="text-center flex-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">120+</h3>
            <p className="text-gray-500 font-medium">Uzman Doktor</p>
          </div>
          <div className="w-px h-16 bg-blue-50 hidden md:block"></div>
          <div className="text-center flex-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-500 font-medium">Acil Servis</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
