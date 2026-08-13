"use client";
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  { name: 'Standart', price: '99', features: ['Spor Salonu Erişimi', 'Soyunma Odası', 'Standart Uygulama'] },
  { name: 'Premium', price: '149', featured: true, features: ['Spor Salonu Erişimi', 'Tüm Dersler', 'Sauna & Havuz', 'Pro Uygulama Özellikleri'] },
  { name: 'Elit', price: '299', features: ['Tüm Premium Özellikler', 'Ayda 2 PT Seansı', 'Kriyoterapi', 'Beslenme Planı'] },
];

export function Memberships() {
  return (
    <section id="memberships" className="py-32 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4">Elitlere Katıl</h3>
          <h2 className="text-5xl font-black tracking-tighter">ÜYELİKLER</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 border ${plan.featured ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.1)]' : 'border-white/10'} bg-black relative flex flex-col`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  En Popüler
                </div>
              )}
              <h3 className="text-2xl font-black uppercase mb-4 text-center">{plan.name}</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className="text-gray-500">/ay</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300 font-light">
                    <span className="text-cyan-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-bold uppercase tracking-widest transition-colors ${plan.featured ? 'bg-cyan-400 text-black hover:bg-white' : 'border border-white/20 hover:bg-white/10'}`}>
                Planı Seç
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

