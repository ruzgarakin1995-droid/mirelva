"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, CheckCircle2, Loader2 } from 'lucide-react';
import { createAppointment } from '@/actions/booking';

export default function BookingModal({ 
  isOpen, 
  onClose,
  clientId,
  primaryColor,
  accentColor
}: { 
  isOpen: boolean; 
  onClose: () => void;
  clientId: string;
  primaryColor: string;
  accentColor: string;
}) {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const timeSlots = ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"];

  const handleBooking = async () => {
    setLoading(true);
    setError("");
    
    // Create a real Date object for tomorrow with the selected time
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [hours, minutes] = selectedTime.split(':');
    tomorrow.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const res = await createAppointment(clientId, {
      customerName: name,
      customerPhone: phone,
      date: tomorrow.toISOString()
    });

    setLoading(false);

    if (res.success) {
      setStep(3);
    } else {
      setError(res.error || "Bir hata oluştu.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10">
            
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
              <h3 className="text-xl font-bold text-stone-900">Randevu Oluştur</h3>
              <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 flex-1 text-stone-900">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <p className="text-stone-600 mb-6 flex items-center gap-2"><Calendar size={18}/> Lütfen yarına uygun bir saat seçin</p>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-xl border-2 transition-all font-medium flex items-center justify-center gap-2
                          ${selectedTime === time ? 'border-transparent text-white shadow-md' : 'border-stone-200 text-stone-700 hover:border-stone-300'}`}
                        style={selectedTime === time ? { backgroundColor: accentColor } : {}}>
                        <Clock size={16}/> {time}
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!selectedTime}
                    onClick={() => setStep(2)}
                    className="w-full mt-8 py-4 rounded-xl text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: primaryColor }}>
                    Devam Et
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="space-y-4 mb-8">
                    {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Ad Soyad</label>
                      <input type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="Örn: Ayşe Yılmaz"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Telefon Numarası</label>
                      <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full p-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="05XX XXX XX XX"/>
                    </div>
                  </div>
                  <button 
                    disabled={loading || !name || !phone}
                    onClick={handleBooking}
                    className="w-full py-4 rounded-xl text-white font-bold shadow-lg transition-transform active:scale-95 flex justify-center items-center gap-2 disabled:opacity-70"
                    style={{ backgroundColor: accentColor }}>
                    {loading ? <Loader2 className="animate-spin" /> : 'Randevuyu Onayla'}
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
                    className="w-20 h-20 mx-auto bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-2">Randevunuz Onaylandı!</h4>
                  <p className="text-stone-600 mb-8">Veritabanına başarıyla kaydedildi. Seçtiğiniz saatte <b>({selectedTime})</b> sizi bekliyoruz.</p>
                  <button 
                    onClick={onClose}
                    className="w-full py-4 rounded-xl font-bold bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors">
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

