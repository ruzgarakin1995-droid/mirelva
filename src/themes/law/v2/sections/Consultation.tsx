"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Consultation() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hukuki Danışmanlık Paketleri</h2>
            <p className="text-slate-600">Kurumsal şirketler ve bireysel müvekkillerimiz için aylık düzenli hukuki danışmanlık hizmetleri.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-slate-200 rounded-2xl bg-slate-50 hover:border-amber-700 transition-colors"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Bireysel Danışmanlık</h3>
              <p className="text-slate-500 mb-6">Kişisel hukuki süreçleriniz için.</p>
              <ul className="space-y-4 mb-8">
                {["Sözleşme incelemesi", "Ön hukuki durum değerlendirmesi", "Telefon/Mail ile sınırsız iletişim", "Dava risk analizi"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-700" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-slate-900 text-slate-900 rounded-xl font-medium hover:bg-slate-900 hover:text-white transition-colors">
                Bilgi Al
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-amber-700 rounded-2xl bg-white relative shadow-lg"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                En Çok Tercih Edilen
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Kurumsal Danışmanlık</h3>
              <p className="text-slate-500 mb-6">Şirketler için tam kapsamlı koruma.</p>
              <ul className="space-y-4 mb-8">
                {["KVKK uyum süreçleri", "İş sözleşmeleri yönetimi", "Ticari dava takibi", "Aylık raporlama ve toplantı"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Check className="w-5 h-5 text-amber-700" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
                Teklif İste
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
