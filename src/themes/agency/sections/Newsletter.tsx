"use client";
import React from 'react';
import { Send } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-24 bg-lime-400 text-black border-t border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              Dijital Geleceği <br /> Kaçırmayın.
            </h2>
            <p className="text-black/70 font-semibold text-lg sm:text-xl">Sektörel trendler, vizyoner içgörüler ve özel vaka analizleri her ay doğrudan gelen kutunuzda.</p>
          </div>
          
          <form className="w-full max-w-md relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="E-posta adresiniz..." 
              className="w-full bg-black text-white px-6 py-5 min-h-[64px] border-none outline-none focus:ring-4 focus:ring-black/20 placeholder:text-neutral-500 font-bold"
              required
            />
            <button 
              type="submit" 
              className="absolute right-2 top-2 bottom-2 bg-lime-400 text-black px-6 font-bold hover:bg-white transition-colors flex items-center justify-center min-h-[44px]"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};



