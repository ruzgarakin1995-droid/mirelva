"use client";

import React from 'react';

export default function Newsletter() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 border-b border-white/10" id="newsletter">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">Yayınlar ve İçgörüler.</h2>
        <p className="text-white/50 text-sm mb-12 max-w-md mx-auto">
          En yeni projelerimiz, sergilerimiz ve mimari düşüncelerimiz hakkında üç aylık güncellemeler almak için abone olun.
        </p>
        
        <form className="flex flex-col md:flex-row items-center border-b border-white/30 hover:border-white transition-colors" onSubmit={e => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="E-posta adresinizi girin" 
            className="w-full bg-transparent py-4 text-sm focus:outline-none text-center md:text-left placeholder:text-white/30"
          />
          <button type="submit" className="text-xs uppercase tracking-widest font-bold py-4 md:pl-8 hover:text-white/70 transition-colors">
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
}

