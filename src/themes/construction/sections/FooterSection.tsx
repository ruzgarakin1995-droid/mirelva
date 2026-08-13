"use client";

import React from "react";
import { Globe, Shield, Activity, Map } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const FooterSection = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <ScrollRevealChild variant="fade-up" className="lg:col-span-1">
            <div className="text-2xl font-black text-white tracking-tighter uppercase mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500"></div>
              PREMIUM İNŞAAT
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
              Yarım asırlık tecrübemizle, mühendislik etiğine bağlı, çevreye duyarlı ve teknoloji odaklı yapılar inşa ederek geleceği şekillendiriyoruz.
            </p>
            <div className="flex gap-4">
              {/* Instead of specific social icons, we use generic ones as requested */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Map className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Shield className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-colors">
                <Activity className="w-4 h-4" />
              </a>
            </div>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6">Kurumsal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Yönetim Kurulu</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Kalite Politikamız</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Yatırımcı İlişkileri</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">İnsan Kaynakları</a></li>
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6">Faaliyet Alanları</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Üstyapı Projeleri</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Altyapı Projeleri</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Endüstriyel Tesisler</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Gayrimenkul Geliştirme</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Restorasyon</a></li>
            </ul>
          </ScrollRevealChild>

          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-bold mb-6">Bize Ulaşın</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Levent, Büyükdere Cd. No:1<br />34330 Beşiktaş/İstanbul</li>
              <li className="text-slate-400 text-sm">T: +90 (212) 555 00 00</li>
              <li className="text-slate-400 text-sm">F: +90 (212) 555 00 01</li>
              <li className="text-slate-400 text-sm">E: info@premiuminşaat.com.tr</li>
            </ul>
          </ScrollRevealChild>
        </ScrollReveal>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Premium İnşaat A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">KVKK Aydınlatma Metni</a>
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

