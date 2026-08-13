"use client";
import React from 'react';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { useSettings } from '@/context/SettingsContext';

export default function IletisimPage() {
  const { settings, loading } = useSettings();

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col selection:bg-[#0055FF] selection:text-white">
      <EmtechHeader />
      
      <div className="flex-1 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-l-8 border-[#0055FF] pl-8 py-4"
          >
            <h1 className="text-4xl md:text-7xl font-space font-black text-zinc-950 uppercase tracking-tighter leading-none mb-4">
              Bize <span className="text-[#0055FF]">Ulaşın</span>
            </h1>
            <p className="font-inter text-zinc-500 text-lg max-w-2xl">
              Toptan siparişleriniz, bayilik başvurularınız ve teknik servis çözümlerimiz hakkında hızlı destek alın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Card (Primary) */}
              <motion.a 
                href={`https://wa.me/${settings?.whatsapp?.replace(/[^0-9]/g, '') || '905102215932'}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="group block bg-zinc-950 p-8 border-4 border-zinc-950 hover:border-[#25D366] hover:bg-[#25D366] transition-all duration-300 shadow-[8px_8px_0px_#000] hover:shadow-[8px_8px_0px_#128c7e]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-green-900 mb-2 transition-colors">Toptan Sipariş & Destek (WhatsApp)</h3>
                <p className="font-space font-black text-3xl text-white">
                  {loading ? '...' : settings?.whatsapp || '0510 221 59 32'}
                </p>
              </motion.a>

              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 border-2 border-zinc-200 hover:border-[#0055FF] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0055FF]" />
                  </div>
                  <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">E-Posta</h3>
                </div>
                <p className="font-inter text-zinc-600">
                  {loading ? 'Yükleniyor...' : settings?.email || 'info@kartelgsm.com.tr'}
                </p>
              </motion.div>

              {/* Working Hours */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 border-2 border-zinc-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0055FF]" />
                  </div>
                  <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950">Çalışma Saatleri</h3>
                </div>
                <div className="font-inter text-sm text-zinc-600 whitespace-pre-line leading-loose">
                  {loading ? 'Yükleniyor...' : settings?.workingHours || 'Pazartesi - Cumartesi: 09:00 - 17:00\nPazar: Kapalı'}
                </div>
              </motion.div>

            </div>

            {/* Map Area */}
            <div className="lg:col-span-7 h-[500px] lg:h-auto min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full h-full bg-zinc-200 border-4 border-zinc-950 shadow-[12px_12px_0px_#0055FF] relative overflow-hidden flex flex-col"
              >
                <div className="p-6 bg-zinc-950 text-white flex gap-4 items-center flex-shrink-0 z-10 relative">
                  <MapPin className="w-6 h-6 text-[#0055FF]" />
                  <div>
                    <h3 className="font-space font-bold text-lg uppercase tracking-tighter">Merkez Ofis / Mağaza</h3>
                    <p className="font-mono text-[10px] text-zinc-400 tracking-widest mt-1">
                      {loading ? 'YÜKLENIYOR...' : settings?.address?.toUpperCase() || 'TAHTAKALE MAH. TOMRUK SOK. YILDIZ İŞ HANI NO: 14 EMİNÖNÜ, FATİH / İSTANBUL'}
                    </p>
                  </div>
                </div>
                
                {/* Google Maps Iframe */}
                <div className="flex-1 w-full h-full relative z-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2319088619623!2d28.966961411802194!3d41.02018861864506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e81b674b97%3A0xb3fc04d0ef4f89fb!2sTahtakale%2C%20Tomruk%20Sk.%20No%3A14%2C%2034116%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      <EmtechFooter />
    </main>
  );
}
