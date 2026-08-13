"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#211E1C] text-[#FAF7F2] py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-[#FAF7F2]/10 pb-16 mb-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <h3 className="text-3xl tracking-[0.2em] font-light mb-8">LUMIÈRE</h3>
          <p className="text-sm font-light opacity-60 leading-relaxed max-w-sm">
            Kahveye duyduğumuz saygı, tasarıma olan tutkumuzla birleşti. Her detayında kaliteyi ve zarafeti hissedeceğiniz bir mekan.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 flex flex-col gap-6"
        >
          <h4 className="text-[10px] tracking-[0.3em] font-medium opacity-50 uppercase">İletişim</h4>
          <a href="#" className="text-sm font-light opacity-80 hover:opacity-100 flex items-start gap-4 transition-opacity group">
            <MapPin size={18} className="mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="leading-relaxed">Teşvikiye Mah. Hüsrev Gerede Cad.<br />No:42, Nişantaşı, İstanbul</span>
          </a>
          <a href="mailto:hello@lumierecafe.com" className="text-sm font-light opacity-80 hover:opacity-100 flex items-center gap-4 transition-opacity group mt-2">
            <Mail size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>hello@lumierecafe.com</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-3 flex flex-col gap-6"
        >
          <h4 className="text-[10px] tracking-[0.3em] font-medium opacity-50 uppercase">Sosyal Medya</h4>
          <a href="#" className="text-sm font-light opacity-80 hover:opacity-100 flex items-center gap-4 transition-opacity group">
            <Camera size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>@lumiere.istanbul</span>
          </a>
        </motion.div>

      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] tracking-widest font-light opacity-40 uppercase">
        <p>&copy; {new Date().getFullYear()} LUMIÈRE CAFE. TÜM HAKLARI SAKLIDIR.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-100 transition-opacity">Gizlilik Politikası</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Kullanım Koşulları</a>
        </div>
      </div>
    </footer>
  );
}
