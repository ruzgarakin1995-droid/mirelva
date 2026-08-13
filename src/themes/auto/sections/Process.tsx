"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Danışmanlık", desc: "İsteklerinizi ve gereksinimlerinizi tam olarak anlamak için özel bir görüşme." },
  { num: "02", title: "Tedarik", desc: "Mükemmel aracı bulmak için küresel ağımızı kullanıyoruz." },
  { num: "03", title: "Satın Alma", desc: "Tüm lojistik, doğrulama ve evrak işlerini büyük bir gizlilikle yönetiyoruz." },
  { num: "04", title: "Teslimat", desc: "Dünyanın dilediğiniz noktasında kusursuz ve özenli teslimat." }
];

export function Process() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 border-b border-white/10 pb-12">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gray-500" />
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Nasıl Çalışıyoruz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Satın Alma Süreci</h2>
          </div>
          <div className="md:w-1/2 flex items-end">
            <p className="text-gray-400 text-lg font-light">İlk tokalaşmadan anahtarların teslimine kadar kusursuz, gizlilik odaklı ve tamamen kişiselleştirilmiş bir yolculuk.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-white/10" />
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="text-5xl font-bold text-gray-800 mb-6 tracking-tighter">{step.num}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

