"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-600 rounded-sm flex items-center justify-center transform rotate-45">
                <div className="w-3 h-3 border border-black transform -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white uppercase">Aero<span className="text-gray-500">Motors</span></span>
            </div>
            <p className="text-gray-400 font-light max-w-md leading-relaxed mb-8">
              Dünyanın en sıra dışı otomobillerinin küratörleri. Mühendislik mükemmeliyetinin tavizsiz lüksle buluştuğu yer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">
                TW
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors text-xs font-bold">
                IN
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Galeri</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Envanter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Yeni Gelenler</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Aracınızı Satın</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Finansman</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Şirket</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Hakkımızda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Ekibimiz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kariyer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">İletişim</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-600 text-xs uppercase tracking-widest">&copy; {new Date().getFullYear()} AeroMotors. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-300 text-xs uppercase tracking-widest transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-gray-600 hover:text-gray-300 text-xs uppercase tracking-widest transition-colors">Hizmet Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

