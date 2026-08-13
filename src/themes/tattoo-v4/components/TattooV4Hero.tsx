"use client";
import React from 'react';

export function TattooV4Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAF9F6] pt-24 pb-12 overflow-x-clip">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase mb-6 block">Sanatın Zarif Dokunuşu</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              Deri <br/>
              Üzerinde <br/>
              <span className="italic font-light text-[#5A5853]">İnce Sanat.</span>
            </h1>
            <p className="text-[#5A5853] text-lg font-light leading-relaxed max-w-md mb-12">
              Sadece tek bir iğne ve sonsuz detay. Sizi yansıtan en saf ve zarif hikayeyi teninize işlemek için butik stüdyomuzda sanatla buluşun.
            </p>
            <div className="flex flex-col gap-4 items-start w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
                <button 
                  onClick={() => {
                    window.location.href = '/test-tattoo-v4/portfolyo';
                  }}
                  className="w-full sm:w-[240px] px-8 py-4 bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white text-xs font-light uppercase tracking-[0.2em] transition-all duration-300"
                >
                  Portfolyoyu Keşfet
                </button>
                <div className="hidden sm:block h-[1px] w-16 bg-[#E5E0D8]"></div>
                <span className="hidden sm:block text-xs text-[#8C8A84] tracking-[0.1em] uppercase">İstanbul, TR</span>
              </div>
              
              <button 
                onClick={() => {
                  window.dispatchEvent(new Event('openBookingModal'));
                }}
                className="w-full sm:w-[240px] px-8 py-4 bg-transparent border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-light uppercase tracking-[0.2em] transition-all duration-300"
              >
                Hızlı Randevu Al
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative h-[70vh] lg:h-[85vh]">
            <div className="absolute inset-0 bg-[#E5E0D8] translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 overflow-hidden bg-white border border-[#E5E0D8]">
              <img 
                src="/themes/tattoo-v4/hero.jpg" 
                alt="Fine Line Tattoo Artist at work" 
                className="w-full h-full object-cover object-center opacity-90 scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#FAF9F6]/10 mix-blend-overlay"></div>
            </div>
            
            {/* Minimalist Badge */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full border border-[#E5E0D8] flex items-center justify-center animate-spin-slow shadow-xl">
              <svg viewBox="0 0 100 100" className="w-24 h-24 overflow-visible">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[10px] font-light tracking-widest uppercase fill-[#1A1A1A]">
                  <textPath href="#circlePath" startOffset="0%">
                    • Fine Line • Minimalist • Custom Design
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
