"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Giriş ve çıkış saatleri nedir?", a: "Giriş saatimiz 14:00, çıkış saatimiz ise 12:00'dir. Müsaitlik durumuna göre erken giriş veya geç çıkış taleplerinizi değerlendirebiliriz." },
  { q: "Otopark hizmetiniz var mı?", a: "Evet, tüm misafirlerimiz için ücretsiz vale ve kapalı otopark hizmetimiz bulunmaktadır." },
  { q: "Evcil hayvan kabul ediyor musunuz?", a: "Maalesef otelimize evcil hayvan kabul edemiyoruz, ancak rehber köpekler için istisnamız mevcuttur." },
  { q: "Spa ve fitness merkezi kullanımı ücretli mi?", a: "Tüm konaklayan misafirlerimiz için kapalı havuz, fitness merkezi, hamam ve saunamızın kullanımı ücretsizdir. Masaj ve özel terapiler ek ücrete tabidir." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">SSS</div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)]">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[var(--border)] pb-4">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg font-serif transition-colors ${openIdx === idx ? 'text-[var(--accent)]' : 'text-[var(--primary)] group-hover:text-[var(--accent)]'}`}>
                  {faq.q}
                </span>
                <span className={`text-[var(--accent)] text-2xl transform transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[var(--muted)] font-light pb-6 pt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

