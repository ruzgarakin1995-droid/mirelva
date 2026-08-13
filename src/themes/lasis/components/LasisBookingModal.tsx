"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceData = {
  "LAZER UYGULAMALARI": [
    "Tüm Vücut Q-Switch Lazer",
    "Yüz Bölgesi Lazer",
    "Lazerle Leke Tedavisi",
    "Lazerle Dövme Silme",
    "Akne İzi Tedavisi",
    "Karbon Peeling Lazer"
  ],
  "BOTOKS & DOLGU": [
    "Tüm Yüz Botoks",
    "Masseter Botoksu",
    "Göz Çevresi (Kaz Ayakları)",
    "Terleme Botoksu",
    "Dudak Dolgusu",
    "Elmacık Kemiği Dolgusu",
    "Çene Hattı (Jawline) Dolgusu",
    "Göz Altı Işık Dolgusu"
  ],
  "CİLT YENİLEME": [
    "Medikal Cilt Bakımı",
    "Hydrafacial",
    "Dermapen 4",
    "Somon DNA",
    "Gençlik Aşısı",
    "PRP Yüz Tedavisi",
    "Mezoterapi (Yüz/Boyun)",
    "Kimyasal Peeling"
  ],
  "BÖLGESEL İNCELME": [
    "G5 Masajı",
    "Lenf Drenaj",
    "Soğuk Lipoliz",
    "Radyofrekans Vücut Şekillendirme",
    "Selülit Mezoterapisi",
    "Çatlak Tedavisi (Striort)"
  ]
};

export function LasisBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  // New states for categorised services
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof serviceData | ''>('');
  const [selectedService, setSelectedService] = useState('');

  // Customer details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Simulated time slots
  const timeSlots = [
    { time: '10:00', available: true },
    { time: '11:30', available: false }, // Dolu
    { time: '13:00', available: true },
    { time: '14:30', available: false }, // Dolu
    { time: '16:00', available: true },
    { time: '17:30', available: true },
  ];

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
      setSelectedDate('');
      setSelectedTime('');
      setSelectedCategory('');
      setSelectedService('');
      setName('');
      setPhone('');
    };
    window.addEventListener('openLasisBooking', handleOpen);
    return () => window.removeEventListener('openLasisBooking', handleOpen);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div key="booking-modal-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-[#3E2B2B]/40 backdrop-blur-sm"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#FAF5F0] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#FAF5F0] text-[#3E2B2B] hover:bg-[#D4A373] hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* Image Side */}
          <div className="w-full md:w-4/12 h-48 md:h-auto relative hidden md:block">
             <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop" alt="Lasis Klinik Lasis" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B2B]/80 via-transparent to-transparent flex items-end p-8">
                <div>
                   <span className="text-3xl font-serif text-[#FAF5F0] block mb-1">Lasis Klinik</span>
                   <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#FAF5F0]/80">Kendinizi Özel Hissedin</span>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-8/12 p-6 md:p-10 flex flex-col justify-center max-h-[90vh] overflow-y-auto custom-scrollbar">
            
            {step === 1 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="text-3xl font-serif text-[#3E2B2B] mb-2">Randevu Oluştur</h3>
                <p className="font-sans text-sm text-[#3E2B2B]/60 mb-8">Hizmet kategorinizi ve işlemi seçerek randevunuzu planlayın.</p>
                
                <form className="space-y-6" onSubmit={(e) => { 
                    e.preventDefault(); 
                    if(!selectedService) return alert("Lütfen bir işlem seçiniz.");
                    if(!selectedTime) return alert("Lütfen müsait bir saat seçiniz.");
                    
                    const text = "Merhaba Lasis Klinik Lasis! \uD83D\uDC96\n\n" +
                                 "Siteniz üzerinden yeni bir randevu talebim var \uD83C\uDF38\n\n" +
                                 "\uD83D\uDC64 İsim: " + name + "\n" +
                                 "\uD83D\uDCF1 Telefon: " + phone + "\n" +
                                 "\u2728 Hizmet: " + selectedService + "\n" +
                                 "\uD83D\uDCC5 Tarih: " + selectedDate + "\n" +
                                 "\u23F0 Saat: " + selectedTime + "\n\n" +
                                 "Geri dönüşünüzü bekliyorum, sevgiler! \uD83D\uDC85";
                    const encodedText = encodeURIComponent(text);
                    window.open(`https://wa.me/905070761606?text=${encodedText}`, '_blank');
                    
                    setStep(2); 
                  }}>
                  
                  {/* Category Selection Tabs */}
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-3">Hizmet Kategorisi</label>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {Object.keys(serviceData).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat as keyof typeof serviceData);
                            setSelectedService('');
                          }}
                          className={`
                            relative px-3 py-3 rounded text-[10px] sm:text-xs font-sans font-medium uppercase tracking-wider transition-all border text-left
                            ${selectedCategory === cat 
                              ? 'bg-[#3E2B2B] text-white border-[#3E2B2B]' 
                              : 'bg-white text-[#3E2B2B]/70 border-[#3E2B2B]/10 hover:border-[#D4A373]'}
                          `}
                        >
                          {cat}
                          {selectedCategory === cat && (
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific Service Selection */}
                  <AnimatePresence mode="wait">
                    {selectedCategory && (
                      <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="transition-all"
                      >
                        <label className="block text-[10px] font-sans tracking-widest uppercase text-[#D4A373] mb-2">İşlem Seçin *</label>
                        <div className="relative">
                          <select 
                            required
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full bg-white border border-[#3E2B2B]/20 rounded-lg px-4 py-4 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors appearance-none cursor-pointer shadow-sm"
                          >
                            <option value="" disabled> Seçiniz </option>
                            {serviceData[selectedCategory].map((service, idx) => (
                              <option key={idx} value={service}>{service}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-[#3E2B2B]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#3E2B2B]/10">
                    <div>
                      <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Ad Soyad</label>
                      <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-[#3E2B2B]/10 rounded-lg px-4 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors shadow-sm" placeholder="İsminiz..." />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Telefon</label>
                      <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-white border border-[#3E2B2B]/10 rounded-lg px-4 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors shadow-sm" placeholder="0555..." />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-2">Tarih</label>
                    <input 
                      required 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedTime(''); // Reset time when date changes
                      }}
                      className="w-full bg-white border border-[#3E2B2B]/10 rounded-lg px-4 py-3 text-sm text-[#3E2B2B] focus:outline-none focus:border-[#D4A373] transition-colors shadow-sm" 
                    />
                  </div>
                  
                  <AnimatePresence>
                    {selectedDate && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: 'auto' }} 
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <label className="block text-[10px] font-sans tracking-widest uppercase text-[#3E2B2B] mb-3">Saat Seçimi</label>
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                          {timeSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              type="button"
                              disabled={!slot.available}
                              onClick={() => setSelectedTime(slot.time)}
                              className={`
                                relative py-3 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden shadow-sm
                                ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 
                                  selectedTime === slot.time ? 'bg-[#D4A373] text-white shadow-md border-[#D4A373]' : 'bg-white border border-[#3E2B2B]/10 text-[#3E2B2B] hover:border-[#D4A373]'}
                              `}
                            >
                              <span className="relative z-10">{slot.time}</span>
                              {!slot.available && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                  <span className="w-[80%] h-[1px] bg-gray-400 rotate-12"></span>
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button type="submit" className="w-full mt-4 bg-[#D4A373] text-[#FAF5F0] font-sans font-medium text-xs tracking-widest uppercase px-6 py-4 rounded-lg hover:bg-[#3E2B2B] transition-colors shadow-lg">
                    Randevuyu Onayla
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                 <div className="w-20 h-20 bg-[#D4A373]/10 text-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                 <h3 className="text-3xl font-serif text-[#3E2B2B] mb-4">Talebiniz Bize Ulaştı ✨</h3>
                 <p className="font-sans text-sm text-[#3E2B2B]/70 mb-8 leading-relaxed">
                   Harika bir seçim! <strong>{selectedService}</strong> işleminiz için randevu talebiniz başarıyla sistemimize düştü! 💖<br/><br/>
                   Ekip arkadaşlarımız takvimimizi inceledikten sonra, randevunuzu netleştirmek ve size onay vermek için en kısa sürede <strong>{phone}</strong> numaralı hattan sizinle iletişime geçecektir. 📱<br/><br/>
                   Sizi Lasis Klinik zarafetiyle buluşturmak için sabırsızlanıyoruz! ✨
                 </p>
                 <button 
                   onClick={() => setIsOpen(false)}
                   className="bg-[#3E2B2B] text-[#FAF5F0] font-sans font-medium text-xs tracking-widest uppercase px-10 py-3 rounded-full hover:bg-[#D4A373] transition-colors"
                 >
                   Ana Ekrana Dön
                 </button>
              </motion.div>
            )}

          </div>
        </motion.div>
          </div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #D4A373;
          border-radius: 10px;
        }
      `}} />
    </>
  );
}
