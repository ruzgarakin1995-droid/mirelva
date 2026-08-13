"use client";
import React from 'react';

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-[#0f2038] text-gray-400 py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
        <div>
          <div className="text-2xl font-bold text-white mb-6 tracking-tight">{name}</div>
          <p className="mb-6 leading-relaxed">Etik, bilimsel ve insana saygılı sağlık hizmeti anlayışıyla yıllardır yanınızdayız.</p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">In</div>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">Fb</div>
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">Tw</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Hızlı Menü</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Kurumsal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Doktorlarımız</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tıbbi Birimler</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Online Randevu</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Hasta Rehberi</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Ziyaret Saatleri</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Anlaşmalı Kurumlar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">KVKK Metni</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hasta Hakları</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">E-Bülten</h4>
          <p className="mb-4 text-sm">Sağlık rehberi makaleleri ve yeniliklerden haberdar olun.</p>
          <div className="flex">
            <input type="email" placeholder="E-posta adresiniz" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-[var(--accent)]" />
            <button className="bg-[var(--accent)] text-white px-4 py-2 rounded-r-lg font-bold">Kayıt</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center">
        <div>&copy; {new Date().getFullYear()} {name}. Tüm Hakları Saklıdır.</div>
        <div className="mt-4 md:mt-0">Tasarım & Altyapı: Web Fabrikası</div>
      </div>
    </footer>
  );
}

