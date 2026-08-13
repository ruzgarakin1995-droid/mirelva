"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const CorporateSection = () => {
  return (
    <section className="w-full bg-[#FDFBF7] text-[#4A403A] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-screen relative">
          <ScrollReveal delay={0.2}>
            <img src="/images/corporate_gala.jpg" alt="Corporate Event" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <ScrollReveal delay={0.1}>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Kurumsal Seçkinlik</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">
              Markanızın <br /> <span className="italic text-[#8B7355]">Prestij Sahnesi</span>
            </h2>
          </ScrollReveal>
          <p className="text-[#6B5E53] font-light leading-relaxed mb-10 max-w-lg">
            Ödül törenleri, ürün lansmanları ve üst düzey gala geceleri... Kurumsal kimliğinizi, kusursuz ve yenilikçi tasarımlarla birleştirerek, markanızı en üst segmentte temsil eden etkinliklere imza atıyoruz.
          </p>
          <button className="self-start text-sm uppercase tracking-[0.2em] border-b border-[#4A403A] pb-2 hover:text-[#C19A6B] hover:border-[#C19A6B] transition-colors duration-300">
            Kurumsal Dosyamızı İnceleyin
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;




