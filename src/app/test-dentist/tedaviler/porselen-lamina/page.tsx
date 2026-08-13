"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PorselenLaminaPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-start gap-12"
        >
          <div className="md:w-2/3">
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
              Uzmanlık / Porselen Lamina
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight">
              Kusursuzluğun <br />
              <span className="italic text-[#D4C9C3] font-light">Mimarisi.</span>
            </h1>
          </div>
          <div className="md:w-1/3 pt-4 md:pt-12 border-t md:border-t-0 md:border-l border-[#1A1A1A]/10 md:pl-12">
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed text-lg">
              0.3 milimetre inceliğindeki estetik mucizesi. Dişlerinize zarar vermeden, tamamen size özel bir gülüş heykeltıraşlığı.
            </p>
          </div>
        </motion.div>

        {/* Big Visual (Using After image as proxy) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full h-[60vh] md:h-[80vh] relative mb-32 overflow-hidden"
        >
          <img 
            src="/lumina_after.jpg" 
            alt="Porselen Lamina"
            className="w-full h-full object-cover filter contrast-125"
          />
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="text-3xl font-serif mb-8 text-[#1A1A1A]">Ultra İnce, <span className="italic text-[#D4C9C3] font-light">Ultra Doğal</span></h2>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed mb-6">
              Lumina Dental'de uyguladığımız porselen laminalar, doğada bulunan gerçek mine yapısının ışık geçirgenliğini (translucency) birebir taklit eder. Işık, kaplamanın üzerinden sekmez; içinden geçer ve alt katmanlarda kırılarak tamamen doğal bir ışıltı yaratır.
            </p>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed">
              Hazırlık aşamasında diş dokusuna minimum müdahale edilir. Birçok vakada anesteziye bile gerek kalmadan, sadece kontakt lens inceliğinde porselen yapraklar yüzeye özenle işlenir.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-l border-[#1A1A1A]/10 pl-8 md:pl-16">
            <div>
              <h4 className="text-4xl font-serif text-[#1A1A1A] mb-2">0.3<span className="text-lg">mm</span></h4>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/40">Maksimum İncelik</p>
            </div>
            <div>
              <h4 className="text-4xl font-serif text-[#1A1A1A] mb-2">100<span className="text-lg">%</span></h4>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/40">Doğal Işıltı</p>
            </div>
            <div>
              <h4 className="text-4xl font-serif text-[#1A1A1A] mb-2">2<span className="text-lg"></span></h4>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/40">Seansta Sonuç</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
