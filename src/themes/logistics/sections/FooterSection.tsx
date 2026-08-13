"use client";
import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <ScrollRevealChild variant="fade-up">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">AKAS<span className="text-blue-500">LOJİSTİK</span></h3>
            <p className="text-sm mb-6 leading-relaxed">
              Modern çağın gereksinimlerine uygun, yenilikçi ve güvenilir uçtan uca lojistik hizmet sağlayıcısı.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Çözümlerimiz</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Denizyolu Taşımacılığı</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Havayolu Taşımacılığı</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karayolu Taşıma Ağları</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gümrükleme & Antrepo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Proje ve Ağır Nakliye</a></li>
            </ul>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kurumsal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sürdürülebilirlik Vizyonu</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kalite Belgelerimiz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Yatırımcı İlişkileri</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">İnsan Kaynakları</a></li>
            </ul>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Levent Lojistik Merkezi, Büyükdere Cad. No:15 Şişli / İstanbul</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+90 212 555 44 33</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>operasyon@globallogistics.com.tr</span>
              </li>
            </ul>
          </ScrollRevealChild>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" className="pt-8 border-t border-slate-900 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>&copy; 2026 Akas Lojistik A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-white transition-colors">Taşıma Şartları</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
