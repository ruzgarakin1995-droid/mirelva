"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Video() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinic Video" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[var(--primary)] pl-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-left text-white">
            <div className="text-2xl font-bold mb-2">Klinik Turu</div>
            <div className="text-white/80">Sanal olarak kliniğimizi ziyaret edin</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


