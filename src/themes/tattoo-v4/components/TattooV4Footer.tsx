"use client";
import React from 'react';
import Link from 'next/link';

export function TattooV4Footer() {
  return (
    <footer className="bg-[#131313] text-[#FAF9F6] pt-32 pb-12 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-serif leading-none tracking-tighter whitespace-nowrap">
          LA LIGNE
        </h2>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/test-tattoo-v4" className="inline-block mb-8">
                <span className="text-3xl font-serif tracking-widest text-[#FAF9F6]">La Ligne</span>
                <span className="block text-[10px] text-[#B59461] tracking-[0.3em] uppercase mt-2">/ Fine Line Studio</span>
              </Link>
              <p className="text-[#8C8A84] font-light leading-relaxed max-w-sm mb-12">
                Nişantaşı'nın kalbinde, bedeni bir sanat eseri olarak gören butik dövme stüdyosu. Kusursuz çizgiler, minimalist tasarımlar.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[10px] text-[#FAF9F6] font-semibold tracking-[0.2em] uppercase">Bekleme Listesi</h4>
              <p className="text-[#8C8A84] text-xs font-light">Randevu takvimimiz açıldığında ilk siz haberdar olun.</p>
              <div className="flex items-center border-b border-[#333] pb-2 max-w-sm group">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz..." 
                  className="bg-transparent border-none outline-none text-sm w-full text-[#FAF9F6] placeholder:text-[#555]"
                />
                <button className="text-[10px] uppercase tracking-widest text-[#B59461] hover:text-white transition-colors">
                  Katıl
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[10px] text-[#FAF9F6] font-semibold tracking-[0.2em] uppercase mb-8">İletişim</h4>
            <ul className="space-y-6 text-[#8C8A84] font-light text-sm">
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-[#555] mb-1">E-Posta</span>
                <a href="mailto:hello@laligne.com" className="hover:text-[#B59461] transition-colors">hello@laligne.com</a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-[#555] mb-1">Telefon</span>
                <a href="tel:+905551234567" className="hover:text-[#B59461] transition-colors">+90 (555) 123 45 67</a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-[#555] mb-1">Sosyal Medya</span>
                <a href="#" className="hover:text-[#B59461] transition-colors block">Instagram</a>
                <a href="#" className="hover:text-[#B59461] transition-colors block mt-1">Pinterest</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] text-[#FAF9F6] font-semibold tracking-[0.2em] uppercase mb-8">Stüdyo</h4>
            <p className="text-[#8C8A84] font-light text-sm leading-relaxed mb-8">
              Teşvikiye Mah. Hüsrev Gerede Cad.<br/>
              No: 45 D: 2<br/>
              Şişli, İstanbul
            </p>
            <h4 className="text-[10px] text-[#FAF9F6] font-semibold tracking-[0.2em] uppercase mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-[#8C8A84] font-light text-sm">
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span>Salı - Cumartesi</span>
                <span>11:00 - 19:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Pazar - Pazartesi</span>
                <span className="text-[#B59461]">Kapalı</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.1em] text-[#555] uppercase">
          <p>&copy; {new Date().getFullYear()} La Ligne Fine Line Studio. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#FAF9F6] transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-[#FAF9F6] transition-colors">Çerezler</Link>
            <Link href="#" className="hover:text-[#FAF9F6] transition-colors">Bakım Talimatları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
