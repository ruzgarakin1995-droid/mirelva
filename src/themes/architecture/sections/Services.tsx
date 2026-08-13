"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Mimari',
    desc: 'Konsept aşamasından tamamlanmasına kadar, mekansal saflık ve bağlama odaklanan kapsamlı mimari tasarım.'
  },
  {
    num: '02',
    title: 'İç Mimari',
    desc: 'Malzeme seçimi, aydınlatma tasarımı ve özel mobilyalarla iç mekan deneyimini ustalıkla şekillendirmek.'
  },
  {
    num: '03',
    title: 'Master Planlama',
    desc: 'Mevcut dokuya saygı duyarken modern paradigmaları tanıtan büyük ölçekli kentsel müdahaleler.'
  },
  {
    num: '04',
    title: 'Danışmanlık',
    desc: 'Karmaşık projeler için fizibilite, sürdürülebilirlik ve mekansal optimizasyon konularında stratejik yönlendirme.'
  }
];

export default function Services() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12" id="services">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-4">Uzmanlık</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Hizmetlerimiz.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-black/10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group border-b md:border-b-0 md:border-r border-black/10 last:border-0 p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div className="text-sm font-bold opacity-30 mb-12 group-hover:opacity-100 transition-opacity">
                {service.num}
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-6">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

