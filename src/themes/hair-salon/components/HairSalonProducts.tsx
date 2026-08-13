"use client";

import { motion } from 'framer-motion';

export function HairSalonProducts() {
  const products = [
    {
      name: "Elixir Ultime Serum",
      desc: "Kamelya ve Argan yağları ile zenginleştirilmiş durulanmayan bakım yağı.",
      price: "₺1,450",
      img: "/hair-salon/hair_product_1.jpg"
    },
    {
      name: "Masque Chronologiste",
      desc: "Havyar özleri ve hyalüronik asit içeren ultra yoğun yenileyici maske.",
      price: "₺1,850",
      img: "/hair-salon/hair_product_2.jpg"
    }
  ];

  return (
    <section className="py-32 bg-[#FDFBF7] px-8 border-t border-[#352F2A]/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-[#352F2A]"
            >
              Kür & <span className="italic text-[#C4A484] font-light">Ev Bakımı.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#352F2A] border-b border-[#352F2A] pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-colors">
              Tümünü Keşfet
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((prod, i) => (
            <motion.div 
              key={prod.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group flex flex-col sm:flex-row bg-white border border-[#352F2A]/5 overflow-hidden hover:shadow-2xl transition-all duration-700"
            >
              <div className="w-full sm:w-1/2 aspect-square sm:aspect-auto overflow-hidden relative bg-[#FDFBF7]">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                />
              </div>
              <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center bg-white relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C4A484]/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
                <h3 className="text-2xl font-serif text-[#352F2A] mb-3">{prod.name}</h3>
                <p className="font-sans font-light text-xs text-[#352F2A]/50 leading-relaxed mb-8">{prod.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-serif text-lg text-[#C4A484]">{prod.price}</span>
                  <button className="text-[9px] font-sans tracking-[0.2em] uppercase border border-[#352F2A] text-[#352F2A] px-6 py-2 hover:bg-[#352F2A] hover:text-[#FDFBF7] transition-colors">
                    Rezerve Et
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
