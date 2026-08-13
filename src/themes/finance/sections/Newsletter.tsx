"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-blue-950 text-white border-t-4 border-yellow-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            <TextReveal text="Finansal Bültenimize Abone Olun" className="justify-center" />
          </h2>
          <p className="text-blue-200 mb-10 text-lg font-light max-w-2xl mx-auto">
            Piyasa analizleri, yatırım stratejileri ve kurumumuzdan en güncel haberleri doğrudan e-posta kutunuza alın.
          </p>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" delay={0.2}>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Kurumsal E-Posta Adresiniz" 
              className="flex-grow min-h-[44px] px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-500 focus:bg-white/20 transition-colors"
            />
            <button 
              type="button" 
              className="min-h-[44px] px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold transition-colors whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
          <p className="text-xs text-blue-400 mt-6">
            Kişisel verileriniz KVKK kapsamında korunmaktadır. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};



