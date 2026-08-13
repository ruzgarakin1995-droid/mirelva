"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { MapPin, Phone, Mail, MoveRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <FadeIn>
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA', href: '/test-ecommerce' },
            { label: 'İletişim & Mağazalar' }
          ]} 
          className="mb-8"
        />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Bize <span className="font-bold">Ulaşın</span></h1>
          <p className="text-zinc-500 font-light leading-relaxed">
            Sorularınız, önerileriniz veya toptan satış talepleriniz için ekibimizle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
           {/* Contact Form */}
           <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8 tracking-tight">Mesaj Gönderin</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mesajınız alındı!"); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">Ad Soyad</label>
                       <input type="text" className="w-full border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent" required />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">E-Posta</label>
                       <input type="email" className="w-full border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent" required />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">Konu</label>
                    <select className="w-full border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent appearance-none">
                       <option>Sipariş Durumu</option>
                       <option>İade ve Değişim</option>
                       <option>Ürün Bilgisi</option>
                       <option>Toptan Satış</option>
                       <option>Diğer</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">Mesajınız</label>
                    <textarea rows={4} className="w-full border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent" required></textarea>
                 </div>
                 <button className="bg-zinc-900 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors flex items-center gap-2">
                    Gönder <MoveRight size={16} />
                 </button>
              </form>
           </div>

           {/* Contact Info */}
           <div className="lg:w-1/3 space-y-12 bg-zinc-50 p-8 md:p-12">
              <div>
                 <h3 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Phone size={18} /> Müşteri Hizmetleri</h3>
                 <p className="text-2xl font-light tracking-tighter mb-2">0850 123 45 67</p>
                 <p className="text-sm font-light text-zinc-500">Pzt - Cum: 09:00 - 18:00</p>
              </div>
              <div>
                 <h3 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><Mail size={18} /> E-Posta</h3>
                 <p className="text-lg font-light mb-2">destek@locizsa.studio</p>
                 <p className="text-sm font-light text-zinc-500">24 saat içinde yanıtlanır.</p>
              </div>
              <div>
                 <h3 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={18} /> Merkez Ofis</h3>
                 <p className="text-sm font-light leading-relaxed text-zinc-600">
                    Esentepe Mah. Büyükdere Cad.<br />
                    No: 123 Levent / İstanbul
                 </p>
              </div>
           </div>
        </div>

        {/* Stores */}
        <div>
           <h2 className="text-3xl font-light tracking-tighter mb-12 text-center">Flagship <span className="font-bold">Mağazalarımız</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden bg-zinc-100 aspect-video">
                 <img src="/images/fashion/store.jpg" alt="Nişantaşı Mağazası" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/20" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">Nişantaşı, İstanbul</h3>
                    <p className="font-light text-sm opacity-90">Abdi İpekçi Cad. No: 45</p>
                 </div>
              </div>
              <div className="group relative overflow-hidden bg-zinc-100 aspect-video">
                 <img src="/images/fashion/store.jpg" alt="Alsancak Mağazası" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/20" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">Alsancak, İzmir</h3>
                    <p className="font-light text-sm opacity-90">Gül Sokak No: 12</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
        </div>
    </FadeIn>
  );
}