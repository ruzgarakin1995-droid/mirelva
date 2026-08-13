"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { RefreshCcw, Box, Truck, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function ReturnsPage() {
  const steps = [
    { icon: Box, title: "1. Talebinizi Oluşturun", desc: "Hesabım sayfasından iade etmek istediğiniz ürünü seçip talebinizi iletin." },
    { icon: Truck, title: "2. Kargoya Teslim Edin", desc: "Size verilen ücretsiz iade kodu ile ürünü anlaşmalı kargoya verin." },
    { icon: Check, title: "3. Ücret İadenizi Alın", desc: "Ürün depomuza ulaştıktan sonra 3 iş günü içinde ücretiniz iade edilir." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'İptal ve İade Koşulları' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
               <RefreshCcw size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Kolay İade.</h1>
               <p className="text-slate-500">14 gün içinde koşulsuz şartsız iade hakkınız güvence altında.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-6">Nasıl iade edebilirim?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {steps.map((step, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                   <step.icon size={32} className="text-blue-600 mx-auto mb-4" />
                   <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                   <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
             ))}
          </div>

          <div className="prose prose-slate max-w-none">
             <h3 className="text-xl font-bold text-slate-900 mb-4">İade Koşulları</h3>
             <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>Ürünün orijinal ambalajı bozulmamış ve ürün kullanılmamış olmalıdır.</li>
                <li>Tek kullanımlık ürünler, hızlı bozulan veya son kullanma tarihi geçme ihtimali olan ürünler iade edilemez.</li>
                <li>Hijyen standartları gereği kulak içi kulaklıkların güvenlik bandı açıldıktan sonra iadesi mümkün değildir (arızalı ürünler hariç).</li>
                <li>Fatura ve varsa tüm aksesuarları eksiksiz gönderilmelidir.</li>
             </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
