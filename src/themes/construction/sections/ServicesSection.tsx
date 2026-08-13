"use client";

import React from "react";
import { Hammer, Truck, PenTool, Factory, Box, Rss } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Endüstriyel Yapılar",
      desc: "Lojistik merkezleri ve fabrikalar için ağır çelik ve betonarme sistemlerle kurgulanmış, yüksek kapasiteli endüstriyel tesis inşası."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Mimari Tasarım & Projelendirme",
      desc: "Konseptten ruhsata kadar tüm mimari, statik, mekanik ve elektrik disiplinlerini kapsayan entegre projelendirme hizmetleri."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Üstyapı Taahhüt",
      desc: "Lüks konut kompleksleri, A+ ofis binaları ve alışveriş merkezleri için anahtar teslim genel müteahhitlik çözümleri."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Altyapı Projeleri",
      desc: "Yol, köprü, tünel ve kent altyapısı gibi büyük ölçekli bayındırlık projelerinde ileri mühendislik uygulamaları."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Restorasyon & Renovasyon",
      desc: "Tarihi yapıların aslına uygun restorasyonu ve mevcut binaların modern ihtiyaçlara göre yapısal güçlendirmesi."
    },
    {
      icon: <Rss className="w-8 h-8" />,
      title: "Akıllı Bina Sistemleri",
      desc: "Enerji verimliliği yüksek, LEED sertifikasına uygun, otomasyon entegre edilmiş sürdürülebilir yeşil bina uygulamaları."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500"></span> Uzmanlık Alanlarımız <span className="w-8 h-px bg-amber-500"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <TextReveal 
              text="Kapsamlı Mühendislik Çözümleri" 
              highlightedWords={["Mühendislik"]} 
              highlightClassName="text-amber-500" 
            />
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Sektördeki derin bilgi birikimimiz ve güçlü makine parkurumuzla, projenin ölçeği ne olursa olsun en yüksek kalite standartlarında hizmet sunuyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollRevealChild key={index} variant="fade-up" className="group bg-slate-950/50 p-10 rounded-lg border border-white/5 hover:border-amber-500/30 hover:bg-slate-800/50 transition-all duration-500">
              <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                {service.desc}
              </p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

