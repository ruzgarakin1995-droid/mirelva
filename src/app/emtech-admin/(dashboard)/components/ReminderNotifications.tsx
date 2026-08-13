"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, Clock, AlertTriangle, X } from 'lucide-react';
import { useAdmin, Reminder } from '../context/AdminContext';
import { motion, AnimatePresence } from 'framer-motion';

export function ReminderNotifications() {
  const { reminders, completeReminder, snoozeReminder } = useAdmin();
  const [activeReminders, setActiveReminders] = useState<Reminder[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio objesini client tarafında oluştur
    if (!audioRef.current) {
      audioRef.current = new Audio('/alarm.mp3'); // We'll assume an alarm.mp3 exists or create one/use base64. Let's use a base64 string for a simple beep.
    }
  }, []);

  const checkReminders = () => {
    const now = new Date();
    const due = reminders.filter(r => {
      if (r.status === 'COMPLETED') return false;
      
      if (r.status === 'PENDING') {
        return new Date(r.targetDate) <= now;
      }
      
      if (r.status === 'SNOOZED' && r.snoozedUntil) {
        return new Date(r.snoozedUntil) <= now;
      }
      
      return false;
    });

    if (due.length > activeReminders.length) {
      // New reminder triggered!
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Audio play failed due to browser policy:', e));
      }
    }
    
    setActiveReminders(due);
  };

  useEffect(() => {
    checkReminders(); // Initial check
    const interval = setInterval(checkReminders, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [reminders]);

  const handleComplete = (id: string) => {
    completeReminder(id);
    setActiveReminders(prev => prev.filter(r => r.id !== id));
  };

  const handleSnooze = (id: string) => {
    snoozeReminder(id, 1); // 1 hour snooze
    setActiveReminders(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className={`relative p-2 rounded-full transition-colors ${activeReminders.length > 0 ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'text-slate-500 hover:bg-slate-100'}`}
      >
        <Bell className="w-5 h-5" />
        {activeReminders.length > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-pulse border-2 border-white">
            {activeReminders.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {showDropdown && activeReminders.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-50 bg-red-50 flex justify-between items-center">
              <h3 className="font-semibold text-red-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Hatırlatıcılar ({activeReminders.length})
              </h3>
              <button onClick={() => setShowDropdown(false)} className="text-red-400 hover:text-red-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="max-h-[300px] overflow-y-auto p-2 flex flex-col gap-2">
              {activeReminders.map(reminder => (
                <div key={reminder.id} className="p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                  <h4 className="font-semibold text-slate-800 text-sm">{reminder.title}</h4>
                  {reminder.note && <p className="text-xs text-slate-500 mt-1">{reminder.note}</p>}
                  <div className="flex gap-2 mt-3">
                    <button 
                      onClick={() => handleComplete(reminder.id)}
                      className="flex-1 flex items-center justify-center gap-1 bg-green-50 text-green-700 text-xs font-medium py-1.5 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <Check className="w-3 h-3" />
                      Tamamla
                    </button>
                    <button 
                      onClick={() => handleSnooze(reminder.id)}
                      className="flex-1 flex items-center justify-center gap-1 bg-slate-50 text-slate-700 text-xs font-medium py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Clock className="w-3 h-3" />
                      Ertele (1s)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global screen popup if there are new reminders (optional, we use dropdown + icon as required) */}
      <AnimatePresence>
        {activeReminders.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {activeReminders.slice(0, 3).map((reminder) => (
              <motion.div
                key={reminder.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-4 rounded-2xl shadow-2xl border-l-4 border-red-500 w-80 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2">
                  <button onClick={() => handleSnooze(reminder.id)} className="text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 rounded-full text-red-600">
                    <Bell className="w-5 h-5 animate-bounce" />
                  </div>
                  <div className="flex-1 pr-6">
                    <h4 className="font-bold text-slate-800 text-sm">{reminder.title}</h4>
                    {reminder.note && <p className="text-xs text-slate-500 mt-1 line-clamp-2">{reminder.note}</p>}
                    <div className="flex gap-2 mt-3">
                      <button 
                        onClick={() => handleComplete(reminder.id)}
                        className="flex-1 bg-indigo-600 text-white text-xs font-medium py-1.5 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Tamamla
                      </button>
                      <button 
                        onClick={() => handleSnooze(reminder.id)}
                        className="flex-1 bg-slate-100 text-slate-700 text-xs font-medium py-1.5 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        Ertele (1s)
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
