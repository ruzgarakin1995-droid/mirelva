"use client";
import React from 'react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Gülüş Tasarımı Sonuçları</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">Modern diş hekimliği uygulamalarımızla hastalarımızın hayatını değiştiriyoruz.</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200">
           <div className="absolute inset-0 flex">
             <div className="w-1/2 bg-cover bg-center border-r-4 border-white relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop')" }}>
              <span className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--primary)] rounded-full shadow-lg">Öncesi</span>
             </div>
             <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590625695509-64c8d50e64c3?q=80&w=800&auto=format&fit=crop')" }}>
              <span className="absolute bottom-4 right-4 bg-[var(--accent)]/90 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">Sonrası</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

