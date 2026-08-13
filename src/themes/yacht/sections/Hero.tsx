"use client";
import React from 'react';
import { TextReveal } from "@/components/animations/TextReveal";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-[#0b1a2e]">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" 
          alt="Okyanusta Ultra Lüks Yat" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2e]/60 via-[#0b1a2e]/40 to-[#0b1a2e]/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <span className="text-[#c0c0c0] tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase mb-6 block fade-in-up">
          Sınırların Ötesinde Bir Yaşam
        </span>
        <h1 className="text-white font-serif text-[clamp(2.5rem,5vw+1rem,5.5rem)] leading-[1.1] mb-8 font-light tracking-wide fade-in-up delay-100">
          <TextReveal text="OKYANUSUN GÜMÜŞ İMZASI" highlightedWords={["GÜMÜŞ"]} highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-white to-[#c0c0c0] italic" />
        </h1>
        <p className="text-[#c0c0c0] text-[clamp(1rem,1.5vw+0.5rem,1.25rem)] font-light max-w-2xl mx-auto mb-12 fade-in-up delay-200">
          VIP Yat & Transfer ayrıcalığı ile zamanı durdurun. Eşsiz bir konfor, kusursuz hizmet ve denizin sonsuzluğunda kaybolacağınız ultra-premium yolculuklara davetlisiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4 fade-in-up delay-300">
          <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#c0c0c0] to-white text-[#0b1a2e] text-sm tracking-widest min-h-[44px] hover:scale-105 transition-transform duration-500">
            FİLOYU KEÃ…ÂFET
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#c0c0c0]/50 text-white text-sm tracking-widest min-h-[44px] hover:bg-[#c0c0c0]/10 transition-colors duration-500 backdrop-blur-sm">
            ÖZEL DANIÃ…ÂMANLIK
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[#c0c0c0] text-xs tracking-widest mb-2">KEÃ…ÂFET</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c0c0c0] to-transparent"></div>
      </div>
    </section>
  );
}



