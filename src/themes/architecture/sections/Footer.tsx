"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ name }: { name: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-xs">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6">{name}</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Minimalist estetik ve mekansal saflığa odaklanan Mimarlık ve İç Mimarlık stüdyosu.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-32 text-sm">
            <div className="flex flex-col space-y-4 text-white/50">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-2">Stüdyo</span>
              <a href="#vision" className="hover:text-white transition-colors">Vizyon</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfolyo</a>
              <a href="#services" className="hover:text-white transition-colors">Hizmetler</a>
              <a href="#team" className="hover:text-white transition-colors">Ekip</a>
            </div>
            
            <div className="flex flex-col space-y-4 text-white/50">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white mb-2">Sosyal Ağlar</span>
              <a href="#" className="hover:text-white transition-colors"></a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {name}. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
            <button onClick={scrollToTop} className="flex items-center space-x-2 hover:text-white transition-colors">
              <span>Yukarı</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}


