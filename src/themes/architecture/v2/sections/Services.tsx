"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Mimari Tasarım",
    category: "Konsept & Uygulama",
    description: "Modern, minimalist ve sürdürülebilir mimari projeler geliştiriyoruz. Fikirden anahtar teslime kadar tüm tasarım süreçlerini yönetiyoruz.",
  },
  {
    title: "İç Mimari",
    category: "Mekan & Yaşam",
    description: "Yaşam alanlarınızı estetik ve fonksiyonellikle buluşturuyoruz. Size özel mobilya tasarımları ve malzeme seçimleriyle benzersiz mekanlar yaratıyoruz.",
  },
  {
    title: "Kentsel Tasarım",
    category: "Çevre & Şehir",
    description: "Şehir dokusuna uyumlu, insan odaklı kamusal alanlar tasarlıyoruz. Peyzaj ve çevre düzenlemeleriyle doğayı şehre entegre ediyoruz.",
  },
  {
    title: "Restorasyon",
    category: "Tarih & Gelecek",
    description: "Tarihi yapıları özgün dokusunu koruyarak günümüz ihtiyaçlarına uygun şekilde yeniden işlevlendiriyoruz.",
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-zinc-200 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Hizmetlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
              Uzmanlık <span className="italic font-serif">Alanlarımız</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light max-w-sm mt-6 md:mt-0">
            Farklı ölçeklerdeki projeler için kapsamlı tasarım ve danışmanlık hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">{service.category}</span>
                <div className="h-px bg-zinc-200 flex-grow transition-all duration-500 group-hover:bg-amber-600/50"></div>
              </div>
              <h3 className="text-3xl font-light text-zinc-900 mb-4 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-600 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-zinc-900 group-hover:text-amber-700 transition-colors">
                Detayları Gör
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
