"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Trainers() {
  return (
    <section id="trainers" className="py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h3 className="text-fuchsia-500 font-bold tracking-[0.2em] uppercase mb-4">Ustalar</h3>
            <h2 className="text-5xl font-black tracking-tighter">UZMAN KOÇLAR</h2>
          </div>
          <p className="max-w-md text-gray-400 font-light">Antrenörlerimiz; sizi inandığınız sınırların ötesine taşımaya adanmış, sektörün deneyimli isimleri, sporcular ve biyomekanik uzmanlarıdır.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-2xl font-black uppercase mb-1">Alex Mercer</h4>
                <p className="text-cyan-400 text-sm font-bold tracking-wider uppercase">Baş Antrenör</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

