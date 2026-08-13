"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Amenities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Ayrıcalıklar</div>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--primary)] mb-6">Her Detay Sizin İçin</h2>
          <p className="text-[var(--muted)] font-light leading-relaxed">
            Konaklamanız boyunca ihtiyaç duyabileceğiniz tüm lüks olanakları en ince ayrıntısına kadar düşündük.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {["Yüksek Hızlı Wi-Fi", "Vale Otopark", "Fitness Merkezi", "Kapalı Havuz", "İş Merkezi", "Konsiyerj"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[var(--accent)] text-xl">✓</span>
              <span className="text-[var(--primary)] font-medium text-sm md:text-base">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

