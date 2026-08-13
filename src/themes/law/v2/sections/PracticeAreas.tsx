"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scale, Briefcase, Building, HeartPulse, Home, FileText } from "lucide-react";

export function PracticeAreas() {
  const areas = [
    {
      icon: <Scale />,
      title: "Ceza Hukuku",
      description: "Soruşturma ve kovuşturma aşamalarında, müvekkillerimizin savunma hakkını etkin şekilde kullanmasını sağlıyoruz."
    },
    {
      icon: <Briefcase />,
      title: "İş Hukuku",
      description: "İşçi ve işveren uyuşmazlıkları, iş sözleşmelerinin hazırlanması ve tazminat davalarında danışmanlık veriyoruz."
    },
    {
      icon: <Building />,
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşları, birleşme ve devralmalar ile ticari sözleşmelerin düzenlenmesi süreçlerini yönetiyoruz."
    },
    {
      icon: <HeartPulse />,
      title: "Aile Hukuku",
      description: "Boşanma, nafaka, velayet ve mal paylaşımı davalarında hassas ve çözüm odaklı yaklaşım sergiliyoruz."
    },
    {
      icon: <Home />,
      title: "Gayrimenkul Hukuku",
      description: "Tapu iptal davaları, kiralama süreçleri ve mülkiyet uyuşmazlıklarında hukuki destek sağlıyoruz."
    },
    {
      icon: <FileText />,
      title: "Sözleşmeler Hukuku",
      description: "Her türlü hukuki sözleşmenin hazırlanması, incelenmesi ve risk analizlerinin yapılması."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Çalışma Alanlarımız</h2>
            <p className="text-lg text-slate-600">Geniş yelpazede sunduğumuz hukuki hizmetlerle, farklı alanlardaki ihtiyaçlarınıza profesyonel çözümler üretiyoruz.</p>
          </div>
          <button className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl hover:border-amber-700 hover:text-amber-700 transition-colors font-medium whitespace-nowrap">
            Tüm Alanları Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-2xl bg-white/90 border border-slate-200 p-8 rounded-2xl hover:shadow-lg hover:border-amber-700/30 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                {React.cloneElement(area.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{area.description}</p>
              <div className="text-amber-700 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                Detayları İncele
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
