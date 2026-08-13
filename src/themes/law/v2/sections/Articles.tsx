"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

export function Articles() {
  const articles = [
    {
      title: "Yeni İş Kanunu Düzenlemeleri Neleri Kapsıyor?",
      excerpt: "Son torba yasa ile birlikte işçi ve işveren haklarında yapılan önemli değişikliklerin detaylı analizi.",
      date: "12 Ekim 2023",
      category: "İş Hukuku"
    },
    {
      title: "Kişisel Verilerin Korunmasında Yeni Dönem",
      excerpt: "KVKK kurul kararları ışığında şirketlerin alması gereken yeni idari ve teknik tedbirler.",
      date: "05 Ekim 2023",
      category: "Bilişim Hukuku"
    },
    {
      title: "Kira Tespit Davalarında Dikkat Edilmesi Gerekenler",
      excerpt: "Artan kira bedelleri karşısında ev sahibi ve kiracıların yasal hakları ve dava süreçleri.",
      date: "28 Eylül 2023",
      category: "Gayrimenkul Hukuku"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hukuki Makaleler</h2>
            <p className="text-slate-600">Güncel mevzuat değişiklikleri ve hukuki değerlendirmelerimiz.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800">
            Tümünü Gör <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">{article.category}</span>
                <div className="flex items-center gap-1 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" /> {article.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">{article.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>
              <div className="text-slate-900 font-medium text-sm inline-flex items-center gap-1">
                Devamını Oku <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
