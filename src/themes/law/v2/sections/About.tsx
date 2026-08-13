"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" alt="Ofisimiz" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 backdrop-blur-2xl bg-white/90 border border-slate-200 p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-bold text-amber-700 mb-2">25+</div>
              <div className="text-slate-900 font-medium">Yıllık Tecrübe</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="text-amber-700 font-semibold tracking-wider uppercase mb-4">Hakkımızda</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Adaletin Işığında,<br />Güçlü Temsil
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              1998 yılından bu yana, müvekkillerimizin hukuki haklarını en üst düzeyde korumak için çalışıyoruz. Hukukun üstünlüğüne olan inancımızla, her dosyayı titizlikle inceliyor ve en doğru stratejiyi kurguluyoruz.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Şeffaf ve etik çalışma prensibi",
                "Güncel içtihatlara hakim uzman ekip",
                "Sonuç odaklı stratejik yaklaşım",
                "Gizlilik ve güven esaslı ilişki"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-700" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors font-medium">
              Detaylı Bilgi
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
