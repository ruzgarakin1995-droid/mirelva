"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">İletişim</span>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-8">
              Bize <span className="italic font-serif">Ulaşın</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed mb-12 max-w-md">
              Mimari vizyonunuzu hayata geçirmek için stüdyomuzu ziyaret edin veya iletişim formumuzu doldurarak size ulaşmamızı sağlayın.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-white shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">Merkez Ofis</h4>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Levent Mah. Çalıkuşu Sok. No: 15<br />
                    Beşiktaş, İstanbul 34330
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-white shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">Telefon</h4>
                  <p className="text-zinc-600 font-light">
                    +90 (212) 555 01 23<br />
                    +90 (532) 555 01 23
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 bg-white shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">E-Posta</h4>
                  <p className="text-zinc-600 font-light">
                    hello@mimarlikstüdyosu.com<br />
                    projects@mimarlikstüdyosu.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-3xl bg-white/70 p-10 lg:p-14 border border-black/5 shadow-2xl shadow-zinc-200/50"
          >
            <h3 className="text-2xl font-light text-zinc-900 mb-8">Mesaj Gönderin</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2">İsim Soyisim</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-zinc-300 py-3 text-zinc-900 focus:outline-none focus:border-amber-700 transition-colors rounded-none placeholder-zinc-300"
                  placeholder="Adınız ve Soyadınız"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2">E-Posta Adresi</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-zinc-300 py-3 text-zinc-900 focus:outline-none focus:border-amber-700 transition-colors rounded-none placeholder-zinc-300"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2">Mesajınız</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-300 py-3 text-zinc-900 focus:outline-none focus:border-amber-700 transition-colors rounded-none placeholder-zinc-300 resize-none"
                  placeholder="Projeniz hakkında detaylar..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-zinc-900 text-white font-medium tracking-wider uppercase text-sm hover:bg-zinc-800 transition-colors mt-4"
              >
                Formu Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
