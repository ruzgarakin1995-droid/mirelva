"use client";
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
              <Zap className="w-6 h-6 text-blue-500" />
              <span>LabDetailing</span>
            </div>
            <p className="max-w-sm font-light leading-relaxed">
              Klinik temizlik ve şeffaf hizmet anlayışıyla aracınıza laboratuvar hassasiyetinde bakım yapıyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Hızlı Menü</h4>
            <ul className="space-y-4 font-light">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Süreç</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Paketler</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">İletişim</h4>
            <ul className="space-y-4 font-light">
              <li>info@labdetailing.com</li>
              <li>+90 (555) 123 45 67</li>
              <li>Levent, İstanbul</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between font-light text-sm">
          <p>© 2026 LabDetailing. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-white transition-colors">Şartlar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
