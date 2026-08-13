"use client";
import React from 'react';
import { Globe, Mail, MapPin } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
export function Footer() {
  return (
    <footer className="bg-[#0b1a2e] pt-24 pb-12 border-t border-[#c0c0c0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <ScrollRevealChild variant="fade-up" className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c0c0c0] to-white flex items-center justify-center">
                <span className="text-[#0b1a2e] font-serif font-bold text-xl">V</span>
              </div>
              <span className="text-white font-serif tracking-[0.2em] text-xl">VIP YACHT</span>
            </div>
            <p className="text-[#c0c0c0]/70 font-light text-sm leading-relaxed mb-6">
              Uluslararası sularda ultra-premium kiralama, transfer ve kişiye özel concierge hizmetleri sunan lider marka.
            </p>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-serif tracking-widest mb-6">KEÃ…ÂFEDİN</h4>
            <ul className="space-y-4">
              {['Filo', 'Destinasyonlar', 'Deneyimler', 'Club Oceania'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#c0c0c0]/70 hover:text-white transition-colors text-sm font-light">{link}</a>
                </li>
              ))}
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-serif tracking-widest mb-6">YASAL</h4>
            <ul className="space-y-4">
              {['Gizlilik Politikası', 'Kullanım Koşulları', 'Çerez Politikası', 'Sözleşmeler'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#c0c0c0]/70 hover:text-white transition-colors text-sm font-light">{link}</a>
                </li>
              ))}
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-serif tracking-widest mb-6">BÜLTEN</h4>
            <p className="text-[#c0c0c0]/70 font-light text-sm mb-4">Yeni rotalar ve özel davetler için kaydolun.</p>
            <div className="flex border border-[#c0c0c0]/30 focus-within:border-white transition-colors">
              <input type="email" placeholder="E-posta" className="bg-transparent text-white px-4 py-3 w-full focus:outline-none text-sm" />
              <button className="bg-white text-[#0b1a2e] px-4 font-bold min-h-[44px]">OK</button>
            </div>
            
            <div className="flex gap-4 mt-8">
              {[Globe, Mail, MapPin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-[#c0c0c0]/30 rounded-full flex items-center justify-center text-[#c0c0c0] hover:bg-white hover:text-[#0b1a2e] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </ScrollRevealChild>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" className="pt-8 border-t border-[#c0c0c0]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#c0c0c0]/50 text-xs font-light">
          <p>&copy; 2026 VIP Yacht & Transfer. Tüm hakları saklıdır.</p>
          <p>Mükemmellik ile Tasarlandı.</p>
        </ScrollReveal>
      </div>
    </footer>
  );
}




