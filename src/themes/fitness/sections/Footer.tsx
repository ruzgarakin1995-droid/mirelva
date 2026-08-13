"use client";
import React from 'react';
import { Dumbbell } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-black text-2xl tracking-tighter mb-6">
              <Dumbbell className="text-cyan-400" />
              <span>NEXUS<span className="text-cyan-400">FIT</span></span>
            </div>
            <p className="text-gray-500 font-light">Fiziksel dönüşümün zirvesi.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-white/80">Menü</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light uppercase tracking-wider">
              <li><a href="#classes" className="hover:text-cyan-400 transition-colors">Dersler</a></li>
              <li><a href="#trainers" className="hover:text-cyan-400 transition-colors">Antrenörler</a></li>
              <li><a href="#memberships" className="hover:text-cyan-400 transition-colors">Fiyatlandırma</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-white/80">Yasal</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light uppercase tracking-wider">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Şartlar</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Gizlilik</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Kurallar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-white/80">Sosyal Medya</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light uppercase tracking-wider">
              <li><a href="#" className="hover:text-cyan-400 transition-colors"></a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors"></a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors"></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-700 text-xs font-bold uppercase tracking-widest pt-8 border-t border-white/5">
          &copy; 2026 Nexus Fit. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}


