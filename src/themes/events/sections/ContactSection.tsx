"use client";
import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    time: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // WhatsApp Integration
    const phoneNumber = "905309903160"; // Zehra Organizasyon WhatsApp Number
    const message = `✨ *Yeni Randevu Talebi* ✨\n\n` +
                    `👤 *İsim:* ${formData.name}\n` +
                    `📞 *Telefon:* ${formData.phone}\n` +
                    `🎈 *Etkinlik Türü:* ${formData.eventType}\n` +
                    `📅 *Tarih:* ${formData.date}\n` +
                    `⏰ *Saat:* ${formData.time}\n\n` +
                    `📝 *Detaylar:*\n${formData.details}`;
                    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      date: '',
      time: '',
      details: ''
    });
  };

  return (
    <section className="w-full bg-[#2A2421] text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal delay={0.1}>
              <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">İletişim</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                Hikayenizi <br /> <span className="italic text-[#E8DCC4]">Birlikte Yazalım</span>
              </h2>
            </ScrollReveal>
            <p className="text-white/60 font-light mb-12 max-w-md">
              Hayallerinizdeki o benzersiz günü planlamak için bizimle iletişime geçin. Tasarım ofisimizde kahvenizi yudumlarken detayları konuşalım.
            </p>
            
            <div className="space-y-6 text-sm font-light">
              <div className="mb-12">
                <h4 className="text-[#C19A6B] font-serif text-2xl mb-4">Bize Ulaşın</h4>
                <div className="flex flex-col gap-4">
                <a href="tel:+905309903160" className="text-xl font-serif hover:text-[#C19A6B] transition-colors">0530 990 31 60</a>
                </div>
              </div>
              
              <div>
                <h4 className="text-[#C19A6B] font-serif text-2xl mb-4">Adres</h4>
                <span className="text-white/80">Yakuplu, 124. Sk. no:17,<br/>34524 Beylikdüzü / İstanbul</span>
              </div>
            </div>
          </div>
          
          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 p-8 md:p-12 backdrop-blur-md border border-white/10 flex flex-col justify-center min-h-[500px]">
              {!isSubmitted ? (
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-serif mb-8 text-center text-[#E8DCC4]">Randevu Talebi</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Adınız Soyadınız" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm" />
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Telefon Numaranız" className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm" />
                    </div>
                    
                    <div className="pt-2">
                      <select name="eventType" required value={formData.eventType} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 py-3 text-white/50 focus:outline-none focus:text-white focus:border-[#C19A6B] transition-colors font-light text-sm appearance-none">
                        <option value="" disabled className="bg-[#2A2421] text-white">Etkinlik Türü</option>
                        <option value="Düğün" className="bg-[#2A2421] text-white">Düğün</option>
                        <option value="Kurumsal Etkinlik" className="bg-[#2A2421] text-white">Kurumsal Etkinlik</option>
                        <option value="Nişan / Söz" className="bg-[#2A2421] text-white">Nişan / Söz</option>
                        <option value="Özel Kutlama" className="bg-[#2A2421] text-white">Özel Kutlama</option>
                        <option value="Diğer" className="bg-[#2A2421] text-white">Diğer</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 py-3 text-white/50 focus:outline-none focus:text-white focus:border-[#C19A6B] transition-colors font-light text-sm appearance-none" />
                      <input type="time" name="time" required value={formData.time} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 py-3 text-white/50 focus:outline-none focus:text-white focus:border-[#C19A6B] transition-colors font-light text-sm appearance-none" />
                    </div>

                    <textarea name="details" required value={formData.details} onChange={handleChange} placeholder="Etkinliğinizden Kısaca Bahsedin..." rows={4} className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C19A6B] transition-colors font-light text-sm resize-none"></textarea>
                    
                    <button type="submit" className="w-full bg-[#C19A6B] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#A98458] transition-colors mt-4">
                      Gönder
                    </button>
                  </form>
                </div>
              ) : (
                <div className="animate-fade-in-up text-center py-10">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C19A6B]/50 shadow-[0_0_20px_rgba(193,154,107,0.2)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C19A6B" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h3 className="font-serif text-3xl text-[#E8DCC4] mb-4">Talebiniz Alındı</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                    Sayın <span className="font-medium text-white">{formData.name}</span>, talebiniz başarıyla bize ulaştı. 
                    En kısa sürede sizinle iletişime geçeceğiz. Lütfen WhatsApp yönlendirmesine izin verin.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="bg-transparent border border-[#C19A6B] text-[#C19A6B] px-10 py-3 text-xs uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-all duration-500"
                  >
                    Teşekkürler
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



