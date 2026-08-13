"use client";

import React, { useRef } from "react";
import { LineChart, BarChart3, PieChart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

export const SoftwareDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBlob = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="py-24 bg-slate-900 relative overflow-hidden" id="platform">
      {/* Decorative background elements */}
      <motion.div style={{ y: yBlob }} className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/20 to-transparent blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <ScrollReveal variant="slide-right">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                Tüm Operasyonlar Tek Bir <span className="text-indigo-400">Kontrol Panelinde</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Dağınık veri silolarını ortadan kaldırın. Platformumuz, tüm iş süreçlerinizi, performans metriklerinizi ve sistem sağlığınızı gerçek zamanlı olarak izleyebileceğiniz merkezi bir komuta merkezi sunar.
              </p>
            </ScrollReveal>
            
            <ScrollReveal staggerChildren className="space-y-6">
              {[
                {
                  icon: <LineChart className="w-5 h-5" />,
                  title: "Gerçek Zamanlı Analitik",
                  desc: "Milisaniye düzeyinde gecikmeyle veri akışlarını analiz edin."
                },
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: "Özelleştirilebilir Raporlama",
                  desc: "İhtiyaçlarınıza özel dinamik dashboardlar oluşturun."
                },
                {
                  icon: <PieChart className="w-5 h-5" />,
                  title: "Tahmine Dayalı İçgörüler",
                  desc: "Yapay zeka destekli algoritmalarla gelecekteki trendleri öngörün."
                }
              ].map((item, index) => (
                <ScrollRevealChild 
                  key={index}
                  variant="fade-up"
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </ScrollRevealChild>
              ))}
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl border border-white/10 bg-slate-950/50 p-2 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-0" />
              <ParallaxImage 
                src="/agency_work.jpg" 
                alt="Analytics Dashboard" 
                className="rounded-xl relative z-10 border border-white/5"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

