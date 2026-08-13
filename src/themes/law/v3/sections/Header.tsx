import React from 'react';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent" />
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-6 cursor-pointer">
          <div className="w-10 h-10 border border-yellow-600/40 flex items-center justify-center rotate-45 group hover:border-yellow-500 transition-colors">
            <div className="w-3 h-3 bg-yellow-600/80 -rotate-45" />
          </div>
          <div>
            <span className="font-serif text-2xl text-slate-100 tracking-widest block leading-none">LEX</span>
            <span className="font-serif text-sm text-slate-400 tracking-[0.3em] uppercase">Majestas</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-12">
          {['Miras', 'Uzmanlık', 'Emsal Kararlar', 'Ortaklar', 'İletişim'].map(item => (
            <span key={item} className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer font-medium">
              {item}
            </span>
          ))}
        </nav>
        <button className="lg:hidden text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
}
