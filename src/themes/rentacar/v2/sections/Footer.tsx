"use client";
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-4 text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-white font-bold text-3xl tracking-tighter mb-6">LÜKS<span className="text-orange-500">.</span>Kiralama</div>
          <p className="max-w-md text-slate-400 mb-8">
            Türkiye'nin dört bir yanında, en prestijli araç kiralama deneyimini yaşayın. Geniş filomuz ve 7/24 müşteri hizmetlerimizle yolculuğunuzun her anında yanınızdayız.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-colors cursor-pointer flex items-center justify-center">X</div>
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-colors cursor-pointer flex items-center justify-center">in</div>
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-colors cursor-pointer flex items-center justify-center">ig</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hızlı Bağlantılar</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Araç Filomuz</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kampanyalar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ofislerimiz</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kurumsal Kiralama</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Yasal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Kiralama Koşulları</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
            <li><a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Çerez Politikası</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} LÜKS Kiralama (Ödüllü Ajans Demosu). Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <span>Tasarım: Ödüllü Dijital Ajans</span>
        </div>
      </div>
    </footer>
  );
}
