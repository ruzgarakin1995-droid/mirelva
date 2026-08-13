"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HairSalonBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 's1', name: 'İmza Kesim & Şekillendirme', time: '60 dk', price: '₺1,200' },
  { id: 's2', name: 'Balyaj & Renklendirme', time: '180 dk', price: '₺3,500+' },
  { id: 's3', name: 'Keratin Bakımı', time: '120 dk', price: '₺2,500' },
  { id: 's4', name: 'Premium Blowout (Fön)', time: '45 dk', price: '₺450' },
];

const artists = [
  { id: 'a1', name: 'Céline V.', role: 'Kreatif Direktör', img: '/hair-salon/hair_model_1.jpg' },
  { id: 'a2', name: 'Amelie R.', role: 'Renk Uzmanı (Colorist)', img: '/hair-salon/hair_model_2.jpg' },
];

export function HairSalonBookingModal({ isOpen, onClose }: HairSalonBookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  if (!isOpen) return null;

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const timeSlots = [
    { time: '10:00', isBooked: false },
    { time: '11:30', isBooked: true },
    { time: '13:00', isBooked: false },
    { time: '15:00', isBooked: true },
    { time: '16:30', isBooked: false },
    { time: '18:00', isBooked: false },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#352F2A]/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#FDFBF7] shadow-2xl flex flex-col min-h-[650px] overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#352F2A]/10 flex justify-between items-center relative z-10 bg-[#FDFBF7]">
              <div>
                <h2 className="text-2xl font-serif text-[#352F2A]">Rezervasyon</h2>
                <div className="flex gap-2 mt-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-1 transition-colors ${step >= i ? 'bg-[#C4A484]' : 'bg-[#352F2A]/10'}`} />
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-[#352F2A]/50 hover:text-[#352F2A] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 relative">
              <AnimatePresence mode="wait">
                
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif text-[#352F2A] mb-4">Lütfen hizmet seçiniz.</h3>
                    {services.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => { setSelectedService(s.id); setTimeout(nextStep, 300); }}
                        className={`p-6 border cursor-pointer transition-all duration-300 flex justify-between items-center ${selectedService === s.id ? 'border-[#C4A484] bg-[#C4A484]/5' : 'border-[#352F2A]/10 hover:border-[#352F2A]/40'}`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-serif text-lg text-[#352F2A]">{s.name}</span>
                          <span className="text-xs font-sans text-[#352F2A]/50 uppercase tracking-wider">{s.time}</span>
                        </div>
                        <span className="font-sans text-[#352F2A]">{s.price}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
                    <h3 className="text-xl font-serif text-[#352F2A] mb-4">Uzman tercihi yapınız.</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {artists.map(a => (
                        <div 
                          key={a.id}
                          onClick={() => { setSelectedArtist(a.id); setTimeout(nextStep, 300); }}
                          className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 group ${selectedArtist === a.id ? 'border-[#C4A484] bg-[#C4A484]/5' : 'border-[#352F2A]/10 hover:border-[#352F2A]/40'}`}
                        >
                          <img src={a.img} alt={a.name} className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <div className="flex flex-col">
                            <span className="font-serif text-lg text-[#352F2A]">{a.name}</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#C4A484] mt-1">{a.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-8">
                    <div>
                      <h3 className="text-xl font-serif text-[#352F2A] mb-4">Tarih seçimi.</h3>
                      <input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-4 border border-[#352F2A]/20 focus:border-[#C4A484] focus:outline-none bg-transparent font-sans text-[#352F2A]" 
                      />
                    </div>
                    
                    {selectedDate && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="text-xl font-serif text-[#352F2A] mb-4">Saat seçimi.</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {timeSlots.map(slot => (
                            <div
                              key={slot.time}
                              onClick={() => {
                                if (!slot.isBooked) {
                                  setSelectedTime(slot.time);
                                  setTimeout(nextStep, 300);
                                }
                              }}
                              className={`p-4 text-center border font-sans transition-all duration-300 flex flex-col items-center gap-1
                                ${slot.isBooked 
                                  ? 'bg-[#352F2A]/5 border-transparent text-[#352F2A]/30 cursor-not-allowed' 
                                  : selectedTime === slot.time 
                                    ? 'border-[#352F2A] bg-[#352F2A] text-[#FDFBF7] cursor-pointer' 
                                    : 'border-[#352F2A]/20 hover:border-[#352F2A] bg-transparent text-[#352F2A] cursor-pointer'
                                }`}
                            >
                              <span className="text-lg">{slot.time}</span>
                              {slot.isBooked && <span className="text-[9px] uppercase tracking-widest text-[#352F2A]/40">Dolu</span>}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-8">
                    <h3 className="text-xl font-serif text-[#352F2A]">Bilgileriniz.</h3>
                    
                    <div className="flex flex-col gap-6">
                      <div className="relative">
                        <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-transparent border-b border-[#352F2A]/20 py-3 text-[#352F2A] focus:outline-none focus:border-[#C4A484] transition-colors" />
                      </div>
                      <div className="relative">
                        <input type="tel" placeholder="Telefon Numaranız" className="w-full bg-transparent border-b border-[#352F2A]/20 py-3 text-[#352F2A] focus:outline-none focus:border-[#C4A484] transition-colors" />
                      </div>
                    </div>

                    <div className="bg-[#352F2A] text-[#FDFBF7] p-6 mt-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4A484] opacity-20 rounded-full blur-3xl mix-blend-screen"></div>
                      <h4 className="font-serif text-lg mb-4 border-b border-[#FDFBF7]/20 pb-2">Rezervasyon Özeti</h4>
                      <div className="flex flex-col gap-3 text-sm font-sans font-light">
                        <div className="flex justify-between"><span>Hizmet:</span> <span>{services.find(s => s.id === selectedService)?.name}</span></div>
                        <div className="flex justify-between"><span>Uzman:</span> <span>{artists.find(a => a.id === selectedArtist)?.name}</span></div>
                        <div className="flex justify-between"><span>Zaman:</span> <span>{selectedDate} - {selectedTime}</span></div>
                      </div>
                    </div>

                    <button 
                      onClick={nextStep}
                      className="w-full bg-[#C4A484] text-[#352F2A] py-5 font-sans font-semibold tracking-[0.2em] uppercase text-xs hover:bg-[#352F2A] hover:text-[#FDFBF7] transition-colors duration-500"
                    >
                      Onayla
                    </button>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div key="s5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center h-[400px] gap-6">
                    <div className="w-24 h-24 rounded-full bg-[#352F2A] flex items-center justify-center text-[#C4A484]">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-serif text-[#352F2A] mt-4">Teşekkürler.</h3>
                    <p className="font-sans font-light text-[#352F2A]/70 max-w-sm">
                      Rezervasyonunuz başarıyla oluşturuldu. Sizi Éclat Studio'da ağırlamak için sabırsızlanıyoruz.
                    </p>
                    <button 
                      onClick={onClose}
                      className="text-xs font-sans tracking-[0.2em] uppercase text-[#352F2A] border-b border-[#352F2A] pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-colors mt-4"
                    >
                      Kapat
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer Back Button */}
            {step > 1 && step < 5 && (
              <div className="px-8 pb-8 pt-4">
                <button 
                  onClick={prevStep}
                  className="flex items-center gap-2 text-[10px] font-sans tracking-[0.2em] uppercase text-[#352F2A]/50 hover:text-[#352F2A] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  Geri
                </button>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
