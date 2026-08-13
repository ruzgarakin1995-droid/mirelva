"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function DestinationsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-cyan-50 text-cyan-700 rounded-full">
              <Compass size={28} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6">{"Detaylar"}</h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light text-blue-800 mb-4">Akdeniz'in İncileri</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Lüks yat kiralama deneyiminde sınırları zorluyoruz. Okyanusun ferahlığını ve
              sessiz lüksü hissedeceğiniz eşsiz bir yolculuğa hazır olun. Her detay sizin
              konforunuz için özel olarak tasarlandı.
            </p>
            <button className="px-8 py-3 bg-white border border-cyan-200 text-cyan-800 rounded-full hover:bg-cyan-50 transition-colors">
              Daha Fazla Bilgi
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-100 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img src="/yacht_hero.jpg" alt="Popüler Rotalar" className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}