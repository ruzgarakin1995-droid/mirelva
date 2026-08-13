export default function Footer() {
  return (
    <footer className="bg-[#020202] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-16">
        <div>
          <h3 className="text-2xl font-light tracking-widest mb-6 text-white/90">L'AURORA</h3>
          <p className="text-white/40 font-light text-sm leading-relaxed">
            Gastronominin sınırlarını zorlayan, vizyoner şeflerimizin elinden çıkan unutulmaz bir lezzet yolculuğu.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#D4AF37] text-sm tracking-widest mb-6">İLETİŞİM</h4>
          <ul className="space-y-4 text-white/60 font-light text-sm">
            <li>+90 (212) 555 01 23</li>
            <li>info@laurora.com</li>
            <li>Zorlu Center, Meydan Katı, Beşiktaş, İstanbul</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#D4AF37] text-sm tracking-widest mb-6">ÇALIŞMA SAATLERİ</h4>
          <ul className="space-y-4 text-white/60 font-light text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Salı - Pazar</span>
              <span>18:00 - 23:30</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Pazartesi</span>
              <span className="text-[#D4AF37]">Kapalı</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/30 border-t border-white/5 pt-8">
        <p>© 2026 L'Aurora Fine Dining. Tüm hakları saklıdır.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Michelin Rehberi</a>
        </div>
      </div>
    </footer>
  );
}
