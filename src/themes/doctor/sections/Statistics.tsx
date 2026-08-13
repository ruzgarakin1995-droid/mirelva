"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '50.000+', label: 'Mutlu Hasta', sub: 'Yıllık ortalama ziyaret' },
  { value: '120+', label: 'Uzman Doktor', sub: 'Alanında öncü hekimler' },
  { value: '45+', label: 'Klinik Bölüm', sub: 'Tam teşekküllü hizmet' },
  { value: '99%', label: 'Başarı Oranı', sub: 'Cerrahi operasyonlarda' },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${i !== 0 ? 'pl-4 md:pl-0' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{s.value}</div>
              <div className="text-lg font-semibold text-[var(--accent)] mb-1">{s.label}</div>
              <div className="text-sm text-gray-400">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


