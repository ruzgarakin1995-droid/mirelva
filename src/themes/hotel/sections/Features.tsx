"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: "✨", title: "Kişiselleştirilmiş Hizmet", desc: "Misafir ilişkileri ekibimiz konaklamanızı size özel tasarlar." },
  { icon: "✦", title: "Michelin Yıldızlı Şefler", desc: "Dünyaca ünlü şeflerimizin elinden eşsiz lezzetler." },
  { icon: "✨", title: "Özel Transfer", desc: "Havalimanından otelimize lüks araçlarla kesintisiz ulaşım." },
  { icon: "✦", title: "7/24 Concierge", desc: "Şehirdeki tüm rezervasyonlarınız için her an yanınızdayız." },
];

export default function Features() {
  return (
    <section className="py-24 bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-b border-white/10 py-16">
        {features.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="text-center px-4"
          >
            <div className="text-4xl text-[var(--accent)] mb-6">{item.icon}</div>
            <h3 className="text-xl font-serif mb-4">{item.title}</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
