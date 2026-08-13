import { motion } from 'framer-motion';

export function BeautyStory() {
  return (
    <section id="hakkimizda" className="py-32 px-6 lg:px-8 bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Bizim Hikayemiz</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B] mb-8 leading-tight"
          >
            Güzelliğin <span className="italic text-[#D4A373]">En Zarif</span><br/> Haliyle Tanışın.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm md:text-base text-[#3E2B2B]/70 leading-relaxed mb-8"
          >
            La Ville Beauty Center olarak, güzelliği sadece dışarıdan bir dokunuş olarak değil, içsel bir özgüvenin dışa yansıması olarak görüyoruz. Paris ve Milano'dan ilham alan tasarımımız, alanında uzman ekibimiz ve lüks detaylarımızla size sadece bir işlem değil, unutulmaz bir deneyim vadediyoruz.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-sans text-sm md:text-base text-[#3E2B2B]/70 leading-relaxed mb-10"
          >
            En ince detayına kadar düşünülmüş salonumuzda; pırlanta ışıltısındaki tırnaklardan, büyüleyici bakışlara ve ruhunuzu dinlendiren SPA ritüellerine kadar her anınızda kendinizi çok özel hissedeceksiniz.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="font-serif italic text-3xl text-[#D4A373] opacity-80 mb-10"
          >
            La Ville Founder
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[100px] rounded-b-xl"
          >
            <img 
              src="/beauty/beauty_salon_story_1786276217076.jpg" 
              alt="La Ville Beauty Philosophy" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          {/* Floating Element */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 -left-10 bg-[#FAF5F0] p-8 shadow-2xl rounded-tr-3xl hidden md:block"
          >
            <span className="font-serif text-5xl text-[#D4A373] block mb-2">15+</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#3E2B2B] block">Yıllık Tecrübe</span>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
