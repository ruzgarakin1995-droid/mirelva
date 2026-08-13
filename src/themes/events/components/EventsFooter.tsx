"use client";
import React from 'react';
import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const EventsFooter = () => {
  return (
    <footer className="w-full bg-[#1A1614] text-white/70 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Intro */}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <Link href="/test-events" className="flex flex-col items-start mb-6">
              <span className={`${greatVibes.className} text-4xl md:text-5xl text-white leading-none capitalize`}>
                Zehra
              </span>
              <span className="font-sans text-[0.6rem] md:text-[0.65rem] tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#C19A6B] mt-1 pl-1">
                Organizasyon
              </span>
            </Link>
            <p className="font-light text-sm leading-relaxed mb-6">
              Hayallerinizdeki etkinlikleri, en ince detayına kadar kusursuz bir şekilde hayata geçiriyoruz. Lüks, zarafet ve unutulmaz anılar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C19A6B] hover:border-[#C19A6B] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C19A6B] hover:border-[#C19A6B] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Keşfet</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li><Link href="/test-events/hakkimizda" className="hover:text-[#C19A6B] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/test-events/hizmetler" className="hover:text-[#C19A6B] transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/test-events/mekanlar" className="hover:text-[#C19A6B] transition-colors">Anlaşmalı Mekanlar</Link></li>
              <li><Link href="/test-events/galeri" className="hover:text-[#C19A6B] transition-colors">Galeri</Link></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Hizmetler</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li><Link href="/test-events/hizmetler#dugun" className="hover:text-[#C19A6B] transition-colors">Düğün Organizasyonu</Link></li>
              <li><Link href="/test-events/hizmetler#kurumsal" className="hover:text-[#C19A6B] transition-colors">Kurumsal Etkinlikler</Link></li>
              <li><Link href="/test-events/hizmetler#ozel" className="hover:text-[#C19A6B] transition-colors">Özel Kutlamalar</Link></li>
              <li><Link href="/test-events/hizmetler#catering" className="hover:text-[#C19A6B] transition-colors">Catering ve Menü</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">İletişim</h4>
            <ul className="flex flex-col gap-4 font-light text-sm">
              <li>Yakuplu, 124. Sk. no:17,<br />34524 Beylikdüzü / İstanbul</li>
              <li><a href="tel:+905309903160" className="hover:text-[#C19A6B] transition-colors">0530 990 31 60</a></li>
              <li><a href="mailto:info@zehraorganizasyon.com" className="hover:text-[#C19A6B] transition-colors">info@zehraorganizasyon.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-white/40">
          <p>© {new Date().getFullYear()} Zehra Organizasyon (Zehra İsmail Akdemir). Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventsFooter;
