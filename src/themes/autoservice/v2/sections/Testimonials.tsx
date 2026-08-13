"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Cem Yılmaz",
    role: "Porsche 911 Sahibi",
    content: "Daha önce birçok sözde 'premium' yere gittim ancak buradaki titizlik bambaşka. Laboratuvar gibi bir ortamda aracıma işlem yapıldı. Teslim aldığımda fabrikadan yeni çıkmış gibiydi."
  },
  {
    name: "Ayşe K.",
    role: "Tesla Model Y Sahibi",
    content: "Seramik kaplama işlemi sonrası aracımın yıkanması bile bir keyfe dönüştü. Kir tutmuyor ve her zaman pırıl pırıl. Kesinlikle verilen ücretin hakkını sonuna kadar veriyorlar."
  },
  {
    name: "Bora M.",
    role: "BMW M4 Sahibi",
    content: "Kılcal çiziklerle dolu siyah aracımı aynaya dönüştürdüler. Şeffaflık, süreç hakkında bilgilendirme ve kullanılan ürünlerin kalitesi muazzam."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-slate-900 tracking-tight mb-6">
            Beklentilerin Ötesinde
          </h2>
          <p className="text-xl text-slate-500 font-light">
            Titiz araç sahiplerinin deneyimleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 font-light italic">
                "{testi.content}"
              </p>
              <div>
                <div className="font-bold text-slate-900">{testi.name}</div>
                <div className="text-sm text-slate-500">{testi.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
