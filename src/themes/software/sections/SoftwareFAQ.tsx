"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const SoftwareFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Sisteminiz mevcut monolitik mimarimizle entegre olabilir mi?",
      a: "Evet, kademeli geçiş (strangler fig pattern) yaklaşımını destekliyoruz. Eski sistemleriniz çalışmaya devam ederken yeni servisleri NexusCore üzerinde güvenle konumlandırabilirsiniz."
    },
    {
      q: "Veri güvenliği ve compliance süreçlerini nasıl yönetiyorsunuz?",
      a: "SOC2 Type II, GDPR ve ISO 27001 sertifikalarına sahibiz. Verileriniz beklemede ve aktarım sırasında (at-rest & in-transit) AES-256 ile şifrelenir. VPC peering ve private link seçeneklerimiz mevcuttur."
    },
    {
      q: "SLA garantiniz nedir ve kesinti durumunda ne oluyor?",
      a: "Kurumsal müşterilerimiz için %99.99 uptime SLA sunuyoruz. Çoklu bölge (multi-region) mimarimiz sayesinde donanımsal arızalarda sistem otomatik olarak sağlıklı düğümlere yük devreder."
    },
    {
      q: "Hangi diller ve framework'ler destekleniyor?",
      a: "Agnostik bir yapıya sahibiz. Docker container içinde çalışan herhangi bir dili destekliyoruz. Ancak Node.js, Python, Go ve Rust için derinlemesine entegre edilmiş resmi SDK'larımız bulunmaktadır."
    },
    {
      q: "API hız limitleri nasıl hesaplanıyor?",
      a: "Hız limitleri tenant bazında değil, servis bazında yapılandırılır. Token bucket algoritması kullanarak anlık trafik artışlarını (burst) tolere eden esnek bir limitasyon mekanizması kullanıyoruz."
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-slate-400">Teknik detaylar ve operasyonel süreçler hakkında bilgiler.</p>
        </ScrollReveal>

        <ScrollReveal staggerChildren staggerDelay={0.1} className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollRevealChild 
              key={index} 
              variant="fade-up"
              className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-all"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="font-semibold text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${open === index ? "rotate-180" : ""}`}
                />
              </button>
              <div 
                className={`px-6 text-slate-400 overflow-hidden transition-all duration-300 ${
                  open === index ? "pb-5 max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

