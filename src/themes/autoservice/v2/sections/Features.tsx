"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Gauge, Microscope } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: "Laboratuvar Ortamı",
    description: "Tozsuz ve iklim kontrollü özel yalıtımlı stüdyolarımızda seramik kaplama ve PPF uygulamaları."
  },
  {
    icon: ShieldCheck,
    title: "Sertifikalı Uzmanlık",
    description: "Tüm teknisyenlerimiz uluslararası detaylandırma ve boya koruma sertifikalarına sahiptir."
  },
  {
    icon: Droplets,
    title: "Premium Kimyasallar",
    description: "Yalnızca pH dengeli, aracınızın verniğine ve trimlerine zarar vermeyen ithal ürünler."
  },
  {
    icon: Gauge,
    title: "Mikron Hassasiyeti",
    description: "Boya kalınlık ölçüm cihazlarıyla milimetrik analiz yapılarak polisaj işlemi uygulanır."
  }
];

export function Features() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
