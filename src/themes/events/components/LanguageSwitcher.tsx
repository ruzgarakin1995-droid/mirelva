"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

// Dil listesi ve bayrak kodları (flagcdn.com destekli)
const languages = [
  { code: 'tr', label: 'TR', flag: 'tr' },
  { code: 'en', label: 'EN', flag: 'gb' },
  { code: 'de', label: 'DE', flag: 'de' },
  { code: 'fr', label: 'FR', flag: 'fr' },
  { code: 'ru', label: 'RU', flag: 'ru' },
  { code: 'ar', label: 'AR', flag: 'sa' }
];

export default function LanguageSwitcher() {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('tr');

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut çeviri çerezini kontrol et
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
      setActiveLang(match[1]);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    setLangDropdownOpen(false);
    
    // Google Translate'in dil çerezini ayarla
    document.cookie = `googtrans=/tr/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${lang}; path=/`; // Localhost desteği için
    
    // Çevirinin aktif olması için sayfayı yenile
    window.location.reload();
  };

  return (
    <>
      <div className="relative z-50">
        {/* Ana Buton */}
        <button 
          onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-white/80 hover:text-[#C19A6B] transition-colors"
        >
          {/* Yuvarlak Bayrak */}
          <div className="w-5 h-5 rounded-full overflow-hidden border border-[#C19A6B]/50 flex-shrink-0 shadow-sm">
            <img 
              src={`https://flagcdn.com/${languages.find(l => l.code === activeLang)?.flag || 'tr'}.svg`} 
              alt="flag" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span>{activeLang}</span>
          
          {/* Ok İkonu */}
          <svg className={`w-3 h-3 transition-transform duration-300 ${langDropdownOpen ? 'rotate-180 text-[#C19A6B]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Açılır Menü */}
        <AnimatePresence>
          {langDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full right-0 mt-6 bg-[#1A1614]/95 backdrop-blur-md rounded-none shadow-2xl border border-[#C19A6B]/20 overflow-hidden w-32 flex flex-col"
            >
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)}
                  className={`flex items-center gap-3 px-4 py-3 text-xs tracking-widest uppercase transition-colors hover:bg-[#C19A6B]/10 hover:text-[#C19A6B] ${
                    activeLang === l.code ? 'bg-[#C19A6B]/20 text-[#C19A6B]' : 'text-white/70'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden border border-white/20">
                    <img 
                      src={`https://flagcdn.com/${l.flag}.svg`} 
                      alt="flag" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Google Translate Entegrasyon Kodları (Gizli) */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <style dangerouslySetInnerHTML={{__html: `
        /* Google Translate'in orijinal çirkin barını ve arayüzünü gizleyen CSS */
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
                pageLanguage: 'tr', // Sitenizin orijinal dili
                includedLanguages: 'tr,en,de,fr,ru,ar', // Eklenecek diller
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
