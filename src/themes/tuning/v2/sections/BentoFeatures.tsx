"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Activity } from 'lucide-react';

const features = [
  {
    title: "Stage 1-3 Tuning",
    description: "Donanım kurulumunuza özel tasarlanmış ECU yazılımı.",
    icon: <Cpu className="w-8 h-8 text-red-500" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900 to-neutral-950",
    image: "https://images.unsplash.com/photo-1598442805973-22f3e8276f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Dyno Testi",
    description: "Gerçek zamanlı performans metrikleri.",
    icon: <Activity className="w-6 h-6 text-red-500" />,
    className: "md:col-span-1 md:row-span-1 bg-neutral-900",
  },
  {
    title: "Launch Control",
    description: "Optimize edilmiş 0-100 süreleri.",
    icon: <Zap className="w-6 h-6 text-red-500" />,
    className: "md:col-span-1 md:row-span-1 bg-neutral-900",
  },
  {
    title: "Motor Garantisi",
    description: "İçiniz rahat olsun diye güvence altında.",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    className: "md:col-span-2 md:row-span-1 bg-neutral-900 flex-row flex items-center justify-between",
  }
];

const BentoFeatures = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            <span className="text-red-500">Hız</span> İçin Tasarlandı
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Kapsamlı tuning çözümlerimiz, motorunuzdan her zerreyi güvenli ve güvenilir bir şekilde almak için tasarlandı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-6 border border-neutral-800 hover:border-red-500/50 transition-colors group relative overflow-hidden flex flex-col justify-between ${feature.className}`}
            >
              {feature.image && (
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img src={feature.image} alt="Feature background" className="w-full h-full object-cover grayscale mix-blend-overlay" />
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="bg-black/50 w-fit p-3 rounded-xl backdrop-blur-md border border-neutral-800">
                  {feature.icon}
                </div>
                <div className={feature.image ? "mt-12" : "mt-6"}>
                  <h3 className="text-2xl font-bold uppercase italic tracking-wide mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
