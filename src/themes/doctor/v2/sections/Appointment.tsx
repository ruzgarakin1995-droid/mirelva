
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, FileText } from 'lucide-react';

export default function Appointment() {
  return (
    <section className="py-24 bg-sky-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-2xl border border-blue-50/50 rounded-3xl shadow-xl shadow-blue-100/40 p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hemen Randevunuzu Oluşturun</h2>
              <p className="text-gray-600 mb-8">Sağlığınızı ertelemeyin. Online randevu sistemimizle saniyeler içinde size en uygun saati seçin.</p>
              
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-blue-400" />
                  <input type="text" placeholder="Adınız Soyadınız" className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-blue-400" />
                  <input type="tel" placeholder="Telefon Numaranız" className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <FileText className="absolute left-4 top-3.5 w-5 h-5 text-blue-400" />
                    <select className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none">
                      <option>Bölüm Seçin</option>
                      <option>Kardiyoloji</option>
                      <option>Nöroloji</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-blue-400" />
                    <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-100 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                </div>
                <button type="button" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
                  Randevu Talebi Gönder
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" alt="Klinik" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
