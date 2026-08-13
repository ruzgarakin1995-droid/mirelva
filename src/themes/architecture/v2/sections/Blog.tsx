"use client";
import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Brütalizmin Modern Yorumu",
    category: "Mimari Akımlar",
    date: "12 Ekim 2023",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "İç Mekanlarda Doğal Işık Kullanımı",
    category: "İç Mimari",
    date: "28 Eylül 2023",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Sürdürülebilir Malzemelerin Geleceği",
    category: "Malzeme Bilimi",
    date: "05 Eylül 2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Güncel</span>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
              Mimari <span className="italic font-serif">Perspektifler</span>
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-zinc-900 border-b border-zinc-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
            Tüm Yazıları Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative h-[300px] mb-6 backdrop-blur-md bg-white/40 p-2 border border-black/5 shadow-xl shadow-zinc-200/30">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-3 text-xs uppercase tracking-wider">
                <span className="text-amber-700 font-semibold">{article.category}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-500">{article.date}</span>
              </div>
              <h3 className="text-2xl font-light text-zinc-900 group-hover:text-amber-700 transition-colors leading-tight">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-zinc-900 border-b border-zinc-900 pb-1">
            Tüm Yazıları Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
