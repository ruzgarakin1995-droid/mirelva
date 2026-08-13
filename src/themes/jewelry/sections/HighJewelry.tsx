"use client";
import React from 'react';

export function HighJewelry() {
  return (
    <section className="py-32 bg-zinc-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-zinc-900 to-zinc-900" />
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] mb-8">High Jewelry</h2>
        <p className="font-light text-zinc-300 text-lg md:text-xl leading-relaxed mb-12">
          Dünyanın en nadir elmasları ve değerli taşlarıyla tasarlanan, eşi benzeri olmayan başyapıtlar. Sadece bir kez üretilen özel koleksiyon.
        </p>
        <button className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
          Özel Randevu Talep Et
        </button>
      </div>
    </section>
  );
}



