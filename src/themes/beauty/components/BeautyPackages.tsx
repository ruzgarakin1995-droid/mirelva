"use client";

import { motion } from 'framer-motion';

export function BeautyPackages() {
  const packages = [
    {
      title: "Mükemmel Uyum",
      price: "3.250",
      originalPrice: "3.450",
      description: "El ve ayaklarınız için eşzamanlı kusursuz bakım.",
      features: [
        "Kalıcı Oje El (Manikür Dahil)",
        "Kalıcı Oje Ayak (Pedikür Dahil)",
        "El & Ayak Peeling Masajı"
      ]
    },
    {
      title: "La Ville Signature",
      price: "6.900",
      originalPrice: "7.700",
      description: "Baştan aşağı yenilenmek isteyenler için VIP deneyim.",
      isPopular: true,
      features: [
        "Japon Manikürü (Özel Doğal Parlatıcı)",
        "Pedikür + Ayak Detoksu",
        "Kirpik Laminasyon",
        "Altın Oran Kaş Tasarımı"
      ]
    },
    {
      title: "Göz Alıcı Bakışlar",
      price: "5.500",
      originalPrice: "6.050",
      description: "Yüzünüzün çerçevesini yeniden boyutlandıran derinlik.",
      features: [
        "Kirpik Laminasyon",
        "Kaş Laminasyonu",
        "Kaş Vitamini Kürü",
        "Tüm Yüz Ağda"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#FAF5F0] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Özel Deneyimler</span>
            <div className="w-12 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B]"
          >
            İmza Paketlerimiz
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`
                relative p-8 md:p-12 border transition-all duration-500
                ${pkg.isPopular 
                  ? 'bg-[#3E2B2B] text-[#FAF5F0] border-transparent shadow-2xl scale-105 z-10' 
                  : 'bg-transparent text-[#3E2B2B] border-[#3E2B2B]/10 hover:border-[#D4A373] hover:shadow-xl'
                }
              `}
            >
              {pkg.isPopular && (
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="text-[8px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">En Çok Tercih Edilen</span>
                </div>
              )}
              
              <div className={`mt-6 mb-8 pb-8 border-b ${pkg.isPopular ? 'border-[#FAF5F0]/10' : 'border-[#3E2B2B]/10'}`}>
                <h3 className="text-2xl font-serif mb-4">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-serif text-[#D4A373]">₺{pkg.price}</span>
                  <span className={`text-sm line-through ${pkg.isPopular ? 'text-[#FAF5F0]/40' : 'text-[#3E2B2B]/40'}`}>₺{pkg.originalPrice}</span>
                </div>
                <p className={`font-sans text-sm ${pkg.isPopular ? 'text-[#FAF5F0]/70' : 'text-[#3E2B2B]/70'}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 mb-12">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <svg className={`w-4 h-4 mt-0.5 ${pkg.isPopular ? 'text-[#D4A373]' : 'text-[#3E2B2B]/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`font-sans text-sm ${pkg.isPopular ? 'text-[#FAF5F0]/90' : 'text-[#3E2B2B]/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                 onClick={() => window.dispatchEvent(new Event('openBeautyBooking'))} 
                 className={`
                  w-full py-4 text-[10px] font-sans font-medium tracking-[0.2em] uppercase transition-colors rounded
                  ${pkg.isPopular 
                    ? 'bg-[#D4A373] text-[#FAF5F0] hover:bg-[#FAF5F0] hover:text-[#3E2B2B]' 
                    : 'border border-[#3E2B2B]/20 hover:border-[#3E2B2B] hover:bg-[#3E2B2B] hover:text-[#FAF5F0]'
                  }
                `}
              >
                Hemen Rezerve Et
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
