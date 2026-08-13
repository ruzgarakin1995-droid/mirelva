"use client";
import React from 'react';
import Link from 'next/link';

export function TattooHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
        <img 
          src="/images/tattoo-v3/v3_hero_1786315232478.jpg" 
          alt="Tattoo Studio" 
          className="w-full h-full object-cover object-center filter grayscale opacity-40 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center mt-20">
        <div className="inline-block mb-4 px-3 py-1 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-full">
          <span className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">Premium Tattoo Studio</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold text-white tracking-tight leading-[0.9] mb-8">
          KENDİ İZİNİ <br/>
          <span className="text-red-600 italic font-black">YARAT.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed">
          Sıradanlığı reddedenler için. Değerli sanatçılarımızla, <br className="hidden md:block" /> bedenini bir sanat eserine dönüştür.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => window.dispatchEvent(new Event('openTattooBookingModal'))}
            className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
          >
            Randevu Al
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <Link href="/test-tattoo-v3/galeri" className="w-full sm:w-auto">
            <button className="w-full px-10 py-5 bg-transparent border border-zinc-700 hover:border-white hover:bg-white hover:text-zinc-950 text-white font-bold uppercase tracking-widest transition-all rounded-sm">
              Portfolyoyu İncele
            </button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
