"use client";
import React from 'react';
import { PlaneTakeoff } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const AirportTransferSection = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white relative">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1470&auto=format&fit=crop" alt="Airport Transfer" className="w-full h-full object-cover opacity-20 grayscale" />
      </div>
      <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <PlaneTakeoff className="w-16 h-16 text-amber-500 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          <TextReveal text="Zamanınız Değerlidir" highlightedWords={["Değerlidir"]} highlightClassName="font-bold" />
        </h2>
        <p className="text-xl text-zinc-300 font-light max-w-3xl mx-auto mb-12">
          Özel jet terminalleri ve tüm uluslararası havalimanlarında, uçağınızdan indiğiniz ilk andan itibaren VIP karşılama ve transfer hizmetimizle zaman kaybetmeden konforun tadını çıkarın.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm transition-colors duration-300 font-medium tracking-wide text-lg">
          Havalimanı Transferi Rezerve Et
        </button>
      </ScrollReveal>
    </section>
  );
};

export default AirportTransferSection;

