"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function AppPromo() {
  return (
    <section className="py-24 bg-cyan-400 text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">CEBİNİZDEKİ KİŞİSEL ANTRENÖR</h2>
            <p className="text-xl font-medium opacity-80 mb-8">Ders rezervasyonları yapmak, makrolarınızı takip etmek ve koçunuzla 7/24 iletişimde kalmak için NexusFit uygulamasını indirin.</p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">App Store</button>
              <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Google Play</button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-64 h-96 bg-black border-8 border-black rounded-3xl overflow-hidden shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500"
          >
            <div className="w-full h-full bg-zinc-900 p-4 flex flex-col">
              <div className="text-cyan-400 font-black text-2xl mb-4 text-center mt-2">NEXUS</div>
              <div className="h-20 bg-zinc-800 rounded-lg mb-4" />
              <div className="flex-1 bg-zinc-800 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

