"use client";

import React from 'react';
import { realEstateProperties } from '@/lib/mock-data/ecommerce/realestate';
import { motion } from 'framer-motion';

export default function TeamPage() {
  // Extract unique agents
  const agentsMap = new Map();
  realEstateProperties.forEach(p => {
    if (!agentsMap.has(p.agent.name)) {
      agentsMap.set(p.agent.name, p.agent);
    }
  });
  const agents = Array.from(agentsMap.values());

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
          >
            Danışman <span className="font-serif italic text-[#1a1a1a]/60">Ekibimiz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1a1a1a]/60 font-medium max-w-2xl mx-auto"
          >
            Sadece portföy yönetmiyoruz; ilişkiler inşa ediyoruz. Her biri kendi bölgesinde uzman, vizyoner danışmanlarımızla tanışın.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {agents.map((agent, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-48 h-48 mb-6 overflow-hidden rounded-full">
                <img 
                  src={agent.avatar} 
                  alt={agent.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <h3 className="text-2xl font-normal tracking-tight mb-1">{agent.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-4">Kıdemli Danışman</p>
              
              <a 
                href={`tel:${agent.phone}`} 
                className="text-sm font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
              >
                {agent.phone}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
