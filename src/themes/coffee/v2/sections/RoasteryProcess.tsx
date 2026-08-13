'use client';

import { motion } from 'framer-motion';
import { Flame, Droplet, ThermometerSun } from 'lucide-react';

const steps = [
  {
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Sıcaklık Kontrolü",
    desc: "Her çekirdek profili için milimetrik hassasiyetle hesaplanmış kavurma eğrileri."
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Zanaatkar Kavurma",
    desc: "Endüstriyel döküm makinelerimizde, ustalarımızın gözetiminde gerçekleşen dönüşüm."
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Dinlendirme",
    desc: "Aromaların en üst seviyeye ulaşması için kusursuz nem ve ısı şartlarında dinlendirme."
  }
];

export default function RoasteryProcess() {
  return (
    <section className="py-32 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Kavurma Sanatı</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Her bir çekirdek, kendi karakterini ortaya çıkarmak için özel bir yaklaşıma ihtiyaç duyar. 
                Modern teknolojiyi geleneksel zanaatla harmanlıyor, fincanınıza sadece en mükemmel 
                olanı taşıyoruz.
              </p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-amber-800">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1974&auto=format&fit=crop" 
              alt="Industrial coffee roasting machine" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
