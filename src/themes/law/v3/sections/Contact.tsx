import React from 'react';
export default function Contact() {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-600 tracking-[0.2em] text-sm uppercase mb-4 block">Gizlilik Teminatıyla</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-6">Temasa Geçin</h2>
        </div>
        <form className="space-y-10 bg-slate-950 p-8 md:p-16 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input type="text" placeholder="İSİM SOYİSİM" className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-yellow-500 transition-colors text-sm tracking-wide" />
            <input type="email" placeholder="E-POSTA ADRESİ" className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-yellow-500 transition-colors text-sm tracking-wide" />
          </div>
          <textarea placeholder="MESAJINIZ" rows={4} className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-yellow-500 transition-colors resize-none text-sm tracking-wide" />
          <div className="text-center pt-4">
            <button type="button" className="w-full md:w-auto px-16 py-4 bg-yellow-700/80 text-white hover:bg-yellow-600 transition-colors font-medium tracking-[0.2em] uppercase text-xs">
              Güvenli İletim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
