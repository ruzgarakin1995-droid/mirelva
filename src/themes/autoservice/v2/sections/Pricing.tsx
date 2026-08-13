"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Standart Detay",
    desc: "Yüzeysel temizlik ve parlaklık arayanlar için.",
    price: "₺3.500",
    features: [
      "Detaylı Dış Yıkama",
      "Standart İç Temizlik",
      "Boya Koruyucu Cila",
      "Jant ve Lastik Bakımı"
    ]
  },
  {
    name: "Premium Yenileme",
    desc: "Araçlarında mükemmellik arayan tutkunlara özel.",
    price: "₺12.000",
    popular: true,
    features: [
      "Kil ile Dekontaminasyon",
      "3 Aşamalı Boya Düzeltme",
      "3 Yıllık Seramik Kaplama",
      "Detaylı Motor Temizliği",
      "İç Ozon Temizliği"
    ]
  },
  {
    name: "Üstün Koruma Kalkanı",
    desc: "Laboratuvar kalitesinde tam koruma ve izolasyon.",
    price: "₺25.000",
    features: [
      "Premium Yenileme Paketi",
      "Ön Kaput & Çamurluk PPF",
      "Jant ve Kaliper Seramiği",
      "Cam Su İtici Kaplama",
      "Deri Besleyici & Koruma"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-slate-900 tracking-tight mb-6">
            Şeffaf Hizmet Politikası
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Gizli maliyetler yok. Aracınızın ihtiyacına en uygun paketi seçin, gerisini mühendislik harikası süreçlerimize bırakın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-10 rounded-[2.5rem] border ${
                plan.popular 
                  ? 'border-blue-600 shadow-2xl shadow-blue-900/10' 
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  En Çok Tercih Edilen
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 font-light">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-medium transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Paketi Seç
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
