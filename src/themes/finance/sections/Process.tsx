"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const steps = [
  { step: "01", title: "Analiz ve Keşif", desc: "Mevcut finansal durumunuz, risk toleransınız ve hedefleriniz detaylıca incelenir." },
  { step: "02", title: "Strateji Geliştirme", desc: "Size özel, optimize edilmiş çoklu varlık portföyü tasarlanır." },
  { step: "03", title: "Uygulama ve İcra", desc: "Stratejiler, en iyi piyasa koşullarında şeffaf bir şekilde hayata geçirilir." },
  { step: "04", title: "İzleme ve Optimizasyon", desc: "Portföyünüz sürekli izlenir ve değişen koşullara göre yeniden dengelenir." }
];

export const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6">
            <TextReveal text="Nasıl Çalışıyoruz?" className="justify-center" />
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">Sistematik ve disiplinli sürecimizle varlıklarınızı adım adım büyütüyoruz.</p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Desktop connecting line */}
          <ScrollRevealChild variant="scale" className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0 origin-left"></ScrollRevealChild>

          {steps.map((item, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-24 h-24 bg-blue-950 text-white text-3xl font-serif font-bold flex items-center justify-center rounded-full mb-6 border-4 border-white shadow-lg group-hover:bg-yellow-500 group-hover:text-blue-950 transition-colors duration-500">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



