"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Spa() {
  return (
    <section id="spa" className="py-24 md:py-40 bg-[#141517] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative h-[600px] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop" 
            alt="Hotel Spa" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Wellness & Spa</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Ruhunuzu ve Bedeninizi Arındırın
          </h2>
          <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed mb-12">
            <p>
              Asya ritüelleri ve modern terapilerin kusursuz uyumuyla tasarlanan Serenity Spa, size zamanın durduğu bir vaha sunuyor. Isıtmalı kapalı havuzumuzda rahatlayın, kişiye özel masajlarla yenilenin.
            </p>
            <ul className="space-y-3 font-medium text-white pt-4">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> Geleneksel Türk Hamamı
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> Termal Jakuzi ve Buhar Odası
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> Aromaterapi ve Bali Masajları
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" /> Özel Tasarım Dinlenme Alanları
              </li>
            </ul>
          </div>
          <button className="px-8 py-4 border border-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Spa Menüsünü İncele
          </button>
        </motion.div>
      </div>
    </section>
  );
}

