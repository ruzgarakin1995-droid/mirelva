"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Porselen Lamina",
  "İmplantoloji",
  "Şeffaf Plak (Invisalign)",
  "Gülüş Tasarımı",
  "Genel Muayene",
  "Diğer"
];

const doctorsList = [
  "Müsait Olan İlk Doktor",
  "Dt. Mizgin Aydın",
  "Mustafa Bildirici",
  "Uzm. Dt. Simge Diren Esener",
  "Uzm. Dt. İbrahim Murat Afat",
  "Dt. Alper Kabakçı"
];

const dates = [
  "12 Eki, Per", "13 Eki, Cum", "14 Eki, Cmt", "16 Eki, Pzt", "17 Eki, Sal"
];

const times = [
  "09:00", "10:30", "11:00", "13:30", "15:00", "16:45"
];

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Merhaba! 👋 Ben ${name}.\nDişmekan'dan randevu oluşturmak istiyorum. 🦷✨\n\n📌 Seçtiğim Hizmet: ${selectedService}\n👨‍⚕️ Doktor: ${selectedDoctor}\n🗓️ Tarih: ${selectedDate}\n⏰ Saat: ${selectedTime}\n\n📞 Telefon Numaram: ${phone}\n\nRandevu detaylarını onaylamak için dönüşünüzü bekliyorum, iyi çalışmalar! 🌟`;
    const wpUrl = `https://wa.me/905314977217?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(wpUrl, '_blank');
      setStep(5);
    }, 500);
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setStep(1);
      setSelectedService("");
      setSelectedDoctor("");
      setSelectedDate("");
      setSelectedTime("");
      setName("");
      setPhone("");
    }, 500);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAFA]"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Close Button */}
          <button 
            onClick={resetAndClose}
            className="absolute top-10 right-10 text-[#1A1A1A] font-sans text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity z-10"
          >
            Kapat
          </button>

          <div className="w-full max-w-3xl px-6 relative">
            
            {/* Background Aesthetic Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none -z-10">
              <h2 className="text-[20vw] font-serif leading-none whitespace-nowrap">
                Dişmekan
              </h2>
            </div>

            <AnimatePresence mode="wait">
              
              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block text-center">
                    Adım 1 / 4
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] text-center mb-16">
                    Nasıl Yardımcı <span className="italic text-[#D4C9C3] font-light">Olabiliriz?</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button
                        key={service}
                        onClick={() => { setSelectedService(service); handleNext(); }}
                        className={`py-5 px-6 border text-left font-sans font-light transition-all duration-500 ${
                          selectedService === service 
                            ? 'bg-[#1A1A1A] text-[#FAFAFA] border-[#1A1A1A]' 
                            : 'border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30 bg-transparent'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DOCTOR SELECTION */}
              {step === 2 && (
                <motion.div
                  key="step2_doctor"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block text-center">
                    Adım 2 / 4
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] text-center mb-16">
                    Doktor <span className="italic text-[#D4C9C3] font-light">Seçimi</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctorsList.map(doc => (
                      <button
                        key={doc}
                        onClick={() => { setSelectedDoctor(doc); handleNext(); }}
                        className={`py-5 px-6 border text-left font-sans font-light transition-all duration-500 ${
                          selectedDoctor === doc 
                            ? 'bg-[#1A1A1A] text-[#FAFAFA] border-[#1A1A1A]' 
                            : 'border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30 bg-transparent'
                        }`}
                      >
                        {doc}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-auto pt-8">
                    <button onClick={handlePrev} className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors py-4">
                      Geri Dön
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DATE & TIME */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block text-center">
                    Adım 3 / 4
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] text-center mb-16">
                    Sizin İçin En <span className="italic text-[#D4C9C3] font-light">Uygun Zaman</span>
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-4">Tarih</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                      {dates.map(date => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center border transition-all duration-500 ${
                            selectedDate === date 
                              ? 'bg-[#1A1A1A] text-[#FAFAFA] border-[#1A1A1A]' 
                              : 'border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30'
                          }`}
                        >
                          <span className="font-sans font-light text-sm">{date.split(' ')[0]}</span>
                          <span className="font-sans text-[10px] tracking-wider uppercase mt-1">{date.split(' ')[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-12"
                    >
                      <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/60 mb-4">Saat</h3>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {times.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 border font-sans font-light text-sm transition-all duration-500 ${
                              selectedTime === time 
                                ? 'bg-[#1A1A1A] text-[#FAFAFA] border-[#1A1A1A]' 
                                : 'border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-auto">
                    <button onClick={handlePrev} className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors py-4">
                      Geri Dön
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!selectedDate || !selectedTime}
                      className={`text-xs font-sans tracking-[0.2em] uppercase py-4 px-8 transition-colors ${
                        selectedDate && selectedTime 
                          ? 'bg-[#1A1A1A] text-[#FAFAFA]' 
                          : 'bg-[#1A1A1A]/10 text-[#1A1A1A]/40 cursor-not-allowed'
                      }`}
                    >
                      Devam Et
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: DETAILS */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block text-center">
                    Adım 4 / 4
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] text-center mb-16">
                    Sizi Daha Yakından <span className="italic text-[#D4C9C3] font-light">Tanıyalım</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-10 max-w-lg mx-auto">
                    
                    <div className="flex flex-col relative group">
                      <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-2">Adınız & Soyadınız</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#D4C9C3] transition-colors font-sans font-light text-lg text-[#1A1A1A] rounded-none"
                      />
                    </div>

                    <div className="flex flex-col relative group">
                      <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/40 mb-2">Telefon Numaranız</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-transparent border-b border-[#1A1A1A]/20 py-2 focus:outline-none focus:border-[#D4C9C3] transition-colors font-sans font-light text-lg text-[#1A1A1A] rounded-none"
                      />
                    </div>

                    <div className="flex justify-between mt-8">
                      <button type="button" onClick={handlePrev} className="text-xs font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors py-4">
                        Geri Dön
                      </button>
                      <button 
                        type="submit"
                        disabled={!name || !phone || isSubmitting}
                        className={`text-xs font-sans tracking-[0.2em] uppercase py-4 px-12 transition-all duration-500 flex items-center gap-4 ${
                          name && phone 
                            ? 'bg-[#1A1A1A] text-[#FAFAFA] hover:bg-[#D4C9C3]' 
                            : 'bg-[#1A1A1A]/10 text-[#1A1A1A]/40 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? 'İşleniyor...' : 'Randevuyu Onayla'}
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}

              {/* STEP 5: SUCCESS */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 rounded-full border border-[#D4C9C3] flex items-center justify-center mx-auto mb-10 text-[#D4C9C3]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8">
                    Teşekkürler, <span className="italic text-[#D4C9C3] font-light">{name.split(' ')[0]}</span>.
                  </h2>
                  <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed text-lg max-w-lg mx-auto mb-16">
                    Randevu talebiniz başarıyla oluşturuldu ve WhatsApp üzerinden iletildi. En kısa sürede sizinle iletişime geçilip detaylar onaylanacaktır.
                  </p>

                  <button 
                    onClick={resetAndClose}
                    className="border border-[#1A1A1A] text-[#1A1A1A] text-xs font-sans tracking-[0.2em] uppercase py-4 px-12 hover:bg-[#1A1A1A] hover:text-[#FAFAFA] transition-all duration-500"
                  >
                    Ana Ekrana Dön
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
