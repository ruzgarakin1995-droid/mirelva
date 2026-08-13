"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReservationModal({ 
  isOpen, 
  onClose,
  clientId,
  primaryColor = 'var(--primary)',
  accentColor = 'var(--accent)'
}: { 
  isOpen: boolean; 
  onClose: () => void;
  clientId?: string;
  primaryColor?: string;
  accentColor?: string;
}) {
  const [step, setStep] = useState(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div 
              className="p-8 text-white flex justify-between items-center"
              style={{ backgroundColor: primaryColor }}
            >
              <div>
                <h3 className="text-2xl font-serif">Rezervasyon Yap</h3>
                <p className="text-white/70 text-sm font-light mt-1">Sizi ağırlamaktan mutluluk duyacağız.</p>
              </div>
              <button onClick={onClose} className="text-white/50 hover:text-white text-3xl transition-colors">&times;</button>
            </div>

            <div className="p-8 overflow-y-auto flex-1">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-[#717171] uppercase mb-2">Giriş Tarihi</label>
                      <input type="date" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-[#717171] uppercase mb-2">Çıkış Tarihi</label>
                      <input type="date" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-[#717171] uppercase mb-2">Yetişkin</label>
                      <select defaultValue="2" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-[#717171] uppercase mb-2">Çocuk</label>
                      <select defaultValue="0" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest text-[#717171] uppercase mb-2">Oda Tipi</label>
                    <select className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors">
                      <option>Deluxe Şehir Manzaralı</option>
                      <option>Premium Ocean Suite</option>
                      <option>Presidential Penthouse</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 text-white text-xs font-bold tracking-[0.2em] uppercase mt-4 transition-colors"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Müsaitlik Kontrol Et
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="bg-[#FAFAFA] p-6 border border-black/10 flex items-center justify-between">
                    <div>
                      <div className="font-serif text-xl mb-1 text-black">Premium Ocean Suite</div>
                      <div className="text-sm text-[#717171]">2 Gece, 2 Yetişkin</div>
                    </div>
                    <div className="text-2xl font-serif text-black">€850</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Telefon Numaranız" className="w-full bg-[#FAFAFA] border border-black/10 px-4 py-3 focus:outline-none focus:border-black transition-colors" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="w-1/3 py-4 bg-transparent border border-black/20 text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/5 transition-colors"
                    >
                      Geri
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="w-2/3 py-4 text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Rezervasyonu Tamamla
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    ✓
                  </div>
                  <h3 className="text-3xl font-serif text-black mb-4">Rezervasyonunuz Alındı</h3>
                  <p className="text-[#717171] mb-8 leading-relaxed max-w-sm mx-auto">
                    Talebiniz başarıyla iletildi. Rezervasyon detaylarınız ve onay için en kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <button 
                    onClick={onClose}
                    className="py-4 px-12 bg-transparent border border-black/20 text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/5 transition-colors"
                  >
                    Kapat
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
