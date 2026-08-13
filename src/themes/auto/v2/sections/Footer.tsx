'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 text-sm font-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">AutoV2 © 2026</a>
          <a href="#" className="hover:text-white transition-colors">Gizlilik ve Yasal</a>
          <a href="#" className="hover:text-white transition-colors">Araç Geri Çağırma</a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">İletişim</a>
          <a href="#" className="hover:text-white transition-colors">Kariyer</a>
          <a href="#" className="hover:text-white transition-colors">Konumlar</a>
        </div>
      </div>
    </footer>
  );
}
