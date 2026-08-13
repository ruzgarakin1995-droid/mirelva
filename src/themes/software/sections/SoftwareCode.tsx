"use client";

import React from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const SoftwareCode = () => {
  const [copied, setCopied] = React.useState(false);

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5" id="gelistiriciler">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <ScrollReveal variant="slide-right" className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> API Integration
                </div>
                <button 
                  onClick={copyCode}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" 
                  alt="Code Editor" 
                  className="w-full h-auto rounded-lg mb-4 opacity-80 mix-blend-screen"
                />
                <pre className="text-sm font-mono leading-relaxed text-slate-300 absolute inset-0 p-6 pt-[140px] pointer-events-none overflow-hidden">
                  <span className="text-pink-400">import</span> {"{ "}NexusClient{" }"} <span className="text-pink-400">from</span> <span className="text-green-400">'@nexuscore/sdk'</span>;
                  {"\n\n"}
                  <span className="text-slate-500">// Initialize client with enterprise key</span>
                  {"\n"}
                  <span className="text-blue-400">const</span> client = <span className="text-pink-400">new</span> <span className="text-yellow-200">NexusClient</span>({"{"}
                  {"\n"}
                  {"  "}apiKey: process.env.<span className="text-orange-300">NEXUS_API_KEY</span>,
                  {"\n"}
                  {"  "}environment: <span className="text-green-400">'production'</span>,
                  {"\n"}
                  {"  "}options: {"{"} timeout: <span className="text-orange-300">5000</span> {"}"}
                  {"\n"}
                  {"}"});
                  {"\n\n"}
                  <span className="text-blue-400">await</span> client.services.<span className="text-blue-200">deploy</span>();
                </pre>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <TextReveal text="Geliştiriciler İçin Tasarlandı" highlightedWords={["Tasarlandı"]} highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" />
            </h2>
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-lg text-slate-400 leading-relaxed">
                Mükemmel geliştirici deneyimi (DX) odaklı mimarimiz sayesinde entegrasyon süreçlerini günlerden saatlere indirin.
              </p>
            </ScrollReveal>
            
            <ScrollReveal staggerChildren staggerDelay={0.15} className="space-y-4">
              {[
                "Kapsamlı ve interaktif API dokümantasyonu",
                "TypeScript destekli resmi SDK'lar (Node.js, Go, Python)",
                "Webhooks ile gerçek zamanlı olay dinleme",
                "GraphQL desteği ile esnek veri sorgulama"
              ].map((item, index) => (
                <ScrollRevealChild key={index} variant="fade-up" className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </ScrollRevealChild>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

