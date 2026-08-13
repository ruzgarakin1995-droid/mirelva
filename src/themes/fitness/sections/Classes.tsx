"use client";
import React from 'react';
import { motion } from 'framer-motion';

const classes = [
  { name: 'Neon HIIT', time: '45 DK', intensity: 'Yüksek', color: 'from-cyan-400 to-blue-600' },
  { name: 'Power Flow Yoga', time: '60 DK', intensity: 'Orta', color: 'from-fuchsia-500 to-pink-600' },
  { name: 'Titan Gücü', time: '50 DK', intensity: 'Ekstrem', color: 'from-red-500 to-orange-600' },
];

export function Classes() {
  return (
    <section id="classes" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4">Programlar</h3>
          <h2 className="text-5xl font-black tracking-tighter">ELİT DERSLER</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden h-96 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-end cursor-pointer bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold tracking-widest text-cyan-400 border border-cyan-400 px-2 py-1">{cls.time}</span>
                  <span className="text-xs font-bold tracking-widest text-white/50 uppercase">{cls.intensity}</span>
                </div>
                <h3 className="text-3xl font-black uppercase mb-4">{cls.name}</h3>
                <button className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Hemen Yerini Ayırt <span className="text-cyan-400">â†’</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

