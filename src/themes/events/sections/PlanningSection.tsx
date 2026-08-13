"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PlanningSection = () => {
  const steps = [
    { num: "01", title: "İlk Görüşme & Hayallerin Keşfi", desc: "Sizi dinliyor, tarzınızı, vizyonunuzu ve beklentilerinizi anlıyoruz." },
    { num: "02", title: "Konsept & Tasarım Sunumu", desc: "Size özel hazırladığımız moodboard, 3D çizimler ve dekorasyon detaylarını sunuyoruz." },
    { num: "03", title: "Tedarik & Bütçe Yönetimi", desc: "En iyi tedarikçilerle anlaşıyor, bütçenizi şeffaf ve kusursuz bir şekilde yönetiyoruz." },
    { num: "04", title: "Kusursuz Uygulama", desc: "Etkinlik günü arkanıza yaslanın; dev ekibimiz her saniyeyi bir orkestra şefi gibi yönetiyor." }
  ];

  return (
    <section className="w-full py-24 bg-[#E8DCC4] text-[#4A403A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Nasıl <span className="italic">Çalışıyoruz?</span></h2>
            <p className="max-w-2xl mx-auto font-light">Mükemmellik tesadüf değildir. Hayallerinizdeki o kusursuz güne giden yolu adım adım, büyük bir titizlikle planlıyoruz.</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-[#C19A6B]/30"></div>
          
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
              <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FDFBF7] flex items-center justify-center text-3xl font-serif text-[#C19A6B] mb-8 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              <p className="text-[#6B5E53] font-light text-sm">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;



