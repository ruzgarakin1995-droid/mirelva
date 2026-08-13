"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function Attorneys() {
  const attorneys = [
    {
      name: "Av. Mehmet Yılmaz",
      role: "Kurucu Ortak / Ceza Hukuku",
      image: "https://images.unsplash.com/photo-1560250097001-3946448443e4?q=80&w=600&auto=format&fit=crop",
      desc: "20 yılı aşkın tecrübesiyle ağır ceza davalarında uzmanlaşmıştır."
    },
    {
      name: "Av. Ayşe Kaya",
      role: "Yönetici Ortak / Ticaret Hukuku",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      desc: "Uluslararası ticaret ve şirketler hukuku alanında öncü isimlerdendir."
    },
    {
      name: "Av. Ali Demir",
      role: "Kıdemli Avukat / İş Hukuku",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      desc: "İş ve sosyal güvenlik hukuku uyuşmazlıklarında geniş deneyime sahiptir."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Uzman Kadromuz</h2>
            <p className="text-lg text-slate-600">Her biri kendi alanında uzmanlaşmış, deneyimli ve dinamik avukat kadromuzla yanınızdayız.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group backdrop-blur-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-700/50 transition-colors"
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{attorney.name}</h3>
                <div className="text-amber-700 font-medium mb-4">{attorney.role}</div>
                <p className="text-slate-600 mb-6">{attorney.desc}</p>
                <div className="flex gap-4 border-t border-slate-100 pt-4">
                  <button className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                  <button className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
