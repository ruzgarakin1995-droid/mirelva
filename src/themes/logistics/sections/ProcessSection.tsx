"use client";
import React from 'react';
import { ClipboardList, Stamp, ArrowRightLeft, CheckCheck } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ProcessSection = () => {
  const steps = [
    { icon: ClipboardList, title: 'Operasyonel Planlama', desc: 'Yük analizi, rota optimizasyonu ve navlun fiyatlandırması.' },
    { icon: Stamp, title: 'Dokümantasyon & Gümrükleme', desc: 'Uluslararası mevzuata uygun evrak yönetimi ve gümrük beyanı.' },
    { icon: ArrowRightLeft, title: 'Transfer & Taşıma', desc: 'Çok modlu veya direkt taşıma ile güvenli sevkıyat.' },
    { icon: CheckCheck, title: 'Teslimat & Raporlama', desc: 'Alıcıya sorunsuz teslimat ve performans metriklerinin sunulması.' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold tracking-wider uppercase mb-2 block">İş Akışımız</span>
          <h2 className="text-4xl font-bold mb-6">
            <TextReveal text="Pürüzsüz Bir Lojistik Deneyimi" className="justify-center" />
          </h2>
          <p className="text-slate-400 text-lg">Karmaşık süreçleri sizin adınıza yönetiyor, A noktasından B noktasına kusursuz bir operasyon vaat ediyoruz.</p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-800 z-0"></div>
          {steps.map((step, i) => (
            <ScrollRevealChild variant="fade-up" key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mb-6 text-blue-400 shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10" />
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 h-full w-full">
                <span className="text-blue-500 font-bold text-sm mb-2 block">Adım {i + 1}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

