"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const WeddingsSection = () => {
  return (
    <section className="w-full bg-[#1A1614] text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Kraliyet Düğünleri</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              Masalları <br /> <span className="italic text-[#E8DCC4]">Kıskandıran</span> Anlar
            </h2>
          </ScrollReveal>
          <p className="text-white/70 font-light leading-relaxed mb-10 max-w-lg">
            Sonsuzluğa atılan ilk adımın, sadece size özel, zamanın durduğu bir rüya olmasını sağlıyoruz. Haute Couture gelinlik seçiminden, dünyanın en iyi floral tasarımcılarının dokunuşlarına kadar, hayallerinize lüksü nakşediyoruz.
          </p>
          <button className="self-start text-sm uppercase tracking-[0.2em] border-b border-[#C19A6B] pb-2 text-[#C19A6B] hover:text-white hover:border-white transition-colors duration-300">
            Düğün Hizmetleri
          </button>
        </div>
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-screen relative">
          <ScrollReveal delay={0.2}>
            <img src="/images/royal_wedding.jpg" alt="Luxury Wedding" className="absolute inset-0 w-full h-full object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WeddingsSection;




