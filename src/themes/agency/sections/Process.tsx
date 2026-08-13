"use client";
import React from 'react';

const steps = [
  { num: '01', title: 'Keşif & Strateji', desc: 'Markanızın hedeflerini analiz ediyor, pazar araştırması ile sağlam bir temel atıyoruz.' },
  { num: '02', title: 'Konsept & Tasarım', desc: 'Kullanıcı deneyimini merkeze alan, estetik ve işlevsel arayüz tasarımları oluşturuyoruz.' },
  { num: '03', title: 'Geliştirme', desc: 'En son teknolojilerle piksel kusursuzluğunda, yüksek performanslı kodlama yapıyoruz.' },
  { num: '04', title: 'Test & Canlıya Alma', desc: 'Kapsamlı testlerden sonra projenizi sorunsuz bir şekilde kullanıcılarla buluşturuyoruz.' },
];

export const Process = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-16 md:mb-24">
          <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Çalışma Modelimiz</span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Mükemmelliğe Giden <br />
            <span className="text-neutral-500">4 Adımlı Süreç.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col group">
              <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-3xl font-black text-white/30 group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all duration-500 mb-8 mx-auto lg:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">{step.title}</h3>
              <p className="text-neutral-400 text-center lg:text-left text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};



