"use client";

import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="py-32 px-6 sm:px-12 bg-[#FAF7F2] text-[#2C2825]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-md"
        >
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1975&auto=format&fit=crop" 
            alt="Kahve demleme sanatı" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
          />
        </motion.div>
        
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[10px] tracking-[0.4em] font-medium opacity-50 mb-8 uppercase">Hikayemiz</h2>
            <h3 className="text-4xl sm:text-5xl font-light tracking-tight mb-10 leading-[1.1]">
              Ustalık ve tutkunun<br />kusursuz uyumu.
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg font-light opacity-70 leading-relaxed mb-8"
          >
            Her bir kahve çekirdeği, kendi içinde toprağın, iklimin ve emeğin hikayesini barındırır. Bizim görevimiz, bu hikayeyi en saf ve en yoğun haliyle fincanınıza taşıyarak gününüzü aydınlatmak.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg font-light opacity-70 leading-relaxed mb-12"
          >
            Modern mimarimiz ve minimalist tasarımımızla, sadece bir kahve dükkanı değil, şehir hayatının karmaşasından uzaklaşıp ilham bulabileceğiniz huzurlu bir sığınak sunuyoruz.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
              alt="Artisan Pastries" 
              className="w-full h-56 object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
