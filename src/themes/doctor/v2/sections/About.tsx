
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Klinik" className="rounded-3xl shadow-xl shadow-blue-100/40 w-full h-[500px] object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Hakkımızda</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Modern Tıbbın Işığında, İnsan Odaklı Sağlık</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kliniğimiz, ferah ve aydınlık ortamıyla hastalarımıza huzur veren bir iyileşme süreci sunmayı amaçlar. Gelişmiş tıbbi cihazlarımız ve alanında uzman ekibimizle sağlığınız güvence altında.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-blue-600 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Güvenilir Hizmet</h4>
                  <p className="text-gray-600">Uluslararası standartlarda, etik değerlere bağlı sağlık hizmeti sunuyoruz.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Uzman Kadro</h4>
                  <p className="text-gray-600">Alanında isim yapmış, tecrübeli ve güler yüzlü medikal kadro.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
