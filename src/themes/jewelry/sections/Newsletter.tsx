"use client";
import React from 'react';

export function Newsletter() {
  return (
    <section className="py-24 bg-white border-b border-zinc-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[clamp(1.75rem,4vw,2.25rem)] mb-6 text-zinc-900">Ayrıcalıklı Dünyamıza Katılın</h2>
        <p className="text-zinc-500 font-light mb-10">Özel koleksiyon lansmanları ve butik etkinliklerinden ilk siz haberdar olun.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" placeholder="E-posta adresiniz" className="flex-1 px-6 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
          <button type="submit" className="px-10 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm hover:bg-black transition-colors shrink-0">
            Kayıt Ol
          </button>
        </form>
      </div>
    </section>
  );
}



