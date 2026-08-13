"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, RefreshCcw, Headphones } from 'lucide-react';

export function FashionFooter() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-b border-zinc-900 mb-16">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={32} strokeWidth={1.5} className="text-zinc-300 mb-4" />
            <h4 className="font-bold text-sm mb-2">Güvenli Alışveriş</h4>
            <p className="text-zinc-500 text-xs font-light max-w-[200px]">256-bit SSL şifreleme ile ödemeleriniz güvende.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck size={32} strokeWidth={1.5} className="text-zinc-300 mb-4" />
            <h4 className="font-bold text-sm mb-2">Hızlı Teslimat</h4>
            <p className="text-zinc-500 text-xs font-light max-w-[200px]">Aynı gün kargo ve ertesi gün teslimat seçeneği.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <RefreshCcw size={32} strokeWidth={1.5} className="text-zinc-300 mb-4" />
            <h4 className="font-bold text-sm mb-2">Kolay İade</h4>
            <p className="text-zinc-500 text-xs font-light max-w-[200px]">30 gün içinde koşulsuz şartsız iade hakkı.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Headphones size={32} strokeWidth={1.5} className="text-zinc-300 mb-4" />
            <h4 className="font-bold text-sm mb-2">7/24 Destek</h4>
            <p className="text-zinc-500 text-xs font-light max-w-[200px]">Uzman stil danışmanlarımız her an yanınızda.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-4">LOCİZSA<span className="font-light">.</span></h2>
            <p className="text-zinc-400 font-light text-sm max-w-sm mb-8 leading-relaxed">
              Modern yaşamın ritmine uygun, zamansız ve premium tasarımlar.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-zinc-900 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:col-span-2">
             <div>
               <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-zinc-400">Müşteri Hizmetleri</h3>
               <ul className="space-y-4 text-sm font-light text-zinc-300">
                 <li><Link href="/test-ecommerce/support" className="hover:text-white transition-colors">Destek Merkezi (SSS)</Link></li>
                 <li><Link href="/test-ecommerce/support" className="hover:text-white transition-colors">İade ve Kargo</Link></li>
                 <li><Link href="/test-ecommerce/tracking" className="hover:text-white transition-colors">Sipariş Takibi</Link></li>
               </ul>
             </div>

             <div>
               <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-zinc-400">Kurumsal</h3>
               <ul className="space-y-4 text-sm font-light text-zinc-300">
                 <li><Link href="/test-ecommerce/about" className="hover:text-white transition-colors">Hakkımızda & Vizyon</Link></li>
                 <li><Link href="/test-ecommerce/about" className="hover:text-white transition-colors">Sürdürülebilirlik</Link></li>
                 <li><Link href="/test-ecommerce/contact" className="hover:text-white transition-colors">İletişim & Mağazalar</Link></li>
               </ul>
             </div>
          </div>

          <div className="md:col-span-1">
             <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6 text-zinc-400">BÜLTEN</h3>
             <p className="text-sm font-light text-zinc-300 mb-4">Özel kampanyalar ve yeni koleksiyonlardan ilk siz haberdar olun.</p>
             <form className="relative" onSubmit={(e) => { e.preventDefault(); alert('Kayıt başarılı!'); }}>
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="w-full bg-zinc-900 border-b border-zinc-700 py-3 pl-4 pr-12 text-sm font-light focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                  required
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-zinc-400 hover:text-white transition-colors">
                   <ArrowRight size={18} strokeWidth={1.5} />
                </button>
             </form>
          </div>
          
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-500">
          <p>© {new Date().getFullYear()} LOCİZSA STUDIO. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
             <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}