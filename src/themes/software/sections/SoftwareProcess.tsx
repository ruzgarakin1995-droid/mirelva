"use client";

import React from "react";
import { motion } from "framer-motion";
import { HorizontalScroll } from "@/components/animations/HorizontalScroll";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwareProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Sistem Entegrasyonu",
      description: "Mevcut altyapınızı REST API veya GraphQL uç noktalarımız aracılığıyla dakikalar içinde platformumuza bağlayın."
    },
    {
      number: "02",
      title: "Veri Migrasyonu",
      description: "Sıfır veri kaybı garantisiyle tüm veritabanlarınızı güvenli bulut ortamımıza senkronize edin."
    },
    {
      number: "03",
      title: "Konfigürasyon",
      description: "RBAC rollerini, güvenlik politikalarını ve webhook tetikleyicilerini iş mantığınıza göre özelleştirin."
    },
    {
      number: "04",
      title: "Canlıya Alım",
      description: "Kesintisiz geçiş protokolümüz ile sistemlerinizi production ortamında anında aktif hale getirin."
    }
  ];

  return (
    <section className="bg-slate-950 relative" id="process">
      <div className="pt-32 pb-16 container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <TextReveal text="Pürüzsüz Geçiş Süreci" highlightedWords={["Geçiş", "Süreci"]} highlightClassName="text-indigo-400" />
          </h2>
          <p className="text-lg text-slate-400">
            Karmaşık sistem taşıma süreçlerini standartlaştırdık. Minimum eforla maksimum verimliliğe ulaşın.
          </p>
        </ScrollReveal>
      </div>

      {/* 4 steps can take ~2 screen widths on desktop to scroll horizontally */}
      <HorizontalScroll sectionsCount={2}>
        <div className="flex gap-8 md:gap-16 items-center h-full">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group w-[85vw] md:w-[45vw] lg:w-[25vw] shrink-0 bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-8">
                <div className="text-7xl font-black text-white/10 group-hover:text-indigo-500/30 transition-colors">
                  {step.number}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block h-[2px] flex-1 ml-8 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </HorizontalScroll>
    </section>
  );
};

