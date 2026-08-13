"use client";

import React from "react";
import { ArrowRight, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const SoftwareCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal 
          variant="scale"
          className="max-w-4xl mx-auto text-center bg-slate-950/50 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Altyapınızı Geleceğe Taşıyın
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            14 günlük ücretsiz deneme sürümüyle platformumuzu test edin. Kredi kartı gerektirmez, anında erişim.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
              Hemen Başlayın
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/10">
              <Terminal className="w-5 h-5" />
              API Sandbox
            </button>
          </div>
          
          <p className="mt-8 text-sm text-slate-500">
            Açık kaynaklı projeler ve eğitim kurumları için özel planlarımız mevcuttur.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

