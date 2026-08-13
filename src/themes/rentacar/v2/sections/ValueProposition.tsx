"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';

export function ValueProposition() {
  const steps = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "1. Konumunuzu Seçin",
      desc: "Havalimanı veya şehir içi ofislerimizden size en uygun olanı belirleyin."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: "2. Aracınızı Seçin",
      desc: "Geniş filomuzdan ihtiyacınıza ve bütçenize en uygun aracı filtreleyin."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "3. Yola Çıkın",
      desc: "Dakikalar içinde tamamlanan dijital kontrat ile anahtarınızı teslim alın."
    }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-2 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-widest rounded-full">
            Nasıl Çalışır?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Araç kiralamanın <br />en <span className="text-orange-500">zahmetsiz</span> yolu.
          </h2>
          <p className="text-slate-600 text-lg">
            Geleneksel araç kiralama süreçlerindeki evrak işlerini ve uzun beklemeleri geride bırakın. Tamamen dijital altyapımız sayesinde dakikalar içinde yola çıkmaya hazırsınız.
          </p>

          <div className="space-y-6 pt-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 flex flex-shrink-0 items-center justify-center shadow-lg shadow-slate-900/20">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" alt="Araç Teslim" className="w-full h-full object-cover" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-2xl font-bold">99%</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Müşteri Memnuniyeti</h4>
                <p className="text-sm text-slate-500">Son 1 yılda kiralanan 10.000+ araç verisine göre.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
