"use client";
import React from 'react';
import { Flame } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <Flame className="text-yellow-500 w-10 h-10" />
            <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
              Smash<span className="text-yellow-500">Bros.</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:bg-yellow-500 hover:text-black font-bold transition-colors">
              IG
            </a>
            <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:bg-yellow-500 hover:text-black font-bold transition-colors">
              TW
            </a>
            <a href="#" className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:bg-yellow-500 hover:text-black font-bold transition-colors">
              FB
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm font-bold uppercase tracking-wider">
          <div className="flex flex-col gap-4">
            <h5 className="text-neutral-500 mb-2">Kurumsal</h5>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Hakkımızda</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Kariyer</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Franchise</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-neutral-500 mb-2">Destek</h5>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">İletişim</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">SSS</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Besin Değerleri</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-neutral-500 mb-2">Sipariş</h5>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Online Sipariş</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Gel Al</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Kurye Takip</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-neutral-500 mb-2">Yasal</h5>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">Kullanım Koşulları</a>
            <a href="#" className="text-white hover:text-yellow-500 transition-colors">KVKK</a>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 font-bold text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SMASHBROS BURGER. TÜM HAKLARI SAKLIDIR.</p>
          <p>BUILT FOR MEAT LOVERS.</p>
        </div>
      </div>
    </footer>
  );
}
