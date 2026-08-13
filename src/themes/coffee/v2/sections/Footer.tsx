'use client';

import { Coffee, Camera, MessageSquare, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-stone-200" />
              <span className="text-lg font-medium tracking-widest text-stone-200">ROAST.</span>
            </div>
            <p className="max-w-sm mb-6">
              Endüstriyel standartlarda, zanaatkar hassasiyetiyle kavrulmuş 
              specialty kahve deneyimi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-stone-200 transition-colors"><Camera className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-200 transition-colors"><MessageSquare className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-200 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-200 font-medium mb-6 uppercase tracking-wider text-sm">Keşfet</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-stone-200 transition-colors">Kahveler</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Abonelik</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Kavurma Evimiz</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Ekipmanlar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-200 font-medium mb-6 uppercase tracking-wider text-sm">Bize Ulaşın</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-stone-200 transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Toptan Satış</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} ROAST. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-200 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-stone-200 transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
