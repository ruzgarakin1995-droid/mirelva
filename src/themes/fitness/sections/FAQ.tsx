"use client";
import React from 'react';

export function FAQ() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter">SIK SORULANLAR</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Üyelikler için taahhüt gerekiyor mu?", a: "Hem aydan aya hem de yıllık taahhüt seçeneklerimiz mevcuttur. Yıllık planlarda %20 indirim avantajı sunuyoruz." },
            { q: "Katılmak için fit olmam şart mı?", a: "Programlarımız her seviyeye göre ölçeklendirilebilir. Sizinle olduğunuz yerden başlar, olmak istediğiniz yere kadar eşlik ederiz." },
            { q: "Ücretsiz deneme sürecine neler dahil?", a: "Bir adet kişisel antrenör değerlendirmesi, tüm grup derslerine katılım ve tesisin tam kullanımını içeren 3 günlük erişim hakkı." },
            { q: "Kişisel antrenörler sertifikalı mı?", a: "Tüm antrenörlerimiz elit seviye sertifikalara ve en az 5 yıllık profesyonel koçluk deneyimine sahiptir." }
          ].map((faq, i) => (
            <details key={i} className="group border-b border-white/10 pb-4">
              <summary className="text-xl font-bold uppercase tracking-wide cursor-pointer list-none flex justify-between items-center py-4 hover:text-cyan-400 transition-colors">
                {faq.q}
                <span className="text-cyan-400 group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <p className="text-gray-400 font-light pb-4 pl-4 border-l-2 border-cyan-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

