"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Bize Ulaşın</h2>
            <p className="text-slate-600 mb-10 text-lg">Hukuki sorunlarınızla ilgili ön değerlendirme yapmak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz.</p>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Adres</h4>
                  <p className="text-slate-600">Levent Mah. Büyükdere Cad. No:199<br />Şişli / İstanbul</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefon</h4>
                  <p className="text-slate-600">+90 (212) 555 01 23<br />+90 (532) 555 01 24</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">E-Posta</h4>
                  <p className="text-slate-600">info@hukukburosu.com<br />randevu@hukukburosu.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-2xl bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Mesaj Gönderin</h3>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Konu</label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-colors bg-white">
                  <option>Aile Hukuku</option>
                  <option>Ceza Hukuku</option>
                  <option>Ticaret Hukuku</option>
                  <option>İş Hukuku</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-colors"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl hover:bg-slate-800 transition-colors">
                Mesajı Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
