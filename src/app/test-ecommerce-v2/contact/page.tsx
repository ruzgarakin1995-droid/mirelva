"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'İletişim' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
         <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Bizimle İletişime Geçin.</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşmaktan çekinmeyin.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-4">
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                     <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Müşteri Hizmetleri</h3>
                  <p className="text-blue-600 font-semibold text-lg">0850 123 45 67</p>
                  <p className="text-xs text-slate-500 mt-2">Hafta içi: 09:00 - 18:00</p>
               </div>
               
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                     <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">E-Posta</h3>
                  <p className="text-slate-600">destek@teknoemo.com.tr</p>
                  <p className="text-xs text-slate-500 mt-2">Ortalama yanıt süresi: 2 saat</p>
               </div>

               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Merkez Ofis</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Teknoloji Vadisi, Levent Mah. <br/>Büyükdere Cad. No: 123<br/>Şişli / İstanbul</p>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-center">
                  {sent ? (
                     <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                           <Send size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Mesajınız Alındı!</h3>
                        <p className="text-slate-600">En kısa sürede tarafınıza geri dönüş sağlanacaktır. İlginiz için teşekkür ederiz.</p>
                        <button onClick={() => setSent(false)} className="mt-4 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors">Yeni Mesaj Gönder</button>
                     </div>
                  ) : (
                     <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Mesaj Gönderin</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                              <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-slate-700 mb-2">E-Posta</label>
                              <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Konu</label>
                           <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors">
                              <option>Sipariş Durumu</option>
                              <option>Ürün İade/Değişim</option>
                              <option>Teknik Destek</option>
                              <option>Öneri ve Şikayet</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                           <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full h-14 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                           Gönder <Send size={18} />
                        </button>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </FadeIn>
    </div>
  );
}
