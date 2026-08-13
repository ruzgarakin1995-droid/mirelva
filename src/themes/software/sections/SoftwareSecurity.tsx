"use client";

import React from "react";
import { ShieldAlert, Key, Lock, FileDigit } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwareSecurity = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="kurumsal">
      {/* Background Grid */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <TextReveal text="Ödün Verilmeyen Güvenlik" highlightedWords={["Güvenlik"]} highlightClassName="text-red-400" />
          </h2>
          <p className="text-slate-400 text-lg">
            Sıfır güven (Zero-Trust) mimarisi üzerine inşa edilmiş platformumuzla kurumsal verileriniz en yüksek endüstri standartlarında korunur.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Key />,
              title: "Kimlik & Erişim",
              desc: "SAML, OAuth2 ve OIDC destekli SSO entegrasyonu. İnce ayarlı rol tabanlı erişim kontrolü (RBAC)."
            },
            {
              icon: <Lock />,
              title: "Veri Şifreleme",
              desc: "FIPS 140-2 uyumlu HSM'ler ile AES-256 şifreleme. Müşteri tarafından yönetilen anahtar (CMK) desteği."
            },
            {
              icon: <FileDigit />,
              title: "Uyumluluk & Denetim",
              desc: "Değiştirilemez (immutable) denetim günlükleri (Audit Logs). SOC2, HIPAA ve GDPR uyumluluğu."
            }
          ].map((item, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="bg-slate-900 border border-white/5 rounded-2xl p-8 hover:border-red-500/30 transition-colors">
              <div className="text-red-400 mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

