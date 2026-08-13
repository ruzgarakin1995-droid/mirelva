"use client";

import React from "react";
import { Activity, Shield, Zap, RefreshCcw, Command, Box } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwareFeatures = () => {
  const features = [
    {
      icon: <Command className="w-6 h-6" />,
      title: "Mikroservis Mimarisi",
      description: "Tamamen bağımsız dağıtılabilir servisler ile yüksek ölçeklenebilirlik ve esneklik elde edin."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gerçek Zamanlı Veri İşleme",
      description: "Saniyenin altında gecikme süresiyle milyonlarca veri noktasını anlık olarak analiz edin."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Kurumsal Düzeyde Güvenlik",
      description: "Uçtan uca şifreleme, RBAC ve otomatik tehdit algılama sistemleri ile verilerinizi koruyun."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Gelişmiş Gözlemlenebilirlik",
      description: "Sisteminizin her katmanını detaylı metrikler ve dağıtık izleme yetenekleriyle izleyin."
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Sürekli Entegrasyon (CI/CD)",
      description: "Geliştirme döngülerinizi otomatikleştirin ve sıfır kesintiyle üretim ortamına dağıtım yapın."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Kapsayıcı (Container) Desteği",
      description: "Kubernetes tabanlı altyapımız ile uygulamalarınızı her ortamda sorunsuz çalıştırın."
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <ScrollReveal variant="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Kompleks Sistemler İçin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Gelişmiş Altyapı
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Modern yazılım ekiplerinin ihtiyaç duyduğu tüm kritik altyapı bileşenleri, 
                tek bir entegre platformda kullanıma hazır. Dağıtık mimariyi yönetmek hiç bu kadar kolay olmamıştı.
              </p>
              <div className="hidden lg:block w-16 h-1 bg-indigo-500 rounded-full opacity-50" />
            </ScrollReveal>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3">
            <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <ScrollRevealChild 
              key={index}
              variant="blur"
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </ScrollRevealChild>
          ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

