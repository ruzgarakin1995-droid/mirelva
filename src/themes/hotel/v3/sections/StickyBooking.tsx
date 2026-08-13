"use client";
import { motion } from "framer-motion";

export const StickyBooking = () => {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-0 left-0 w-full z-50 bg-[#293133] text-[#F7E7CE] py-4 px-6 flex justify-between items-center border-t border-zinc-700"
    >
      <div className="hidden md:block">
        <p className="text-sm tracking-widest uppercase font-light">Yeriniz Hazır</p>
      </div>
      <div className="flex gap-4 items-center w-full md:w-auto justify-between md:justify-end">
        <div className="text-sm font-light tracking-wider">01 EYL - 05 EYL</div>
        <button className="bg-[#F7E7CE] text-[#293133] px-8 py-2 tracking-widest uppercase text-xs hover:bg-white transition-colors">
          Rezervasyon
        </button>
      </div>
    </motion.div>
  );
};