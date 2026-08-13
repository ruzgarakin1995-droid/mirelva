import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

import { BeautyBookingModal } from './BeautyBookingModal';

const languages = [
  { code: 'tr', label: 'TR', flag: 'tr' },
  { code: 'en', label: 'EN', flag: 'gb' },
  { code: 'de', label: 'DE', flag: 'de' },
  { code: 'fr', label: 'FR', flag: 'fr' },
  { code: 'ru', label: 'RU', flag: 'ru' },
  { code: 'ar', label: 'AR', flag: 'sa' }
];

export function BeautyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('tr');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
      setActiveLang(match[1]);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    setLangDropdownOpen(false);
    document.cookie = `googtrans=/tr/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${lang}; path=/`; 
    window.location.reload();
  };

  const textColor = (isScrolled || isMobileMenuOpen) ? 'text-[#3E2B2B]' : 'text-[#FDFCF9]';
  const bgColor = (isScrolled || isMobileMenuOpen) ? 'bg-[#FAF5F0]/95 backdrop-blur-xl shadow-sm' : 'bg-transparent';

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
        
        {/* Mobile Toggle */}
        <div className="flex-1 md:hidden flex justify-start">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-[60] p-2 -ml-2 ${textColor}`}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-[7px]' : 'w-full'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-3/4'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-[7px]' : 'w-full'}`}></span>
            </div>
          </button>
        </div>

        {/* Left Nav (Desktop) */}
        <nav className={`hidden md:flex gap-10 items-center justify-start flex-1 font-serif text-sm italic ${textColor} transition-colors duration-500`}>
          <Link href="/test-beauty/hizmetler" className="hover:text-[#D4A373] transition-colors">Hizmetlerimiz</Link>
          <Link href="/test-beauty/hikayemiz" className="hover:text-[#D4A373] transition-colors">Hikayemiz</Link>
        </nav>

        {/* Brand Logo */}
        <Link href="/test-beauty" className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-[60] ${textColor} transition-colors duration-500`}>
          <span className="text-4xl md:text-5xl font-serif tracking-wide">La Ville</span>
          <span className="text-[9px] font-sans tracking-[0.3em] uppercase opacity-70 mt-1">Beauty Center</span>
        </Link>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-6 z-[60]">
          
          {/* Right Nav (Desktop only) */}
          <nav className={`hidden md:flex gap-10 items-center font-serif text-sm italic ${textColor} transition-colors duration-500`}>
            <Link href="/test-beauty/galeri" className="hover:text-[#D4A373] transition-colors">Galeri</Link>
            <Link href="/test-beauty/iletisim" className="hover:text-[#D4A373] transition-colors">İletişim</Link>
          </nav>
          
          {/* Lang Dropdown (Mobile & Desktop) */}
          <div className="relative">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-1 md:gap-2 font-sans text-[10px] md:text-xs tracking-widest uppercase hover:text-[#D4A373] transition-colors not-italic ${textColor}`}
            >
              <div className="w-4 h-4 rounded-full overflow-hidden border border-[#3E2B2B]/20 flex-shrink-0 shadow-sm">
                <img src={`https://flagcdn.com/${languages.find(l => l.code === activeLang)?.flag || 'tr'}.svg`} alt="flag" className="w-full h-full object-cover" />
              </div>
              <span>{activeLang}</span>
              <svg className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-[#FAF5F0] rounded-lg shadow-xl border border-[#3E2B2B]/10 overflow-hidden w-28 z-50 flex flex-col not-italic"
                >
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className={`px-4 py-3 text-xs tracking-widest uppercase font-sans flex items-center gap-3 w-full text-left hover:bg-[#D4A373] hover:text-[#FAF5F0] transition-colors ${activeLang === l.code ? 'bg-[#3E2B2B] text-white' : 'text-[#3E2B2B]'}`}
                    >
                      <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 border border-white/20 shadow-sm">
                        <img src={`https://flagcdn.com/${l.flag}.svg`} alt={l.code} className="w-full h-full object-cover" />
                      </div>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => window.dispatchEvent(new Event('openBeautyBooking'))} className="hidden md:block bg-[#D4A373] text-[#FDFCF9] font-sans font-medium text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#3E2B2B] transition-colors duration-500 shadow-md not-italic">
            Randevu Al
          </button>
        </div>

      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#FAF5F0] shadow-xl border-t border-[#3E2B2B]/10 z-40 flex flex-col items-center py-10"
          >
            <nav className="flex flex-col gap-6 text-center text-[#3E2B2B] font-serif text-xl italic">
              <Link href="/test-beauty/hizmetler" onClick={() => setIsMobileMenuOpen(false)}>Hizmetlerimiz</Link>
              <Link href="/test-beauty/hikayemiz" onClick={() => setIsMobileMenuOpen(false)}>Hikayemiz</Link>
              <Link href="/test-beauty/galeri" onClick={() => setIsMobileMenuOpen(false)}>Galeri</Link>
              <Link href="/test-beauty/iletisim" onClick={() => setIsMobileMenuOpen(false)}>İletişim</Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new Event('openBeautyBooking'));
                }}
                className="mt-4 bg-[#D4A373] text-[#FDFCF9] font-sans font-medium text-[10px] tracking-widest uppercase px-8 py-3 rounded-full shadow-md not-italic"
              >
                Randevu Al
              </button>



            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <BeautyBookingModal />
    
    {/* Google Translate Integration */}
    <div id="google_translate_element" style={{ display: 'none' }}></div>
    <style dangerouslySetInnerHTML={{__html: `
      body { top: 0 !important; }
      .skiptranslate, .goog-te-banner-frame { display: none !important; }
      .goog-tooltip { display: none !important; hover: none !important; }
      .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
    `}} />
    <Script 
      id="google-translate-script" 
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function googleTranslateElementInit() {
            new window.google.translate.TranslateElement({
              pageLanguage: 'tr',
              includedLanguages: 'tr,en,de,fr,ru,ar',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `
      }}
    />
    <Script 
      src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
      strategy="afterInteractive" 
    />
    </>
  );
}
