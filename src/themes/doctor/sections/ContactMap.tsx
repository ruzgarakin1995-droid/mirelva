"use client";
import React from 'react';

export default function ContactMap() {
  return (
    <section id="iletisim" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">İletişim</div>
          <h2 className="text-4xl font-bold mb-8 text-[var(--primary)]">Bize Ulaşın</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-alt)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="font-bold text-[var(--primary)]">Telefon (7/24)</div>
                <div className="text-[var(--muted)] text-lg">444 0 000</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-alt)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="font-bold text-[var(--primary)]">Adres</div>
                <div className="text-[var(--muted)]">Sağlık Mah. Şifa Cad. No:12<br/>Şişli / İstanbul</div>
              </div>
            </div>
          </div>
          
          <button className="px-8 py-4 w-full md:w-auto rounded-full bg-[var(--primary)] text-white font-bold hover:bg-[var(--accent)] transition-colors">
            Yol Tarifi Al
          </button>
        </div>
        
        <div className="h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-[var(--border)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.963437340076!2d28.9868778!3d41.0588665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zU2nFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}

