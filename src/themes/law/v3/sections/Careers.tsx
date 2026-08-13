import React from 'react';
export default function Careers() {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-slate-900 to-slate-900 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-serif text-slate-100 mb-6">Geleceğin Liderlerini Arıyoruz</h2>
        <p className="text-slate-400 font-light mb-12 max-w-xl mx-auto text-lg">Bizimle birlikte hukuk tarihine yön vermek isteyen, hırslı ve idealist yeteneklere kapımız her zaman açık.</p>
        <button className="px-10 py-4 bg-transparent border border-white/20 text-slate-200 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-xs tracking-[0.2em] uppercase font-medium">Kariyer Fırsatları</button>
      </div>
    </section>
  );
}
