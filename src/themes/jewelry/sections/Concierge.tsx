"use client";
import React from 'react';

export function Concierge() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Kişisel Concierge</h2>
        <p className="text-zinc-600 font-light mb-12">
          Uzman mücevher danışmanlarımız size özel tasarımlar, hediye seçimleri ve bakım hizmetleri için her an yanınızda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors">
            WhatsApp ile Ulaşın
          </button>
          <button className="w-full sm:w-auto border border-zinc-900 text-zinc-900 px-10 py-4 uppercase tracking-widest text-sm hover:bg-zinc-50 transition-colors">
            Sizi Arayalım
          </button>
        </div>
      </div>
    </section>
  );
}



