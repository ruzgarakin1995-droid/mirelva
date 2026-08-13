"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Restored Phone 14 Pro', price: '$799', desc: 'Condition: Pristine. 100% Battery Health.', image: '/images/tech-repair-v1/store-phone.jpg', tag: 'Restored' },
  { id: 2, name: 'Carbon Fiber Case', price: '$49', desc: 'Military-grade drop protection. Ultra thin.', image: null, tag: 'Accessory' },
  { id: 3, name: 'Sapphire Screen Guard', price: '$29', desc: '9H hardness rating. Edge-to-edge coverage.', image: null, tag: 'Accessory' },
  { id: 4, name: 'Restored Tablet Air', price: '$549', desc: 'Condition: Excellent. 256GB Storage.', image: null, tag: 'Restored' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } },
};

export function TechStore() {
  return (
    <section id="devices" className="py-32 bg-[#05050A] border-t border-white/5 relative z-10">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase mb-4">[ Hardware ]</h2>
            <h3 className="text-4xl md:text-5xl font-space font-black text-white uppercase tracking-tighter">
              Restored &<br /> Protected
            </h3>
          </div>
          <button className="self-start md:self-auto font-space text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors border-b border-white/20 hover:border-cyan-400 pb-1">
            View All Devices
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="group bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden hover:bg-zinc-900/60 hover:border-white/10 transition-colors flex flex-col"
            >
              {/* Product Image */}
              <div className="h-64 w-full bg-zinc-950 relative overflow-hidden flex items-center justify-center p-8">
                {product.image ? (
                  <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-zinc-900/50 rounded-lg flex items-center justify-center text-zinc-800">
                    <ShoppingCart className="w-12 h-12" />
                  </div>
                )}
                
                {/* Overlay Add to Cart button */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-black font-space text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-cyan-400 transition-colors flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4" /> Add To Cart
                  </button>
                </div>

                <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-md font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
                  {product.tag}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-space font-bold text-white uppercase text-sm pr-4">{product.name}</h4>
                  <span className="font-mono text-cyan-400 font-bold">{product.price}</span>
                </div>
                <p className="font-inter text-xs text-zinc-500 leading-relaxed mt-auto">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
