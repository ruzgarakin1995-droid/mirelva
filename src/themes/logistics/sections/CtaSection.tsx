"use client";
import React from 'react';
import { Headset } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
      <ScrollReveal staggerChildren className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <TextReveal text="Tedarik Zincirinizi Güçlendirmeye Hazır mısınız?" className="justify-center" />
        </h2>
        <ScrollRevealChild variant="fade-up" className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
          Küresel pazardaki rekabet avantajınızı artırmak için profesyonel lojistik uzmanlarımızla hemen iletişime geçin.
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up" className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="px-10 py-5 bg-white text-blue-800 hover:bg-slate-50 font-bold rounded-xl shadow-2xl transition-all transform hover:scale-105">
            B2B Müşteri Temsilcisine Bağlan
          </button>
          <a href="#" className="flex items-center gap-3 text-white font-semibold hover:text-blue-200 transition-colors">
            <Headset className="w-6 h-6" /> +90 (850) 123 45 67
          </a>
        </ScrollRevealChild>
      </ScrollReveal>
    </section>
  );
};

