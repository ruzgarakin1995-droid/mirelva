"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, PackageCheck, HeadphonesIcon, CheckCircle2, X } from 'lucide-react';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';

export default function BayimizOlPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    address: '',
    phone: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to Admin Panel's localStorage (emtech_apps)
    const newApp = {
      id: 'APP-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      companyName: formData.company,
      contactPerson: formData.name,
      phone: formData.phone,
      email: 'Belirtilmedi',
      city: formData.city,
      status: 'PENDING',
      date: new Date().toISOString().split('T')[0],
      notes: `Açık Adres: ${formData.address}`
    };

    try {
      const stored = localStorage.getItem('emtech_apps');
      const apps = stored ? JSON.parse(stored) : [];
      apps.unshift(newApp); // Add to beginning
      localStorage.setItem('emtech_apps', JSON.stringify(apps));
    } catch (err) {
      console.error("Bayi başvurusu admin paneline kaydedilemedi.", err);
    }
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Construct WhatsApp message
    const message = `Merhaba, firmanızın bayisi olmak istiyorum. Bilgilerim aşağıdadır:%0A%0A*İsim Soyisim:* ${formData.name}%0A*Firma Adı:* ${formData.company}%0A*İl/İlçe:* ${formData.city}%0A*Adres:* ${formData.address}%0A*Telefon:* ${formData.phone}`;
    const waNumber = "905555555555";
    
    // Redirect to WA after a short delay so the user sees the success message
    setTimeout(() => {
      window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
      setFormData({ name: '', company: '', city: '', address: '', phone: '' });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-0 flex flex-col">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full flex-grow flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
        
        {/* Left Side: Why become a dealer? */}
        <div className="w-full lg:w-1/2 flex flex-col pt-8">
          <div className="inline-block px-3 py-1 bg-[#0055FF] text-white font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[4px_4px_0px_#000] self-start">
            B2B PORTAL
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-black text-zinc-950 uppercase tracking-tighter leading-[0.9] mb-8">
            BAYİMİZ <span className="text-[#0055FF]">OLUN</span><br/>GÜCÜNÜZE GÜÇ KATIN
          </h1>
          
          <p className="text-zinc-500 font-inter text-lg max-w-lg leading-relaxed mb-12">
            A+ kalite yedek parça tedariğinde Türkiye'nin güvenilir adresi Emtech ile çalışın, kârlılığınızı ve müşteri memnuniyetinizi artırın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 bg-zinc-950 text-white flex items-center justify-center shadow-[4px_4px_0px_#0055FF]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">Özel İskontolar</h3>
              <p className="font-inter text-sm text-zinc-500">Toptan alımlarda firmanıza özel tanımlanan yüksek indirim oranları ile kâr marjınızı maksimize edin.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 bg-[#0055FF] text-white flex items-center justify-center shadow-[4px_4px_0px_#000]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">Sıfır İade Oranı</h3>
              <p className="font-inter text-sm text-zinc-500">KBS ve CMP Plus gibi A+ kalite ürünlerle servis süreçlerinizi sorunsuz tamamlayın.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 bg-white border-2 border-zinc-950 text-zinc-950 flex items-center justify-center shadow-[4px_4px_0px_#000]">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">Aynı Gün Kargo</h3>
              <p className="font-inter text-sm text-zinc-500">Saat 16:00'a kadar verdiğiniz tüm siparişler aynı gün kargoya teslim edilir.</p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 bg-zinc-100 border-2 border-zinc-950 text-zinc-950 flex items-center justify-center shadow-[4px_4px_0px_#0055FF]">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">Öncelikli Destek</h3>
              <p className="font-inter text-sm text-zinc-500">B2B müşterilerimize özel atanmış temsilcilerle anında iletişim ve hızlı çözüm desteği.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white border-4 border-zinc-950 p-8 md:p-10 shadow-[16px_16px_0px_#0055FF] lg:shadow-[24px_24px_0px_#0055FF] sticky top-32">
            <h2 className="font-space font-black text-3xl uppercase tracking-tighter text-zinc-950 mb-2">Başvuru Formu</h2>
            <p className="font-inter text-sm text-zinc-500 mb-8">Lütfen bilgilerinizi eksiksiz doldurun. Temsilcimiz en kısa sürede sizinle iletişime geçecektir.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">İsim Soyisim *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border-2 border-zinc-950 px-4 py-3 font-inter text-zinc-900 focus:outline-none focus:ring-0 focus:border-[#0055FF] transition-colors rounded-none placeholder:text-zinc-400"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">Firma Adı *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border-2 border-zinc-950 px-4 py-3 font-inter text-zinc-900 focus:outline-none focus:ring-0 focus:border-[#0055FF] transition-colors rounded-none placeholder:text-zinc-400"
                  placeholder="Firma veya Dükkan Adı"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">İl / İlçe *</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-2 border-zinc-950 px-4 py-3 font-inter text-zinc-900 focus:outline-none focus:ring-0 focus:border-[#0055FF] transition-colors rounded-none placeholder:text-zinc-400"
                    placeholder="Örn: İstanbul / Şişli"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">Telefon *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-2 border-zinc-950 px-4 py-3 font-inter text-zinc-900 focus:outline-none focus:ring-0 focus:border-[#0055FF] transition-colors rounded-none placeholder:text-zinc-400"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-950">Firma Açık Adresi *</label>
                <textarea 
                  id="address" 
                  name="address" 
                  required
                  rows={4}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border-2 border-zinc-950 px-4 py-3 font-inter text-zinc-900 focus:outline-none focus:ring-0 focus:border-[#0055FF] transition-colors rounded-none placeholder:text-zinc-400 resize-none"
                  placeholder="Açık adresinizi giriniz..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group w-full h-14 bg-zinc-950 text-white font-space text-sm font-bold uppercase tracking-widest hover:bg-[#0055FF] transition-colors rounded-none flex items-center justify-center gap-3 mt-4 border-2 border-zinc-950 hover:border-[#0055FF] shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_rgba(0,85,255,0.3)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
              >
                Başvuruyu Gönder <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="text-center mt-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase">
                  Butona tıkladığınızda başvurunuz WhatsApp üzerinden iletilecektir.
                </span>
              </div>
            </form>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
              onClick={() => setShowSuccessModal(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-md bg-white border-4 border-zinc-950 p-8 shadow-[16px_16px_0px_#0055FF] flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-950 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-20 h-20 bg-[#0055FF] rounded-full flex items-center justify-center mb-6 shadow-[8px_8px_0px_#000]">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <h3 className="font-space font-black text-2xl uppercase tracking-tighter text-zinc-950 mb-4">
                Başvurunuz <br/> <span className="text-[#0055FF]">İletildi</span>
              </h3>
              
              <p className="font-inter text-zinc-600 mb-8">
                Bayi başvurunuz sistemimize kaydedildi. Lütfen bekleyin, <strong className="text-zinc-950">WhatsApp</strong>'a yönlendiriliyorsunuz...
              </p>

              <div className="w-full bg-zinc-100 h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="h-full bg-[#0055FF]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <EmtechFooter />
    </main>
  );
}
