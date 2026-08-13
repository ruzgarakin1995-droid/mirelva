"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SalonBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 's1', name: 'Signature Manikür', time: '45 dk', price: '₺450' },
  { id: 's2', name: 'Jel Tırnak & Güçlendirme', time: '90 dk', price: '₺850' },
  { id: 's3', name: 'Protez Tırnak', time: '120 dk', price: '₺1,200' },
  { id: 's4', name: 'SPA Pedikür', time: '60 dk', price: '₺650' },
];

const artists = [
  { id: 'a1', name: 'Elara M.', role: 'Lead Nail Artist', img: '/salon/nail_artist_1_1786239286448.jpg' },
  { id: 'a2', name: 'Sienna K.', role: 'Nail Care Specialist', img: '/salon/nail_artist_2_1786239295843.jpg' },
];

export function SalonBookingModal({ isOpen, onClose }: SalonBookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  if (!isOpen) return null;

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Simüle edilmiş doluluk oranları
  const timeSlots = [
    { time: '09:00', isBooked: false },
    { time: '10:30', isBooked: true },
    { time: '12:00', isBooked: false },
    { time: '13:30', isBooked: true },
    { time: '15:00', isBooked: false },
    { time: '16:30', isBooked: false },
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
            className="absolute inset-0 bg-[#4A403F]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#FCFBF9] overflow-hidden shadow-2xl flex flex-col min-h-[600px]"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#4A403F]/5 flex justify-between items-center relative z-10">
              <div>
                <h2 className="text-2xl font-serif text-[#4A403F]">Randevu Oluştur</h2>
                <p className="text-[10px] font-sans tracking-widest uppercase text-[#D4A3A3] mt-1">Adım {step} / 4</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F0EBE6] transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#4A403F] group-hover:rotate-90 transition-transform duration-300">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 relative">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Services */}
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-serif text-[#4A403F] mb-4">Hangi hizmeti arzu edersiniz?</h3>
                    {services.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => { setSelectedService(s.id); setTimeout(nextStep, 300); }}
                        className={`p-5 border cursor-pointer transition-all duration-300 flex justify-between items-center group ${selectedService === s.id ? 'border-[#D4A3A3] bg-[#D4A3A3]/5' : 'border-[#4A403F]/10 hover:border-[#D4A3A3]/50 bg-white'}`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-serif text-lg text-[#4A403F] group-hover:text-[#D4A3A3] transition-colors">{s.name}</span>
                          <span className="text-xs font-sans text-[#4A403F]/50">{s.time}</span>
                        </div>
                        <span className="font-sans text-[#4A403F]">{s.price}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Artists */}
                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-serif text-[#4A403F] mb-4">Uzman tercihi yapmak ister misiniz?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {artists.map(a => (
                        <div 
                          key={a.id}
                          onClick={() => { setSelectedArtist(a.id); setTimeout(nextStep, 300); }}
                          className={`flex flex-col items-center text-center p-6 border cursor-pointer transition-all duration-300 group ${selectedArtist === a.id ? 'border-[#D4A3A3] bg-[#D4A3A3]/5' : 'border-[#4A403F]/10 hover:border-[#D4A3A3]/50 bg-white'}`}
                        >
                          <img src={a.img} alt={a.name} className="w-24 h-24 rounded-full object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <span className="font-serif text-lg text-[#4A403F]">{a.name}</span>
                          <span className="text-[10px] uppercase tracking-widest text-[#D4A3A3] mt-1">{a.role}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Date & Time */}
                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-8"
                  >
                    <div>
                      <h3 className="text-xl font-serif text-[#4A403F] mb-4">Size uygun olan gün?</h3>
                      <input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-4 border border-[#4A403F]/10 focus:border-[#D4A3A3] focus:outline-none bg-white font-sans text-[#4A403F]" 
                      />
                    </div>
                    
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="text-xl font-serif text-[#4A403F] mb-4">Saat Seçimi</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {timeSlots.map(slot => (
                            <div
                              key={slot.time}
                              onClick={() => {
                                if (!slot.isBooked) {
                                  setSelectedTime(slot.time);
                                  setTimeout(nextStep, 300);
                                }
                              }}
                              className={`p-3 text-center border font-sans transition-all duration-300 flex flex-col items-center justify-center gap-1
                                ${slot.isBooked 
                                  ? 'bg-[#4A403F]/5 border-[#4A403F]/5 text-[#4A403F]/30 cursor-not-allowed' 
                                  : selectedTime === slot.time 
                                    ? 'border-[#D4A3A3] bg-[#D4A3A3] text-white cursor-pointer' 
                                    : 'border-[#4A403F]/10 hover:border-[#D4A3A3] bg-white text-[#4A403F] cursor-pointer'
                                }`}
                            >
                              <span>{slot.time}</span>
                              {slot.isBooked && <span className="text-[9px] uppercase tracking-widest text-[#4A403F]/30">Dolu</span>}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 4: Details & Confirm */}
                {step === 4 && (
                  <motion.div 
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="text-xl font-serif text-[#4A403F] mb-2">Son Dokunuşlar.</h3>
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-[#4A403F]/20 py-3 text-[#4A403F] font-sans font-light focus:outline-none focus:border-[#D4A3A3] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-[#4A403F]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4A3A3] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#D4A3A3]">
                        Adınız & Soyadınız
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-transparent border-b border-[#4A403F]/20 py-3 text-[#4A403F] font-sans font-light focus:outline-none focus:border-[#D4A3A3] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-[#4A403F]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4A3A3] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#D4A3A3]">
                        Telefon Numaranız
                      </label>
                    </div>

                    <div className="bg-[#4A403F]/5 p-6 mt-4">
                      <h4 className="font-serif text-[#4A403F] mb-4 border-b border-[#4A403F]/10 pb-2">Özet</h4>
                      <div className="flex flex-col gap-2 text-sm font-sans text-[#4A403F]/70">
                        <p><span className="font-medium text-[#4A403F]">Hizmet:</span> {services.find(s => s.id === selectedService)?.name || 'Seçilmedi'}</p>
                        <p><span className="font-medium text-[#4A403F]">Usta:</span> {artists.find(a => a.id === selectedArtist)?.name || 'Seçilmedi'}</p>
                        <p><span className="font-medium text-[#4A403F]">Zaman:</span> {selectedTime || 'Seçilmedi'}</p>
                      </div>
                    </div>

                    <button 
                      onClick={nextStep}
                      className="w-full bg-[#4A403F] text-[#FCFBF9] py-5 font-sans tracking-[0.2em] uppercase text-[10px] hover:bg-[#D4A3A3] transition-colors duration-500 mt-4 rounded-full"
                    >
                      Rezervasyonu Tamamla
                    </button>
                  </motion.div>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                  <motion.div 
                    key="step5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full gap-6 py-12"
                  >
                    <div className="w-20 h-20 rounded-full border border-[#D4A3A3] flex items-center justify-center text-[#D4A3A3] mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-serif text-[#4A403F]">Randevunuz Onaylandı.</h3>
                    <p className="text-sm font-sans font-light text-[#4A403F]/60 max-w-sm">
                      Sizi ağırlamaktan mutluluk duyacağız. Detaylar SMS olarak tarafınıza iletilmiştir.
                    </p>
                    <button 
                      onClick={onClose}
                      className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F] border-b border-[#D4A3A3] pb-1 hover:text-[#D4A3A3] transition-colors mt-8"
                    >
                      Kapat
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {step < 5 && (
              <div className="p-6 border-t border-[#4A403F]/5 flex justify-between items-center z-10">
                {step > 1 ? (
                  <button 
                    onClick={prevStep}
                    className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F]/50 hover:text-[#4A403F] transition-colors"
                  >
                    Geri
                  </button>
                ) : <div></div>}
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-colors ${step >= i ? 'bg-[#D4A3A3]' : 'bg-[#4A403F]/10'}`} />
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
