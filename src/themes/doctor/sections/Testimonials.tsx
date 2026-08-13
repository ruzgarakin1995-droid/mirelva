"use client";
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { text: "Yıllardır süren kalp ritim bozukluğum Prof. Ahmet Bey'in uyguladığı ablasyon tedavisiyle tamamen geçti. Klinikteki ilgi ve modern ekipmanlar gerçekten güven verici.", author: "Mustafa K.", type: "Kardiyoloji Hastası" },
  { text: "Kızımın tedavisi sürecinde pediatri ekibinin yaklaşımı harikaydı. Doktor fobisi olan çocuğum artık kontrole giderken gülümsüyor.", author: "Elif S.", type: "Hasta Yakını" },
  { text: "Estetik operasyon öncesi çok endişeliydim ama Mehmet Bey tüm süreci o kadar detaylı ve şeffaf anlattı ki içim çok rahat girdi. Sonuçtan son derece memnunum.", author: "Ceren T.", type: "Estetik Danışanı" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--primary)] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Hasta Yorumları</div>
          <h2 className="text-4xl font-bold">Bizim İçin Ne Dediler?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
            >
              <div className="text-[var(--accent)] mb-6">
                {"â˜…".repeat(5)}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{r.text}"</p>
              <div>
                <div className="font-bold text-white text-lg">{r.author}</div>
                <div className="text-sm text-gray-400">{r.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


