"use client";
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Heart } from 'lucide-react';
export default function Features() {
  const feats = [
    { icon: <Shield size={32}/>, title: "FDA Onaylı", desc: "Tüm cihazlarımız uluslararası standartlara sahiptir." },
    { icon: <Sparkles size={32}/>, title: "Steril Ortam", desc: "Hastane standartlarında yüksek hijyen protokolleri." },
    { icon: <Clock size={32}/>, title: "Hızlı Sonuç", desc: "Zamanınızı almayan, etkili ve nokta atışı işlemler." },
    { icon: <Heart size={32}/>, title: "Özel İlgi", desc: "Her danışanımıza VIP kalitesinde kişisel danışmanlık." }
  ];
  return (
    <section className="py-32 bg-[var(--surface)] px-6 md:px-12 border-t border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
        {feats.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }} className="text-center">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-[var(--accent)] mb-8 shadow-sm">
              {f.icon}
            </div>
            <h3 className="text-2xl font-medium mb-4 text-[var(--primary)]">{f.title}</h3>
            <p className="text-[var(--muted)] font-light leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


