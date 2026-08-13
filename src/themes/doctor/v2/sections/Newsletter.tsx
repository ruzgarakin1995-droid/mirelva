
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Sağlıklı Yaşam Bültenine Katılın</h3>
            <p className="text-blue-100 mb-8">En güncel sağlık haberleri ve kampanyalardan anında haberdar olun.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="E-posta adresiniz" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors" />
              <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-gray-50 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
