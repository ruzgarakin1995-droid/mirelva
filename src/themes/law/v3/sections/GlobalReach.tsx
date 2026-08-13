import React from 'react';
export default function GlobalReach() {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between border border-white/10 p-12 bg-slate-900/30">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-serif text-slate-100 mb-4">Küresel Etki Alanı</h2>
            <p className="text-slate-400 font-light">Londra, New York ve Dubai ofislerimizle kıtalararası hukuki koruma.</p>
          </div>
          <div className="flex gap-4 md:gap-8 text-yellow-600/70 font-serif text-xl md:text-2xl items-center">
            <span className="hover:text-yellow-500 transition-colors">İSTANBUL</span> <span className="text-white/10">|</span> 
            <span className="hover:text-yellow-500 transition-colors">LONDRA</span> <span className="text-white/10">|</span> 
            <span className="hover:text-yellow-500 transition-colors">NEW YORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
