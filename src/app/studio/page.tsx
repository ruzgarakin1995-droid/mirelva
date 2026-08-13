"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, Wand2, Layers, Clock, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const container: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function StudioPage() {
  return (
    <motion.div 
      className="max-w-6xl mx-auto space-y-12 pb-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Hero Section */}
      <motion.section variants={item} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 mb-2">
            Production Hub
          </h1>
          <p className="text-zinc-400 text-lg">
            Create, manage, and scale your web projects.
          </p>
        </div>
        
        <Link href="/studio/new">
          <button className="group relative inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
            <Plus size={18} />
            <span>Yeni Website Oluştur</span>
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none" />
          </button>
        </Link>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Copilot */}
        <motion.section variants={item}>
          <Link href="/studio/copilot" className="group block h-full">
            <div className="h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 p-8 transition-all duration-500 hover:border-indigo-500/40 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-600/20">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <ExternalLink size={20} className="text-indigo-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <Wand2 size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3">AI Copilot ile Üret</h2>
              <p className="text-zinc-400">
                Yapay zeka asistanımızla saniyeler içinde tam işlevsel bir websitesi oluşturun. İhtiyaçlarınızı anlatın, gerisini bize bırakın.
              </p>
            </div>
          </Link>
        </motion.section>

        {/* Library */}
        <motion.section variants={item}>
          <Link href="/studio/library" className="group block h-full">
            <div className="h-full relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-8 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-800/50">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <ArrowRight size={20} className="text-zinc-400" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-zinc-800 text-zinc-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-700 transition-all duration-300">
                <Layers size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100 mb-3">Tema ve Bileşen Kütüphanesi</h2>
              <p className="text-zinc-400">
                Özenle tasarlanmış premium şablonlar, UI bileşenleri ve stil dosyaları ile projelerinizi hızlandırın.
              </p>
            </div>
          </Link>
        </motion.section>
      </div>

      {/* Recent Projects */}
      <motion.section variants={item} className="space-y-6 pt-6 border-t border-zinc-800/50">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-zinc-100 flex items-center gap-2">
            <Clock size={20} className="text-zinc-500" />
            Son Projeler
          </h2>
          <Link href="/studio/projects" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-xl bg-zinc-900/50 border border-zinc-800/50 mb-3 overflow-hidden relative backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
                <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="text-xs font-medium text-zinc-300">Live</span>
                </div>
                {/* Mockup pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                Project Alpha {i}
              </h3>
              <p className="text-sm text-zinc-500">Updated {i} days ago</p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
