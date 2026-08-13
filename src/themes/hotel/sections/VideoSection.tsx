"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-[70vh] bg-black overflow-hidden flex items-center justify-center">
      <img 
        src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" 
        alt="Resort View"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {!isPlaying ? (
        <motion.button 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsPlaying(true)}
          className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group"
        >
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[var(--accent)] transition-colors" />
        </motion.button>
      ) : (
        <div className="absolute inset-0 z-20 bg-black">
          <iframe 
            className="w-full h-full"
            src="https://www..com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&autohide=1" 
            title="Hotel Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          <button 
            onClick={() => setIsPlaying(false)}
            className="absolute top-8 right-8 text-white text-sm font-bold tracking-widest uppercase hover:text-[var(--accent)] z-30"
          >
            Kapat
          </button>
        </div>
      )}
    </section>
  );
}


