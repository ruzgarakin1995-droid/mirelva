"use client";
import React from "react";
import { Scale, Link, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t-4 border-amber-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
              <Scale className="text-amber-500 w-8 h-8" />
              <span>Hukuk<span className="text-amber-500">Bürosu</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Modern hukukun dinamiklerini takip eden, müvekkil odaklı ve şeffaf hizmet anlayışıyla çalışan uzman hukuk bürosu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-700 hover:text-white transition-all">
                <Link className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-amber-700 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Çalışma Alanları</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ceza Hukuku</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Aile Hukuku</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ticaret Hukuku</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">İş ve Sosyal Güvenlik Hukuku</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Gayrimenkul Hukuku</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kurumsal</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ekibimiz</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Çalışma Saatleri</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Pazartesi - Cuma</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Cumartesi</span>
                <span className="text-white">10:00 - 14:00 (Sadece Randevu)</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Pazar</span>
                <span className="text-amber-500">Kapalı</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
