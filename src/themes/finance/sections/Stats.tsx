"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const stats = [
  { prefix: "$", value: 12.4, suffix: "M+", label: "Yönetilen Varlık (AUM)" },
  { value: 450, suffix: "+", label: "Kurumsal & Özel Müşteri" },
  { value: 25, label: "Yıllık Sektör Tecrübesi" },
  { value: 14, suffix: "%", label: "Ortalama Yıllık Getiri*" }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-yellow-500 text-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-950/20">
          {stats.map((stat, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="flex flex-col items-center justify-center p-4">
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2 flex items-center justify-center">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter value={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
        <ScrollReveal variant="fade-up" className="text-center mt-8 text-xs font-medium opacity-70">
          * Geçmiş performans gelecekteki sonuçların garantisi değildir.
        </ScrollReveal>
      </div>
    </section>
  );
};



