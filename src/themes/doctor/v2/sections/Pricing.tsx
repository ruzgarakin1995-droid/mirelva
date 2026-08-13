
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Check-up Paketleri</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Sağlığınız İçin Avantajlı Paketler</h3>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Temel Paket", desc: "Genel sağlık taraması", price: "2.500", highlight: false },
            { title: "Kapsamlı Paket", desc: "Detaylı tam vücut taraması", price: "4.800", highlight: true },
            { title: "VIP Paket", desc: "Tüm tetkikler ve özel hizmet", price: "8.500", highlight: false }
          ].map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 ${pkg.highlight ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200 scale-105 relative z-10' : 'bg-white border border-blue-50/50 shadow-xl shadow-blue-50/30'}`}
            >
              <h4 className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.title}</h4>
              <p className={`mb-6 ${pkg.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{pkg.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₺{pkg.price}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[1, 2, 3, 4].map((_, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${pkg.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={pkg.highlight ? 'text-blue-50' : 'text-gray-600'}>Örnek Tetkik {idx+1}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-all ${pkg.highlight ? 'bg-white text-blue-600 hover:bg-gray-50' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                Paketi Seç
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
