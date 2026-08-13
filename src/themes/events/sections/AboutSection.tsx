"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const AboutSection = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-[#FDFBF7] text-[#4A403A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C19A6B]"></div>
                <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold">Hakkımızda</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                Her Detayıyla Kusursuz <br />
                <span className="italic text-[#8B7355]">Bir Deneyim Tasarlıyoruz.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-[#6B5E53] font-light leading-relaxed mb-6">
                Sıradanlığın ötesinde, her biri bir sanat eseri titizliğinde planlanan etkinlikler yaratıyoruz. 15 yıllık tecrübemizle, lüks düğünlerden üst düzey kurumsal davetlere kadar her anınızı ölümsüzleştiriyoruz.
              </p>
              <p className="text-[#6B5E53] font-light leading-relaxed mb-10">
                Sadece bir etkinlik değil, misafirlerinizin yıllarca konuşacağı, ruhu olan, estetik ve zarafetin buluştuğu eşsiz hikayeler yazıyoruz.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E8DCC4]">
                <div>
                  <h4 className="text-4xl font-serif text-[#C19A6B] mb-2">500+</h4>
                  <p className="text-sm tracking-wider uppercase text-[#8B7355]">Gerçekleşen Etkinlik</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-[#C19A6B] mb-2">15</h4>
                  <p className="text-sm tracking-wider uppercase text-[#8B7355]">Yıllık Tecrübe</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <ScrollReveal delay={0.2} y={50}>
              <div className="aspect-[4/5] overflow-hidden relative z-10 rounded-t-full">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
                  alt="Luxury Events" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 -right-4 md:-right-10 w-full h-full border border-[#C19A6B] rounded-t-full z-0"></div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;




