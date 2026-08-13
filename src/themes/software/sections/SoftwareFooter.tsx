"use client";

import React from "react";
import { Code2, Globe } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const SoftwareFooter = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <ScrollReveal staggerChildren staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <ScrollRevealChild variant="fade-up" className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NexusCore</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Modern geliştirici takımları için yüksek performanslı, ölçeklenebilir ve güvenli API altyapısı sunan yeni nesil bulut platformu.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold mb-6">Ürün</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Kurumsal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sürüm Notları</a></li>
            </ul>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold mb-6">Geliştiriciler</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Dokümantasyon</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Referansı</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">SDK'lar</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Açık Kaynak</a></li>
            </ul>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up">
            <h4 className="text-white font-semibold mb-6">Şirket</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sistem Durumu</a></li>
            </ul>
          </ScrollRevealChild>
        </ScrollReveal>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NexusCore Inc. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">Güvenlik</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

