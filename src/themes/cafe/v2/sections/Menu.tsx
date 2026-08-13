"use client";

import { motion } from "framer-motion";

const menuItems = [
  { name: "Cortado", desc: "Dengeli espresso ve ipeksi süt mikrokökpüğü", price: "₺120" },
  { name: "V60 Demleme", desc: "Etiyopya tek kökenli, belirgin floral notalar", price: "₺140" },
  { name: "Matcha Latte", desc: "Törensel kalite Japon matcha, badem sütü", price: "₺150" },
  { name: "Klasik Kruvasan", desc: "Saf tereyağlı, çıtır Fransız klasiği", price: "₺110" },
  { name: "Limonlu Mereng Tart", desc: "Ev yapımı limon kreması ve pürüzsüz mereng", price: "₺160" },
  { name: "Artisan Sandviç", desc: "Ekşi mayalı ekmek, füme et, karamelize soğan, trüf mayo", price: "₺210" },
];

export function Menu() {
  return (
    <section className="py-32 px-6 sm:px-12 bg-[#F9F6F0] text-[#2C2825]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-[10px] tracking-[0.4em] font-medium opacity-50 mb-6 uppercase">Seçkilerimiz</h2>
          <h3 className="text-4xl sm:text-5xl font-light tracking-tight">Rafine Tatlar</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="flex justify-between items-baseline border-b border-[#2C2825]/10 pb-4 mb-3 group-hover:border-[#2C2825]/40 transition-colors duration-500">
                <h4 className="text-xl font-medium tracking-wide">{item.name}</h4>
                <span className="text-lg font-light opacity-80">{item.price}</span>
              </div>
              <p className="text-sm font-light opacity-60 tracking-wide leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <button className="px-8 py-3 border border-[#2C2825]/20 rounded-full tracking-[0.2em] text-xs font-medium hover:bg-[#2C2825] hover:text-[#FAF7F2] transition-colors duration-500">
            TÜM MENÜYÜ İNCELE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
