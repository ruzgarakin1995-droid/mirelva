"use client";
import React from 'react';
import { Wine, Waves, Sparkles } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const experiences = [
  {
    icon: Wine,
    title: 'Michelin Yıldızlı Gastronomi',
    desc: 'Özel şeflerimiz, damak tadınıza uygun uluslararası mutfaklardan en seçkin lezzetleri size özel hazırlar.'
  },
  {
    icon: Waves,
    title: 'Sınırsız Su Sporları',
    desc: 'Jet-ski, denizaltı, paddleboard ve daha fazlası ile okyanusun heyecanını doyasıya yaşayın.'
  },
  {
    icon: Sparkles,
    title: 'Wellness & Spa',
    desc: 'Uçsuz bucaksız deniz manzarası eşliğinde, ruhunuzu ve bedeninizi yenileyecek terapi seansları.'
  }
];

export function Experiences() {
  return (
    <section id="deneyimler" className="py-24 bg-[#143050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/2">
            <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Ayrıcalıklı Yaşam</span>
            <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] leading-tight mb-8">
              <TextReveal text="DENİZDEKİ BEŞ YILDIZLI OTELİNİZ" highlightedWords={["BEŞ", "YILDIZLI"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
            
            <ScrollReveal staggerChildren className="space-y-10 mt-12">
              {experiences.map((exp, idx) => (
                <ScrollRevealChild key={idx} variant="fade-up" className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 border border-[#c0c0c0]/20 flex items-center justify-center group-hover:bg-[#c0c0c0]/10 transition-colors duration-500">
                    <exp.icon size={24} className="text-[#c0c0c0]" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-serif mb-2">{exp.title}</h3>
                    <p className="text-[#c0c0c0]/70 font-light leading-relaxed">{exp.desc}</p>
                  </div>
                </ScrollRevealChild>
              ))}
            </ScrollReveal>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-left" className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" 
                alt="Lüks Yat İç Mekan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0b1a2e]/20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0b1a2e] rounded-full blur-[50px]"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}



