"use client";
import React from 'react';
import { PhoneCall } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const CTASection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <ScrollReveal variant="fade-up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-light mb-8">
          <TextReveal text="Ayrıcalıklı Bir Yolculuğa Hazır mısınız?" highlightedWords={["Hazır", "mısınız?"]} highlightClassName="font-bold italic text-amber-500" />
        </h2>
        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12">
          Hemen rezervasyon yapın veya özel talepleriniz için VIP müşteri temsilcimizle iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm transition-colors duration-300 font-medium tracking-wide text-lg">
            Hemen Rezervasyon Yap
          </button>
          <button className="bg-transparent border-2 border-zinc-800 hover:border-white text-white px-10 py-4 rounded-sm flex items-center justify-center transition-all duration-300 font-medium tracking-wide text-lg">
            <PhoneCall className="mr-3 w-5 h-5" /> +90 (212) 555 00 00
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;

