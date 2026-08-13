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
          className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase hover:text-gray-500 transition-colors"
        >
          {/* Yuvarlak Bayrak */}
          <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 shadow-sm">
            <img 
              src={`https://flagcdn.com/${languages.find(l => l.code === activeLang)?.flag || 'tr'}.svg`} 
              alt="flag" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span>{activeLang}</span>
          
          {/* Ok İkonu */}
          <svg className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="absolute top-full right-0 mt-4 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden w-28 flex flex-col"
            >
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)}
                  className={`px-4 py-3 text-xs tracking-widest uppercase font-sans flex items-center gap-3 w-full text-left transition-colors hover:bg-gray-100
                    ${activeLang === l.code ? 'bg-gray-900 text-white hover:bg-gray-800' : 'text-gray-800'}
                  `}
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 border border-black/10 shadow-sm">
                    <img src={`https://flagcdn.com/${l.flag}.svg`} alt={l.code} className="w-full h-full object-cover" />
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
