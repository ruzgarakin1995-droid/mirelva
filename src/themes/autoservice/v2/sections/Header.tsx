"use client";
import { motion } from 'framer-motion';
import { Globe, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              LabDetailing
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Hizmetler</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Süreç</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Paketler</a>
              <a href="#" className="hover:text-blue-600 transition-colors">İletişim</a>
            </nav>

            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/50 shadow-sm text-sm font-semibold text-slate-700">
              <Globe className="w-4 h-4 text-slate-500" />
              <button 
                onClick={() => setLang('TR')}
                className={`transition-colors ${lang === 'TR' ? 'text-blue-600' : 'hover:text-blue-600'}`}
              >
                TR
              </button>
              <span className="text-slate-300 font-light">|</span>
              <button 
                onClick={() => setLang('EN')}
                className={`transition-colors ${lang === 'EN' ? 'text-blue-600' : 'hover:text-blue-600'}`}
              >
                EN
              </button>
            </div>

            <button className="md:hidden p-2 text-slate-600 hover:text-slate-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
