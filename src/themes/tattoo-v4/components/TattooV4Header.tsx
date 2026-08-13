"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { CustomDatePicker } from './CustomDatePicker';

export function TattooV4Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Booking Modal States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concept, setConcept] = useState('');
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedArtist, setSelectedArtist] = useState<string>('any');

  const timeSlots = ["11:00", "13:00", "15:00", "17:00", "18:30"];
  const isTimeBooked = (time: string, date: string) => {
    if (!date) return false;
    const hash = date.charCodeAt(date.length - 1) + time.charCodeAt(0) + time.charCodeAt(time.length - 1);
    return hash % 3 === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Lütfen müsait bir saat seçiniz.");
      return;
    }
    
    setIsSubmitting(true);
    
    // WhatsApp Metnini Hazırla
    const artistName = selectedArtist === 'elif' ? 'Elif Kaya' : selectedArtist === 'can' ? 'Can Derin' : 'Fark Etmez (Müsait Olan)';
    const wpMessage = `Merhaba, randevu talebi oluşturmak istiyorum.%0A%0A*👤 İsim:* ${name}%0A*📞 Telefon:* ${phone}%0A*🗓️ Tarih:* ${selectedDate}%0A*⏰ Saat:* ${selectedTime}%0A*🎨 Sanatçı:* ${artistName}%0A*📝 Konsept:* ${concept}`;
    const wpUrl = `https://wa.me/905000000000?text=${wpMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // WhatsApp sekmesini aç
      window.open(wpUrl, '_blank');
      
      setName('');
      setPhone('');
      setConcept('');
      setSelectedDate('');
      setSelectedTime('');
      setSelectedArtist('any');
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleOpenModal = () => {
      setIsSuccess(false);
      setIsBookingModalOpen(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openBookingModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openBookingModal', handleOpenModal);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'bg-[#FAF9F6]/90 backdrop-blur-md py-4 border-b border-[#E5E0D8]' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-8 lg:px-12 flex items-center justify-between">
          <Link href="/test-tattoo-v4" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-serif text-[#1A1A1A] tracking-wider">La Ligne</span>
            <span className="text-[10px] text-[#8C8A84] tracking-[0.2em] uppercase hidden md:inline-block mt-1">/ Fine Line Studio</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-12">
            <Link href="/test-tattoo-v4/felsefemiz" className="text-xs font-light text-[#5A5853] hover:text-[#1A1A1A] transition-colors uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">FELSEFEMİZ</Link>
            <Link href="/test-tattoo-v4/portfolyo" className="text-xs font-light text-[#5A5853] hover:text-[#1A1A1A] transition-colors uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">PORTFOLYO</Link>
            <Link href="/test-tattoo-v4/sanatcilar" className="text-xs font-light text-[#5A5853] hover:text-[#1A1A1A] transition-colors uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">SANATÇILAR</Link>
            <Link href="/test-tattoo-v4/danismanlik" className="text-xs font-light text-[#5A5853] hover:text-[#1A1A1A] transition-colors uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#1A1A1A] after:transition-all hover:after:w-full">DANIŞMANLIK</Link>
          </nav>

          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            
            <button 
              onClick={() => {
                setIsSuccess(false);
                setIsBookingModalOpen(true);
              }}
              className="hidden md:block px-8 py-3 bg-transparent border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-light uppercase tracking-[0.2em] transition-all duration-300"
            >
              Randevu Talebi
            </button>
            
            <button 
              className="lg:hidden text-[#1A1A1A] z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#FAF9F6] z-40 flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <Link href="/test-tattoo-v4/felsefemiz" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-[#1A1A1A] uppercase tracking-[0.2em]">FELSEFEMİZ</Link>
          <Link href="/test-tattoo-v4/portfolyo" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-[#1A1A1A] uppercase tracking-[0.2em]">PORTFOLYO</Link>
          <Link href="/test-tattoo-v4/sanatcilar" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-[#1A1A1A] uppercase tracking-[0.2em]">SANATÇILAR</Link>
          <Link href="/test-tattoo-v4/danismanlik" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-[#1A1A1A] uppercase tracking-[0.2em]">DANIŞMANLIK</Link>
          
          <div className="mt-8 pt-8 border-t border-[#E5E0D8] w-full flex justify-center">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSuccess(false);
                setIsBookingModalOpen(true);
              }}
              className="px-8 py-3 bg-transparent border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-light uppercase tracking-[0.2em] transition-all duration-300"
            >
              Randevu Talebi
            </button>
          </div>
        </nav>
      </div>

      {/* Booking Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[60] overflow-y-auto transition-all duration-500 ${
          isBookingModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm" onClick={() => !isSubmitting && setIsBookingModalOpen(false)}></div>
        
        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 py-12">
          <div 
            className={`relative bg-[#FAF9F6] w-full max-w-2xl p-6 md:p-12 border border-[#E5E0D8] shadow-2xl transition-all duration-500 transform ${
              isBookingModalOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
            }`}
          >
          <button 
            onClick={() => !isSubmitting && setIsBookingModalOpen(false)}
            className="absolute top-6 right-6 text-[#1A1A1A] hover:text-[#B59461] transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSuccess ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-[#F5F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B59461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-[#1A1A1A] mb-4">Talebiniz Bize Ulaştı.</h3>
              <p className="text-[#5A5853] font-light mb-8">
                Hayalinizdeki çizgiye bir adım daha yaklaştınız. Yeni sekmede açılan WhatsApp üzerinden mesajınızı iletebilirsiniz. Ekibimiz detayları inceleyip en kısa sürede sizinle iletişime geçecek.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="px-8 py-3 bg-[#1A1A1A] text-white text-xs font-light uppercase tracking-[0.2em] transition-all hover:bg-[#2D2D2D]"
              >
                Kapat
              </button>
            </div>
          ) : (
            <div className="animate-fade-in text-left">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif text-[#1A1A1A] mb-3">Hızlı Randevu.</h3>
                <p className="text-[#5A5853] font-light text-sm">Hayalinizdeki çizgiyi tasarlamak için ilk adımı atın.</p>
              </div>

              <form className="space-y-8" onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light text-sm placeholder-[#8C8A84] disabled:opacity-50" placeholder="İsim Soyisim *" />
                  </div>
                  <div className="relative">
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light text-sm placeholder-[#8C8A84] disabled:opacity-50" placeholder="Telefon Numarası *" />
                  </div>
                </div>

                <div className="relative">
                  <textarea rows={2} value={concept} onChange={(e) => setConcept(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light text-sm placeholder-[#8C8A84] resize-none disabled:opacity-50" placeholder="Düşündüğünüz dövme konseptinden kısaca bahsedin... *" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-30">
                  <div className="relative">
                    <select 
                      id="modal-artist"
                      value={selectedArtist}
                      onChange={(e) => setSelectedArtist(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light text-sm appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="any">Müsait Olan Sanatçı (Varsayılan)</option>
                      <option value="elif">Elif Kaya (Fine Line & Botanik)</option>
                      <option value="can">Can Derin (Mikro Realizm)</option>
                    </select>
                    <label htmlFor="modal-artist" className="absolute left-0 -top-4 text-[10px] text-[#1A1A1A] tracking-[0.1em] uppercase">Danışman / Sanatçı *</label>
                    <div className="absolute right-0 top-2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8C8A84]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative">
                    <CustomDatePicker 
                      value={selectedDate}
                      onChange={(val) => {
                        setSelectedDate(val);
                        setSelectedTime(''); // Reset time when date changes
                      }}
                      disabled={isSubmitting} 
                    />
                    <label className="absolute left-0 -top-4 text-[10px] text-[#1A1A1A] tracking-[0.1em] uppercase">Tarih *</label>
                  </div>
                </div>

                {/* Simulated Time Slots */}
                <div className={`transition-all duration-500 overflow-hidden ${selectedDate ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <label className="block text-[10px] text-[#1A1A1A] tracking-[0.1em] uppercase mb-4">Saat Seçimi *</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(time => {
                      const booked = isTimeBooked(time, selectedDate);
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={booked || isSubmitting}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 text-xs font-light tracking-widest border transition-all duration-300 ${
                            booked 
                              ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed line-through' 
                              : selectedTime === time 
                                ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                                : 'border-[#E5E0D8] bg-transparent text-[#1A1A1A] hover:border-[#1A1A1A]'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !selectedTime}
                    className="w-full py-4 bg-[#1A1A1A] hover:bg-[#2D2D2D] disabled:bg-[#E5E0D8] disabled:text-[#8C8A84] disabled:cursor-not-allowed text-white text-xs font-light uppercase tracking-[0.2em] transition-all duration-300 flex justify-center items-center h-12"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Randevu Planla (WhatsApp)"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
}
