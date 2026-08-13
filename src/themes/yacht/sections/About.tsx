"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function About() {
  return (
    <section className="py-24 lg:py-32 bg-[#0b1a2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#143050] rounded-full blur-[150px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c0c0c0]/20 to-transparent translate-x-4 translate-y-4 border border-[#c0c0c0]/20 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" 
                alt="Lüks Yat Mirası" 
                className="relative z-10 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#c0c0c0]"></div>
              <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm">Mirasımız</span>
            </div>
            
            <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] leading-tight mb-8">
              <TextReveal text="MÜKEMMELLİĞİN 15 YILLIK YOLCULUĞU" highlightedWords={["15", "YILLIK"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
            
            <p className="text-[#c0c0c0]/80 text-lg font-light leading-relaxed mb-6">
              Sıradanlığın ötesine geçmek için kurulan kulübümüz, dünya okyanuslarında en seçkin konuklara hizmet veriyor. Geleneksel denizcilik anlayışını, modern lüksün zirvesiyle birleştiriyoruz.
            </p>
            <p className="text-[#c0c0c0]/80 text-lg font-light leading-relaxed mb-10">
              Her detayında ayrıcalığı hissedeceğiniz yatlarımız, uzman mürettebatımız ve size özel hazırlanan rotalarımızla, denizde evinizin konforunu ötesine taşıyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-[#c0c0c0]/10 pt-10">
              <div>
                <div className="text-white text-4xl font-serif mb-2 flex items-center"><AnimatedCounter value={24} />/7</div>
                <div className="text-[#c0c0c0] text-sm tracking-wider uppercase">Özel Concierge</div>
              </div>
              <div>
                <div className="text-white text-4xl font-serif mb-2 flex items-center"><AnimatedCounter value={50} />+</div>
                <div className="text-[#c0c0c0] text-sm tracking-wider uppercase">Premium Yat</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}



