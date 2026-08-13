"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { submitConsultationRequest } from '@/app/actions/law';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitConsultationRequest(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } else {
      alert(result.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A192F]/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0a1128] border border-[#1a233a] shadow-2xl rounded-sm custom-scrollbar"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-[#0a1128] to-transparent">
              <button
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-8 pb-8 pt-0">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-20 h-20 text-[var(--law-accent)] mx-auto mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-2">Talebiniz Alındı</h3>
                  <p className="text-white/60">Danışmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h4 className="text-[var(--law-accent)] text-sm tracking-widest uppercase mb-2">Gizlilik Garantisi</h4>
                    <h2 className="text-3xl font-serif text-white mb-4">Danışmanlık Talebi</h2>
                    <div className="w-12 h-0.5 bg-[var(--law-accent)] mx-auto"></div>
                    <p className="text-white/60 mt-4 text-sm leading-relaxed">
                      Uzman avukatlarımızla durumunuzu gizlilik çerçevesinde değerlendirmek için formu doldurun.
                    </p>
                  </div>

                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Ad Soyad</label>
                      <input 
                        name="clientName"
                        type="text" 
                        required
                        className="w-full bg-[#111a33] text-white border border-[#1f2947] focus:border-[var(--law-accent)] focus:ring-1 focus:ring-[var(--law-accent)] rounded-sm px-4 py-3 outline-none transition-all placeholder-white/30" 
                        placeholder="Adınız ve Soyadınız" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">E-posta Adresi</label>
                      <input 
                        name="clientEmail"
                        type="email" 
                        required
                        className="w-full bg-[#111a33] text-white border border-[#1f2947] focus:border-[var(--law-accent)] focus:ring-1 focus:ring-[var(--law-accent)] rounded-sm px-4 py-3 outline-none transition-all placeholder-white/30" 
                        placeholder="E-posta Adresiniz" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Çalışma Alanı</label>
                      <div className="relative">
                        <select name="practiceArea" className="w-full appearance-none bg-[#111a33] text-white border border-[#1f2947] focus:border-[var(--law-accent)] focus:ring-1 focus:ring-[var(--law-accent)] rounded-sm px-4 py-3 outline-none transition-all">
                          <option>Şirketler Hukuku</option>
                          <option>Aile Hukuku</option>
                          <option>Ceza Savunması</option>
                          <option>Gayrimenkul Hukuku</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Kısa Açıklama</label>
                      <textarea 
                        name="description"
                        required
                        rows={4} 
                        className="w-full bg-[#111a33] text-white border border-[#1f2947] focus:border-[var(--law-accent)] focus:ring-1 focus:ring-[var(--law-accent)] rounded-sm px-4 py-3 outline-none transition-all placeholder-white/30 resize-y" 
                        placeholder="Davanız hakkında bize bilgi verin..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[var(--law-accent)] text-[#0a1128] font-bold tracking-widest uppercase py-4 rounded-sm mt-2 hover:bg-white transition-colors duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Talebi Gönder'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


