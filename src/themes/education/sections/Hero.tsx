"use client";
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" 
          alt="SeÃ§kin KampÃ¼s" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            2027 GÃ¼z DÃ¶nemi KayÄ±tlarÄ± BaÅŸladÄ±
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            GeleceÄŸi Ãƒâ€¦Ã‚Âekillendiren <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              Global EÄŸitim Vizyonu
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0">
            SÄ±nÄ±rlarÄ± aÅŸan teknolojik altyapÄ±mÄ±z, uluslararasÄ± akademik kadromuz ve inovasyon odaklÄ± Ã¶ÄŸrenme modelimizle potansiyelinizin zirvesine ulaÅŸÄ±n.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto min-h-[44px] min-w-[44px] px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Programa BaÅŸvur <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto min-h-[44px] min-w-[44px] px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
              <Play className="w-5 h-5 text-purple-400" /> KampÃ¼sÃ¼ KeÅŸfet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};




