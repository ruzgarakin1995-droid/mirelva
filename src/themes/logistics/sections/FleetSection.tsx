"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FleetSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal variant="fade-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Güçlü Altyapı</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            <TextReveal text="Modern ve Çevreci Filomuz" className="justify-center" />
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Euro 6 standartlarındaki çekicilerimiz, ısı kontrollü treylerlerimiz ve çok modlu taşımacılığa uygun konteyner altyapımızla karbon ayak izini azaltıyoruz.
          </p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Mega Tenteli Araçlar', desc: 'Hacimli otomotiv ve tekstil yükleri için ideal kapasite.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop' },
            { name: 'Frigo Treylerler', desc: 'Soğuk zincir ve ilaç taşımacılığında hassas ısı kontrolü.', img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop' },
            { name: 'Ağır Nakliye Araçları', desc: 'Proje yükleri ve iş makinesi taşımacılığında yüksek performans.', img: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?q=80&w=2070&auto=format&fit=crop' }
          ].map((fleet, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-left group">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={fleet.img} alt={fleet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{fleet.name}</h3>
                <p className="text-slate-600">{fleet.desc}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

