"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BarberBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 's1', name: 'Centilmen Kesimi', time: '45 dk', price: '₺850' },
  { id: 's2', name: 'Geleneksel Ustura', time: '30 dk', price: '₺600' },
  { id: 's3', name: 'Aktif Karbon Cilt Bakımı', time: '45 dk', price: '₺950' },
  { id: 's4', name: 'Executive Paket (İmza)', time: '90 dk', price: '₺2500' },
];

const barbers = [
  { id: 'b1', name: 'Alexander K.', role: 'Master Barber', img: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=200&auto=format&fit=crop' },
  { id: 'b2', name: 'Matteo R.', role: 'Klasik Kesim Uzmanı', img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=200&auto=format&fit=crop' },
  { id: 'b3', name: 'Julian H.', role: 'Renklendirme & Kimya', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
];

const timeSlots = ['10:00', '11:30', '13:00', '15:00', '16:30', '18:00'];

export function BarberBookingModal({ isOpen, onClose }: BarberBookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  if (!isOpen) return null;

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Simüle edilmiş doluluk oranları (Tarih seçilince bazıları dolu gelecek)
  const timeSlots = [
    { time: '10:00', isBooked: false },
    { time: '11:30', isBooked: true },
    { time: '13:00', isBooked: false },
    { time: '14:30', isBooked: true },
    { time: '16:00', isBooked: false },
    { time: '17:30', isBooked: false },
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
            className="absolute inset-0 bg-[#2A2522]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#F8F7F5] overflow-hidden shadow-2xl flex flex-col min-h-[600px]"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#2A2522]/10 flex justify-between items-center bg-white relative z-10">
              <div>
                <h2 className="text-2xl font-serif text-[#2A2522]">Randevu Oluştur</h2>
                <p className="text-[10px] font-sans tracking-widest uppercase text-[#C1A68D] mt-1">Adım {step} / 4</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F8F7F5] transition-colors group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#2A2522] group-hover:rotate-90 transition-transform duration-300">
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
                    <h3 className="text-xl font-serif text-[#2A2522] mb-4">Hangi hizmeti arzu edersiniz?</h3>
                    {services.map(s => (
                      <div 
                        key={s.id}
                        onClick={() => { setSelectedService(s.id); setTimeout(nextStep, 300); }}
                        className={`p-5 border cursor-pointer transition-all duration-300 flex justify-between items-center group ${selectedService === s.id ? 'border-[#C1A68D] bg-[#C1A68D]/5' : 'border-[#2A2522]/10 hover:border-[#2A2522]/30 bg-white'}`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-serif text-lg text-[#2A2522] group-hover:text-[#C1A68D] transition-colors">{s.name}</span>
                          <span className="text-xs font-sans text-[#2A2522]/50">{s.time}</span>
                        </div>
                        <span className="font-sans text-[#2A2522]">{s.price}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Barbers */}
                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-serif text-[#2A2522] mb-4">Hangi ustamızı tercih edersiniz?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {barbers.map(b => (
                        <div 
                          key={b.id}
                          onClick={() => { setSelectedBarber(b.id); setTimeout(nextStep, 300); }}
                          className={`flex flex-col items-center text-center p-4 border cursor-pointer transition-all duration-300 group ${selectedBarber === b.id ? 'border-[#C1A68D] bg-[#C1A68D]/5' : 'border-[#2A2522]/10 hover:border-[#2A2522]/30 bg-white'}`}
                        >
                          <img src={b.img} alt={b.name} className="w-20 h-20 rounded-full object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <span className="font-serif text-[#2A2522]">{b.name}</span>
                          <span className="text-[10px] uppercase tracking-widest text-[#2A2522]/50 mt-1">{b.role}</span>
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
                      <h3 className="text-xl font-serif text-[#2A2522] mb-4">Size uygun olan gün?</h3>
                      <input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-4 border border-[#2A2522]/10 focus:border-[#C1A68D] focus:outline-none bg-white font-sans text-[#2A2522]" 
                      />
                    </div>
                    
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="text-xl font-serif text-[#2A2522] mb-4">Saat Seçimi</h3>
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
                                  ? 'bg-[#2A2522]/5 border-[#2A2522]/5 text-[#2A2522]/30 cursor-not-allowed' 
                                  : selectedTime === slot.time 
                                    ? 'border-[#C1A68D] bg-[#C1A68D] text-white cursor-pointer' 
                                    : 'border-[#2A2522]/10 hover:border-[#C1A68D] bg-white text-[#2A2522] cursor-pointer'
                                }`}
                            >
                              <span>{slot.time}</span>
                              {slot.isBooked && <span className="text-[9px] uppercase tracking-widest text-[#2A2522]/30">Dolu</span>}
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
                    <h3 className="text-xl font-serif text-[#2A2522] mb-2">Son Dokunuşlar.</h3>
                    
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-[#2A2522]/20 py-3 text-[#2A2522] font-sans font-light focus:outline-none focus:border-[#C1A68D] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-[#2A2522]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C1A68D] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C1A68D]">
                        Adınız & Soyadınız
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-transparent border-b border-[#2A2522]/20 py-3 text-[#2A2522] font-sans font-light focus:outline-none focus:border-[#C1A68D] transition-colors peer"
                        placeholder=" "
                      />
                      <label className="absolute left-0 top-3 text-[#2A2522]/40 font-sans font-light text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C1A68D] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#C1A68D]">
                        Telefon Numaranız
                      </label>
                    </div>

                    <div className="bg-[#2A2522]/5 p-6 mt-4">
                      <h4 className="font-serif text-[#2A2522] mb-4 border-b border-[#2A2522]/10 pb-2">Özet</h4>
                      <div className="flex flex-col gap-2 text-sm font-sans text-[#2A2522]/70">
                        <p><span className="font-medium text-[#2A2522]">Hizmet:</span> {services.find(s => s.id === selectedService)?.name || 'Seçilmedi'}</p>
                        <p><span className="font-medium text-[#2A2522]">Usta:</span> {barbers.find(b => b.id === selectedBarber)?.name || 'Seçilmedi'}</p>
                        <p><span className="font-medium text-[#2A2522]">Zaman:</span> {selectedTime || 'Seçilmedi'}</p>
                      </div>
                    </div>

                    <button 
                      onClick={nextStep}
                      className="w-full bg-[#2A2522] text-[#F8F7F5] py-5 font-sans tracking-[0.2em] uppercase text-[10px] hover:bg-[#C1A68D] transition-colors duration-500 mt-4"
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
                    <div className="w-20 h-20 rounded-full border border-[#C1A68D] flex items-center justify-center text-[#C1A68D] mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-serif text-[#2A2522]">Rezervasyon Onaylandı.</h3>
                    <p className="text-sm font-sans font-light text-[#2A2522]/60 max-w-sm">
                      Sizi ağırlamaktan mutluluk duyacağız. Detaylar SMS olarak tarafınıza iletilmiştir.
                    </p>
                    <button 
                      onClick={onClose}
                      className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522] border-b border-[#C1A68D] pb-1 hover:text-[#C1A68D] transition-colors mt-8"
                    >
                      Kapat
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {step < 5 && (
              <div className="p-6 border-t border-[#2A2522]/10 bg-white flex justify-between items-center z-10">
                {step > 1 ? (
                  <button 
                    onClick={prevStep}
                    className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/50 hover:text-[#2A2522] transition-colors"
                  >
                    Geri
                  </button>
                ) : <div></div>}
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-colors ${step >= i ? 'bg-[#C1A68D]' : 'bg-[#2A2522]/10'}`} />
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
