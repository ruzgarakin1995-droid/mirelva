'use client'
import { motion } from 'framer-motion'

const trainers = [
  { name: 'ALEX R.', role: 'HIIT & Cardio Uzmanı', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop' },
  { name: 'MIA T.', role: 'Yoga Eğitmeni', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop' },
  { name: 'DAVID K.', role: 'Powerlifting Koçu', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop' },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-32 bg-slate-50 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">EKİPLE TANIŞ</h2>
            <p className="text-lg text-slate-500 font-medium mt-4 max-w-md">
              Seni sınırlarının ötesine taşıyacak, motivasyonu yüksek profesyonel ekibimiz.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
            Tüm Ekibi Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={trainer.img} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-[#BAFF39] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h3 className="text-3xl font-black text-white">{trainer.name}</h3>
                <p className="text-[#BAFF39] font-medium mt-1">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
