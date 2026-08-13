"use client";
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Klinik Kabul & Analiz", desc: "Aracınız özel ışık tüneline alınır, boya mikron ölçümü ve hasar tespiti laboratuvar hassasiyetiyle raporlanır." },
  { num: "02", title: "Dekontaminasyon", desc: "Demir tozu, zift, reçine ve kil uygulaması ile yüzey tüm pürüzlerden arındırılarak sterilize edilir." },
  { num: "03", title: "Mikro Polisaj", desc: "Boya kalınlığına uygun pad ve pastalarla kademeli olarak çizik giderme ve parlaklık artırma işlemi yapılır." },
  { num: "04", title: "Nanoteknolojik Koruma", desc: "Kontrollü nem ve sıcaklık altında seramik veya grafen kaplama uygulanarak yüzey mühürlenir." }
];

export function Process() {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight mb-6">
            Mükemmelliğin Formülü
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Rastgele işlemler değil, adım adım planlanmış mühendislik harikası bir restorasyon süreci.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-slate-800" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="text-5xl font-extrabold text-slate-800 mb-8 font-mono">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
