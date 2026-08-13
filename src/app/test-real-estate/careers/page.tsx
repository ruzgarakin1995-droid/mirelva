"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const positions = [
    { title: "Kıdemli Gayrimenkul Danışmanı", location: "Levent, İstanbul", type: "Tam Zamanlı" },
    { title: "Mimari Görselleştirme Uzmanı", location: "Bebek, İstanbul", type: "Tam Zamanlı" },
    { title: "Lüks Portföy Yöneticisi", location: "Bodrum, Muğla", type: "Tam Zamanlı" },
    { title: "Marka İletişim Direktörü", location: "Levent, İstanbul", type: "Tam Zamanlı" }
  ];

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
          >
            Sıradışı <span className="font-serif italic text-[#1a1a1a]/60">Yetenekler</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1a1a1a]/60 font-medium max-w-2xl mx-auto"
          >
            AURA'in ayrıcalıklı dünyasına katılın. Lüks gayrimenkul sektörünün standartlarını bizimle birlikte yeniden tanımlayın.
          </motion.p>
        </div>

        {/* Positions List */}
        <div className="border-t border-[#1a1a1a]/10">
          {positions.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[#1a1a1a]/10 cursor-pointer"
            >
              <div>
                <h3 className="text-3xl font-normal tracking-tight mb-2 group-hover:text-[#1a1a1a]/70 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40">
                  <span>{job.location}</span>
                  <span className="w-1 h-1 bg-[#1a1a1a]/20 rounded-full"></span>
                  <span>{job.type}</span>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transform duration-300">
                <ArrowRight size={24} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-[#1a1a1a]/50 mb-4">
            Açık pozisyonlarımızla ilgilenmiyor ancak ekibimize değer katabileceğinize inanıyorsanız:
          </p>
          <a href="mailto:careers@auraestates.com.tr" className="text-lg font-bold border-b border-[#1a1a1a] pb-1 hover:text-[#1a1a1a]/60 hover:border-[#1a1a1a]/60 transition-all">
            careers@auraestates.com.tr
          </a>
        </div>

      </div>
    </div>
  );
}
