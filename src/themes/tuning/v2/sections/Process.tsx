"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Wrench, Activity, Flag } from 'lucide-react';

const steps = [
  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Danışmanlık", desc: "Hedeflerinizi tartışıyor ve aracı inceliyoruz." },
  { icon: <Activity className="w-6 h-6" />, title: "İlk Dyno Testi", desc: "Karşılaştırma için fabrika verisini ölçüyoruz." },
  { icon: <Wrench className="w-6 h-6" />, title: "Tuning ve Montaj", desc: "Parçaları kuruyor ve ECU'yu ayarlıyoruz." },
  { icon: <Flag className="w-6 h-6" />, title: "Son Test", desc: "Performans artışını ve güvenilirliği onaylıyoruz." }
];

const Process = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
            Bizim <span className="text-red-500">Yöntemimiz</span>
          </h2>
          <p className="text-neutral-400">Baştan sona hassas mühendislik.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-800 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-black border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold uppercase italic mb-2">{step.title}</h3>
                <p className="text-neutral-400 font-light text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
