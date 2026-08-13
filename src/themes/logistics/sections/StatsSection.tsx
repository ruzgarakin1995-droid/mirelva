"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export const StatsSection = () => {
  return (
    <section className="py-20 bg-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-600/50">
          {[
            { value: 150, suffix: '+', label: 'Ülkeye Teslimat' },
            { value: 4, suffix: 'M+', label: 'Yıllık TEU Hacmi' },
            { value: 850, suffix: '+', label: 'Uzman Personel' },
            { value: 99.8, prefix: '%', label: 'Zamanında Teslimat', decimals: 1 }
          ].map((stat, i) => (
            <ScrollRevealChild variant="fade-up" key={i} className="px-4">
              <div className="text-5xl font-extrabold text-white mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-blue-200 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

