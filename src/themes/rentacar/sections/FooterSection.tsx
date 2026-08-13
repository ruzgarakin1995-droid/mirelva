"use client";
import React from 'react';
import { Globe, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const FooterSection = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <ScrollRevealChild variant="fade-up" className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-widest mb-6">VIP<span className="text-amber-500 font-light">RENTAL</span></h2>
            <p className="text-sm font-light leading-relaxed mb-6">
              Prestij, güvenlik ve konforun birleştiği nokta. Türkiye'nin en seçkin VIP araç kiralama ve transfer hizmeti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Hakkımızda</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Lüks Filomuz</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Hizmetlerimiz</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Kurumsal Çözümler</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> İletişim</a></li>
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Şžoförlü Araç Kiralama</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Havalimanı Transfer</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Protokol Hizmetleri</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Özel Jet Transferi</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-2" /> Düğün & Etkinlik</a></li>
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold uppercase tracking-wider mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Zorlu Center, Levent, Beşiktaş<br/>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>+90 (212) 555 00 00 (7/24)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                <span>vip@luxuryrental.com</span>
              </li>
            </ul>
          </ScrollRevealChild>
          
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; 2026 VIP Rental. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Kiralama Şžartları</a>
            <a href="#" className="hover:text-amber-500 transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default FooterSection;


