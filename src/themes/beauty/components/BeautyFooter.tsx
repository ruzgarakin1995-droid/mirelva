import { motion } from 'framer-motion';

export function BeautyFooter() {
  return (
    <footer className="bg-[#3E2B2B] text-[#FDFCF9] relative overflow-hidden pt-24 pb-8">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
           <h2 className="text-3xl md:text-5xl font-serif leading-tight">
             Kusursuzluğa <br/> <span className="italic text-[#D4A373]">İlk Adımı Atın.</span>
           </h2>
           <button onClick={() => window.dispatchEvent(new Event('openBeautyBooking'))} className="group flex items-center gap-4 text-[#D4A373] hover:text-[#FAF5F0] transition-colors">
              <span className="font-sans font-medium tracking-[0.2em] text-xs uppercase">Randevu Oluştur</span>
              <div className="w-12 h-12 rounded-full border border-[#D4A373] group-hover:border-[#FAF5F0] flex items-center justify-center transition-colors">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </div>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <span className="text-3xl font-serif text-[#FAF5F0] block mb-1">La Ville</span>
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#D4A373] block mb-8">Beauty Center</span>
            <p className="font-sans text-sm text-[#FDFCF9]/60 leading-relaxed pr-8">
              La Ville, kendinize ayırdığınız en değerli zaman dilimini, en saf zarafet ve profesyonellikle taçlandırır.
            </p>
          </div>
          
          {/* Links - Services */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#D4A373] mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-4 font-sans text-sm text-[#FDFCF9]/80">
              <li><a href="/test-beauty/hizmetler" className="hover:text-[#D4A373] transition-colors">Protez Tırnak & Nail Art</a></li>
              <li><a href="/test-beauty/hizmetler" className="hover:text-[#D4A373] transition-colors">İpek Kirpik (Volume)</a></li>
              <li><a href="/test-beauty/hizmetler" className="hover:text-[#D4A373] transition-colors">Lüks Cilt Bakımı</a></li>
              <li><a href="/test-beauty/hizmetler" className="hover:text-[#D4A373] transition-colors">Profesyonel Makyaj</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#D4A373] mb-6">İletişim</h4>
            <ul className="space-y-4 font-sans text-sm text-[#FDFCF9]/80">
              <li className="leading-relaxed">LaVille Güzellik Salonu, Merkez,<br/>Abide-i Hürriyet Cd no:51, 34360<br/>Şişli/İstanbul</li>
              <li><a href="tel:+905528945550" className="hover:text-[#D4A373] transition-colors underline underline-offset-4 decoration-[#FDFCF9]/30 hover:decoration-[#D4A373]">+90 552 894 55 50</a></li>
              <li><a href="mailto:lavilleguzelliksalonu@gmail.com" className="hover:text-[#D4A373] transition-colors">lavilleguzelliksalonu@gmail.com</a></li>
              <li className="pt-2">Pazartesi – Pazar: 11:00 – 20:00</li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#D4A373] mb-6">Sosyal Medya</h4>
            <ul className="space-y-4 font-sans text-sm text-[#FDFCF9]/80">
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-[#D4A373] transition-colors">Pinterest</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center opacity-[0.03] pointer-events-none z-0">
         <span className="font-serif text-[22vw] leading-none whitespace-nowrap tracking-tighter select-none">
            LA VILLE
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="border-t border-[#FDFCF9]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-[#FDFCF9]/40 tracking-wider">
            &copy; 2026 La Ville Beauty Center. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6 font-sans text-[10px] text-[#FDFCF9]/40 tracking-wider">
            <a href="#" className="hover:text-[#D4A373] transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
