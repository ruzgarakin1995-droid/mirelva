
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Süreç</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Nasıl İlerliyoruz?</h3>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Randevu Alın", desc: "Online veya telefonla size uygun saati seçin." },
            { step: "02", title: "Muayene", desc: "Uzman doktorumuz şikayetlerinizi dinler." },
            { step: "03", title: "Tetkikler", desc: "Gerekli tahlil ve görüntülemeler yapılır." },
            { step: "04", title: "Tedavi", desc: "Size özel tedavi planı uygulanır." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-xl shadow-blue-100/50 mb-6 relative z-10 border border-blue-50">
                {item.step}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
              {i !== 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-blue-200 border-dashed border-t-2 border-blue-300"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
