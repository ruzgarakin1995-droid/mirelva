
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Eye, TestTube, Syringe, Baby } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-sky-50/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Hizmetlerimiz</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Geniş Kapsamlı Tıbbi Birimler</h3>
            <p className="text-gray-600">İhtiyacınız olan tüm medikal alanlarda, son teknoloji altyapımızla kesintisiz hizmet veriyoruz.</p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Kardiyoloji", desc: "Kalp sağlığınız için en gelişmiş teşhis ve tedavi yöntemleri." },
            { icon: Brain, title: "Nöroloji", desc: "Sinir sistemi hastalıklarında uzman hekim kadrosu." },
            { icon: Eye, title: "Göz Hastalıkları", desc: "Net bir görüş ve sağlıklı gözler için modern yaklaşımlar." },
            { icon: TestTube, title: "Laboratuvar", desc: "Hızlı ve güvenilir sonuç veren tam donanımlı laboratuvar." },
            { icon: Syringe, title: "Dermatoloji", desc: "Cilt sağlığınız ve güzelliğiniz için uzman dokunuşlar." },
            { icon: Baby, title: "Çocuk Sağlığı", desc: "Geleceğimiz olan çocuklarımız için sevgi dolu bir ortam." }
          ].map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-blue-50/50 shadow-xl shadow-blue-100/20 hover:shadow-blue-200/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <srv.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h4>
              <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
