"use client";
import React from 'react';
import Link from 'next/link';
import EventsHeader from '../components/EventsHeader';
import EventsFooter from '../components/EventsFooter';

export default function EventsServicesPage() {
  const services = [
    {
      id: "dugun",
      title: "Düğün Organizasyonu",
      desc: "Hayatınızın en özel gününde her detayın kusursuz olması için buradayız. Lüks ve zarif konseptlerimizle hayalinizdeki düğünü gerçeğe dönüştürüyoruz.",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "kurumsal",
      title: "Kurumsal Etkinlikler",
      desc: "Lansmanlar, şirket yemekleri ve prestijli kurumsal davetleriniz için profesyonel çözümler sunuyoruz. Markanızın imajını en iyi şekilde yansıtan tasarımlar hazırlıyoruz.",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "ozel-kutlamalar",
      title: "Özel Kutlamalar",
      desc: "Doğum günleri, yıldönümleri ve bekarlığa veda partileri gibi tüm özel anlarınızı lüks ve zarafetle taçlandırıyoruz.",
      img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "catering",
      title: "Catering & Menü",
      desc: "Usta şeflerin ellerinden çıkan enfes lezzetlerle misafirlerinize unutulmaz bir gastronomi deneyimi sunuyoruz.",
      img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "evde-nisan-soz",
      title: "Evde Nişan & Söz Organizasyonu",
      desc: "Aile arasındaki en anlamlı ilk adımlarınızda, sıcak, şık ve unutulmaz butik konseptlerle yanınızdayız.",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden ">
        <section className="relative w-full h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Hizmetlerimiz Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Hizmetlerimiz</h1>
            <p className="text-white/80 font-light max-w-xl mx-auto">Her detayı sizin için özenle planlanan kusursuz deneyimler.</p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <img src={service.img} alt={service.title} className="w-full h-[400px] md:h-[500px] object-cover" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[#C19A6B] uppercase tracking-widest text-xs mb-4">Servis {String(index + 1).padStart(2, '0')}</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#1A1614] mb-6">{service.title}</h2>
                  <p className="text-[#4A403A]/80 font-light text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href={`/test-events/hizmetler/${service.id}`} className="self-start border border-[#C19A6B] text-[#C19A6B] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-colors duration-300">
                    Detayları Keşfet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <EventsFooter />
    </div>
  );
}
