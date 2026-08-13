"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">İleri Teknoloji</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)] leading-tight">
            Geleceğin Tıbbı <br/> Bugün Burada
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
            Hastalıkların erken teşhisi ve tedavisinde en güncel teknolojileri kullanıyoruz. 3 Tesla MR, Tomosentezli Dijital Mamografi ve Robotik Cerrahi sistemlerimizle, hata payını sıfıra indiriyor, iyileşme sürecini hızlandırıyoruz.
          </p>
          <ul className="space-y-4">
            {['Da Vinci Robotik Cerrahi Sistemi', '3 Tesla MR & 256 Kesit Tomografi', 'Akıllı Ameliyathaneler', 'Kişiselleştirilmiş Genetik Tarama'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-[var(--primary)] font-semibold">
                <div className="w-6 h-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full" alt="Tech 1" />
          <img src="https://images.unsplash.com/photo-1582719478250-c894099f72b2?q=80&w=800&auto=format&fit=crop" className="rounded-3xl h-64 object-cover w-full mt-8" alt="Tech 2" />
        </motion.div>
      </div>
    </section>
  );
}


