
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Hasta Yorumları</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Onların Gözünden Biz</h3>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#FAFAFA] border border-blue-50/50 shadow-lg shadow-blue-50/30 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              <div className="flex gap-1 mb-4 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                "Klinikteki aydınlık ve ferah atmosfer, tedavi sürecimi çok olumlu etkiledi. Doktorların ilgisi ve güler yüzü sayesinde kendimi güvende hissettim. Kesinlikle tavsiye ediyorum."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
                <div>
                  <h5 className="font-bold text-gray-900">Ayşe Y.</h5>
                  <p className="text-sm text-gray-500">Kardiyoloji Hastası</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
