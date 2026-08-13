"use client";
import React from 'react';
import { motion } from 'framer-motion';

const offers = [
  { title: "Romantik Kaçamak", desc: "Çiftlere özel spa ve şampanya ikramlı konaklama paketi.", tag: "Popüler" },
  { title: "Uzun Dönem Konaklama", desc: "7 gece ve üzeri konaklamalarda %20'ye varan indirimler.", tag: "Özel Teklif" },
  { title: "Erken Rezervasyon", desc: "Yaz tatilinizi şimdiden planlayın, %15 avantajdan yararlanın.", tag: "Sınırlı Süre" }
];

export default function Promotions() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Özel Teklifler</div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)]">Sizin İçin Seçtiklerimiz</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-300 relative group"
            >
              <div className="absolute top-6 right-6 text-xs font-bold tracking-widest uppercase text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1">
                {offer.tag}
              </div>
              <h3 className="text-2xl font-serif mt-8 mb-4 text-[var(--primary)]">{offer.title}</h3>
              <p className="text-[var(--muted)] font-light leading-relaxed mb-8">{offer.desc}</p>
              <button className="text-sm font-bold tracking-widest uppercase text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                İncele <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

