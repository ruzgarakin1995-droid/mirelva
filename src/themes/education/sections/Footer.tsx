"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="text-2xl font-black text-white tracking-tighter mb-6">GLOBAL<span className="text-blue-500">EDU</span></div>
            <p className="text-sm leading-relaxed mb-6">
              Sınırları aşan eğitim vizyonumuzla yarının teknolojilerini ve liderlerini şekillendiriyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><span className="w-4 h-4">Icon</span></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all"><span className="w-4 h-4">Icon</span></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><span className="w-4 h-4">Icon</span></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"><span className="w-4 h-4">Icon</span></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Hızlı Linkler</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Akademik Programlar</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kabul ve Kayıt</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Burs İmkanları</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kampüs Yaşamı</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Enstitüler</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Yapay Zeka Enstitüsü</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Veri Bilimleri Akademisi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Biyoteknoloji Araştırmaları</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">İnovasyon ve Girişimcilik</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Teknoloji Vadisi Kampüsü, İnovasyon Bulvarı No:1, 34000 İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+90 (850) 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@globaledu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; 2027 Global Edu. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};




