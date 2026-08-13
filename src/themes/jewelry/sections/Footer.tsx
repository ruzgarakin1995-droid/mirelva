"use client";
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="font-serif text-3xl mb-6">MAISON</h2>
          <p className="text-zinc-500 font-light text-sm">Zarafetin ve lüksün bir asırlık mirası.</p>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 text-zinc-400">Koleksiyonlar</h4>
          <ul className="space-y-4 text-zinc-500 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">High Jewelry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gelinlik & Alyans</a></li>
            <li><a href="#" className="hover:text-white transition-colors">İkonik Saatler</a></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 text-zinc-400">Hizmetler</h4>
          <ul className="space-y-4 text-zinc-500 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Bespoke Tasarım</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mücevher Bakımı</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Randevu Al</a></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-widest text-sm mb-6 text-zinc-400">İletişim</h4>
          <ul className="space-y-4 text-zinc-500 font-light text-sm">
            <li>Bize Ulaşın</li>
            <li>Butikler</li>
            <li>SSS</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs font-light uppercase tracking-widest text-center md:text-left">
        <span>Â© 2026 MAISON JEWELRY. Tüm Hakları Saklıdır.</span>
        <div className="space-x-4 md:space-x-6 flex flex-col md:flex-row gap-2 md:gap-0">
          <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
}



