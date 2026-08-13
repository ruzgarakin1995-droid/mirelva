"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const CTASection = () => {
  return (
    <section className="relative py-32 bg-amber-500 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=2000')" }}></div>
      
      <ScrollReveal staggerChildren className="container mx-auto px-6 relative z-10 text-center">
        <ScrollRevealChild variant="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight">
            <TextReveal text="Vizyonunuzu Gerçeğe Dönüştürmeye Hazırız" highlightedWords={["Dönüştürmeye"]} highlightClassName="text-white" />
          </h2>
        </ScrollRevealChild>
        <ScrollRevealChild variant="fade-up">
          <p className="text-xl text-slate-900/80 mb-10 max-w-2xl mx-auto font-medium">
            Mühendislik sınırlarını zorlayan, ikonik ve kalıcı eserler inşa etmek için global standartlarda çözüm ortağınız.
          </p>
        </ScrollRevealChild>
        <ScrollRevealChild variant="scale">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-slate-950 text-white font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
            Teklif İste <ArrowRight className="w-5 h-5" />
          </button>
        </ScrollRevealChild>
      </ScrollReveal>
    </section>
  );
};

