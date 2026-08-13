import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
  'https://images.unsplash.com/photo-1550537687-c9a0b2c15a59?q=80&w=1000&auto=format&fit=crop'
];

export function LasisInstagram() {
  return (
    <section className="py-24 bg-[#3E2B2B] overflow-hidden">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Sosyal Medya</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-[#FAF5F0]"
          >
            Bizi <span className="italic text-[#D4A373]">Takip Edin</span>
          </motion.h2>
          <p className="font-sans text-[#FAF5F0]/60 text-sm mt-4 tracking-widest uppercase">@drsavascandann</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="aspect-square relative group cursor-pointer"
          >
            <img src={img} alt="Instagram Post" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-[#D4A373]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
               <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
