"use client";
import React from 'react';

export function BespokeServices() {
  return (
    <section className="py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Bespoke</h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto">Hayalinizdeki mücevheri gerçeğe dönüştürüyoruz. Sizin hikayeniz, bizim ustalığımız.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800">
          {['Tasarım Danışmanlığı', 'Taş Seçimi', 'El Yapımı Üretim'].map((step, idx) => (
            <div key={idx} className="bg-zinc-950 p-12 text-center group hover:-translate-y-2 transition-transform duration-500">
              <span className="text-[#D4AF37] text-5xl font-serif font-light opacity-50 mb-6 block">0{idx+1}</span>
              <h3 className="text-2xl font-serif mb-4">{step}</h3>
              <p className="text-zinc-500 font-light">Uzman ekibimizle birlikte hayalinizdeki tasarımı şekillendiriyoruz.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



