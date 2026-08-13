"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { text: "Lumière Resort'ta geçirdiğimiz hafta sonu tek kelimeyle kusursuzdu. Personelin ilgisi ve odaların konforu muazzam.", author: "Ayşe K.", type: "Çift Konaklaması" },
  { text: "Şehrin merkezinde bu kadar huzurlu bir vaha yaratılmış olması inanılmaz. Spa deneyimi ve yemekler bir harikaydı.", author: "Mehmet Y.", type: "İş Seyahati" },
  { text: "Mimari detaylardan sunulan hizmetin kalitesine kadar her şey premium hissettiriyor. Kesinlikle tekrar geleceğiz.", author: "Elif & Can", type: "Tatil" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Misafir Yorumları</div>
          <h2 className="text-4xl md:text-5xl font-serif">Sizden Gelenler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl text-[var(--accent)] font-serif mb-6">"</div>
              <p className="text-lg font-light text-white/80 leading-relaxed mb-8 italic">
                {test.text}
              </p>
              <div className="text-sm font-bold tracking-widest uppercase">{test.author}</div>
              <div className="text-xs text-[var(--accent)] mt-1">{test.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

