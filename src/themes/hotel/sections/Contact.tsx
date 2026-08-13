"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">İletişim</div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] mb-8">Bize Ulaşın</h2>
            <p className="text-[var(--muted)] font-light leading-relaxed mb-12">
              Sorularınız, rezervasyon talepleriniz veya özel organizasyonlarınız için ekibimiz her zaman yanınızda.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">Adres</div>
                <div className="text-lg font-serif text-[var(--primary)]">Grand Boulevard No:42<br/>Levent, İstanbul</div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">Telefon</div>
                <a href="tel:+902120000000" className="text-lg font-serif text-[var(--primary)] hover:text-[var(--accent)] transition-colors">+90 (212) 000 00 00</a>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">E-Posta</div>
                <a href="mailto:info@lumiereresort.com" className="text-lg font-serif text-[var(--primary)] hover:text-[var(--accent)] transition-colors">info@lumiereresort.com</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-10 shadow-sm border border-[var(--border)]">
              <h3 className="text-2xl font-serif text-[var(--primary)] mb-8">Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full bg-[var(--surface)] border-none px-4 py-3 focus:ring-1 focus:ring-[var(--accent)] outline-none text-[var(--primary)]" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">E-Posta</label>
                  <input type="email" className="w-full bg-[var(--surface)] border-none px-4 py-3 focus:ring-1 focus:ring-[var(--accent)] outline-none text-[var(--primary)]" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-2">Mesajınız</label>
                  <textarea rows={4} className="w-full bg-[var(--surface)] border-none px-4 py-3 focus:ring-1 focus:ring-[var(--accent)] outline-none text-[var(--primary)] resize-none" />
                </div>
                <button type="button" className="w-full bg-[var(--primary)] text-white py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[var(--accent)] transition-colors duration-300">
                  Gönder
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

