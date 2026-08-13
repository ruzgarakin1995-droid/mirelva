"use client";
import { motion } from 'framer-motion';
import { Target, Zap, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    id: 1,
    number: "10+",
    label: "Yıllık Sektör Tecrübesi",
    desc: "2016'dan beri sadece en üst düzey telefon yedek parçaları.",
    icon: Target,
    image: "/emtech-assets/time.jpg",
    color: "bg-blue-100 text-[#0055FF]",
    cardBg: "bg-blue-50/50"
  },
  {
    id: 2,
    number: "5M+",
    label: "Aylık Stok Hacmi",
    desc: "Türkiye'nin her noktasına anında gönderime hazır devasa depo.",
    icon: Zap,
    image: "/emtech-assets/power.jpg",
    color: "bg-orange-100 text-orange-500",
    cardBg: "bg-orange-50/50"
  },
  {
    id: 3,
    number: "24h",
    label: "İçinde Hızlı Teslimat",
    desc: "Saat 16:00'a kadar olan siparişler aynı gün kargoda.",
    icon: Clock,
    image: "/emtech-assets/cover_screen-1.jpg",
    color: "bg-zinc-200 text-zinc-900",
    cardBg: "bg-zinc-100/50"
  },
  {
    id: 4,
    number: "%100",
    label: "Orijinal Kalite Testi",
    desc: "Her bir ekran ve batarya 3 aşamalı laboratuvar testinden geçer.",
    icon: ShieldCheck,
    image: "/emtech-assets/pro_5.jpg",
    color: "bg-green-100 text-green-600",
    cardBg: "bg-green-50/50"
  }
];

export function EmtechStats() {
  return (
    <section className="py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-100 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-sm mb-4 inline-flex">
              <span className="w-2 h-2 bg-[#0055FF] animate-pulse rounded-full"></span>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600">Sektör Lideri</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-black text-zinc-950 uppercase tracking-tighter leading-none">
              Rakamlarla <br/><span className="text-[#0055FF]">Emtech</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-inter max-w-md text-sm md:text-base border-l-4 border-[#0055FF] pl-4">
            Sadece bir tedarikçi değil, işinizi büyütmeniz için gereken güvenilir ve hızlı teknoloji ortağınız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${stat.cardBg} border-2 border-zinc-950 p-6 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#0055FF]`}
            >
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 border-2 border-zinc-950 ${stat.color} shadow-[4px_4px_0px_#000]`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-5xl lg:text-6xl font-space font-black tracking-tighter mb-2 transition-colors ${stat.color.split(' ')[1]}`}>
                  {stat.number}
                </h3>
                <h4 className="font-space font-bold uppercase text-zinc-900 tracking-wider text-sm mb-3">
                  {stat.label}
                </h4>
                <p className="font-inter text-zinc-600 font-medium text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>

              {/* Hover Image Reveal without grayscale */}
              <div className="h-24 w-full relative overflow-hidden border-2 border-zinc-950 rounded-sm transition-all duration-500">
                <Image 
                  src={stat.image} 
                  alt={stat.label} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
