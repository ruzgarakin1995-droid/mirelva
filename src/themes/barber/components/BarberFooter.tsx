"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function BarberFooter() {
  return (
    <footer className="bg-[#2A2522] text-[#F8F7F5] relative overflow-hidden pt-32 pb-12 border-t border-[#F8F7F5]/5">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[20vw] font-serif leading-none tracking-tighter whitespace-nowrap">BOMONTI</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-32 border-b border-[#F8F7F5]/10">
          
          {/* Brand & CTA Area */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Mirasınızı <br/> <span className="italic text-[#C1A68D] font-light">Şekillendirin.</span>
            </h2>
            <p className="text-sm font-sans font-light text-[#F8F7F5]/60 max-w-sm mb-12 leading-relaxed">
              Karaköy'ün kalbinde, zamansız erkek bakım ritüellerini modern bir lüks anlayışıyla sunuyoruz.
            </p>
            
            <button 
              onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
              className="group relative px-8 py-4 overflow-hidden border border-[#C1A68D] text-[#C1A68D] hover:text-[#2A2522] transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-[#C1A68D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
              <span className="relative z-10 text-[10px] font-sans tracking-[0.2em] uppercase">Randevu Oluştur</span>
            </button>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-10 border-t md:border-t-0 md:border-l border-[#F8F7F5]/10 md:pl-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#F8F7F5]/40 mb-4">İletişim</h3>
              <p className="font-serif text-lg hover:text-[#C1A68D] transition-colors cursor-pointer">+90 (555) 123 45 67</p>
              <p className="font-serif text-lg hover:text-[#C1A68D] transition-colors cursor-pointer mt-2">hello@bomonti.com</p>
            </div>
            <div>
              <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#F8F7F5]/40 mb-4">Lokasyon</h3>
              <p className="font-sans font-light text-sm text-[#F8F7F5]/80 leading-relaxed">
                Karaköy, Kemankeş Cd.<br/>
                No: 42, 34425<br/>
                Beyoğlu / İstanbul
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="md:col-span-3 flex flex-col gap-10 border-t md:border-t-0 md:border-l border-[#F8F7F5]/10 md:pl-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#F8F7F5]/40 mb-4">Çalışma Saatleri</h3>
              <ul className="flex flex-col gap-3 font-sans font-light text-sm text-[#F8F7F5]/80">
                <li className="flex justify-between"><span>Hafta İçi</span> <span>10:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Cumartesi</span> <span>10:00 - 18:00</span></li>
                <li className="flex justify-between text-[#F8F7F5]/40"><span>Pazar</span> <span>Kapalı</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#F8F7F5]/40 mb-4">Sosyal Medya</h3>
              <div className="flex gap-6">
                <a href="#" className="font-serif text-lg hover:text-[#C1A68D] transition-colors">Instagram</a>
                <a href="#" className="font-serif text-lg hover:text-[#C1A68D] transition-colors">Spotify</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] font-sans tracking-widest uppercase text-[#F8F7F5]/30">
          <p>© {new Date().getFullYear()} BOMONTI HAIR STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#F8F7F5] transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-[#F8F7F5] transition-colors">Çerezler</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
