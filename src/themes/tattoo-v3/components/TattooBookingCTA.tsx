"use client";
import React, { useState } from 'react';

export function TattooBookingCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative py-32 bg-zinc-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/tattoo-v3/v3_booking_bg_1786315555835.jpg" 
          alt="Tattoo Booking" 
          className="w-full h-full object-cover filter grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
          Sıra <span className="text-red-600">Sende</span>
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-zinc-400 font-light mb-12">
          Vücudun senin tuvalin. Onu bir başyapıta dönüştürmek için ücretsiz danışmanlık randevunu hemen al.
        </p>
        
        <div className="max-w-md mx-auto bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-sm min-h-[320px] flex items-center justify-center">
          {isSuccess ? (
            <div className="text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Talebiniz Alındı!</h3>
              <p className="text-zinc-400 font-light">
                Sanatçılarımız portfolyonuzu inceleyip en kısa sürede sizinle iletişime geçecek.
              </p>
            </div>
          ) : (
            <form className="space-y-4 w-full animate-in fade-in duration-300" onSubmit={handleSubmit}>
              <input 
                type="text" 
                required
                placeholder="Adınız Soyadınız" 
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-red-600 outline-none text-white font-light transition-colors rounded-sm"
              />
              <input 
                type="email" 
                required
                placeholder="E-posta Adresiniz" 
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-red-600 outline-none text-white font-light transition-colors rounded-sm"
              />
              <textarea 
                required
                placeholder="Aklındaki dövme fikrini kısaca anlat..." 
                rows={3}
                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-red-600 outline-none text-white font-light transition-colors rounded-sm resize-none"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all rounded-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Gönderiliyor...
                  </>
                ) : (
                  'Randevu Talebi Gönder'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
