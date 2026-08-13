"use client";

import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-serif tracking-widest font-bold text-white uppercase mb-6">Lumière</div>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Zamansız tasarımlar, üstün el işçiliği ve lüksün modern yorumu. Tarzınızı kusursuzluğa taşıyan detaylar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-gray-700 hover:bg-white hover:text-black transition-colors rounded-full">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Koleksiyonlar</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Yeni Gelenler</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kadın Giyim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Erkek Giyim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Çanta & Aksesuar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ayakkabı</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İndirim</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">Müşteri Hizmetleri</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bize Ulaşın</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kargo ve Teslimat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İade ve Değişim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sipariş Takibi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beden Tablosu</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest mb-6">İletişim</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Abdi İpekçi Cad. No: 45<br/>Şişli, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+90 850 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@lumiere.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Lumière. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

