"use client";
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Prof. Dr. Ahmet Yılmaz', role: 'Kardiyoloji Uzmanı', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Doç. Dr. Ayşe Demir', role: 'Nöroloji Uzmanı', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
  { name: 'Op. Dr. Mehmet Can', role: 'Estetik Cerrahi', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
  { name: 'Uzm. Dr. Zeynep Kaya', role: 'Çocuk Sağlığı', img: 'https://images.unsplash.com/photo-1594824432258-293e83957eb0?q=80&w=600&auto=format&fit=crop' },
];

export default function Team() {
  return (
    <section id="doktorlar" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Tıbbi Kadromuz</div>
          <h2 className="text-4xl font-bold mb-6 text-[var(--primary)]">Alanında Öncü Hekimler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl mb-6 relative aspect-[3/4]">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="w-full py-3 bg-white text-[var(--primary)] font-bold rounded-xl text-sm">Randevu Al</button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] text-center">{t.name}</h3>
              <div className="text-[var(--accent)] text-center font-medium">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


