"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Bağlamsal Analiz', desc: 'Her proje, sahaya, tarihe ve kültürel bağlama derinlemesine bir dalış ile başlar.' },
  { id: '02', title: 'Kavramsal Doğuş', desc: 'Mimarinin mekansal ve biçimsel mantığını belirleyen temel bir hikaye geliştirmek.' },
  { id: '03', title: 'Malzeme Keşfi', desc: 'Zamanla zarafetle yaşlanacak ham ve otantik malzemelerden oluşan bir palet tasarlamak.' },
  { id: '04', title: 'Uygulama', desc: 'Kusursuzluğu sağlamak adına inşaat aşamasında titiz bir denetim süreci yürütmek.' }
];

export default function Process() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 md:px-12" id="process">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <div className="sticky top-32">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/50 mb-4">Metodoloji</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight mb-8">
                Sürecimizin <br/>Anatomisi.
              </h2>
              <p className="text-white/60 max-w-md text-sm leading-relaxed">
                Her bir projeye benzersiz bir meydan okuma olarak yaklaşıyoruz. Metodolojimiz doğrusal olmayıp, projenin temel konseptine sıkı sıkıya bağlı kalırken sürekli keşfe olanak tanır.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-[-4rem] w-px bg-white/10" />
                
                {/* Dot */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white" />

                <span className="block text-sm font-bold text-white/30 mb-4">{step.id}</span>
                <h3 className="text-2xl font-medium tracking-tight mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

