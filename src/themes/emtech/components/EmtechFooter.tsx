"use client";
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export function EmtechFooter() {
  const { settings, loading } = useSettings();

  return (
    <footer className="bg-white text-zinc-950 pt-20 pb-6 border-t border-zinc-200 relative overflow-hidden">
      
      {/* Subtle Background Typography */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] leading-none font-space font-black tracking-tighter whitespace-nowrap text-zinc-950">
          {settings?.storeName ? settings.storeName.toUpperCase() : 'EMTECH TOPTAN'}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 mb-16">
          
          {/* Brand Col (Spans 4) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 bg-zinc-50 flex items-center justify-center border border-zinc-200">
                  <img src="/emtech-assets/emtech_icon.jpg" alt="Emtech Icon" className="h-full w-full object-cover mix-blend-multiply p-1" />
                </div>
                <span className="font-space font-black text-4xl tracking-tighter uppercase text-zinc-950">
                  {settings?.storeName ? settings.storeName.split(' ')[0] : 'EMTECH'}
                </span>
              </div>
              <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-900 font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-zinc-200">
                TRAKYA | MARMARA | ANADOLU
              </div>
              <p className="font-inter text-zinc-500 text-sm leading-relaxed mb-6">
                KBS, CMP Plus ve Cartel Max Power'ın yetkili iş ortağı. Türkiye'nin önde gelen profesyonel cep telefonu yedek parça tedarikçisi.
              </p>
            </div>
            
            {/* WhatsApp Fast Contact */}
            <a 
              href={`https://wa.me/${settings?.whatsapp?.replace(/[^0-9]/g, '') || '905102215932'}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-zinc-200 bg-zinc-50 hover:border-[#25D366] hover:bg-white hover:shadow-[4px_4px_0px_#25D366] transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1 transition-colors">Toptan Sipariş Hattı</span>
                <span className="font-space font-bold text-lg text-zinc-950 transition-colors">WhatsApp'tan Yaz</span>
              </div>
              <ArrowUpRight className="text-zinc-400 group-hover:text-[#25D366] transition-colors" />
            </a>
          </div>

          {/* Spacer / Divider for desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-px h-full bg-zinc-100 mx-auto"></div>
          </div>

          {/* Links Col (Spans 3) */}
          <div className="md:col-span-3">
            <h4 className="font-space font-black text-lg uppercase tracking-tighter mb-6 text-zinc-950 flex items-center gap-2">
              Kategoriler
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'KBS Lcd', slug: 'kbs-lcd' },
                { name: 'Cmp Plus Lcd', slug: 'cmp-plus-lcd' },
                { name: 'KBS Batarya', slug: 'kbs-batarya' },
                { name: 'Cartel Max Power', slug: 'cartel-max-power' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={`/emtech-store/kategori/${link.slug}`} className="font-inter text-sm text-zinc-600 hover:text-[#0055FF] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-space font-black text-lg uppercase tracking-tighter mt-12 mb-6 text-zinc-950 flex items-center gap-2">
              Kurumsal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/emtech-store/kurumsal/hakkimizda" className="font-inter text-sm text-zinc-600 hover:text-[#0055FF] transition-colors">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/emtech-store/kurumsal/sss" className="font-inter text-sm text-zinc-600 hover:text-[#0055FF] transition-colors">Sıkça Sorulan Sorular</Link>
              </li>
              <li>
                <Link href="/emtech-store/kurumsal/kvkk" className="font-inter text-sm text-zinc-600 hover:text-[#0055FF] transition-colors">KVKK & Sözleşmeler</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col (Spans 4) */}
          <div className="md:col-span-4">
            <h4 className="font-space font-black text-lg uppercase tracking-tighter mb-6 text-zinc-950 flex items-center gap-2">
              İletişim
            </h4>
            <div className="space-y-4">
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Merkez Ofis</h5>
                  <p className="font-inter text-sm text-zinc-700 leading-relaxed whitespace-pre-line">
                    {loading ? 'Yükleniyor...' : settings?.address || 'Tahtakale Mah. Tomruk Sok. Yıldız İş Hanı No: 14\nEminönü, Fatih / İstanbul'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Müşteri Hizmetleri</h5>
                  <p className="font-inter text-sm text-zinc-700">
                    {loading ? 'Yükleniyor...' : settings?.phone || '0510 221 59 32'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-zinc-400 mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">E-Posta</h5>
                  <p className="font-inter text-sm text-zinc-700">
                    {loading ? 'Yükleniyor...' : settings?.email || 'info@kartelgsm.com.tr'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest border-t border-zinc-200 pt-6">
          <span>&copy; {new Date().getFullYear()} {settings?.storeName ? settings.storeName.toUpperCase() : 'EMTECH BİLİŞİM'}. TÜM HAKLARI SAKLIDIR.</span>
          <span className="mt-4 md:mt-0 flex items-center gap-2">
            DESIGNED BY <a href="https://www.yazlikreklam.com" target="_blank" rel="noopener noreferrer" className="text-zinc-950 font-bold hover:text-[#0055FF] transition-colors">YAZLIK REKLAM</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
