"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="h-64 bg-cover bg-center col-span-2 grayscale hover:grayscale-0 transition-all" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop')" }} />
             <div className="h-48 bg-zinc-900 border border-white/10 p-6 flex flex-col justify-end">
                <h4 className="font-bold uppercase tracking-widest text-cyan-400">Toparlanma</h4>
             </div>
             <div className="h-48 bg-zinc-900 border border-white/10 p-6 flex flex-col justify-end">
                <h4 className="font-bold uppercase tracking-widest text-fuchsia-500">Kardiyo</h4>
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-fuchsia-500 font-bold tracking-[0.2em] uppercase mb-4">Alanımız</h3>
            <h2 className="text-5xl font-black tracking-tighter mb-8">DÜNYA STANDARTLARINDA<br />TESİSLER</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Özenle tasarlanmış 2.000 metrekarelik devasa bir alan. Ortam aydınlatmasından hava temizleme sistemine kadar her detay, performansınızı en üst düzeye çıkarmak için tasarlandı.
            </p>
            <button className="text-cyan-400 uppercase tracking-widest font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
              Sanal Tura Katıl <span className="text-xl">â†’</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

