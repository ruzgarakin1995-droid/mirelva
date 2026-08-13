"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/50 mb-6 block">Hakkımızda</span>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight max-w-4xl mx-auto leading-tight">
            Sadece bir yaşam alanı değil, <span className="font-serif italic text-[#1a1a1a]/60">bir miras bırakıyoruz.</span>
          </h1>
        </motion.div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 aspect-[4/5] bg-[#eaeaea] overflow-hidden"
          >
            <img src="/images/realestate/brutalist.jpg" alt="AURA Vision" className="w-full h-full object-cover grayscale" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-normal tracking-tight mb-8">Sessiz Lüksün Mimarları</h2>
            <div className="text-lg text-[#1a1a1a]/70 font-medium space-y-6 leading-relaxed">
              <p>
                AURA olarak inanıyoruz ki; gerçek lüks bağırmaz, fısıldar. 2010 yılından bu yana, Türkiye'nin en seçkin lokasyonlarında, mimari zarafeti doğanın dinginliğiyle buluşturuyoruz.
              </p>
              <p>
                Portföyümüzdeki her bir yapı, sadece bir konut değil; zamansız bir sanat eseri, geleceğe bırakılacak bir miras olarak özenle seçilir veya tasarlanır.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-32 border-t border-[#1a1a1a]/10">
          {[
            { title: "Zanaat", desc: "En ince detaya kadar mükemmellik arayışı." },
            { title: "Gizlilik", desc: "Müşterilerimizin mahremiyeti en yüksek önceliğimizdir." },
            { title: "Kürasyon", desc: "Sadece istisnai değere sahip mülkleri portföyümüze katarız." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-serif italic mb-4">{value.title}</h3>
              <p className="text-[#1a1a1a]/60 font-medium leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
