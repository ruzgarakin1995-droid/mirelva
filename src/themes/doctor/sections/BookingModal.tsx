"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingModal({ isOpen, onClose, primaryColor, accentColor }: any) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ dep: '', doc: '', date: '', name: '', phone: '' });

  const deps = ['Kardiyoloji', 'Göz Hastalıkları', 'Ortopedi', 'Nöroloji', 'Dahiliye'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="bg-[var(--primary)] text-white p-6 md:p-8 relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="text-[var(--accent)] font-bold text-sm uppercase mb-2">Online İşlemler</div>
          <h3 className="text-2xl md:text-3xl font-bold">Hızlı Randevu Al</h3>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h4 className="font-bold text-lg mb-4 text-[var(--primary)]">1. Bölüm Seçimi</h4>
              <div className="grid grid-cols-2 gap-3">
                {deps.map(d => (
                  <button 
                    key={d}
                    onClick={() => { setFormData({...formData, dep: d}); setStep(2); }}
                    className={`p-4 text-left border rounded-xl hover:border-[var(--accent)] hover:bg-[var(--surface-alt)] transition-colors ${formData.dep === d ? 'border-[var(--accent)] bg-[var(--surface-alt)] ring-1 ring-[var(--accent)]' : 'border-[var(--border)]'}`}
                  >
                    <div className="font-bold text-[var(--primary)] text-sm">{d}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <button onClick={() => setStep(1)} className="text-sm text-[var(--muted)] mb-4 flex items-center gap-1 hover:text-[var(--primary)]">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
                Bölüm Seçimine Dön ({formData.dep})
              </button>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Tarih</label>
                  <input type="date" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Ad Soyad</label>
                  <input type="text" placeholder="Örn: Ayşe Yılmaz" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--primary)] mb-2">Telefon</label>
                  <input type="tel" placeholder="05XX XXX XX XX" className="w-full p-4 border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--accent)]" onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              
              <button 
                onClick={() => setStep(3)}
                disabled={!formData.date || !formData.name || !formData.phone}
                className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Randevuyu Onayla
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-[var(--primary)] mb-2">Randevunuz Alındı!</h4>
              <p className="text-[var(--muted)] mb-8">
                Sayın {formData.name}, {formData.dep} bölümü için {formData.date} tarihli randevu talebiniz alınmıştır. Kesin saat onayı için çağrı merkezimiz sizi arayacaktır.
              </p>
              <button onClick={onClose} className="px-8 py-3 bg-[var(--surface-alt)] text-[var(--primary)] font-bold rounded-xl border border-[var(--border)] hover:bg-gray-100">
                Kapat
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}


