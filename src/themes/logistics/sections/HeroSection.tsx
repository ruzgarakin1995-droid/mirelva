"use client";
import React from 'react';
import { ArrowRight, Plane, Ship, Truck } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img src="/logistics_hero.webp" alt="Global Logistics" className="w-full h-full object-cover opacity-60 blur-sm scale-105" />
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>
      <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 lg:px-12 w-full">
        <ScrollReveal staggerChildren className="flex items-center justify-between w-full">
          <ScrollRevealChild variant="fade-up" className="flex items-center gap-3">
            {/* Custom Premium Logo Graphic */}
            <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl shadow-lg shadow-blue-900/30 border border-blue-400/20 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <span className="relative z-10 font-serif text-2xl font-black text-white italic tracking-tighter">A</span>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-400 rounded-tl-full"></div>
            </div>
            {/* Premium Logo Text */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl md:text-3xl font-black text-white tracking-tight leading-none drop-shadow-md">
                AKAS
              </span>
              <span className="font-sans text-[0.65rem] md:text-xs font-semibold text-blue-400 tracking-[0.4em] uppercase leading-none mt-1">
                Lojistik
              </span>
            </div>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up" className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <a href="#" className="hover:text-blue-400 transition-colors">Hizmetlerimiz</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Ağımız</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Teknoloji</a>
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-lg transition-colors border border-white/20">
              Giriş Yap
            </button>
          </ScrollRevealChild>
        </ScrollReveal>
      </header>

      <ScrollReveal staggerChildren className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-start w-full mt-24">
        <ScrollRevealChild variant="fade-up" className="text-blue-500 font-semibold tracking-wider uppercase mb-4">Geleceğin Lojistiği</ScrollRevealChild>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight">
          <TextReveal text="Küresel Tedarik Zincirinde Güçlü Çözüm Ortağınız" highlightedWords={["Güçlü", "Çözüm", "Ortağınız"]} highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300" />
        </h1>
        <ScrollRevealChild variant="fade-up" className="text-xl text-slate-300 mb-10 max-w-2xl">
          Kıtalararası taşımacılık, ileri teknoloji depolama ve uçtan uca entegre lojistik çözümleriyle sınırları ortadan kaldırıyoruz.
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up" className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
            Hemen Teklif Alın <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-md border border-slate-700 text-white font-semibold rounded-lg transition-all">
            Hizmetlerimizi İnceleyin
          </button>
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up" className="mt-16 flex gap-8 text-slate-400">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Ship className="w-6 h-6" /> Denizyolu Taşımacılığı</div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Plane className="w-6 h-6" /> Havayolu Taşımacılığı</div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Truck className="w-6 h-6" /> Karayolu Taşımacılığı</div>
        </ScrollRevealChild>
      </ScrollReveal>
    </section>
  );
};

