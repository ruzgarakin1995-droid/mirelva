"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Timetable() {
  const days = ['PZT', 'SAL', 'ÇAR', 'PER', 'CUM', 'CMT', 'PAZ'];
  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter">PROGRAM</h2>
        </div>
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {days.map((day, i) => (
            <button key={i} className={`px-6 py-3 font-bold tracking-widest text-sm border ${i === 0 ? 'border-cyan-400 text-cyan-400' : 'border-white/20 text-white/50 hover:text-white'} transition-colors`}>
              {day}
            </button>
          ))}
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { time: '06:00 AM', name: 'NEON HIIT', trainer: 'Alex M.' },
            { time: '08:00 AM', name: 'POWER FLOW', trainer: 'Sarah K.' },
            { time: '05:30 PM', name: 'TITAN STRENGTH', trainer: 'Marcus J.' },
          ].map((cls, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center p-6 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
            >
              <div className="text-xl font-bold text-cyan-400 mb-2 md:mb-0 w-32">{cls.time}</div>
              <div className="text-2xl font-black uppercase tracking-wide flex-1 text-center md:text-left">{cls.name}</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm mb-4 md:mb-0 w-32 text-center md:text-right">{cls.trainer}</div>
              <button className="bg-white/5 hover:bg-cyan-400 hover:text-black px-6 py-2 uppercase tracking-widest text-xs font-bold transition-colors">Katıl</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

