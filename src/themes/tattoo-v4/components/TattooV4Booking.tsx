"use client";
import React, { useState } from 'react';
import { CustomDatePicker } from './CustomDatePicker';

export function TattooV4Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concept, setConcept] = useState('');
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedArtist, setSelectedArtist] = useState<string>('any');

  // Available time slots for a day
  const timeSlots = ["11:00", "13:00", "15:00", "17:00", "18:30"];

  // A simple deterministic function to simulate booked slots based on chosen date
  const isTimeBooked = (time: string, date: string) => {
    if (!date) return false;
    const hash = date.charCodeAt(date.length - 1) + time.charCodeAt(0) + time.charCodeAt(time.length - 1);
    return hash % 3 === 0; // Roughly 33% chance a slot is booked
  };

  const handleSubmit = (e: React.FormEvent) => {
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

    // API çağrısını simüle et
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // WhatsApp sekmesini aç
      window.open(wpUrl, '_blank');
      
      // Reset form states
      setName('');
      setEmail('');
      setPhone('');
      setConcept('');
      setSelectedDate('');
      setSelectedTime('');
      setSelectedArtist('any');
    }, 2000);
  };

  return (
    <section id="danışmanlık" className="py-32 bg-[#FAF9F6] border-t border-[#E5E0D8]">
      <div className="container mx-auto px-8 lg:px-12 max-w-4xl">
        <div className="bg-white p-8 md:p-12 lg:p-20 border border-[#E5E0D8] shadow-sm text-center relative min-h-[400px] flex flex-col justify-center">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF9F6] px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#B59461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>

          {isSuccess ? (
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-[#F5F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B59461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Talebiniz Bize Ulaştı.</h2>
              <p className="text-[#5A5853] font-light mb-8 max-w-md mx-auto">
                Hayalinizdeki çizgiye bir adım daha yaklaştınız. Yeni sekmede açılan WhatsApp üzerinden mesajınızı iletebilirsiniz. Ekibimiz detayları inceleyip en kısa sürede sizinle iletişime geçecek.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-[10px] uppercase tracking-[0.2em] text-[#B59461] hover:text-[#1A1A1A] transition-colors border-b border-[#B59461] hover:border-[#1A1A1A] pb-1"
              >
                Yeni Bir Talep Oluştur
              </button>
            </div>
          ) : (
            <div className="animate-fade-in text-left">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif text-[#1A1A1A] mb-4">Bir Hikaye Başlatalım.</h2>
                <p className="text-[#5A5853] font-light max-w-lg mx-auto">
                  Tasarım sürecimiz özel bir tanışma ile başlar. Fikirlerinizi paylaşmak ve tarih planlaması yapmak için aşağıdaki formu eksiksiz doldurun.
                </p>
              </div>

              <form className="space-y-10" onSubmit={handleSubmit}>
                {/* Personal Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative">
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors peer text-[#1A1A1A] font-light placeholder-transparent disabled:opacity-50" placeholder="Adınız" />
                    <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] text-[#8C8A84] tracking-[0.1em] uppercase peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#1A1A1A] transition-all">İsim Soyisim *</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors peer text-[#1A1A1A] font-light placeholder-transparent disabled:opacity-50" placeholder="E-posta" />
                    <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] text-[#8C8A84] tracking-[0.1em] uppercase peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#1A1A1A] transition-all">E-posta Adresi *</label>
                  </div>
                  <div className="relative">
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors peer text-[#1A1A1A] font-light placeholder-transparent disabled:opacity-50" placeholder="Telefon" />
                    <label htmlFor="phone" className="absolute left-0 -top-4 text-[10px] text-[#8C8A84] tracking-[0.1em] uppercase peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#1A1A1A] transition-all">Telefon *</label>
                  </div>
                </div>

                {/* Concept */}
                <div className="relative">
                  <textarea id="concept" rows={2} value={concept} onChange={(e) => setConcept(e.target.value)} required disabled={isSubmitting} className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors peer text-[#1A1A1A] font-light placeholder-transparent resize-none disabled:opacity-50" placeholder="Konsept" />
                  <label htmlFor="concept" className="absolute left-0 -top-4 text-[10px] text-[#8C8A84] tracking-[0.1em] uppercase peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#1A1A1A] transition-all">Dövme Konseptiniz & Tahmini Boyut *</label>
                </div>
                
                {/* Artist & Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-30">
                  <div className="relative">
                    <select 
                      id="artist"
                      value={selectedArtist}
                      onChange={(e) => setSelectedArtist(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-[#E5E0D8] py-2 focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A] font-light text-sm appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="any">Müsait Olan Sanatçı (Varsayılan)</option>
                      <option value="elif">Elif Kaya (Fine Line & Botanik)</option>
                      <option value="can">Can Derin (Mikro Realizm)</option>
                    </select>
                    <label htmlFor="artist" className="absolute left-0 -top-4 text-[10px] text-[#1A1A1A] tracking-[0.1em] uppercase">Danışman / Sanatçı *</label>
                    {/* Custom Arrow */}
                    <div className="absolute right-0 top-3 pointer-events-none">
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

                {/* Simulated Time Slots (Only visible if Date is selected) */}
                <div className={`transition-all duration-500 overflow-hidden ${selectedDate ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <label className="block text-[10px] text-[#1A1A1A] tracking-[0.1em] uppercase mb-4">Saat Seçimi *</label>
                  <div className="flex flex-wrap gap-3">
                    {timeSlots.map(time => {
                      const booked = isTimeBooked(time, selectedDate);
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={booked || isSubmitting}
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-2 text-xs font-light tracking-widest border transition-all duration-300 ${
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
                  <p className="text-[10px] text-[#8C8A84] mt-3 font-light italic">
                    * Çizgili saatler maalesef doludur. Lütfen müsait olan saatlerden birini seçin.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !selectedTime}
                    className="px-12 py-4 bg-[#1A1A1A] hover:bg-[#2D2D2D] disabled:bg-[#E5E0D8] disabled:text-[#8C8A84] disabled:cursor-not-allowed text-white text-xs font-light uppercase tracking-[0.2em] transition-all duration-300 min-w-[240px] flex justify-center items-center h-12 mx-auto"
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
    </section>
  );
}
