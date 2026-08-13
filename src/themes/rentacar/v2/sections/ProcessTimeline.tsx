"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarCheck, Car, Key } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Araç Seçimi",
    desc: "Geniş premium filomuzdan tarzınıza ve ihtiyacınıza en uygun modeli belirleyin."
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Rezervasyon",
    desc: "Tarih ve lokasyon bilgilerinizi saniyeler içinde güvenli altyapımızla onaylayın."
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Hazırlık",
    desc: "Aracınız detaylı sterilizasyon ve 102 nokta kontrolünden geçirilerek hazırlanır."
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Teslimat",
    desc: "Dilediğiniz lokasyonda, protokol kurallarına uygun VIP teslimat gerçekleştirilir."
  }
];

export const ProcessTimeline = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">Zahmetsiz Süreç</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">Zamanınızın değerini biliyoruz. 4 basit adımla yolculuğunuza başlayın.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
