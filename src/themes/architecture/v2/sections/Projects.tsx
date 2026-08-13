"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Serenity Ofisleri",
    category: "Ticari",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
    location: "İzmir",
  },
  {
    title: "Kıyı Müzesi",
    category: "Kültürel",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    location: "Antalya",
  },
  {
    title: "Zen Villaları",
    category: "Konut",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    location: "Muğla",
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              <div className="overflow-hidden relative h-[450px] mb-6 backdrop-blur-2xl bg-white/40 p-2 border border-black/5 shadow-xl shadow-zinc-200/40">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-zinc-900" />
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-1">{project.title}</h3>
                  <span className="text-zinc-500 font-light text-sm">{project.location}</span>
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-zinc-900 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium tracking-wider uppercase">Tüm Projeleri Gör</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
