"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const PremiumFooter = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Massive CTA Section within Footer */}
        <div className="mb-32 pb-32 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            HAREKETE<br/>GEÇİN.
          </h2>
          <button className="group flex items-center justify-between w-full md:w-[300px] bg-white text-black p-2 pr-6 rounded-full font-bold text-xl hover:bg-blue-600 hover:text-white transition-colors duration-500">
            <span className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </span>
            <span>Rezervasyon</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-black tracking-tighter mb-6">
              LUXE<span className="text-blue-600">DRIVE</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Sınırları yeniden çizen, zamanın ötesinde bir seyahat deneyimi. Ultra lüks araç kiralama ve VIP şoför hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">HİZMETLER</h4>
            <ul className="space-y-4">
              {['Şoförlü Kiralama', 'Havalimanı Transferi', 'Kurumsal Filo', 'Özel Etkinlikler', 'Uzun Dönem Kiralama'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">FİLO</h4>
            <ul className="space-y-4">
              {['Ultra Lüks', 'Birinci Sınıf Sedan', 'Lüks SUV', 'Premium Minivan', 'Spor Araçlar'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">İLETİŞİM</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li>Zorlu Center, Levent, İstanbul</li>
              <li>info@luxedrive.com</li>
              <li>+90 (212) 555 00 00</li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="text-white/50 hover:text-white transition-colors uppercase font-bold tracking-widest">IG</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors uppercase font-bold tracking-widest">X</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors uppercase font-bold tracking-widest">IN</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/30 text-xs font-medium tracking-wider">
          <p>© 2026 LUXEDRIVE. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
