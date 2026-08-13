import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function RealEstateFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f0] pt-24 pb-8 px-6 md:px-12 mt-24">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
           
           {/* Brand & Newsletter */}
           <div className="lg:w-1/3 flex flex-col gap-12">
             <Link href="/test-real-estate" className="group block">
               <span className="text-3xl font-normal tracking-tight text-[#f5f5f0]">
                 AURA<span className="font-serif italic text-[#f5f5f0]/60">Estates</span>
               </span>
             </Link>
             
             <div>
               <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]/40 mb-4">Özel Bülten</h4>
               <div className="flex items-center border-b border-[#f5f5f0]/20 pb-3 group hover:border-[#f5f5f0]/50 transition-colors">
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="bg-transparent border-none outline-none w-full text-sm font-medium text-[#f5f5f0] placeholder:text-[#f5f5f0]/30"
                  />
                  <button className="text-[#f5f5f0]/40 group-hover:text-[#f5f5f0] transition-colors">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </button>
               </div>
             </div>
           </div>

           {/* Navigation Grid */}
           <div className="lg:w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-12">
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]/40 mb-2">Keşfet</h4>
                {[
                  { label: 'Öne Çıkanlar', href: '/test-real-estate/featured' },
                  { label: 'Satılık Portföy', href: '/test-real-estate/sale' },
                  { label: 'Kiralık Portföy', href: '/test-real-estate/rent' },
                  { label: 'Projeler', href: '/test-real-estate/projects' },
                  { label: 'Mimarlar', href: '/test-real-estate/architects' }
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="text-sm font-medium text-[#f5f5f0]/70 hover:text-[#f5f5f0] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]/40 mb-2">Kurumsal</h4>
                {[
                  { label: 'Hakkımızda', href: '/test-real-estate/about' },
                  { label: 'Danışman Ekibimiz', href: '/test-real-estate/team' },
                  { label: 'Kariyer', href: '/test-real-estate/careers' },
                  { label: 'Basın', href: '/test-real-estate/press' },
                  { label: 'İletişim', href: '/test-real-estate/contact' }
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="text-sm font-medium text-[#f5f5f0]/70 hover:text-[#f5f5f0] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]/40 mb-2">İletişim</h4>
                <div className="text-sm font-medium text-[#f5f5f0]/70">
                  <p>+90 (212) 555 0199</p>
                  <p className="mt-1">info@auraestates.com.tr</p>
                  <p className="mt-4 leading-relaxed">
                    Büyükdere Cad. No: 185,<br/>
                    Levent, Şişli, İstanbul
                  </p>
                </div>
              </div>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-[#f5f5f0]/40 tracking-widest uppercase border-t border-[#f5f5f0]/10 pt-8">
           <div>© 2026 AURA. Tüm hakları saklıdır.</div>
           
           <div className="flex items-center gap-8">
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">Gizlilik</a>
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">Şartlar</a>
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">KVKK</a>
           </div>

           <div className="flex items-center gap-6">
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">IG</a>
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">IN</a>
             <a href="#" className="hover:text-[#f5f5f0] transition-colors">X</a>
           </div>
        </div>

      </div>
    </footer>
  );
}
