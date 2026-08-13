'use client';

import { motion } from 'framer-motion';

export default function Subscription() {
  return (
    <section className="py-32 bg-[#2a3026] text-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1974&auto=format&fit=crop" 
          alt="Coffee texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hiçbir Kavurmayı Kaçırmayın</h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
            Abonelik sistemimizle her ay dünyanın farklı bir köşesinden, en taze hasat edilmiş 
            ve ustalarımızca kavrulmuş kahveler kapınıza gelsin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white rounded-full font-medium transition-colors">
              Abonelikleri İncele
            </button>
            <button className="px-8 py-4 bg-transparent border border-stone-400 hover:border-white text-white rounded-full font-medium transition-colors">
              Nasıl Çalışır?
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
