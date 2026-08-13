"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Blocks, Plus, Search, Trash2, Eye, Download, LayoutTemplate, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteTheme } from "@/actions/library";

export default function LibraryClient({ 
  initialThemes, 
  initialComponents,
  currentTab
}: { 
  initialThemes: any[];
  initialComponents: any[];
  currentTab: string;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [activeTier, setActiveTier] = useState<number>(1);

  const categoryTranslations: Record<string, string> = {
    'Restaurant': 'Restoran & Kafe',
    'RESTAURANT': 'Restoran & Kafe',
    'Beauty': 'Güzellik Salonu',
    'BEAUTY': 'Güzellik Salonu',
    'Fitness': 'Spor & Fitness',
    'FITNESS': 'Spor & Fitness',
    'Real Estate': 'Gayrimenkul',
    'Hotel': 'Otel & Konaklama',
    'HOTEL': 'Otel & Konaklama',
    'Doctor': 'Doktor & Klinik',
    'MEDICAL': 'Doktor & Klinik',
    'Law Firm': 'Hukuk Bürosu',
    'LAW': 'Hukuk Bürosu',
    'Architecture': 'Mimarlık',
    'ARCHITECTURE': 'Mimarlık',
    'Auto Gallery': 'Oto Galeri',
    'AUTO': 'Oto Galeri',
    'Agency': 'Dijital Ajans',
    'Education': 'Eğitim & Kurs',
    'EDUCATION': 'Eğitim & Kurs',
    'Yacht': 'Yat Kiralama',
    'YACHT': 'Yat Kiralama',
    'Events': 'Etkinlik & Organizasyon',
    'EVENTS': 'Etkinlik & Organizasyon',
    'E-commerce': 'E-Ticaret',
    'Jewelry': 'Mücevherat',
    'JEWELRY': 'Mücevherat',
    'Photography': 'Fotoğrafçılık',
    'Consulting': 'Danışmanlık',
    'FINANCE': 'Finans & Danışmanlık',
    'Logistics': 'Lojistik & Kargo',
    'LOGISTICS': 'Lojistik & Kargo',
    'Construction': 'İnşaat',
    'SaaS': 'Yazılım & Teknoloji',
    'SOFTWARE': 'Yazılım & Ajans',
    'RENT_A_CAR': 'Araç Kiralama'
  };

  const getPreviewUrl = (theme: any) => {
    if (theme.previewUrl) return theme.previewUrl;
    
    const slug = theme.category.toLowerCase().replace(/ /g, '').replace('-', '');
    const map: Record<string, string> = {
      'realestate': 'realestate',
      'lawfirm': 'law',
      'doctor': 'doctor',
      'autogallery': 'auto',
      'saas': 'software',
      'consulting': 'finance',
      'photography': 'rentacar',
      'rent_a_car': 'rentacar',
      'e-commerce': 'ecommerce',
      'ecommerce': 'ecommerce'
    };
    
    const parsedConfig = theme.config ? JSON.parse(theme.config) : { tier: 1 };
    const routeSlug = map[slug] || slug;
    
    return parsedConfig.tier === 2 ? `/test-${routeSlug}-v2` : `/test-${routeSlug}`;
  };

  const getThemeImage = (theme: any) => {
    if (theme.previewUrl) return theme.previewUrl;
    const map: Record<string, string> = {
      'Restaurant': '/restaurant_bg.jpg',
      'RESTAURANT': '/restaurant_bg.jpg',
      'Beauty': '/beauty_bg.jpg',
      'BEAUTY': '/beauty_bg.jpg',
      'Fitness': '/fitness_hero.jpg',
      'FITNESS': '/fitness_hero.jpg',
      'Real Estate': '/realestate_hero.jpg',
      'Hotel': '/hotel_hero.jpg',
      'HOTEL': '/hotel_hero.jpg',
      'Doctor': '/doctor_hero.jpg',
      'MEDICAL': '/doctor_hero.jpg',
      'Law Firm': '/law_hero.jpg',
      'LAW': '/law_hero.jpg',
      'Architecture': '/arch_hero.jpg',
      'ARCHITECTURE': '/arch_hero.jpg',
      'Auto Gallery': '/auto_hero.jpg',
      'AUTO': '/auto_hero.jpg',
      'Agency': '/agency_hero.jpg',
      'Education': '/education/edu_hero.jpg',
      'EDUCATION': '/education/edu_hero.jpg',
      'Yacht': '/yacht_hero.jpg',
      'YACHT': '/yacht_hero.jpg',
      'Events': '/events/events_hero.jpg',
      'EVENTS': '/events/events_hero.jpg',
      'E-commerce': '/ecommerce_hero.jpg',
      'Jewelry': '/jewelry_hero.jpg',
      'JEWELRY': '/jewelry_hero.jpg',
      'Photography': '/rentacar_hero.jpg', 
      'RENT_A_CAR': '/rentacar_hero.jpg',
      'Consulting': '/finance/finance_hero.jpg',
      'FINANCE': '/finance/finance_hero.jpg',
      'Logistics': '/logistics_hero.webp',
      'LOGISTICS': '/logistics_hero.webp',
      'Construction': '/construction_hero.jpg',
      'SaaS': '/agency_work.jpg',
      'SOFTWARE': '/agency_work.jpg'
    };
    return map[theme.category] || null;
  };

  const handleDeleteTheme = async (id: string) => {
    if (confirm("Bu temayı silmek istediğinize emin misiniz?")) {
      setIsDeleting(id);
      await deleteTheme(id);
      setIsDeleting(null);
    }
  };

  const DEFAULT_THEMES = [
    { id: "1", name: "Aesthetic Tema", category: "Aesthetic", isPremium: true, previewUrl: "/test-aesthetic", config: "{\"tier\":1}" },
    { id: "2", name: "Agency Tema", category: "Agency", isPremium: true, previewUrl: "/test-agency", config: "{\"tier\":1}" },
    { id: "3", name: "Architecture Tema", category: "Architecture", isPremium: true, previewUrl: "/test-architecture", config: "{\"tier\":1}" },
    { id: "4", name: "Architecture V2 Tema", category: "Architecture", isPremium: false, previewUrl: "/test-architecture-v2", config: "{\"tier\":2}" },
    { id: "5", name: "Architecture V3 Tema", category: "Architecture", isPremium: true, previewUrl: "/test-architecture-v3", config: "{\"tier\":3}" },
    { id: "6", name: "Auto Tema", category: "Auto", isPremium: true, previewUrl: "/test-auto", config: "{\"tier\":1}" },
    { id: "7", name: "Auto V2 Tema", category: "Auto", isPremium: false, previewUrl: "/test-auto-v2", config: "{\"tier\":2}" },
    { id: "8", name: "Autoservice V2 Tema", category: "Autoservice", isPremium: false, previewUrl: "/test-autoservice-v2", config: "{\"tier\":2}" },
    { id: "9", name: "Barber Tema", category: "Barber", isPremium: true, previewUrl: "/test-barber", config: "{\"tier\":1}" },
    { id: "10", name: "Beauty Tema", category: "Beauty", isPremium: true, previewUrl: "/test-beauty", config: "{\"tier\":1}" },
    { id: "11", name: "Cafe V2 Tema", category: "Cafe", isPremium: false, previewUrl: "/test-cafe-v2", config: "{\"tier\":2}" },
    { id: "12", name: "Coffee V2 Tema", category: "Coffee", isPremium: false, previewUrl: "/test-coffee-v2", config: "{\"tier\":2}" },
    { id: "13", name: "Construction Tema", category: "Construction", isPremium: true, previewUrl: "/test-construction", config: "{\"tier\":1}" },
    { id: "14", name: "Dentist Tema", category: "Dentist", isPremium: true, previewUrl: "/test-dentist", config: "{\"tier\":1}" },
    { id: "15", name: "Doctor Tema", category: "Doctor", isPremium: true, previewUrl: "/test-doctor", config: "{\"tier\":1}" },
    { id: "16", name: "Doctor V2 Tema", category: "Doctor", isPremium: false, previewUrl: "/test-doctor-v2", config: "{\"tier\":2}" },
    { id: "17", name: "Ecommerce Tema", category: "E-commerce", isPremium: true, previewUrl: "/test-ecommerce", config: "{\"tier\":1}" },
    { id: "18", name: "Ecommerce V2 Tema", category: "E-commerce", isPremium: false, previewUrl: "/test-ecommerce-v2", config: "{\"tier\":2}" },
    { id: "19", name: "Ecommerce V3 Tema", category: "E-commerce", isPremium: true, previewUrl: "/test-ecommerce-v3", config: "{\"tier\":3}" },
    { id: "20", name: "Ecommerce V4 Tema", category: "E-commerce", isPremium: true, previewUrl: "/test-ecommerce-v4", config: "{\"tier\":3}" },
    { id: "21", name: "Education Tema", category: "Education", isPremium: true, previewUrl: "/test-education", config: "{\"tier\":1}" },
    { id: "22", name: "Events Tema", category: "Events", isPremium: true, previewUrl: "/test-events", config: "{\"tier\":1}" },
    { id: "23", name: "Finance Tema", category: "Finance", isPremium: true, previewUrl: "/test-finance", config: "{\"tier\":1}" },
    { id: "24", name: "Fitness Tema", category: "Fitness", isPremium: true, previewUrl: "/test-fitness", config: "{\"tier\":1}" },
    { id: "25", name: "Hair Salon Tema", category: "Hair Salon", isPremium: true, previewUrl: "/test-hair-salon", config: "{\"tier\":1}" },
    { id: "26", name: "Hamburger V2 Tema", category: "Hamburger", isPremium: false, previewUrl: "/test-hamburger-v2", config: "{\"tier\":2}" },
    { id: "27", name: "Hotel Tema", category: "Hotel", isPremium: true, previewUrl: "/test-hotel", config: "{\"tier\":1}" },
    { id: "28", name: "Hotel V3 Tema", category: "Hotel", isPremium: true, previewUrl: "/test-hotel-v3", config: "{\"tier\":3}" },
    { id: "29", name: "Jewelry Tema", category: "Jewelry", isPremium: true, previewUrl: "/test-jewelry", config: "{\"tier\":1}" },
    { id: "30", name: "Jewelry V3 Tema", category: "Jewelry", isPremium: true, previewUrl: "/test-jewelry-v3", config: "{\"tier\":3}" },
    { id: "31", name: "Law Tema", category: "Law", isPremium: true, previewUrl: "/test-law", config: "{\"tier\":1}" },
    { id: "32", name: "Law V2 Tema", category: "Law", isPremium: false, previewUrl: "/test-law-v2", config: "{\"tier\":2}" },
    { id: "33", name: "Law V3 Tema", category: "Law", isPremium: true, previewUrl: "/test-law-v3", config: "{\"tier\":3}" },
    { id: "34", name: "Logistics Tema", category: "Logistics", isPremium: true, previewUrl: "/test-logistics", config: "{\"tier\":1}" },
    { id: "35", name: "Pizza V2 Tema", category: "Pizza", isPremium: false, previewUrl: "/test-pizza-v2", config: "{\"tier\":2}" },
    { id: "36", name: "Real Estate Tema", category: "Real Estate", isPremium: true, previewUrl: "/test-real-estate", config: "{\"tier\":1}" },
    { id: "37", name: "Realestate Tema", category: "Real Estate", isPremium: true, previewUrl: "/test-realestate", config: "{\"tier\":1}" },
    { id: "38", name: "Rentacar Tema", category: "RENT_A_CAR", isPremium: true, previewUrl: "/test-rentacar", config: "{\"tier\":1}" },
    { id: "39", name: "Rentacar V2 Tema", category: "RENT_A_CAR", isPremium: false, previewUrl: "/test-rentacar-v2", config: "{\"tier\":2}" },
    { id: "40", name: "Restaurant Tema", category: "Restaurant", isPremium: true, previewUrl: "/test-restaurant", config: "{\"tier\":1}" },
    { id: "41", name: "Restaurant V3 Tema", category: "Restaurant", isPremium: true, previewUrl: "/test-restaurant-v3", config: "{\"tier\":3}" },
    { id: "42", name: "Restaurant V4 Tema", category: "Restaurant", isPremium: true, previewUrl: "/test-restaurant-v4", config: "{\"tier\":3}" },
    { id: "43", name: "Salon Tema", category: "Salon", isPremium: true, previewUrl: "/test-salon", config: "{\"tier\":1}" },
    { id: "44", name: "Software Tema", category: "Software", isPremium: true, previewUrl: "/test-software", config: "{\"tier\":1}" },
    { id: "45", name: "Tuning V2 Tema", category: "Tuning", isPremium: false, previewUrl: "/test-tuning-v2", config: "{\"tier\":2}" },
    { id: "46", name: "Viptransfer V2 Tema", category: "Viptransfer", isPremium: false, previewUrl: "/test-viptransfer-v2", config: "{\"tier\":2}" },
    { id: "47", name: "Yacht Tema", category: "Yacht", isPremium: true, previewUrl: "/test-yacht", config: "{\"tier\":1}" },
    { id: "48", name: "Yacht V2 Tema", category: "Yacht", isPremium: false, previewUrl: "/test-yacht-v2", config: "{\"tier\":2}" },
    { id: "49", name: "Tattoo V3 Tema", category: "Tattoo", isPremium: true, previewUrl: "/test-tattoo-v3", config: "{\"tier\":3}" },
    { id: "50", name: "Tattoo V4 Tema (Boutique)", category: "Tattoo", isPremium: true, previewUrl: "/test-tattoo-v4", config: "{\"tier\":3}" }
  ];

  const displayThemes = initialThemes.length > 0 ? initialThemes : DEFAULT_THEMES;

  const filteredThemes = displayThemes.filter(t => {
    const config = t.config ? JSON.parse(t.config) : { tier: 1 };
    return config.tier === activeTier;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 border-b border-white/5 pb-4 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => {
            router.push("/studio/library?tab=themes");
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            currentTab === "themes" ? "bg-white text-black font-medium" : "text-gray-400 hover:text-white"
          }`}
        >
          <LayoutTemplate className="w-4 h-4" />
          Temalar
        </button>
        <button
          onClick={() => {
            router.push("/studio/library?tab=components");
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            currentTab === "components" ? "bg-white text-black font-medium" : "text-gray-400 hover:text-white"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          UI Bileşenleri
        </button>
      </div>

      {currentTab === "themes" && (
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTier(1)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTier === 1 
                ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30" 
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            Tier 1 - Luxury
          </button>
          <button
            onClick={() => setActiveTier(2)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTier === 2 
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            Tier 2 - Standart V2
          </button>
          <button
            onClick={() => setActiveTier(3)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTier === 3 
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" 
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            Tier 3 - Premium V3/V4
          </button>
        </div>
      )}

      <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder={`${currentTab === 'themes' ? 'Tema' : 'Bileşen'} ara...`} 
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all"
              />
            </div>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
            <Plus className="w-4 h-4" />
            {currentTab === 'themes' ? 'Yeni Tema' : 'Yeni Bileşen'}
          </button>
        </div>

        {currentTab === "themes" && (
          filteredThemes.length === 0 ? (
            <EmptyState 
              icon={<Palette className="w-8 h-8 text-white/20" />}
              message={`Bu kategoride henüz ${activeTier === 1 ? 'Luxury' : 'Standart'} tema bulunmuyor.`}
            />
          ) : (
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredThemes.map((theme) => (
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                  key={theme.id} 
                  className="group rounded-2xl bg-[#111] border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all relative"
                >
                  {isDeleting === theme.id && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                  <div className="relative aspect-video bg-[#1A1A1A] rounded-t-xl overflow-hidden group">
                    {getThemeImage(theme) ? (
                      <img src={getThemeImage(theme)} alt={theme.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                        <Palette className="w-12 h-12 text-white/10 mb-2" />
                        <span className="text-white/20 text-xs">Görsel Yok</span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                      <button 
                        onClick={() => window.open(getPreviewUrl(theme), '_blank')}
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                        title="Önizle"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => alert(`${theme.name} teması projenize kopyalandı! (Demo)`)}
                        className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                        title="Kullan / Kopyala"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteTheme(theme.id)} 
                        className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center hover:scale-105 hover:bg-red-500/40 transition-all shadow-lg"
                        title="Sil"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-white font-medium truncate">{theme.name}</h3>
                      {theme.isPremium && (
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">PRO</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{categoryTranslations[theme.category] || theme.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )
        )}

        {currentTab === "components" && (
          initialComponents.length === 0 ? (
            <EmptyState icon={<Blocks className="w-8 h-8 text-white/20" />} message="Henüz UI bileşeni bulunmuyor." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {initialComponents.map((comp) => (
                  <div key={comp.id} className="p-4 rounded-xl bg-[#111] border border-white/5 hover:bg-[#151515] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3 border border-purple-500/20">
                      <Blocks className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-medium">{comp.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{comp.type}</p>
                  </div>
               ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function EmptyState({ icon, message }: { icon: React.ReactNode, message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 rounded-2xl bg-[#111]">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-2">Kayıt Bulunamadı</h3>
      <p className="text-gray-400 max-w-sm mb-6">{message}</p>
    </div>
  );
}
