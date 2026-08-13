"use client";
import React from 'react';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-cyan-800 mb-6">
              <Anchor size={28} />
              <span className="text-2xl font-light tracking-wide">YACHT<span className="font-semibold">V2</span></span>
            </div>
            <p className="text-zinc-500 max-w-sm font-light leading-relaxed">
              Sessiz lüks ve kusursuz konforun buluştuğu nokta. Denizlerdeki yeni eviniz.
            </p>
          </div>
          <div>
            <h4 className="text-blue-950 font-medium mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4 text-zinc-500 font-light text-sm">
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Filomuz</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Rotalar</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Hizmetler</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Galeri</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-950 font-medium mb-6">İletişim</h4>
            <ul className="space-y-4 text-zinc-500 font-light text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-cyan-600"/> +90 555 000 00 00</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-cyan-600"/> info@yachtv2.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-cyan-600"/> Marina, Bodrum / Türkiye</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-100 text-center text-zinc-400 text-sm font-light">
          &copy; {new Date().getFullYear()} Yacht V2. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}