"use client";

import React from "react";
import { Quote } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-amber-500"></span> Referanslarımız <span className="w-8 h-px bg-amber-500"></span>
          </h4>
          <h2 className="text-4xl font-bold text-white mb-6">
            <TextReveal text="Yatırımcıların Gözünden" highlightedWords={["Yatırımcıların", "Gözünden"]} highlightClassName="text-slate-400 font-light" />
          </h2>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((_, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="bg-slate-900 p-10 rounded-lg relative border border-white/5">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-amber-500/10" />
              <div className="flex items-center gap-4 mb-8">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Yatırımcı" className="w-16 h-16 bg-slate-800 rounded-full border-2 border-amber-500 object-cover" />
                <div>
                  <h4 className="text-white font-bold text-lg">Ahmet Yılmaz</h4>
                  <span className="text-amber-500 text-sm font-semibold">Global Yatırım A.Ş. YK Başkanı</span>
                </div>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg italic">
                "Karmaşık mühendislik zorluklarını öngörüp, zamanından önce ve eksiksiz teslim ettikleri genel merkez projemizde, kalitelerinden ve profesyonelliklerinden çok etkilendik. Sektördeki en güvenilir çözüm ortağımız."
              </p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

