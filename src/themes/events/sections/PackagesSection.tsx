"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PackagesSection = () => {
  const packages = [
    {
      name: "Gümüş Zarafet",
      price: "İletişime Geçin",
      features: ["Mekan Danışmanlığı", "Standart Dekorasyon", "Fotoğraf & Video", "Temel Koordinasyon"]
    },
    {
      name: "Altın İhtişam",
      price: "İletişime Geçin",
      featured: true,
      features: ["Premium Mekan Seçimi", "Özel Tasarım Dekor", "Gelişmiş Prodüksiyon", "Tam Kapsamlı Yönetim", "VIP Transfer"]
    },
    {
      name: "Elmas Özel",
      price: "İletişime Geçin",
      features: ["Sınırsız Danışmanlık", "Haute Couture Tasarım", "Yurtdışı Mekan Seçenekleri", "Sanatçı Organizasyonu", "3 Günlük Etkinlik Planı"]
    }
  ];

  return (
    <section className="w-full py-24 bg-[#2A2421] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Hizmet Seçenekleri</span>
            <h2 className="text-3xl md:text-5xl font-serif">Kusursuz <span className="italic font-light">Deneyimler</span></h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
              <div className={`p-8 border ${pkg.featured ? 'border-[#C19A6B] bg-[#C19A6B]/10 py-12' : 'border-white/10 bg-white/5'} backdrop-blur-sm text-center transition-transform hover:-translate-y-2 duration-500`}>
                <h3 className="text-2xl font-serif text-[#FDFBF7] mb-2">{pkg.name}</h3>
                <p className="text-[#C19A6B] text-sm uppercase tracking-widest mb-8">{pkg.price}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-white/70 font-light text-sm">{feature}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-sm uppercase tracking-widest transition-colors ${pkg.featured ? 'bg-[#C19A6B] text-white hover:bg-[#A98458]' : 'border border-white/30 text-white hover:bg-white/10'}`}>
                  Detaylı Bilgi
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;



