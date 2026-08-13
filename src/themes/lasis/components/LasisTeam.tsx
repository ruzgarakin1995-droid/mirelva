import { motion } from 'framer-motion';

export function LasisTeam() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Kurucu Hekim</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B] mb-8 leading-tight"
          >
            Dr. Savaş <br/> <span className="italic text-[#D4A373]">Candan.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans text-sm md:text-base text-[#3E2B2B]/70 leading-relaxed mb-10"
          >
            Medikal estetik alanındaki yenilikçi yaklaşımları ve uluslararası tecrübesiyle, güzelliğinize ve saşlışınıza deşer katıyor. Her bireyin eşsiz yüz hatlarına özel, doşal ve uyumlu dokunuşlar sunarak Lasis Klinik'in vizyonuna öncülük etmektedir.
          </motion.p>
          
          <ul className="space-y-6">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center text-[#D4A373] font-serif italic text-xl">U</div>
              <div>
                <span className="block font-serif text-lg text-[#3E2B2B]">Uluslararası Deneyim</span>
                <span className="block font-sans text-xs text-[#3E2B2B]/60">Dünya çapında kongre ve sempozyum katılımları</span>
              </div>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-[#D4A373] flex items-center justify-center text-[#D4A373] font-serif italic text-xl">M</div>
              <div>
                <span className="block font-serif text-lg text-[#3E2B2B]">Medikal Estetik Uzmanı</span>
                <span className="block font-sans text-xs text-[#3E2B2B]/60">Alanında öncü tedavi protokolleri</span>
              </div>
            </motion.li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square overflow-hidden rounded-full shadow-xl"
          >
            <img 
              src="/Lasis/drsavascandan.jpg" 
              alt="Lasis Klinik Lasis Team" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
