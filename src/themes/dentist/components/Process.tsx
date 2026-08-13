"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Konsültasyon",
    desc: "Kişisel estetik beklentilerinizi ve diş yapınızı analiz ederek size en uygun sanatsal gülüş profilini belirliyoruz."
  },
  {
    num: "02",
    title: "3D Dijital Tarama",
    desc: "Ölçü malzemeleri olmadan, son teknoloji dijital tarayıcılarla ağız içi yapınızı milimetrik hassasiyetle kaydediyoruz."
  },
  {
    num: "03",
    title: "Kusursuz Uygulama",
    desc: "Uzman seramik sanatçılarımızın hazırladığı ultra-ince porselen laminalarınızı, sıfır acı prensibiyle mükemmel şekilde uyguluyoruz."
  }
];

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between mb-24 gap-8">
          <div className="md:w-1/3">
             <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4C9C3] mb-4 block">
               Gülüş Tasarım Süreci
             </span>
             <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
               Sanatın <br/> Aşamaları
             </h2>
          </div>
          <div className="md:w-1/2 flex items-end">
            <p className="text-[#1A1A1A]/60 font-sans font-light leading-relaxed text-lg">
              Sadece üç adımda, kendinize olan güveninizi tamamen yenileyecek bir dönüşüm. Her aşamada konforunuz ve estetik beklentileriniz önceliğimizdir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting Line */}
           <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#1A1A1A]/10" />

           {steps.map((step, idx) => (
             <motion.div 
               key={idx}
               className="relative flex flex-col pt-4"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.8, delay: idx * 0.2 }}
             >
                <div className="w-14 h-14 rounded-full bg-[#FAFAFA] border border-[#1A1A1A]/10 flex items-center justify-center text-[#D4C9C3] font-serif italic text-xl mb-8 relative z-10 mx-auto md:mx-0">
                  {step.num}
                </div>
                
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 text-center md:text-left">
                  {step.title}
                </h3>
                
                <p className="text-[#1A1A1A]/60 font-sans font-light leading-relaxed text-center md:text-left">
                  {step.desc}
                </p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
