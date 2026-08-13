"use client";
import React from 'react';
import { Shield, Zap, TrendingUp, BarChart3 } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full transform translate-x-1/2"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <ScrollReveal staggerChildren variant="slide-right" className="w-full lg:w-1/2">
            <ScrollRevealChild variant="fade-up" className="text-blue-400 font-semibold tracking-wider uppercase mb-4 block">Neden Biz?</ScrollRevealChild>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <TextReveal text="Operasyonel Mükemmellik İçin Tasarlandı" />
            </h2>
            <ScrollRevealChild variant="fade-up" className="text-slate-400 text-lg mb-8 leading-relaxed">
              Müşterilerimize sadece bir taşıma hizmeti değil, rekabet avantajı sağlayacak stratejik bir ortaklık sunuyoruz. Dijital altyapımız ve küresel ağımızla fark yaratıyoruz.
            </ScrollRevealChild>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: 'Tam Kapsamlı Güvenlik', desc: 'Yükleriniz uluslararası standartlarda sigortalı.' },
                { icon: Zap, title: 'Hızlı Reaksiyon', desc: 'Anlık değişimlere proaktif operasyonel adaptasyon.' },
                { icon: TrendingUp, title: 'Maliyet Optimizasyonu', desc: 'Akıllı rota planlama ile maksimum tasarruf.' },
                { icon: BarChart3, title: 'Veri Odaklı Yönetim', desc: 'Karar alma süreçlerinde analitik raporlamalar.' },
              ].map((feat, i) => (
                <ScrollRevealChild variant="fade-up" key={i}>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4">
                    <feat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
                  <p className="text-slate-500 text-sm">{feat.desc}</p>
                </ScrollRevealChild>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" className="w-full lg:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2072&auto=format&fit=crop" alt="Lojistik Depo" className="rounded-3xl shadow-2xl border border-white/10 relative z-10" />
            <div className="absolute -left-8 top-1/4 bg-slate-800/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">Sistem Durumu: Çevrimiçi</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-48 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-3/4"></div>
                </div>
                <div className="h-2 w-40 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-1/2"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

