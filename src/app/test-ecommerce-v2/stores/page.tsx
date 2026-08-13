"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

const stores = [
  {
    city: "İstanbul",
    name: "Şişli Merkez Mağaza",
    address: "Esentepe Mah. Büyükdere Cad. No: 199, Şişli",
    phone: "0212 123 45 67",
    hours: "10:00 - 22:00",
    image: "/images/sisli_store.jpg"
  },
  {
    city: "İstanbul",
    name: "Kadıköy Deneyim Merkezi",
    address: "Caferağa Mah. Moda Cad. No:123, Kadıköy",
    phone: "0216 123 45 67",
    hours: "09:00 - 21:00",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function StoresPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Mağazalarımız' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
         <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Size En Yakın Mağazamız.</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">TEKNOEMO deneyimini yerinde yaşamak, cihazları test etmek ve uzman ekibimizden destek almak için mağazalarımıza davetlisiniz.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stores.map((store, index) => (
               <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                     <div className="h-48 md:h-64 overflow-hidden relative">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-widest">
                           {store.city}
                        </div>
                        <img 
                           src={store.image} 
                           alt={store.name} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                     </div>
                     <div className="p-8 flex flex-col flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">{store.name}</h2>
                        
                        <div className="space-y-4 mb-8 flex-1">
                           <div className="flex items-start gap-3 text-slate-600">
                              <MapPin size={20} className="text-blue-600 shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{store.address}</span>
                           </div>
                           <div className="flex items-center gap-3 text-slate-600">
                              <Phone size={20} className="text-blue-600 shrink-0" />
                              <span className="text-sm font-medium">{store.phone}</span>
                           </div>
                           <div className="flex items-center gap-3 text-slate-600">
                              <Clock size={20} className="text-blue-600 shrink-0" />
                              <span className="text-sm">{store.hours}</span>
                           </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-4 rounded-xl border border-slate-200 transition-colors mt-auto">
                           Yol Tarifi Al <Navigation size={18} />
                        </button>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </FadeIn>
    </div>
  );
}
