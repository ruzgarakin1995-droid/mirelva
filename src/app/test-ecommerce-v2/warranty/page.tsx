"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { ShieldCheck, Wrench, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function WarrantyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Garanti Şartları' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
               <ShieldCheck size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">TEKNOEMO Garantisi.</h1>
               <p className="text-slate-500">Tüm ürünlerimizde standart 2 yıl resmi Türkiye garantisi.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
               <Wrench className="text-blue-600 mt-1" size={24} />
               <div>
                  <h4 className="font-bold text-slate-900 mb-2">Yetkili Servis Desteği</h4>
                  <p className="text-sm text-slate-600">Satın aldığınız ürünlerde yaşayacağınız teknik problemlerde doğrudan markanın yetkili servislerinden destek alabilirsiniz.</p>
               </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
               <Clock className="text-blue-600 mt-1" size={24} />
               <div>
                  <h4 className="font-bold text-slate-900 mb-2">20 İş Günü Kuralı</h4>
                  <p className="text-sm text-slate-600">Servise verilen ürünlerin maksimum tamir süresi 20 iş günüdür. Aşılması durumunda ürün değişimi yapılır.</p>
               </div>
            </div>
          </div>

          <div className="space-y-6 text-slate-600">
             <h3 className="text-xl font-bold text-slate-900">Garanti Kapsamı Dışında Kalan Durumlar</h3>
             <ul className="list-disc pl-5 space-y-2">
                <li>Kullanıcı hatasından kaynaklanan fiziksel hasarlar (kırılma, çizilme, ezilme vb.).</li>
                <li>Sıvı teması (Ürünün suya dayanıklılık sertifikası olsa dahi servis onayı gerekir).</li>
                <li>Yetkisiz kişilerce veya servislerce cihazın içinin açılması, müdahale edilmesi.</li>
                <li>Voltaj dalgalanmaları veya standart dışı adaptör kullanımından kaynaklı arızalar.</li>
             </ul>
             <p className="pt-4 border-t border-slate-100 mt-8">
               Garanti işlemlerini başlatmak için <strong>0850 123 45 67</strong> numaralı destek hattımızı arayabilir veya doğrudan ürünün markasına ait resmi yetkili servislerle iletişime geçebilirsiniz.
             </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
