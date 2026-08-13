"use client";

import { motion } from 'framer-motion';

export function SalonServicesHome() {
  const services = [
    {
      title: "Klasik & Medikal Manikür",
      desc: "Tırnak etlerinin özenle temizlendiği, tırnak yapısının güçlendirildiği temel bakım ritüeli.",
      price: "₺450",
      img: "/salon/nail_manicure_service_1786239176905.jpg"
    },
    {
      title: "Jel Tırnak & Protez",
      desc: "Kusursuz uzunluk ve dayanıklılık arayanlar için profesyonel jel tırnak ve güçlendirme uygulamaları.",
      price: "₺950",
      img: "/salon/nail_hero_bg_1786239167194.jpg"
    },
    {
      title: "Özel Nail Art Tasarımı",
      desc: "Minimal çizgilerden gösterişli taş işlemelerine kadar, size özel tasarlanan mikroskobik sanat.",
      price: "₺300+",
      img: "/salon/nail_art_gold_1786239186528.jpg"
    }
  ];

  return (
    <section className="py-32 bg-[#FCFBF9] text-[#4A403F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Özenli <span className="italic text-[#D4A3A3] font-light">Dokunuşlar.</span>
            </h2>
            <p className="font-sans font-light text-[#4A403F]/70 leading-relaxed">
              Her detayın mükemmellik için tasarlandığı hizmetlerimizle tırnaklarınıza hak ettiği değeri verin. Kaliteli malzemeler ve ödüllü tekniklerle hizmetinizdeyiz.
            </p>
          </div>
          <button className="hidden md:block mt-8 md:mt-0 text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A403F] border-b border-[#D4A3A3] pb-1 hover:text-[#D4A3A3] transition-colors">
            Tüm Hizmetleri Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              key={service.title} 
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] mb-6 overflow-hidden bg-[#F0EBE6]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 mix-blend-multiply"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-serif group-hover:text-[#D4A3A3] transition-colors">{service.title}</h3>
                <span className="font-sans text-sm">{service.price}</span>
              </div>
              <p className="font-sans font-light text-sm text-[#4A403F]/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
