
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 bg-sky-50/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-6">
              <Activity className="w-4 h-4" /> Modern Sağlık Hizmeti
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Sağlığınız İçin <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Yeni Nesil</span> Bakım
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Uzman doktorlarımız ve son teknoloji ekipmanlarımızla size ve ailenize en iyi sağlık hizmetini sunmak için buradayız. Aydınlık, ferah ve huzurlu bir iyileşme deneyimi.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium shadow-xl shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 transition-all">
                Hemen Randevu Al <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Doctor Hero" className="relative z-10 rounded-3xl shadow-xl shadow-blue-100/40 w-full h-[600px] object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
