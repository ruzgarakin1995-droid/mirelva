
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Blog</h2>
            <h3 className="text-4xl font-bold text-gray-900">Sağlıklı Yaşam Rehberi</h3>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
          >
            Tüm Yazılar <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFA] rounded-3xl overflow-hidden border border-blue-50/50 shadow-lg shadow-blue-50/30 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1584982751601-97d8cb0f66fc?q=80&w=2069&auto=format&fit=crop" alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                  Sağlık
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">12 Mayıs 2024</p>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Kalp Sağlığınızı Korumak İçin 5 Altın Kural</h4>
                <p className="text-gray-600 mb-4 line-clamp-2">Günlük hayatta yapacağınız küçük değişikliklerle kalp sağlığınızı nasıl koruyabileceğinizi uzmanlarımız anlattı.</p>
                <button className="text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Devamını Oku <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
