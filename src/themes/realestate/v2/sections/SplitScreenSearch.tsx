"use client";
import React, { useState, useRef } from 'react';
import { Search, SlidersHorizontal, MapPin, Heart, BedDouble, Bath, Square, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROPERTIES = [
  { id: 1, title: "Boğaz Manzaralı Ultra Lüks Yalı Dairesi", price: 45000000, location: "Bebek, Beşiktaş", beds: 4, baths: 3, m2: 280, image: "/realestate_hero.jpg", isNew: true },
  { id: 2, title: "Orman Kenarında Müstakil Villa", price: 28500000, location: "Zekeriyaköy, Sarıyer", beds: 5, baths: 4, m2: 450, image: "/realestate_property_1.jpg", isNew: false },
  { id: 3, title: "Prestijli Plazada A+ Ofis Katı", price: 18000000, location: "Levent, Şişli", beds: 6, baths: 2, m2: 320, image: "/realestate_story.jpg", isNew: false },
  { id: 4, title: "Modern Mimari Loft Daire", price: 12500000, location: "Nişantaşı, Şişli", beds: 2, baths: 2, m2: 140, image: "/realestate_hero.jpg", isNew: true },
  { id: 5, title: "Bahçeli Tripleks Konak", price: 55000000, location: "Kandilli, Üsküdar", beds: 7, baths: 5, m2: 600, image: "/realestate_property_1.jpg", isNew: false },
  { id: 6, title: "Denize Sıfır Locizsa", price: 22000000, location: "Bodrum, Muğla", beds: 4, baths: 3, m2: 210, image: "/realestate_story.jpg", isNew: true },
];

export function SplitScreenSearch() {
  const [activeTab, setActiveTab] = useState('Satılık');
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const listRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const scrollToProperty = (id: number) => {
    setHoveredProperty(id);
    const el = document.getElementById(`property-${id}`);
    if (el && listRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const filteredProperties = PROPERTIES.filter(p => p.location.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex-1 flex overflow-hidden">
      
      {/* Left Panel: Search & List */}
      <div className="w-full lg:w-[60%] flex flex-col h-full bg-[#F8F9FA] relative z-10 shadow-2xl shadow-slate-300">
        
        {/* Sticky Filter Bar */}
        <div className="bg-white p-4 border-b border-slate-200 shrink-0">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Şehir, ilçe veya mahalle arayın..." 
              className="flex-1 bg-slate-100 border border-transparent focus:border-emerald-500 focus:bg-white rounded-lg px-4 py-3 text-sm font-medium outline-none transition-all"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white p-3 rounded-lg flex items-center justify-center shrink-0 transition-all shadow-md shadow-emerald-600/20">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex items-center gap-2 border border-slate-300 rounded-full px-4 py-2 text-sm font-semibold hover:border-emerald-600 hover:text-emerald-700 shrink-0 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filtreler
            </button>
            <div className="flex bg-slate-100 rounded-full p-1 shrink-0">
              {['Satılık', 'Kiralık'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <select className="border border-slate-300 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 outline-none hover:border-emerald-600 shrink-0 bg-white transition-colors cursor-pointer">
              <option>Fiyat (Tümü)</option>
              <option>0 - 5M TL</option>
              <option>5M - 15M TL</option>
              <option>15M+ TL</option>
            </select>
            <select className="border border-slate-300 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 outline-none hover:border-emerald-600 shrink-0 bg-white transition-colors cursor-pointer">
              <option>Oda Sayısı</option>
              <option>1+1</option>
              <option>2+1</option>
              <option>3+1</option>
              <option>4+1 ve üzeri</option>
            </select>
          </div>
        </div>

        {/* Scrollable Property List */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth">
          <h2 className="text-xl font-bold text-slate-900 mb-6">İstanbul bölgesinde {filteredProperties.length} ilan bulundu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProperties.length === 0 && (
                <div className="col-span-1 md:col-span-2 py-20 text-center text-slate-500">
                  Arama kriterlerinize uygun ilan bulunamadı.
                </div>
              )}
              {filteredProperties.map((property) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={property.id}
                  id={`property-${property.id}`}
                  onMouseEnter={() => setHoveredProperty(property.id)}
                  onMouseLeave={() => setHoveredProperty(null)}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all group cursor-pointer ${hoveredProperty === property.id ? 'border-emerald-500 shadow-xl shadow-emerald-900/5' : 'border-slate-200 hover:border-emerald-500 hover:shadow-xl'}`}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <button 
                      onClick={(e) => toggleFavorite(e, property.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white text-slate-400 transition-colors z-10 active:scale-90"
                    >
                      <Heart className={`w-5 h-5 transition-colors ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'hover:text-red-500'}`} />
                    </button>
                    {property.isNew && (
                      <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        YENİ
                      </span>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="text-2xl font-black text-slate-900 mb-1">
                      {property.price.toLocaleString('tr-TR')} <span className="text-sm font-semibold text-slate-500">TL</span>
                    </div>
                    <div className="text-slate-500 text-sm flex items-center gap-1 mb-3 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {property.location}
                    </div>
                    
                    <div className="flex items-center gap-4 text-slate-600 text-sm font-semibold border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-1"><BedDouble className="w-4 h-4 text-slate-400" /> {property.beds} Oda</div>
                      <div className="flex items-center gap-1"><Bath className="w-4 h-4 text-slate-400" /> {property.baths} Banyo</div>
                      <div className="flex items-center gap-1"><Square className="w-4 h-4 text-slate-400" /> {property.m2} m²</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right Panel: Interactive Map (Visual Mock) */}
      <div className="hidden lg:block lg:w-[40%] bg-[#E5E3DF] relative overflow-hidden">
        {/* Fake Map Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Map Pins */}
        {filteredProperties.map((property) => {
          // Fake random coordinates for visual effect
          const top = `${20 + (property.id * 12)}%`;
          const left = `${15 + ((property.id * 37) % 60)}%`;
          const isHovered = hoveredProperty === property.id;
          
          return (
            <motion.div 
              key={property.id}
              className="absolute z-10"
              style={{ top, left }}
              animate={{ 
                scale: isHovered ? 1.2 : 1, 
                zIndex: isHovered ? 20 : 10 
              }}
              onClick={() => scrollToProperty(property.id)}
            >
              <div className={`
                px-3 py-1.5 rounded-full font-bold text-sm cursor-pointer shadow-lg transition-colors
                ${isHovered ? 'bg-emerald-600 text-white' : 'bg-white text-slate-900 border border-slate-200'}
              `}>
                {(property.price / 1000000).toFixed(1)}M
              </div>
              <div className={`w-3 h-3 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 ${isHovered ? 'bg-emerald-600' : 'bg-white border-b border-r border-slate-200'}`}></div>
            </motion.div>
          );
        })}

        {/* Map Controls */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center font-bold text-xl hover:text-emerald-600 transition-colors active:scale-95">+</button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center font-bold text-xl hover:text-emerald-600 transition-colors active:scale-95">-</button>
        </div>
      </div>
    </div>
  );
}
