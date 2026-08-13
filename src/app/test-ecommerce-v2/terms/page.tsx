"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { FileSignature, ScrollText } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Mesafeli Satış Sözleşmesi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0">
               <FileSignature size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Mesafeli Satış Sözleşmesi.</h1>
               <p className="text-slate-500 font-medium">Satın alma sürecindeki yasal haklarınız ve yükümlülükler.</p>
            </div>
          </div>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
             
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-slate-900 mb-2">Madde 1: Taraflar</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <strong className="block text-slate-800 mb-1">Satıcı:</strong>
                      Unvanı: TEKNOEMO Elektronik Tic. A.Ş.<br/>
                      Adresi: Levent Mah. Büyükdere Cad. Şişli/İstanbul<br/>
                      Telefon: 0850 123 45 67<br/>
                      E-posta: destek@teknoemo.com.tr
                   </div>
                   <div>
                      <strong className="block text-slate-800 mb-1">Alıcı:</strong>
                      Alıcı, siparişi oluşturan ve siteye üye olan/misafir alışveriş yapan gerçek veya tüzel kişidir. İletişim bilgileri sipariş ekranında beyan edildiği şekildedir.
                   </div>
                </div>
             </div>

             <h4 className="font-bold text-slate-900 text-lg">Madde 2: Sözleşmenin Konusu</h4>
             <p className="pl-4 border-l-2 border-slate-200">
                İşbu sözleşmenin konusu, Alıcı'nın Satıcı'ya ait web sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
             </p>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 3: Sözleşme Konusu Ürün/Hizmet</h4>
             <p>
                Ürünlerin cinsi ve türü, miktarı, marka/modeli, rengi, satış bedeli, ödeme şekli ve teslimat bilgileri alışveriş sepetinde ve ödeme sayfasında açıkça beyan edilmiştir.
             </p>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 4: Genel Hükümler</h4>
             <ul className="space-y-3 list-decimal pl-5">
                <li>Alıcı, web sitesinde sözleşme konusu ürünün temel nitelikleri, tüm vergiler dahil satış fiyatı, ödeme şekli ve teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</li>
                <li>Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile Alıcı'nın yerleşim yerinin uzaklığına bağlı olarak ön bilgiler içinde açıklanan süre içinde Alıcı veya gösterdiği adresteki kişi/kuruluşa teslim edilir.</li>
                <li>Sözleşme konusu ürünün teslimatı için işbu sözleşmenin elektronik ortamda onaylanmış olması ve bedelinin Alıcı'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilirse, Satıcı ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</li>
                <li>Satıcı mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu Alıcı'ya bildirmekle yükümlüdür.</li>
             </ul>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 5: Cayma Hakkı</h4>
             <p className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                Alıcı, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren <strong>14 (ondört) gün</strong> içinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir. Cayma hakkının kullanımı için bu süre içinde Satıcı'ya yazılı bildirimde bulunulması şarttır. Kurulumu servis tarafından yapılan ürünlerin kutusunun açılması veya kullanılması halinde cayma hakkı kullanılamaz.
             </p>

             <div className="flex items-center gap-2 mt-8 text-slate-400">
                <ScrollText size={16} />
                <span className="text-xs">Son Güncelleme: 01.08.2026</span>
             </div>
             
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
