"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Cases() {
  const cases = [
    {
      category: "Ticaret Hukuku",
      title: "Uluslararası Şirket Birleşmesi",
      description: "İki büyük teknoloji firmasının hukuki altyapısının birleştirilmesi ve sözleşmelerinin düzenlenmesi süreci başarıyla tamamlandı.",
      year: "2023"
    },
    {
      category: "İş Hukuku",
      title: "Toplu İş Sözleşmesi İhtilafı",
      description: "Sendika ile işveren arasında yaşanan uyuşmazlık, arabuluculuk sürecinde müvekkilimiz lehine sonuçlandırıldı.",
      year: "2024"
    },
    {
      category: "Gayrimenkul Hukuku",
      title: "Karmaşık Tapu İptal Davası",
      description: "Miras kaynaklı, çok taraflı gayrimenkul uyuşmazlığı, Yargıtay aşamasında kesinleşerek kazanıldı.",
      year: "2023"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Örnek Başarılarımız</h2>
          <p className="text-slate-600 text-lg">Müvekkillerimiz için elde ettiğimiz emsal niteliğindeki hukuki başarılar ve sonuçlandırdığımız önemli projeler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-2xl bg-white/90 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">{item.category}</span>
                  <span className="text-slate-400 font-medium">{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{item.description}</p>
                <button className="flex items-center gap-2 text-slate-900 font-medium hover:text-amber-700 transition-colors mt-auto">
                  Vaka İncelemesi <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
