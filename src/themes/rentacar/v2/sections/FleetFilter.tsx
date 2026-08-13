"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Settings, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: "BMW 5 Serisi",
    category: "Premium",
    image: "/auto_car.jpg", // Using available public image
    specs: { seats: 5, luggage: 4, transmission: "Otomatik", type: "Dizel" },
    price: 3450,
    tags: ["Çok Tercih Edilen", "Sınırlı Stok"]
  },
  {
    id: 2,
    name: "Volvo XC90",
    category: "SUV",
    image: "/rentacar_interior.jpg",
    specs: { seats: 7, luggage: 5, transmission: "Otomatik", type: "Hibrit" },
    price: 4200,
    tags: ["Aile İçin Uygun"]
  },
  {
    id: 3,
    name: "Mercedes-Benz E-Class",
    category: "Premium",
    image: "/rentacar_fleet.jpg",
    specs: { seats: 5, luggage: 4, transmission: "Otomatik", type: "Benzin" },
    price: 3800,
    tags: []
  },
  {
    id: 4,
    name: "Volkswagen Passat",
    category: "Sedan",
    image: "/rentacar_airport.jpg",
    specs: { seats: 5, luggage: 3, transmission: "Otomatik", type: "Dizel" },
    price: 1850,
    tags: ["Ekonomik"]
  },
];

const categories = ["Tümü", "Premium", "SUV", "Sedan", "Ekonomik", "Elektrikli"];

export function FleetFilter({ searchParams, onSelect }: any) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredVehicles = vehicles.filter(v => activeCategory === "Tümü" || v.category === activeCategory);

  return (
    <section id="fleet-filter" className="py-24 bg-[#F8F9FA] px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Size Uygun Aracı Seçin</h2>
            <p className="text-slate-500 text-lg">
              {searchParams.pickupLocation} ofisimiz için arama sonuçları.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 ${
                  activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={vehicle.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-orange-500/30 transition-colors flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{vehicle.name}</h3>
                    <span className="text-slate-500 text-sm font-medium">{vehicle.category}</span>
                  </div>
                  {vehicle.tags[0] && (
                    <span className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                      {vehicle.tags[0]}
                    </span>
                  )}
                </div>

                <div className="relative h-48 mb-6 -mx-2 overflow-hidden rounded-xl">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-slate-600 text-sm">
                    <Users className="w-4 h-4 mr-2 text-slate-400" /> {vehicle.specs.seats} Koltuk
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Briefcase className="w-4 h-4 mr-2 text-slate-400" /> {vehicle.specs.luggage} Bagaj
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Settings className="w-4 h-4 mr-2 text-slate-400" /> {vehicle.specs.transmission}
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Zap className="w-4 h-4 mr-2 text-slate-400" /> {vehicle.specs.type}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-1">Günlük</span>
                    <div className="text-2xl font-bold text-slate-900">
                      {vehicle.price.toLocaleString('tr-TR')} <span className="text-sm font-medium text-slate-500">TL</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onSelect(vehicle.name)}
                    className="bg-slate-900 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-colors active:scale-95 flex items-center gap-2"
                  >
                    Seç <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Trust Banner */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Tam Kapsamlı Sigorta Ayrıcalığı</h4>
              <p className="text-slate-600 text-sm">Tüm araçlarımızda sıfır muafiyetli premium kasko standarttır.</p>
            </div>
          </div>
          <button className="text-blue-600 font-semibold text-sm hover:underline hover:text-blue-700 transition-colors">
            Detayları İncele
          </button>
        </div>

      </div>
    </section>
  );
}
