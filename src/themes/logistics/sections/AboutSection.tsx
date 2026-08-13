"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop" alt="Lojistik Gemisi" className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl" />
            <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100 hidden md:flex">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">25+</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Yıllık Deneyim</p>
                <p className="text-sm text-slate-500">Sektörde Lider</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal staggerChildren variant="slide-left" className="w-full lg:w-1/2">
            <ScrollRevealChild variant="fade-up" className="text-blue-600 font-semibold tracking-wider uppercase mb-4 block">Hakkımızda</ScrollRevealChild>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              <TextReveal text="Tedarik Zincirinizi Daha Verimli Hale Getiriyoruz" />
            </h2>
            <ScrollRevealChild variant="fade-up" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Modern lojistik dinamiklerine uyum sağlayan yenilikçi yaklaşımımızla, iş ortaklarımızın küresel pazarlardaki rekabet gücünü artırıyoruz. Gümrüklemeden depolamaya, her aşamada şeffaflık ve güvenilirlik sunuyoruz.
            </ScrollRevealChild>
            <ul className="space-y-4 mb-10">
              {['Uçtan uca entegre lojistik çözümleri', 'Gelişmiş tedarik zinciri görünürlüğü', 'Sürdürülebilir yeşil taşımacılık modelleri', '7/24 operasyonel destek ve kriz yönetimi'].map((item, i) => (
                <ScrollRevealChild variant="slide-right" key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </ScrollRevealChild>
              ))}
            </ul>
            <ScrollRevealChild variant="fade-up">
              <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors shadow-lg">
                Kurumsal Profilimiz
              </button>
            </ScrollRevealChild>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

