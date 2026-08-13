"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Shield, Lock, FileText } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Gizlilik Sözleşmesi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
               <Shield size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Gizlilik Sözleşmesi.</h1>
               <p className="text-slate-500 font-medium">Verilerinizin güvenliği ve gizliliği bizim için en önemli önceliktir.</p>
            </div>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-base">
             
             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">1</div>
                   Sözleşmenin Amacı
                </h3>
                <p className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                   İşbu Gizlilik Sözleşmesi, TEKNOEMO (bundan böyle "Şirket" olarak anılacaktır) tarafından işletilen web sitesini (bundan böyle "Site" olarak anılacaktır) kullanan tüm kullanıcıların ve müşterilerin (bundan böyle "Kullanıcı" olarak anılacaktır) kişisel verilerinin toplanması, kullanılması, saklanması ve korunması süreçlerini düzenlemeyi amaçlar.
                </p>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">2</div>
                   Toplanan Veriler
                </h3>
                <p className="mb-4">
                   Kullanıcıların Site'ye kaydolması, alışveriş yapması, bültenlere abone olması veya destek hizmetlerinden faydalanması sırasında aşağıdaki kişisel veriler toplanabilir:
                </p>
                <ul className="space-y-2 pl-4">
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (fatura süreçleri için).</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, fatura ve teslimat adresleri.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Finansal Bilgiler:</strong> Kredi kartı numarası, banka hesap bilgileri (Bu bilgiler şirket sunucularında tutulmaz, aracı ödeme kuruluşları tarafından doğrudan işlenir).</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Dijital İzler:</strong> IP adresi, tarayıcı tipi, Site içi dolaşım alışkanlıkları ve çerez (cookie) verileri.</span>
                   </li>
                </ul>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">3</div>
                   Verilerin Kullanım Amacı
                </h3>
                <p>
                   Toplanan kişisel verileriniz, yalnızca size sunulan hizmetin kalitesini artırmak amacıyla işlenir. Siparişlerinizin sorunsuz bir şekilde tarafınıza ulaştırılması, müşteri hizmetleri taleplerinizin karşılanması, yasal faturalandırma yükümlülüklerinin yerine getirilmesi ve açık rızanız olması kaydıyla kampanya bilgilendirmelerinin yapılması temel işleme amaçlarımızdır.
                </p>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">4</div>
                   Çerez (Cookie) Kullanımı
                </h3>
                <p>
                   Sitemizde, kullanıcı deneyimini iyileştirmek, Site performansını analiz etmek ve kişiselleştirilmiş reklamlar sunmak amacıyla çerezler kullanılmaktadır. Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman sınırlandırabilir veya tamamen engelleyebilirsiniz.
                </p>
             </section>

             <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-blue-800 flex gap-4 items-start">
                <FileText className="shrink-0 mt-1" size={24} />
                <p>
                   Gizlilik Sözleşmesi ile ilgili detaylı bilgi almak veya verilerinizin silinmesini talep etmek için dilediğiniz zaman <strong>destek@teknoemo.com.tr</strong> adresinden bizimle iletişime geçebilirsiniz.
                </p>
             </div>
             
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
