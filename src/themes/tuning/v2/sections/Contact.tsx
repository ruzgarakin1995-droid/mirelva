"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-red-500/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
              Dyno Randevunuzu <span className="text-red-500">Alın</span>
            </h2>
            <p className="text-neutral-400 mb-10 max-w-md text-lg font-light">
              Aracınızın gerçek potansiyelini ortaya çıkarmaya hazır mısınız? Aşağıdaki formu doldurun, baş kalibratörümüz size geri dönüş yapsın.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-neutral-950 rounded-full flex items-center justify-center border border-neutral-800 text-red-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">Lokasyon</h4>
                  <p className="font-light">123 Speedway Blvd, Racing City, TX</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 bg-neutral-950 rounded-full flex items-center justify-center border border-neutral-800 text-red-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">Telefon</h4>
                  <p className="font-light">+1 (555) 900-TUNE</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase text-neutral-500 font-bold mb-2">Ad Soyad</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="Ahmet Yılmaz" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-500 font-bold mb-2">E-posta</label>
                  <input type="email" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="ahmet@ornek.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase text-neutral-500 font-bold mb-2">Araç (Yıl/Marka/Model)</label>
                <input type="text" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="2022 BMW M3" />
              </div>
              <div>
                <label className="block text-xs uppercase text-neutral-500 font-bold mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="Stage 2 tuning ile ilgileniyorum..." />
              </div>
              <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-black italic uppercase tracking-widest py-4 transition-colors">
                Talep Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
