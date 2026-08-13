"use client";
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl">
        <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
            <Play fill="currentColor" size={40} className="ml-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


