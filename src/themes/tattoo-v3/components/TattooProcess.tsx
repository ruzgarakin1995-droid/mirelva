"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const steps = [
  { num: "01", title: "İletişim & Konsept", desc: "Fikrinizi bizimle paylaşırsınız, uygun sanatçıya yönlendirilirsiniz." },
  { num: "02", title: "Tasarım & Onay", desc: "Sadece size özel çizim yapılır. Üzerinde revizeler yapılır ve onayınız alınır." },
  { num: "03", title: "Dövme Seansı", desc: "Steril ortamda, premium boyalar ve tek kullanımlık ekipmanlarla işlem uygulanır." },
  { num: "04", title: "Bakım & İyileşme", desc: "İşlem sonrası bakım kiti verilir ve iyileşme süreci sanatçınız tarafından takip edilir." }
];

export function TattooProcess() {
  return (
    <section id="surec" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Adım Adım</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">İşleyiş Süreci</h3>
          <p className="text-zinc-400 font-light text-lg">Bir ömür taşıyacağınız eseri yaratırken şansa yer bırakmıyoruz.</p>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-zinc-800 z-0"></div>

          {steps.map((step, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="relative z-10">
              <div className="text-7xl font-black text-zinc-900 mb-6 font-mono">{step.num}</div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4 flex items-center gap-4">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                {step.title}
              </h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{step.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
