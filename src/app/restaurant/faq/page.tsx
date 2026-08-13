import React from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    { q: "Çalışma saatleriniz nelerdir?", a: "Haftanın her günü 12:00 - 24:00 saatleri arasında hizmet vermekteyiz." },
    { q: "Rezervasyon zorunlu mu?", a: "Özellikle akşam yemekleri ve hafta sonları için rezervasyon yaptırmanızı önemle tavsiye ederiz." },
    { q: "Otopark veya vale hizmetiniz var mı?", a: "Evet, misafirlerimize özel ücretsiz vale hizmetimiz bulunmaktadır." },
    { q: "Vegan / Vejetaryen seçenekleriniz mevcut mu?", a: "Menümüzde her damak tadına uygun, şefimizin özel olarak hazırladığı vegan ve vejetaryen seçenekler mevcuttur." },
    { q: "Kıyafet zorunluluğu (Dress Code) var mı?", a: "Misafirlerimizin rahatlığı bizim için önemli olsa da, akşam yemeklerinde 'Smart Casual' (Şık Spor) giyim tercih edilmesini rica ederiz." }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-4 text-center">Sıkça Sorulan Sorular</h1>
        <p className="text-stone-500 text-center mb-16">Köhne deneyimi hakkında merak ettikleriniz.</p>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
              <p className="text-stone-500">{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-6">Başka bir sorunuz mu var?</p>
          <Link href="/restaurant/contact" className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors">
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
}
