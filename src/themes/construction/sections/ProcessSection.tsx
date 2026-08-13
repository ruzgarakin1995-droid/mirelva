"use client";

import React from "react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Konsept & Fizibilite",
      desc: "Arazinin potansiyelini maksimize eden ön tasarımlar, bütçe analizleri ve yasal uygunluk denetimleri."
    },
    {
      num: "02",
      title: "Mühendislik & Tasarım",
      desc: "BIM (Building Information Modeling) teknolojileri kullanılarak disiplinler arası çakışmasız detaylı projelendirme."
    },
    {
      num: "03",
      title: "İnşaat & Taahhüt",
      desc: "İleri yapı teknolojileri ve sıkı kalite kontrol süreçleri eşliğinde, şantiye mobilizasyonu ve saha imalatları."
    },
    {
      num: "04",
      title: "Teslimat & İşletme",
      desc: "Kapsamlı test ve devreye alma işlemleri sonrası iskan alımı ve tesis yönetim operasyonlarının başlatılması."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500"></span> İş Akışımız <span className="w-8 h-px bg-amber-500"></span>
          </h4>
          <h2 className="text-4xl font-bold text-white mb-6">
            <TextReveal text="Sistematik ve Şeffaf Proje Yönetimi" highlightedWords={["Sistematik", "Şeffaf"]} highlightClassName="text-amber-500" />
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
          
          <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <ScrollRevealChild key={index} variant="fade-up" className="relative group">
                <div className="w-20 h-20 bg-slate-950 border-2 border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  {step.num}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollRevealChild>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

