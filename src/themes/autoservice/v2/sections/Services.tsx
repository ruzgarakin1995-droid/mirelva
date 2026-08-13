"use client";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Seramik Kaplama",
    desc: "9H sertlik derecesine sahip, 5 yıla kadar kalıcı ayna parlaklığı ve çizilme direnci sağlayan nanoteknolojik koruma.",
    img: "https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "İç Detaylı Temizlik",
    desc: "Buharlı sterilizasyon, ozonla koku giderme ve deri yüzeylerin besleyici losyonlarla korunması.",
    img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Boya Düzeltme & Polisaj",
    desc: "Kılcal çiziklerin, hologramların ve oksitlenmelerin %95 oranında giderilerek pürüzsüz vernik elde edilmesi.",
    img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2940&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-slate-900 tracking-tight mb-6">
            Kusursuzluk Standartlarımız
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl font-light">
            Sıradan bir yıkamanın ötesinde, aracınızın her milimetresine odaklanan profesyonel uygulamalar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-8">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-between">
                {service.title}
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
