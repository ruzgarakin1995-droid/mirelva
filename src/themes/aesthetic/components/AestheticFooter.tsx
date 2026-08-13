"use client";

export function AestheticFooter() {
  return (
    <footer className="bg-[#1C1C1C] text-[#FDFCF9] pt-16 md:pt-24 pb-10 border-t-4 border-[#C4A79A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Info */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif tracking-[0.15em] mb-1 text-[#FDFCF9]">MIRELVA</h2>
            <p className="text-[8px] font-sans tracking-[0.4em] uppercase text-[#C4A79A] mb-8">Beauty Clinic</p>
            <p className="font-sans font-light text-sm text-[#FDFCF9]/60 leading-relaxed max-w-xs mb-8">
              Medikal estetik ve kozmetik dermatoloji alanında son teknoloji cihazlar ve uzman hekim kadrosuyla kusursuz güzelliğe ulaşın.
            </p>
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-[#FDFCF9]/20 flex items-center justify-center hover:bg-[#C4A79A] hover:border-[#C4A79A] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* WhatsApp Icon */}
              <a href="#" className="w-10 h-10 rounded-full border border-[#FDFCF9]/20 flex items-center justify-center hover:bg-[#C4A79A] hover:border-[#C4A79A] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links - Treatments */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9]/40 mb-8">Tedaviler</h3>
            <ul className="space-y-4 font-sans font-light text-[#FDFCF9]/80 text-sm">
              <li><a href="/test-aesthetic/botoks-dolgu" className="hover:text-[#C4A79A] transition-colors">Botoks & Dolgu</a></li>
              <li><a href="/test-aesthetic/lazer-epilasyon" className="hover:text-[#C4A79A] transition-colors">Lazer Epilasyon</a></li>
              <li><a href="/test-aesthetic/cilt-bakimi" className="hover:text-[#C4A79A] transition-colors">Medikal Cilt Bakımı</a></li>
              <li><a href="/test-aesthetic/bolgesel-incelme" className="hover:text-[#C4A79A] transition-colors">Bölgesel İncelme</a></li>
              <li><a href="/test-aesthetic/anti-aging" className="hover:text-[#C4A79A] transition-colors">Anti-Aging Sistemleri</a></li>
            </ul>
          </div>

          {/* Links - Corporate */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9]/40 mb-8">Kurumsal</h3>
            <ul className="space-y-4 font-sans font-light text-[#FDFCF9]/80 text-sm">
              <li><a href="/test-aesthetic/uzman-kadro" className="hover:text-[#C4A79A] transition-colors">Uzman Kadro</a></li>
              <li><a href="/test-aesthetic/hakkimizda" className="hover:text-[#C4A79A] transition-colors">Hakkımızda</a></li>
              <li><a href="/test-aesthetic/tedaviler" className="hover:text-[#C4A79A] transition-colors">Tedaviler</a></li>
              <li><a href="/test-aesthetic/iletisim" className="hover:text-[#C4A79A] transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9]/40 mb-8">Bize Ulaşın</h3>
            <ul className="space-y-4 font-sans font-light text-sm text-[#FDFCF9]/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C4A79A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Adnan Kahveci Mah. Yavuz Sultan Selim Bulvarı<br/>Perlavista Residence A Blok Kat:9 Daire:79<br/>Beylikdüzü / İSTANBUL</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <svg className="w-5 h-5 text-[#C4A79A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+905439643406" className="hover:text-[#C4A79A] transition-colors">0 (543) 964 34 06</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#FDFCF9]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans tracking-widest uppercase text-[#FDFCF9]/40">
          <p>&copy; {new Date().getFullYear()} Mirelva Beauty Clinic. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FDFCF9] transition-colors">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-[#FDFCF9] transition-colors">Gizlilik Politikası</a>
          </div>
        </div>

      </div>
    </footer>
  );
}


