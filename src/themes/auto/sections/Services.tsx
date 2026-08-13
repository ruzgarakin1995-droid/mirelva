"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Wrench, Clock, Award } from "lucide-react";

const services = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Güvenli Depolama",
    description: "Yatırımınızı kusursuz tutmak için iklimlendirmeli, yüksek güvenlikli tesisler.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Özel Bakım",
    description: "Egzotik araçlar için gelişmiş arıza tespit cihazları kullanan, fabrika eğitimli teknisyenler.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "7/24 Danışmanlık",
    description: "Dünya çapında 7/24 destek, teslimat ve ulaşım hizmetleri.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Doğrulama",
    description: "Koleksiyonumuzdaki her araç için titiz inceleme ve sertifikasyon süreci.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gray-500" />
            <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Satışın Ötesinde</span>
            <div className="w-8 h-[1px] bg-gray-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Premium Hizmetler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors group"
            >
              <div className="text-gray-500 group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

