"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AestheticBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AestheticBookingModal({ isOpen, onClose }: AestheticBookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  // Simulated Time Slots (9am to 6pm)
  const allTimeSlots = [
    '09:00', '10:00', '11:00', '11:30', 
    '13:00', '14:00', '14:30', '15:00', '16:00', '17:00'
  ];

  // Helper to determine if a slot is "full" based on a mock calculation
  const isSlotFull = (dateStr: string, slot: string) => {
    if (!dateStr) return false;
    // Just a pseudo-random determinstic way to simulate booked slots based on date + time string
    const hash = dateStr.charCodeAt(dateStr.length - 1) + slot.charCodeAt(0) + slot.charCodeAt(3);
    return hash % 3 === 0; // ~33% chance a slot is full
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Switch to success step
    setStep(2);

    // Format WhatsApp Message
    const phoneNumber = "905439643406";
    const text = `Merhaba, Mirelva Beauty Clinic'ten bilgi/randevu almak istiyorum. ✨%0A%0A👤 İsim: ${formData.name}%0A📞 Telefon: ${formData.phone}%0A💉 Tedavi: ${formData.service || 'Belirtilmedi'}%0A🗓️ Tarih: ${formData.date ? formData.date.split('-').reverse().join('.') : 'Belirtilmedi'}%0A⏰ Saat: ${formData.time || 'Belirtilmedi'}%0A📝 Not: ${formData.message || 'Yok'}`;
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setStep(1); onClose(); }}
            className="absolute inset-0 bg-[#1C1C1C]/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#FDFCF9] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row min-h-[500px] overflow-hidden rounded-xl"
          >
            {/* Left Image Side */}
            <div className="hidden md:block w-1/3 relative bg-[#1C1C1C]">
              <img src="/aesthetic/aesthetic_hero_face.jpg" alt="Mirelva Clinic" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-[#FDFCF9]">
                <h3 className="font-serif text-2xl mb-2">MIRELVA</h3>
                <p className="font-sans font-light text-xs text-[#FDFCF9]/60">Güzelliğe bilimsel yaklaşım.</p>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col relative">
              <button 
                onClick={() => { setStep(1); onClose(); }}
                className="absolute top-6 right-6 text-[#1C1C1C]/40 hover:text-[#1C1C1C] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex-1 flex flex-col"
                  >
                    <h2 className="text-3xl font-serif text-[#1C1C1C] mb-2">Ücretsiz Danışmanlık</h2>
                    <p className="font-sans font-light text-[#1C1C1C]/60 text-sm mb-10">Uzman doktorlarımızla ön görüşme planlamak için bilgilerinizi bırakın.</p>

                    <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Adınız Soyadınız</label>
                          <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Telefon Numaranız</label>
                          <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-4">İlgilendiğiniz Tedavi</label>
                          <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors appearance-none cursor-pointer">
                            <option value="">Seçiniz...</option>
                            <option value="Botoks & Dolgu">Botoks & Dolgu Uygulamaları</option>
                            <option value="Lazer İşlemler">Lazer & Cihazlı İşlemler</option>
                            <option value="Medikal Cilt Bakımı">Medikal Cilt Bakımı</option>
                            <option value="Diğer">Diğer / Doktor Görüşü</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-4">Randevu Tarihi</label>
                          <input 
                            type="date" 
                            min={new Date().toISOString().split('T')[0]} 
                            value={formData.date} 
                            onChange={(e) => setFormData({...formData, date: e.target.value, time: ''})} 
                            className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Time Slots Area (Only shows if a date is picked) */}
                      <AnimatePresence>
                        {formData.date && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-3">Uygun Saatler</label>
                            <div className="grid grid-cols-5 gap-2">
                              {allTimeSlots.map((slot) => {
                                const isFull = isSlotFull(formData.date, slot);
                                const isSelected = formData.time === slot;
                                
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    disabled={isFull}
                                    onClick={() => setFormData({...formData, time: slot})}
                                    className={`
                                      py-2 text-[10px] font-sans tracking-widest transition-all duration-300 rounded-sm border
                                      ${isFull ? 'bg-[#1C1C1C]/5 border-[#1C1C1C]/5 text-[#1C1C1C]/30 cursor-not-allowed line-through' : 
                                        isSelected ? 'bg-[#C4A79A] border-[#C4A79A] text-[#FDFCF9] shadow-md' : 
                                        'bg-transparent border-[#1C1C1C]/20 text-[#1C1C1C] hover:border-[#C4A79A] hover:text-[#C4A79A]'}
                                    `}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                            {!formData.time && (
                              <p className="text-[9px] text-[#C4A79A] mt-2 italic">* Lütfen uygun bir saat dilimi seçiniz.</p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div>
                        <label className="block text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-[#1C1C1C]/50 mb-2">Mesajınız (Opsiyonel)</label>
                        <textarea rows={1} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-[#1C1C1C]/20 py-2 text-[#1C1C1C] focus:outline-none focus:border-[#C4A79A] transition-colors resize-none"></textarea>
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          className="w-full flex items-center justify-center gap-3 bg-[#1C1C1C] text-[#FDFCF9] py-4 font-sans font-medium tracking-[0.2em] uppercase text-[11px] hover:bg-[#C4A79A] transition-colors duration-500 rounded-sm"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                          WhatsApp İle Gönder
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-[#C4A79A]/20 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-[#C4A79A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-3xl font-serif text-[#1C1C1C] mb-4">Talebiniz Alınmıştır</h2>
                    <p className="font-sans font-light text-[#1C1C1C]/60 text-sm max-w-sm mb-10">
                      İletişim bilgileriniz bize başarıyla ulaştı. WhatsApp üzerinden yönlendirme de sağlanmıştır. Danışmanlarımız en kısa sürede sizinle iletişime geçecektir.
                    </p>
                    <button 
                      onClick={() => { setStep(1); onClose(); }}
                      className="bg-[#1C1C1C] text-[#FDFCF9] px-12 py-4 font-sans font-medium tracking-[0.2em] uppercase text-[10px] hover:bg-[#C4A79A] transition-colors duration-500 rounded-sm"
                    >
                      Teşekkürler
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

