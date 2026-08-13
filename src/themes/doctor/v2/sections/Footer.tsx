
"use client";
import React from 'react';
import { HeartPulse, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-24 pb-12 border-t border-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MedikaLight</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Aydınlık, temiz ve güvenilir sağlık hizmetinin adresi. Sağlığınız için modern çözümler üretiyoruz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Doktorlarımız</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kariyer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Branşlar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kardiyoloji</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Nöroloji</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Göz Hastalıkları</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Çocuk Sağlığı</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span className="text-gray-600">Sağlık Mah. Şifa Cad. No:123 Şişli / İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-gray-600">444 1 234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-gray-600">info@medikalight.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">© 2024 MedikaLight. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">Gizlilik Politikası</a>
            <a href="#" className="hover:text-blue-600">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
