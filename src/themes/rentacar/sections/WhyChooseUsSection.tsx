"use client";
import React from 'react';
import { Award, ShieldCheck, Gem } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-2 block">Ayrıcalıklar Dünyası</span>
          <h2 className="text-4xl md:text-5xl font-light">
            <TextReveal text="Neden Bizi Tercih Etmelisiniz?" highlightedWords={["Tercih", "Etmelisiniz?"]} highlightClassName="font-bold" />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ScrollRevealChild variant="fade-up" className="text-center">
            <div className="w-24 h-24 mx-auto bg-zinc-950 border border-amber-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <Gem className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sıfır Hata Prensibi</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Her araç teslimatından önce gerçekleştirilen 102 noktalı detaylı kontrol ve sterilizasyon işlemi ile kusursuz bir deneyim garanti edilir.
            </p>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up" className="text-center">
            <div className="w-24 h-24 mx-auto bg-zinc-950 border border-amber-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <Award className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Konsiyerj Hizmeti</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Sadece araç değil, tüm seyahatinizi asiste eden; restoran rezervasyonundan etkinlik biletlerine kadar sizin için düşünen özel asistanlık hizmeti.
            </p>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up" className="text-center">
            <div className="w-24 h-24 mx-auto bg-zinc-950 border border-amber-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <ShieldCheck className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Üst Düzey Güvenlik</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Talebiniz doğrultusunda tahsis edilen zırhlı araç seçenekleri ve yakın koruma sertifikalı VIP şoför kadrosu ile maksimum güvenlik.
            </p>
          </ScrollRevealChild>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

