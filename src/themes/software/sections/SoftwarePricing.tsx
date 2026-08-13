"use client";

import React from "react";
import { Check } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwarePricing = () => {
  const plans = [
    {
      name: "Geliştirici",
      desc: "Bireysel geliştiriciler ve startup'lar için başlangıç paketi.",
      price: "Ücretsiz",
      period: "",
      features: ["Aylık 100K API İstek", "Standart Destek", "3 Mikroservis", "Paylaşımlı Altyapı"],
      cta: "Hemen Başla",
      popular: false
    },
    {
      name: "Kurumsal",
      desc: "Büyüyen teknoloji şirketleri için optimize edilmiş altyapı.",
      price: "$499",
      period: "/ay",
      features: ["Aylık 10M API İstek", "Öncelikli SLA Desteği", "Sınırsız Mikroservis", "Dedike Sunucular", "Gelişmiş Güvenlik Paketi"],
      cta: "Ücretsiz Dene",
      popular: true
    },
    {
      name: "Scale",
      desc: "Yüksek trafikli global uygulamalar için limitsiz güç.",
      price: "Özel",
      period: "",
      features: ["Sınırsız API İstek", "7/24 Telefon & Slack", "Özel Güvenlik Mimarisi", "Çoklu Bulut Desteği", "Yerinde Eğitim"],
      cta: "Satış ile İletişime Geç",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5" id="fiyatlandırma">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <TextReveal text="Ölçeğinize Uygun Şeffaf Maliyetler" highlightedWords={["Şeffaf", "Maliyetler"]} highlightClassName="text-indigo-400" />
          </h2>
          <p className="text-slate-400 text-lg">
            Gizli ücretler yok. Sadece kullandığınız kaynaklar için ödeme yapın.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollRevealChild 
              key={index}
              variant={plan.popular ? "scale" : "fade-up"}
              className={`relative p-8 rounded-2xl border ${
                plan.popular 
                  ? "bg-slate-800 border-indigo-500 shadow-2xl shadow-indigo-500/20" 
                  : "bg-white/5 border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  En Çok Tercih Edilen
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

