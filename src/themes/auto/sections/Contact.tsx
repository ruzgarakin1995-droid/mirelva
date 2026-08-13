"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gray-500" />
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">İletişim</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              ÖZEL TALEPLERİNİZ İÇİN
            </h2>
            <p className="text-gray-400 mb-12 font-light">
              Araç alımı, konsinye satışı veya galerimizde özel bir gösterim ayarlamak için uzman danışmanlarımızla iletişime geçin.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 tracking-wide uppercase">Galeri</h4>
                  <p className="text-gray-400 font-light">100 Prestige Way<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 tracking-wide uppercase">Doğrudan Hat</h4>
                  <p className="text-gray-400 font-light">+1 (800) 555-AERO</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1 tracking-wide uppercase">E-Posta</h4>
                  <p className="text-gray-400 font-light">concierge@aeromotors.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 p-8 border border-white/10 rounded-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Adınız</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Soyadınız</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">E-Posta Adresiniz</label>
                <input type="email" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Talep Detayları</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4">
                Talebi Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

