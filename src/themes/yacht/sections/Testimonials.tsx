"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const testimonials = [
  {
    name: "Alexander V.",
    role: "Global CEO",
    text: "Hayatımda deneyimlediğim en kusursuz tatildi. Helikopter transferinden, Michelin yıldızlı şefin sunumlarına kadar her detay ustalıkla düşünülmüştü."
  },
  {
    name: "Isabella R.",
    role: "Haute Couture Tasarımcısı",
    text: "Amalfi kıyılarında uyanmak ve böylesine estetik bir tasarımın içinde yol almak büyüleyiciydi. Personel tam anlamıyla görünmez ama her an yanınızda."
  },
  {
    name: "Jonathan C.",
    role: "Yatırımcı",
    text: "Birçok süper yat kiraladım fakat buradaki VIP kulüp ayrıcalığı bambaşka bir seviye. Sözleşmeden çıkışa kadar kusursuz bir gizlilik ve ihtişam."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#143050] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/3 text-center lg:text-left">
            <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Yorumlar</span>
            <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] leading-tight mb-6">
              <TextReveal text="MİSAFİR DENEYİMLERİ" highlightedWords={["DENEYİMLERİ"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
            <p className="text-[#c0c0c0]/80 font-light">
              Bizim için en büyük referans, misafirlerimizin denizlerde bıraktığı unutulmaz anılardır.
            </p>
          </ScrollReveal>
          
          <div className="w-full lg:w-2/3">
            <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0,2).map((t, idx) => (
                <ScrollRevealChild key={idx} variant="fade-up" className="bg-[#0b1a2e] p-8 border border-[#c0c0c0]/10 hover:border-[#c0c0c0]/40 transition-colors">
                  <Quote size={40} className="text-[#c0c0c0]/20 mb-6" />
                  <p className="text-white font-light leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#c0c0c0] fill-[#c0c0c0]" />
                    ))}
                  </div>
                  <h4 className="text-white font-serif tracking-wider">{t.name}</h4>
                  <span className="text-[#c0c0c0]/60 text-xs uppercase tracking-widest">{t.role}</span>
                </ScrollRevealChild>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}



