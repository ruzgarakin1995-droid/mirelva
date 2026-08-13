"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

export const AppPromo = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="bg-black rounded-[40px] relative overflow-hidden flex flex-col md:flex-row items-center pt-16 md:pt-0">
          
          <div className="w-full md:w-1/2 p-12 md:p-24 relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Lüks Artık <br/>Cebinizde.
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-md mx-auto md:mx-0">
              Uygulamamızı indirin; kapınızı dijital anahtarla açın, seyahatinizi anlık yönetin ve özel avantajlardan yararlanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-slate-200 transition-colors font-semibold">
                <Apple className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-black/60 leading-none">İndirmek için</div>
                  <div className="text-base leading-none mt-1">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors font-semibold border border-white/20">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-white/60 leading-none">İndirmek için</div>
                  <div className="text-base leading-none mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Abstract Phone Representation */}
          <div className="w-full md:w-1/2 flex justify-center items-end relative mt-12 md:mt-0 h-[400px] md:h-[600px]">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[280px] md:w-[340px] h-[600px] md:h-[700px] bg-slate-900 border-[8px] border-slate-800 rounded-[3rem] absolute -bottom-32 md:-bottom-20 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="w-32 h-6 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl z-20"></div>
              {/* App UI Mockup */}
              <div className="flex-1 bg-black p-6 pt-16">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                  <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                </div>
                <div className="h-40 bg-white/5 rounded-3xl mb-6 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Car" />
                </div>
                <div className="h-6 w-3/4 bg-white/20 rounded-full mb-4"></div>
                <div className="h-4 w-1/2 bg-white/10 rounded-full mb-12"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-blue-600 rounded-2xl"></div>
                  <div className="h-24 bg-white/10 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
