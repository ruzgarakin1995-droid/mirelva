"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const DecorSection = () => {
  return (
    <section className="w-full bg-[#FDFBF7] text-[#4A403A] py-24 border-t border-[#E8DCC4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ScrollReveal delay={0.2}>
              <div className="aspect-square rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" alt="Event Decor" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-4 border-[#C19A6B] bg-[#E8DCC4] flex items-center justify-center text-center p-6 shadow-2xl">
              <span className="font-serif text-[#4A403A] italic">Sınırsız <br/> Hayal Gücü</span>
            </div>
          </div>
          <div>
            <ScrollReveal delay={0.1}>
              <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">Tasarım & Dekor</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                Mekanı <span className="italic text-[#8B7355]">Sanata</span> Dönüştürüyoruz
              </h2>
            </ScrollReveal>
            <p className="text-[#6B5E53] font-light leading-relaxed mb-8">
              Her detay, büyük resmin kusursuzluğunu yaratır. Çiçek tasarımlarından masa örtülerinin dokusuna, aydınlatma kurgusundan kişiye özel peçeteliklere kadar her unsur, sizin hikayenizi anlatmak için özenle seçilir.
            </p>
            <ul className="space-y-4">
              {['Floral Tasarım & Botanik Enstalasyonlar', 'Mimari Aydınlatma & Mapping', 'Kişiselleştirilmiş Masa Düzenleri', 'Özel Üretim Dekor ve Mobilyalar'].map((item, idx) => (
                <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
                  <li className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]"></div>
                  <span className="font-light">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorSection;




