"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

const faqs = [
  {
    q: "Siparişim kaç günde teslim edilir?",
    a: "Hafta içi saat 16:00'a kadar verilen siparişler aynı gün kargoya teslim edilmektedir. Bulunduğunuz şehre göre ortalama 1-3 iş günü içerisinde adresinize ulaşır."
  },
  {
    q: "Hangi kargo şirketleriyle çalışıyorsunuz?",
    a: "Tüm Türkiye'ye Yurtiçi Kargo, MNG Kargo ve Kolay Gelsin (Belirli bölgeler) ile gönderim sağlamaktayız. Sipariş ekranında kargo firmanızı seçebilirsiniz."
  },
  {
    q: "Taksit imkanınız var mı?",
    a: "Evet, anlaşmalı kredi kartlarına (Bonus, World, Maximum, Axess, Paraf, CardFinans) peşin fiyatına 3, 6 ve 9 aya varan taksit seçeneklerimiz mevcuttur."
  },
  {
    q: "Faturam elime ulaşmadı, ne yapmalıyım?",
    a: "E-arşiv faturalarınız siparişiniz kargoya verildiğinde otomatik olarak kayıtlı e-posta adresinize gönderilmektedir. Ayrıca 'Hesabım > Siparişlerim' sayfasından da indirebilirsiniz."
  },
  {
    q: "Kapıda ödeme seçeneği var mı?",
    a: "Güvenlik politikalarımız gereği şu anda sadece Kredi Kartı, Banka Kartı ve Havale/EFT ile ödeme kabul etmekteyiz. Kapıda ödeme seçeneğimiz bulunmamaktadır."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Sıkça Sorulan Sorular' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
               <HelpCircle size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Nasıl yardımcı olabiliriz?</h1>
               <p className="text-slate-500">Müşterilerimizin en çok merak ettiği sorular ve cevapları.</p>
            </div>
          </div>
          
          <div className="space-y-4">
             {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                   <button 
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                   >
                      <span>{faq.q}</span>
                      <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                   </button>
                   <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 border-t border-slate-200' : 'max-h-0'}`}>
                      <div className="px-6 py-5 text-slate-600 leading-relaxed text-sm md:text-base">
                         {faq.a}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
             <h3 className="font-bold text-blue-900 mb-2">Cevabınızı bulamadınız mı?</h3>
             <p className="text-blue-700 text-sm mb-4">Müşteri temsilcilerimiz size yardım etmek için hazır.</p>
             <a href="/test-ecommerce-v2/contact" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">Bize Ulaşın</a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
