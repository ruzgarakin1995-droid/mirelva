"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Ne tür davalara bakıyorsunuz?", a: "Sadece yüksek riskli ticari ihtilaflar, beyaz yaka ceza savunması, karmaşık aile hukuku davaları ve yüksek değerli fikri mülkiyet uyuşmazlıklarına odaklanıyoruz." },
  { q: "Ücretlendirme politikanız nasıldır?", a: "Ücret yapımız, sunduğumuz hukuki temsilin üst düzey niteliğini yansıtmaktadır. Saatlik faturalandırma, belirli hizmetler için sabit ücretler ve nadiren belirli ticari davalar için başarıya endeksli anlaşmalar sunuyoruz. Üstlendiğimiz tüm yeni dosyalar için avans ödemesi (retainer) talep edilmektedir." },
  { q: "Davamı bir yönetici ortak mı yönetecek?", a: "Evet. Dosyaların daha az deneyimli avukatlara devredildiği büyük hukuk firmalarının aksine, butik modelimiz sayesinde davanızın her aşaması bizzat kıdemli bir ortak tarafından yönetilir ve titizlikle takip edilir." },
  { q: "İlk danışmanlık hizmeti sunuyor musunuz?", a: "Potansiyel müvekkillerimizin hukuki durumlarının esasına ilişkin değerlendirme yapmak ve büromuzun sürece uygunluğunu belirlemek amacıyla ön strateji toplantıları düzenliyoruz. Bu toplantıyı talep etmek için iletişim formumuzu kullanabilirsiniz." }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="law-section law-section-alt">
      <div className="law-container grid grid-2">
        <div>
          <h4 className="law-subtitle">Bilgilendirme</h4>
          <h2 className="law-title">Sıkça Sorulan Sorular</h2>
          <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Hukuki temsil yaklaşımımız hakkında detaylı bilgi edinin. Meselenizle ilgili spesifik sorularınız için lütfen doğrudan ofislerimizle iletişime geçiniz.
          </p>
          <button className="law-btn law-btn-primary">Bize Ulaşın</button>
        </div>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--law-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '1rem 0',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: 'var(--law-text)',
                  textAlign: 'left'
                }}
              >
                {faq.q}
                <span style={{ color: 'var(--law-accent)', fontSize: '1.5rem' }}>
                  {openIdx === idx ? 'âˆ’' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ paddingBottom: '1rem', color: 'var(--law-text-muted)', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


