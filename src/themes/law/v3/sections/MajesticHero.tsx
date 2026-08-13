import React from 'react';
export default function MajesticHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950 z-10" />
        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" alt="Law" className="w-full h-full object-cover opacity-20 grayscale" />
      </div>
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-yellow-600/50 mb-8 animate-pulse" />
        <span className="text-yellow-600 tracking-[0.3em] text-xs md:text-sm font-light uppercase mb-6 uppercase tracking-widest animate-fade-in">Güç, Ciddiyet, Zafer</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-slate-100 font-medium tracking-tight leading-tight animate-fade-up">Adaletin <br/><span className="text-yellow-600 italic">Yılmaz</span> Savunucuları</h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light mb-12 animate-fade-in-up delay-300">
          Yüzyıllık geleneği modern hukukun keskin zekasıyla birleştiriyoruz. Davalarınız bizim için birer savaş, mahkeme salonları ise zafer alanımızdır.
        </p>
        <button className="px-10 py-4 border border-yellow-600/30 text-yellow-500 hover:bg-yellow-600 hover:text-slate-950 transition-all duration-700 tracking-[0.2em] uppercase text-xs font-medium bg-slate-950/50 backdrop-blur-sm animate-fade-in delay-500">
          Mirasımızı Keşfedin
        </button>
      </div>
    </section>
  );
}
