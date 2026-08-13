"use client";
import React from 'react';

export function LuxuryWatches() {
  return (
    <section className="bg-zinc-900 text-white w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" alt="Luxury Watch" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24">
          <div className="max-w-xl w-full">
            <span className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-8 block">Haute Horlogerie</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight mb-10">Zamanın<br />Ötesinde</h2>
            <p className="text-zinc-400 font-light text-lg mb-12 leading-relaxed">
              İsviçre saatçilik geleneğinin en ince detaylarıyla üretilen mekanik harikalar. Mikroskobik bir hassasiyet ve sarsılmaz bir mükemmeliyet tutkusu.
            </p>
            
            <div className="space-y-6 border-t border-zinc-800 pt-8">
              {['Tourbillon Mekanizmalar', 'Safir Kristal Kasa', 'El İşçiliği Kadranlar'].map((feature, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-xl font-serif text-zinc-300 group-hover:text-white transition-colors">{feature}</span>
                  <span className="text-[#D4AF37] text-2xl font-light group-hover:translate-x-2 transition-transform">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



