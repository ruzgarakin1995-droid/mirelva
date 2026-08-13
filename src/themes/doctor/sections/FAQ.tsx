"use client";
import React from 'react';

const faqs = [
  { q: "Muayene için randevu almak zorunlu mu?", a: "Evet, bekleme sürenizi en aza indirmek ve doktorlarımızın programını verimli yönetmek için randevu ile hasta kabul ediyoruz. Acil durumlar haricindedir." },
  { q: "SGK veya özel sağlık sigortası geçerli mi?", a: "Tüm özel sağlık sigortaları ve tamamlayıcı sağlık sigortaları ile anlaşmamız bulunmaktadır. SGK anlaşmamız belirli bölümlerde geçerlidir." },
  { q: "Tahlil sonuçlarımı online görebilir miyim?", a: "Evet, e-Nabız sistemi ve web sitemizdeki 'Online İşlemler' menüsünden T.C. kimlik numaranızla tüm sonuçlarınıza ulaşabilirsiniz." },
  { q: "Yurtdışından gelecek hastalar için hizmetiniz var mı?", a: "Uluslararası Hasta Departmanımız, transfer, konaklama, tercümanlık ve tedavi süreçlerinde tam destek sağlamaktadır." }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Sıkça Sorulan Sorular</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[var(--surface-alt)] rounded-2xl border border-[var(--border)] overflow-hidden">
              <summary className="font-bold text-lg p-6 cursor-pointer flex justify-between items-center text-[var(--primary)] group-open:bg-[var(--primary)] group-open:text-white transition-colors">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform text-[var(--accent)]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7"/></svg>
                </span>
              </summary>
              <div className="p-6 text-[var(--muted)] bg-white leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

