"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TableReservationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bg-gray-900 border border-gold/30 rounded-lg p-8 w-full max-w-xl relative z-10 shadow-[0_0_50px_rgba(75,0,17,0.3)]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl text-gold mb-2">Masanızı Ayırtın</h2>
              <p className="text-gray-400 font-sans text-sm">Aura'da mutfak mükemmelliğini deneyimleyin.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest">Tarih</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
                    <input
                      type="date"
                      className="w-full bg-black border border-gray-700 rounded-none py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest">Saat</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
                    <select className="w-full bg-black border border-gray-700 rounded-none py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                      <option>21:30</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest">Misafir Sayısı</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <select className="w-full bg-black border border-gray-700 rounded-none py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option>2 Misafir</option>
                    <option>3 Misafir</option>
                    <option>4 Misafir</option>
                    <option>5 Misafir</option>
                    <option>6+ Misafir (Bize Ulaşın)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest">İsim Soyisim</label>
                  <input
                    type="text"
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-black border border-gray-700 rounded-none py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 uppercase tracking-widest">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-black border border-gray-700 rounded-none py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <button className="btn-primary w-full mt-4">Rezervasyonu Onayla</button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TableReservationModal;


