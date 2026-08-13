"use client";

import React from "react";
import { Globe } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwareTestimonials = () => {
  const testimonials = [
    {
      quote: "NexusCore altyapısına geçtikten sonra sunucu maliyetlerimizde %40 düşüş, API yanıt sürelerimizde ise 3 kat iyileşme gözlemledik. Kurumsal mimari için mükemmel bir çözüm.",
      author: "Can Yılmaz",
      role: "CTO, TechFin Solutions",
      company: "TechFin"
    },
    {
      quote: "Mikroservis yönetimindeki karmaşıklığı tamamen ortadan kaldırdılar. Geliştirici ekibimiz artık altyapı sorunlarıyla değil, sadece ürün geliştirmeyle ilgileniyor.",
      author: "Ayşe Kaya",
      role: "VP of Engineering, DataStream",
      company: "DataStream"
    },
    {
      quote: "Sıfır kesinti politikası ve muazzam güvenlik standartları. Regülasyonlara tabi bir finans kuruluşu olarak aradığımız tüm uyumluluk sertifikalarına sahipler.",
      author: "Mehmet Demir",
      role: "Chief Architect, GlobalBank",
      company: "GlobalBank"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <TextReveal text="Teknoloji Liderlerinin Tercihi" highlightedWords={["Tercihi"]} highlightClassName="text-indigo-400" />
          </h2>
          <p className="text-slate-400 text-lg">
            Sektörün önde gelen mühendislik ekipleri altyapılarını bizimle ölçeklendiriyor.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal 
              key={index}
              variant={index === 0 ? "slide-right" : index === 2 ? "slide-left" : "fade-up"}
              delay={0.2}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative"
            >
              <Globe className="w-10 h-10 text-indigo-500/20 absolute top-8 right-8" />
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center border border-indigo-500/30 text-indigo-300 font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.author}</h4>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

