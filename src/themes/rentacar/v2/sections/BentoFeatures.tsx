"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Map, Star, Phone, CheckCircle2 } from 'lucide-react';

export const BentoFeatures = () => {
  return (
    <section className="py-32 bg-[#F5F5F7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">Ayrıcalıklar Standarttır</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Sıradan bir kiralama değil, uçtan uca tasarlanmış kusursuz bir deneyim sunuyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Bento Box 1: Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-3xl p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Kusursuz Güvenlik <br/>ve Gizlilik</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">VIP protokol standartlarında tam kapsamlı sigorta ve talebe bağlı zırhlı araç/yakın koruma seçenekleri.</p>
            </div>
            
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-slate-100 to-transparent rounded-tl-full opacity-50 transform group-hover:scale-110 transition-transform duration-700"></div>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 bg-slate-900 rounded-3xl p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group text-white"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">VIP Şoför Hizmeti</h3>
              <p className="text-white/60">Protokol eğitimi almış, çok dilli profesyonel şoför kadrosu.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-overlay" alt="Chauffeur" />
          </motion.div>

          {/* Bento Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
          >
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">7/24 Concierge</h3>
            <p className="text-slate-500 text-sm">Sadece araç değil, tüm seyahatinizi asiste eden özel asistanlık hizmeti.</p>
          </motion.div>

          {/* Bento Box 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Sıfır Bekleme</h3>
            <p className="text-slate-500 text-sm">Uçağınızdan indiğiniz an hazır olan, dakiklik odaklı transfer operasyonu.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
