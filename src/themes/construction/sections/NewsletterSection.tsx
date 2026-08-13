"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const NewsletterSection = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <ScrollReveal variant="scale" className="container mx-auto px-6">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Aylık Sektör Raporu</h3>
            <p className="text-slate-400 font-light mb-8 max-w-lg mx-auto">
              İnşaat sektöründeki global trendler, hammadde piyasa analizleri ve tamamlanan projelerimiz hakkında düzenli bültenimizi alın.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Kurumsal E-Posta Adresiniz" 
                className="flex-1 bg-slate-950 border border-white/10 rounded px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors whitespace-nowrap">
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

