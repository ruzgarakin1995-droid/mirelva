"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Uzman Kadro',
    desc: 'Alanında deneyimli, uluslararası sertifikalı profesör ve uzman doktorlar.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )
  },
  {
    title: 'İleri Teknoloji',
    desc: 'Teşhis ve tedavide en güncel medikal ekipmanlar ve akıllı sistemler.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: '7/24 Acil Destek',
    desc: 'Beklenmedik durumlara karşı kesintisiz, hızlı ve etkili acil servis hizmeti.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white relative z-20 -mt-16 mx-6 md:mx-12 rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`${i !== 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}`}
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--surface-alt)] text-[var(--accent)] flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-[var(--muted)] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


