'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQSection.css';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Şoförleriniz gizlilik sözleşmelerine tabi mi?",
      a: "Evet, mutlak gizlilik önceliğimizdir. Tüm şoförlerimiz, müşterilerimizin mahremiyetini korumak için katı gizlilik sözleşmeleri imzalar."
    },
    {
      q: "Belirli bir araç modeli talep edebilir miyim?",
      a: "Elbette. Müsaitlik durumuna bağlı olmakla birlikte, premium filomuzdan gelen özel araç taleplerini karşılamak için her zaman çaba gösteriyoruz."
    },
    {
      q: "Uçuş rötarlarında nasıl bir yol izliyorsunuz?",
      a: "Tüm uçuşları gerçek zamanlı olarak takip ediyoruz. Şoförünüz, rötar ne olursa olsun sizi beklediğinden emin olmak için varış saatini ayarlayacaktır."
    }
  ];

  return (
    <section className="vip-section faq-section">
      <h3 className="vip-section-subtitle">Bilgilendirme</h3>
      <h2 className="vip-section-title">Sıkça Sorulan Sorular</h2>
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-item glass-card ${openIdx === idx ? 'active' : ''}`}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="faq-header">
              <h4>{faq.q}</h4>
              {openIdx === idx ? <ChevronUp className="gold-text" /> : <ChevronDown className="gold-text" />}
            </div>
            {openIdx === idx && (
              <div className="faq-body">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
