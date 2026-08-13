
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Doctors() {
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
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Uzman Kadromuz</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Alanında Öncü Doktorlarımız</h3>
            <p className="text-gray-600">Tecrübeleri ve güler yüzleriyle sağlığınız için en doğru adrestesiniz.</p>
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
              className="rounded-3xl overflow-hidden bg-[#FAFAFA] border border-blue-50/50 shadow-xl shadow-blue-100/20 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-80 bg-sky-100 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" alt="Doktor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Dr. Ahmet Yılmaz</h4>
                <p className="text-blue-600 font-medium mb-4">Kardiyoloji Uzmanı</p>
                <button className="px-6 py-2 rounded-full border-2 border-blue-100 text-blue-600 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                  Profili İncele
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
