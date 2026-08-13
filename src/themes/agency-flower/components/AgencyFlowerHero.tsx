import React from 'react';
import Link from 'next/link';
import { FlowerField } from './animations/FlowerField';
import { motion } from 'framer-motion';

export function AgencyFlowerHero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-white overflow-hidden flex items-center justify-center pt-24">
      
      {/* Background colorful blocks (mimicking ydiji reference) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right Orange/Yellow Block */}
        <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl opacity-80 blur-sm transform rotate-12"></div>
        {/* Right Middle Pink/Red Block */}
        <div className="absolute top-[40%] right-[5%] w-72 h-[400px] bg-gradient-to-br from-pink-400 to-red-500 rounded-[2rem] opacity-70 blur-sm transform -rotate-6"></div>
        {/* Left Middle Green/Teal Block */}
        <div className="absolute top-[30%] left-[10%] w-80 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[3rem] opacity-60 blur-sm transform -rotate-12"></div>
      </div>

      {/* The floral animation system overlay */}
      <FlowerField />

      {/* Hero Content (z-index 20, sitting above midground flowers, below foreground flowers) */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        
        <p className="text-sm font-semibold tracking-[0.4em] text-zinc-500 uppercase mb-8">
          D i j i t a l &nbsp; A j a n s
        </p>

        <h1 className="text-7xl md:text-[10rem] font-light text-zinc-900 tracking-tighter leading-none mb-12">
          ydiji
          <span className="text-yellow-500 text-5xl md:text-8xl relative -top-8 md:-top-16">.</span>
          <span className="text-yellow-500 text-5xl md:text-8xl relative -top-8 md:-top-16">.</span>
          <span className="text-yellow-500 text-5xl md:text-8xl relative -top-8 md:-top-16">.</span>
        </h1>

        <div className="flex gap-8 items-center justify-center border-t border-zinc-200 pt-12 w-full max-w-2xl mx-auto">
          <Link href="#calismalar" className="flex flex-col items-center gap-2 group">
            <span className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">Çalışmalar</span>
          </Link>
          
          <Link href="#hakkimizda" className="flex flex-col items-center gap-2 group">
            <span className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">Hakkımızda</span>
          </Link>

          <Link href="#hizmetler" className="flex flex-col items-center gap-2 group">
            <span className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">Hizmetler</span>
          </Link>
          
          <Link href="#iletisim" className="flex flex-col items-center gap-2 group">
            <span className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-900 transition-colors">İletişim</span>
          </Link>
        </div>
      </div>
      
    </section>
  );
}
