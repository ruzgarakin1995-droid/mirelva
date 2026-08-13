"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutDashboard, Settings, User } from 'lucide-react';

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex items-center px-4 border-b border-zinc-800">
                <Search className="text-zinc-400 mr-3" size={18} />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent py-4 text-zinc-100 placeholder-zinc-500 focus:outline-none text-sm"
                />
                <kbd className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">ESC</kbd>
              </div>
              <div className="p-2 max-h-72 overflow-y-auto">
                <div className="text-xs font-medium text-zinc-500 px-2 py-1.5 uppercase tracking-wider">
                  Suggestions
                </div>
                {[
                  { icon: LayoutDashboard, label: 'Go to Dashboard' },
                  { icon: User, label: 'Profile' },
                  { icon: Settings, label: 'Settings' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center px-2 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-lg cursor-pointer transition-colors"
                  >
                    <item.icon size={16} className="mr-3 text-zinc-400" />
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
