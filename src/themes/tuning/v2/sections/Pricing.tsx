"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Stage 1",
    price: "$599",
    features: ["ECU Yazılımı", "Hız Limiti İptali", "Optimize Yakıt Tüketimi", "Öncesi ve Sonrası Dyno"],
    popular: false
  },
  {
    name: "Stage 2",
    price: "$1,299",
    features: ["Özel ECU Ayarı", "Downpipe Montajı", "Açık Hava Filtresi", "Pops & Bangs (Ops.)"],
    popular: true
  },
  {
    name: "Stage 3+",
    price: "Özel",
    features: ["Büyük Turbo Kurulumu", "Dövme Motor İçi", "Özel Yakıt Sistemi", "Pist Odaklı Kalibrasyon"],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
            Tuning <span className="text-red-500">Paketleri</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative bg-neutral-950 p-8 rounded-xl border ${plan.popular ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'border-neutral-800'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 uppercase text-xs font-bold tracking-widest italic rounded-sm">
                  En Popüler
                </div>
              )}
              <h3 className="text-2xl font-black italic uppercase mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-red-500 mb-6">{plan.price}</div>
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-neutral-300 font-light text-sm">
                    <Check className="w-5 h-5 text-red-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 uppercase italic font-bold tracking-wider transition-colors ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-white'}`}>
                Paketi Seç
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
