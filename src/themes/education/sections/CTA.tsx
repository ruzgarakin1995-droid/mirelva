"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Geleceğinizi Bugünden <br className="hidden md:block"/>Şekillendirmeye Başlayın
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Kontenjanlar dolmadan 2027 Güz dönemi erken kayıt avantajlarından faydalanın ve hayallerinize bir adım daha yaklaşın.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto min-h-[56px] px-10 bg-white text-blue-600 hover:bg-slate-100 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-xl">
            Online Başvuru Yap <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto min-h-[56px] px-10 bg-blue-700/50 hover:bg-blue-700 border border-blue-400/30 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
            Danışmanla Görüş
          </button>
        </div>
      </div>
    </section>
  );
};



