'use client';

import { motion } from 'framer-motion';

const coffees = [
  {
    name: "Etiyopya Yirgacheffe",
    profile: "Çiçeksi & Narenciye",
    process: "Yıkanmış",
    roast: "Açık Orta",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Kolombiya Supremo",
    profile: "Çikolata & Karamel",
    process: "Yıkanmış",
    roast: "Orta",
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=2030&auto=format&fit=crop"
  },
  {
    name: "Guatemala Antigua",
    profile: "Baharatlı & Kakao",
    process: "Doğal",
    roast: "Orta Koyu",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function CoffeeSelection() {
  return (
    <section className="py-32 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Özel Seçki
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 text-lg"
          >
            Dünyanın en prestijli çiftliklerinden özenle seçilmiş, taze kavrulmuş specialty kahvelerimiz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffees.map((coffee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-stone-800">
                <img 
                  src={coffee.image} 
                  alt={coffee.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">{coffee.name}</h3>
              <div className="space-y-1 text-sm text-stone-400 font-mono">
                <p>PROFiL // {coffee.profile}</p>
                <p>iŞLEM // {coffee.process}</p>
                <p>KAVURMA // {coffee.roast}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
