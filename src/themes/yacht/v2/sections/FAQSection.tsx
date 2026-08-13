"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    { q: "Kiralama süresi en az kaç gündür?", a: "Minimum kiralama süremiz rotaya bağlı olarak 3 ile 7 gün arasında değişmektedir." },
    { q: "Fiyata neler dahildir?", a: "Standart paketlerimizde mürettebat, günlük temizlik ve temel liman masrafları dahildir." },
    { q: "Özel menü talebinde bulunabilir miyiz?", a: "Evet, özel şefimiz seyahat öncesi beslenme tercihlerinize göre size özel bir menü hazırlar." },
    { q: "Hangi rotaları seçebiliriz?", a: "Ege ve Akdeniz'in en seçkin koylarını kapsayan hazır rotalarımız veya tamamen size özel rotalar mümkündür." }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6">Sık Sorulan Sorular</h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto"></div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-sm"
            >
              <h3 className="text-lg font-medium text-blue-900 mb-3 flex items-start gap-3">
                <MessageCircle size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-zinc-500 pl-8 leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}