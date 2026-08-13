"use client";
import React, { useState } from 'react';

interface EventsQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventsQuoteModal: React.FC<EventsQuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    guestCount: '',
    date: '',
    time: '',
    details: '',
    name: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(2);
  const handlePrev = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success step
    
    // WhatsApp integration
    const message = `🌟 *Yeni Teklif Talebi* 🌟

👤 *Ad Soyad:* ${formData.name}
📞 *Telefon:* ${formData.phone}

🎉 *Etkinlik Türü:* ${formData.eventType}
👥 *Kişi Sayısı:* ${formData.guestCount}
📅 *Tarih:* ${formData.date}
⏰ *Saat:* ${formData.time}

📝 *Özel Detaylar:* 
${formData.details || 'Belirtilmedi'}`;
    
    // A timeout to open WhatsApp after showing the success screen
    setTimeout(() => {
      window.open(`https://wa.me/905309903160?text=${encodeURIComponent(message)}`, '_blank');
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      eventType: '',
      guestCount: '',
      date: '',
      time: '',
      details: '',
      name: '',
      phone: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={handleClose}></div>
      
      <div className="relative bg-[#FDFBF7] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-fade-in-up border border-[#C19A6B]/20">
        {/* Header */}
        {step !== 3 && (
          <div className="bg-[#1A1614] text-white py-6 px-8 flex justify-between items-center border-b border-[#C19A6B]/30">
            <h2 className="font-serif text-2xl tracking-widest uppercase text-[#C19A6B]">Özel Teklif Alın</h2>
            <button onClick={handleClose} className="text-white/70 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        )}

        <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-2xl text-[#1A1614] mb-8 text-center">Etkinlik Detayları</h3>
              <div className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Etkinlik Türü</label>
                    <select 
                      name="eventType" 
                      value={formData.eventType} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] text-sm focus:outline-none focus:border-[#C19A6B] transition-colors cursor-pointer appearance-none rounded-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="Düğün">Düğün</option>
                      <option value="Kurumsal">Kurumsal Etkinlik</option>
                      <option value="Özel Kutlama">Özel Kutlama</option>
                      <option value="Nişan / Söz">Nişan / Söz</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Kişi Sayısı</label>
                    <select 
                      name="guestCount" 
                      value={formData.guestCount} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] text-sm focus:outline-none focus:border-[#C19A6B] transition-colors cursor-pointer appearance-none rounded-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="50-100">50 - 100 Kişi</option>
                      <option value="100-250">100 - 250 Kişi</option>
                      <option value="250-500">250 - 500 Kişi</option>
                      <option value="500+">500+ Kişi</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Planlanan Tarih</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] text-sm focus:outline-none focus:border-[#C19A6B] transition-colors appearance-none rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Planlanan Saat</label>
                    <input 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] text-sm focus:outline-none focus:border-[#C19A6B] transition-colors appearance-none rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Özel Güne Dair Detaylar & Hayalleriniz</label>
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Nasıl bir konsept hayal ediyorsunuz? (Mekan tercihleri, renkler, atmosfer vb.)"
                    className="w-full bg-[#1A1614]/5 border border-[#C19A6B]/30 p-4 text-[#1A1614] text-sm focus:outline-none focus:border-[#C19A6B] transition-colors resize-none rounded-sm"
                  ></textarea>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button 
                  onClick={handleNext}
                  disabled={!formData.eventType || !formData.date}
                  className="bg-[#1A1614] text-[#C19A6B] px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C19A6B] hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  İletişim Bilgileri ➝
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-2xl text-[#1A1614] mb-8 text-center">İletişim Bilgileriniz</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] focus:outline-none focus:border-[#C19A6B] transition-colors"
                    placeholder="Adınız ve Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#4A403A] mb-3">Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#C19A6B]/40 py-3 text-[#1A1614] focus:outline-none focus:border-[#C19A6B] transition-colors"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                
                <div className="mt-12 flex justify-between items-center">
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="text-[#4A403A] text-xs uppercase tracking-widest hover:text-[#C19A6B] transition-colors pb-1 border-b border-transparent hover:border-[#C19A6B]"
                  >
                    ← Geri Dön
                  </button>
                  <button 
                    type="submit"
                    className="bg-[#C19A6B] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#1A1614] hover:text-[#C19A6B] transition-all duration-500 shadow-lg"
                  >
                    Teklif İste
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in-up text-center py-10 px-4">
              <div className="w-24 h-24 bg-[#1A1614] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(193,154,107,0.3)]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C19A6B" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="font-serif text-4xl text-[#1A1614] mb-6">Talebiniz Alındı</h3>
              <p className="text-[#4A403A] font-light text-lg mb-4 leading-relaxed">
                Sayın <span className="font-medium text-[#1A1614]">{formData.name}</span>, teklif talebiniz başarıyla bize ulaştı. 
              </p>
              <p className="text-[#4A403A]/80 font-light mb-10 max-w-md mx-auto">
                Tasarım ekibimiz detayları inceleyip en kısa sürede sizinle iletişime geçecektir. Lütfen WhatsApp yönlendirmesine izin verin.
              </p>
              <button 
                onClick={handleClose}
                className="bg-[#1A1614] text-[#C19A6B] px-12 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#C19A6B] hover:text-white transition-all duration-500"
              >
                Teşekkürler
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsQuoteModal;
