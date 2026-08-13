"use client";
import React from "react";
import { Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FDFBF7] pt-24 pb-12 border-t border-black/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-6 h-6 text-amber-700" />
              <span className="text-xl font-serif font-medium tracking-wider text-zinc-900">STUDIO<span className="italic font-light">ARCH</span></span>
            </div>
            <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6 max-w-xs">
              Mekan ve insanın uyum içinde var olduğu, estetik ve fonksiyonelliği birleştiren zamansız mimari tasarımlar.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-6">Hızlı Menü</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Projeler</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Hizmetlerimiz</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Hakkımızda</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-6">Hizmetler</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Mimari Tasarım</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">İç Mimari</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Kentsel Tasarım</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-700 transition-colors font-light text-sm">Restorasyon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-6">Bülten</h4>
            <p className="text-zinc-500 font-light text-sm mb-4">Mimari dünyasından güncel haberler ve projelerimiz için kayıt olun.</p>
            <div className="flex border-b border-zinc-300 pb-2">
              <input 
                type="email" 
                placeholder="E-Posta adresiniz" 
                className="bg-transparent w-full focus:outline-none text-zinc-900 font-light text-sm placeholder-zinc-400"
              />
              <button className="text-xs font-medium uppercase tracking-wider text-zinc-900 hover:text-amber-700 transition-colors">
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
          <p className="text-zinc-400 font-light text-xs">
            &copy; {new Date().getFullYear()} StudioArch. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs text-zinc-400 font-light">
            <a href="#" className="hover:text-zinc-900 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
