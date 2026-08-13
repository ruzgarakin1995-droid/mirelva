"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export function TattooHeader() {
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

  const timeSlots = ["11:00", "13:00", "15:00", "17:00", "19:00"];
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
    
    const artistName = selectedArtist === 'alex' ? 'Alex (Dark Trash)' : selectedArtist === 'mia' ? 'Mia (Neo Traditional)' : 'Fark Etmez (Müsait Olan)';
    const wpMessage = `Merhaba, dövme randevusu almak istiyorum.%0A%0A*👤 İsim:* ${name}%0A*📞 Telefon:* ${phone}%0A*🗓️ Tarih:* ${selectedDate}%0A*⏰ Saat:* ${selectedTime}%0A*🎨 Sanatçı:* ${artistName}%0A*📝 Konsept:* ${concept}`;
    const wpUrl = `https://wa.me/905000000000?text=${wpMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // WhatsApp'a yönlendir
      window.open(wpUrl, '_blank');
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleOpenModal = () => {
      setIsSuccess(false);
      setIsBookingModalOpen(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openTattooBookingModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openTattooBookingModal', handleOpenModal);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/test-tattoo-v3" className="flex flex-col items-center group">
            <span className="text-2xl font-black text-white tracking-tighter uppercase">Iron & Ink</span>
            <span className="text-[10px] text-red-600 font-bold tracking-widest uppercase mt-0.5 group-hover:text-red-500 transition-colors">Tattoo Studio</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Stüdyo', path: '/test-tattoo-v3/studyo' },
              { name: 'Tarzlar', path: '/test-tattoo-v3/tarzlar' },
              { name: 'Sanatçılar', path: '/test-tattoo-v3/sanatcilar' },
              { name: 'Galeri', path: '/test-tattoo-v3/galeri' },
              { name: 'Süreç', path: '/test-tattoo-v3/surec' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <button 
              onClick={() => {
                setIsSuccess(false);
                setIsBookingModalOpen(true);
              }}
              className="hidden md:block px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider transition-all rounded-sm overflow-hidden relative group"
            >
              <span className="relative z-10">Randevu Al</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
            </button>
            
            <button 
              className="md:hidden text-white relative z-50 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-30 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 pointer-events-none"></div>
        <nav className="flex flex-col items-center gap-8 relative z-10">
          {[
            { name: 'Stüdyo', path: '/test-tattoo-v3/studyo' },
            { name: 'Tarzlar', path: '/test-tattoo-v3/tarzlar' },
            { name: 'Sanatçılar', path: '/test-tattoo-v3/sanatcilar' },
            { name: 'Galeri', path: '/test-tattoo-v3/galeri' },
            { name: 'Süreç', path: '/test-tattoo-v3/surec' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-zinc-800 w-full flex justify-center">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSuccess(false);
                setIsBookingModalOpen(true);
              }}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider transition-all rounded-sm flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              Hemen Randevu Al
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Booking Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[60] overflow-y-auto transition-all duration-700 ease-in-out ${
          isBookingModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className={`fixed inset-0 bg-zinc-950/90 backdrop-blur-md transition-opacity duration-700 ${
            isBookingModalOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => !isSubmitting && setIsBookingModalOpen(false)}
        ></div>
        
        <div className="min-h-full flex items-center justify-center p-4 sm:p-6 py-12 relative pointer-events-none">
          <div 
            className={`relative bg-zinc-950 w-full max-w-4xl border border-white/5 shadow-2xl transition-all duration-700 transform pointer-events-auto overflow-hidden ${
              isBookingModalOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'
            }`}
          >
            {/* Background Texture & Watermark */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}></div>
            <div className="absolute -right-20 -bottom-20 text-[15rem] font-black text-white/5 leading-none select-none pointer-events-none uppercase tracking-tighter">INK</div>

            {/* Split Layout Container */}
            <div className="flex flex-col md:flex-row relative z-10">
              
              {/* Left Side: Info & Vibe */}
              <div className="hidden md:flex flex-col justify-between w-2/5 bg-zinc-900/50 p-10 border-r border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                    Vücudun <br/><span className="text-red-600">Senin Tuvalin</span>
                  </h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    Sıradanlığı reddet. Hayalindeki tasarımı ustalıkla tenine işlemek için ücretsiz danışmanlık randevunu oluştur.
                  </p>
                </div>
                
                <div className="relative z-10 mt-12 space-y-4">
                  <div className="flex items-center gap-4 text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs tracking-widest uppercase">Kadıköy, İstanbul</span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs tracking-widest uppercase">Salı - Pazar / 11:00 - 20:00</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-3/5 p-5 sm:p-8 md:p-12 relative">
                <button 
                  onClick={() => !isSubmitting && setIsBookingModalOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-zinc-500 hover:text-white transition-all transform hover:rotate-90 z-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {isSuccess ? (
                  <div className="text-center py-16 md:py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-900 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-600/30 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-white mb-4 tracking-tighter">Talebin Ulaştı</h3>
                    <p className="text-zinc-400 font-light mb-10 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                      Bedenini sanatla buluşturmaya bir adım kaldı. Tasarım detaylarını görüşmek ve randevunu kesinleştirmek için <strong>en kısa sürede</strong> seninle iletişime geçeceğiz.
                    </p>
                    <button 
                      onClick={() => {
                        setIsBookingModalOpen(false);
                        setTimeout(() => {
                          setIsSuccess(false);
                          setName('');
                          setPhone('');
                          setConcept('');
                          setSelectedDate('');
                          setSelectedTime('');
                          setSelectedArtist('any');
                        }, 500); // clear form after animation
                      }}
                      className="px-8 py-4 md:px-10 bg-white text-zinc-950 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-zinc-300 rounded-sm w-full sm:w-auto"
                    >
                      Stüdyoya Dön
                    </button>
                  </div>
                ) : (
                  <div className="animate-in fade-in duration-500 text-left">
                    <div className="mb-10 md:hidden">
                      <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Randevu <span className="text-red-600">Al</span></h3>
                    </div>

                    <form className="space-y-8" onSubmit={handleBookingSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative group">
                          <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            disabled={isSubmitting} 
                            className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-red-600 transition-colors text-white font-light text-lg placeholder-transparent peer disabled:opacity-50" 
                            placeholder="İsim Soyisim" 
                            id="name"
                          />
                          <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                            İsim Soyisim *
                          </label>
                        </div>
                        
                        <div className="relative group">
                          <input 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                            disabled={isSubmitting} 
                            className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-red-600 transition-colors text-white font-light text-lg placeholder-transparent peer disabled:opacity-50" 
                            placeholder="Telefon" 
                            id="phone"
                          />
                          <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs font-bold text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                            Telefon Numarası *
                          </label>
                        </div>
                      </div>

                      <div className="relative group pt-4">
                        <textarea 
                          rows={2} 
                          value={concept} 
                          onChange={(e) => setConcept(e.target.value)} 
                          required 
                          disabled={isSubmitting} 
                          className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-red-600 transition-colors text-white font-light text-lg placeholder-transparent peer disabled:opacity-50 resize-none" 
                          placeholder="Konsept" 
                          id="concept"
                        />
                        <label htmlFor="concept" className="absolute left-0 -top-3.5 text-xs font-bold text-zinc-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-600">
                          Düşündüğün Dövme Fikri *
                        </label>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 relative z-20">
                        <div className="relative">
                          <select 
                            value={selectedArtist}
                            onChange={(e) => setSelectedArtist(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-red-600 transition-colors text-white font-light text-lg appearance-none disabled:opacity-50 cursor-pointer"
                          >
                            <option value="any" className="bg-zinc-900">Fark Etmez (Müsait Olan)</option>
                            <option value="alex" className="bg-zinc-900">Alex (Dark Trash)</option>
                            <option value="mia" className="bg-zinc-900">Mia (Neo Traditional)</option>
                          </select>
                          <label className="absolute left-0 -top-3.5 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                            Sanatçı *
                          </label>
                          <div className="absolute right-0 top-4 pointer-events-none text-zinc-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        <div className="relative">
                          <input 
                            type="date"
                            value={selectedDate}
                            onChange={(e) => {
                              setSelectedDate(e.target.value);
                              setSelectedTime(''); 
                            }}
                            disabled={isSubmitting} 
                            style={{ colorScheme: 'dark' }}
                            className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-red-600 transition-colors text-white font-light text-lg disabled:opacity-50"
                          />
                          <label className="absolute left-0 -top-3.5 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                            Tarih *
                          </label>
                        </div>
                      </div>

                      {/* Simulated Time Slots */}
                      <div className={`transition-all duration-500 overflow-hidden ${selectedDate ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                        <label className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">Saat Seçimi *</label>
                        <div className="flex flex-wrap gap-3">
                          {timeSlots.map(time => {
                            const booked = isTimeBooked(time, selectedDate);
                            return (
                              <button
                                key={time}
                                type="button"
                                disabled={booked || isSubmitting}
                                onClick={() => setSelectedTime(time)}
                                className={`px-5 py-2.5 text-sm font-bold tracking-widest transition-all rounded-sm border ${
                                  booked 
                                    ? 'border-transparent bg-zinc-900 text-zinc-700 cursor-not-allowed line-through' 
                                    : selectedTime === time 
                                      ? 'border-red-600 bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                                      : 'border-zinc-800 bg-transparent text-zinc-400 hover:border-red-500/50 hover:text-white'
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-8">
                        <button 
                          type="submit" 
                          disabled={isSubmitting || !selectedTime}
                          className="w-full py-5 bg-red-600 hover:bg-red-700 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:cursor-not-allowed disabled:border-zinc-800 border border-transparent text-white font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-sm flex justify-center items-center h-16 group overflow-hidden relative"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Bağlanıyor...
                            </>
                          ) : (
                            <>
                              <span className="relative z-10">Randevu Talebini Gönder</span>
                              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
