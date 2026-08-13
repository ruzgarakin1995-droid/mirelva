"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Dining() {
  return (
    <section id="dining" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Gastronomi</div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)]">Gurme Lezzetler</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[500px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" 
              alt="Fine Dining" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-serif mb-3">L'Aura Restaurant</h3>
              <p className="text-white/80 font-light mb-6">Akdeniz mutfağının modern yorumları, ödüllü şarap menüsü ile.</p>
              <button className="text-xs font-bold tracking-widest uppercase border-b border-white/50 pb-1 self-start hover:border-white transition-colors">Menüyü İncele</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative h-[500px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" 
              alt="Lobby Bar" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-serif mb-3">The Velvet Lounge</h3>
              <p className="text-white/80 font-light mb-6">İmza kokteyller ve canlı caz müziği eşliğinde akşamüstü keyfi.</p>
              <button className="text-xs font-bold tracking-widest uppercase border-b border-white/50 pb-1 self-start hover:border-white transition-colors">Detaylar</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

