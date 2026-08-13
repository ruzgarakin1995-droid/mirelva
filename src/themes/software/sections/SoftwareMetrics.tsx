"use client";

import React from "react";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const SoftwareMetrics = () => {
  const metrics = [
    { value: 99.99, decimals: 2, label: "Uptime Garantisi", suffix: "%" },
    { value: 50, decimals: 0, label: "Milisaniye API Yanıt Süresi", suffix: "ms" },
    { value: 10, decimals: 0, label: "Günlük İşlenen İstek", suffix: "B+" },
    { value: 24, decimals: 0, label: "Kurumsal Destek", suffix: "/7" },
  ];

  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal staggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <ScrollRevealChild variant="scale" key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight flex items-baseline justify-center">
                <AnimatedCounter 
                  value={metric.value} 
                  decimals={metric.decimals} 
                  suffix={metric.suffix} 
                />
              </div>
              <div className="text-indigo-200 font-medium">{metric.label}</div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

