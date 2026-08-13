"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Palette, 
  Droplet, 
  Type, 
  Blocks, 
  Wand2, 
  Eye, 
  Download,
  ChevronRight,
  ChevronLeft,
  CheckCircle2
} from "lucide-react";

// Types
type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  { id: 1, title: "Sektör", description: "Projenizin alanını belirleyin", icon: <Building2 className="w-5 h-5" /> },
  { id: 2, title: "Tema", description: "Genel görünümü seçin", icon: <Palette className="w-5 h-5" /> },
  { id: 3, title: "Renk", description: "Marka renklerinizi ayarlayın", icon: <Droplet className="w-5 h-5" /> },
  { id: 4, title: "Font", description: "Tipografiyi belirleyin", icon: <Type className="w-5 h-5" /> },
  { id: 5, title: "Modüller", description: "İhtiyacınız olan özellikleri ekleyin", icon: <Blocks className="w-5 h-5" /> },
  { id: 6, title: "AI İçerik", description: "Yapay zeka ile içerik üretin", icon: <Wand2 className="w-5 h-5" /> },
  { id: 7, title: "Preview", description: "Sonucu önizleyin", icon: <Eye className="w-5 h-5" /> },
  { id: 8, title: "Export", description: "Sitenizi yayınlayın veya indirin", icon: <Download className="w-5 h-5" /> },
];

const variants: any = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom sleek ease-out
    },
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    };
  },
};

export default function WizardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for back

  const handleNext = () => {
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-indigo-500/30">
      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 md:px-8 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Wand2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-medium tracking-tight">Locizsa Studio</span>
        </div>
        <div className="text-sm text-gray-400 font-medium bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
          Adım {currentStep} / {steps.length}
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-10 lg:py-16">
        
        {/* Stepper Progress */}
        <div className="w-full max-w-4xl mb-12 lg:mb-16 hidden md:block">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/5 rounded-full" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-indigo-500 rounded-full transition-all duration-700 ease-out" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center gap-3 group">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 
                      ${isActive ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-110' : 
                        isCompleted ? 'bg-white/10 text-white' : 'bg-[#111111] text-gray-500 border border-white/5 group-hover:bg-[#1A1A1A]'}`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                  </div>
                  <div className={`absolute -bottom-8 w-max text-center transition-opacity duration-300 ${isActive || isCompleted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <span className={`text-xs font-medium ${isActive ? 'text-indigo-400' : isCompleted ? 'text-gray-300' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="w-full max-w-5xl flex-1 relative min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full absolute inset-0"
            >
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-4 text-white">
                  {steps[currentStep - 1].title}
                </h1>
                <p className="text-base md:text-lg text-gray-400">
                  {steps[currentStep - 1].description}
                </p>
              </div>

              {/* DUMMY CONTENT BASED ON STEP */}
              <div className="pb-24 md:pb-0">
                {currentStep === 1 && <SectorSelection />}
                {currentStep === 2 && <ThemeSelection />}
                {currentStep === 3 && <ColorSelection />}
                {currentStep === 4 && <FontSelection />}
                {currentStep === 5 && <ModuleSelection />}
                {currentStep === 6 && <AIContentSection />}
                {currentStep === 7 && <PreviewSection />}
                {currentStep === 8 && <ExportSection />}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      {/* Footer Navigation */}
      <footer className="fixed md:sticky bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 md:px-8 md:py-5 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300
            ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-95'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden md:inline">Geri</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-xl font-medium bg-white text-black hover:bg-gray-100 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          {currentStep === steps.length ? 'Tamamla' : 'Devam Et'}
          {currentStep !== steps.length && <ChevronRight className="w-5 h-5" />}
        </button>
      </footer>
    </div>
  );
}

// --- DUMMY COMPONENTS FOR STEPS ---

function SectorSelection() {
  const sectors = [
    { id: 'saas', name: 'Yazılım / SaaS', desc: 'Modern teknoloji şirketleri için', icon: '💻' },
    { id: 'ecom', name: 'E-Ticaret', desc: 'Online mağazalar ve ürün satışları', icon: '🛍️' },
    { id: 'agency', name: 'Ajans', desc: 'Kreatif ajanslar ve portfolyolar', icon: '✨' },
    { id: 'health', name: 'Sağlık', desc: 'Klinik ve sağlık hizmetleri', icon: '🏥' },
    { id: 'edu', name: 'Eğitim', desc: 'Kurs ve eğitim kurumları', icon: '📚' },
    { id: 'realestate', name: 'Emlak', desc: 'Gayrimenkul ve konut projeleri', icon: '🏢' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {sectors.map((sector) => (
        <div 
          key={sector.id}
          className="group relative p-6 md:p-8 rounded-[2rem] bg-[#111] border border-white/5 hover:border-indigo-500/50 hover:bg-[#131313] transition-all duration-500 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col gap-4">
            <span className="text-4xl md:text-5xl mb-2">{sector.icon}</span>
            <div>
              <h3 className="text-xl font-medium text-white mb-2">{sector.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{sector.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ThemeSelection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="group cursor-pointer">
          <div className="aspect-[16/10] rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden relative mb-4 group-hover:border-indigo-500/50 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
            {/* Dummy Skeleton for Theme */}
            <div className="absolute inset-x-0 top-0 h-12 border-b border-white/5 flex items-center px-6 gap-4">
              <div className="w-8 h-4 rounded-full bg-white/10" />
              <div className="flex-1" />
              <div className="w-12 h-2 rounded-full bg-white/5" />
              <div className="w-12 h-2 rounded-full bg-white/5" />
              <div className="w-16 h-6 rounded-full bg-indigo-500/20" />
            </div>
            <div className="p-8 pt-20 flex flex-col gap-4">
              <div className="w-3/4 h-12 rounded-2xl bg-white/10" />
              <div className="w-1/2 h-4 rounded-full bg-white/5" />
              <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 mt-4" />
            </div>
            <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/40 backdrop-blur-[0px] group-hover:backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
              <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100 px-8 py-3 bg-white text-black rounded-full font-medium">
                Bu Temayı Seç
              </div>
            </div>
          </div>
          <h3 className="text-lg font-medium text-white px-2">Kreatif Tema {i}</h3>
          <p className="text-sm text-gray-500 px-2 mt-1">Modern ve dinamik görünüm</p>
        </div>
      ))}
    </div>
  );
}

function ColorSelection() {
  const palettes = [
    { name: 'Okyanus Derinliği', desc: 'Güven veren mavi tonları', colors: ['#0f172a', '#3b82f6', '#60a5fa', '#eff6ff'] },
    { name: 'Kızıl Günbatımı', desc: 'Enerjik ve sıcak renkler', colors: ['#450a0a', '#ef4444', '#f87171', '#fef2f2'] },
    { name: 'Doğal Orman', desc: 'Huzur veren yeşil tonları', colors: ['#064e3b', '#10b981', '#34d399', '#ecfdf5'] },
    { name: 'Saf Minimalizm', desc: 'Sade ve profesyonel görünüm', colors: ['#000000', '#262626', '#737373', '#ffffff'] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {palettes.map((p, idx) => (
        <div key={idx} className="p-6 md:p-8 rounded-[2rem] bg-[#111] border border-white/5 hover:border-white/20 hover:bg-[#151515] transition-all duration-300 cursor-pointer group">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white">{p.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
          </div>
          <div className="flex gap-3">
            {p.colors.map((c, i) => (
              <div 
                key={i} 
                className="flex-1 aspect-[4/3] rounded-2xl shadow-inner border border-white/10 group-hover:-translate-y-1 transition-transform duration-500" 
                style={{ backgroundColor: c, transitionDelay: `${i * 75}ms` }} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FontSelection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {['Inter & Roboto', 'Playfair & Lora', 'Outfit & Plus Jakarta', 'Space Grotesk & IBM Plex'].map((font, idx) => (
        <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-[#111] border border-white/5 hover:border-indigo-500/50 hover:bg-[#131313] transition-all duration-500 cursor-pointer flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-serif">Ag</div>
          <div className="text-sm text-indigo-400 font-medium tracking-widest uppercase">{font}</div>
          <div className="text-3xl md:text-4xl font-semibold text-white">Locizsa Studio</div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Web sitenizin tipografisi markanızın sesidir. Bu kombinasyon ile profesyonel bir görünüm elde edin.
          </p>
        </div>
      ))}
    </div>
  );
}

function ModuleSelection() {
  const modules = [
    { title: 'Kahraman Alanı (Hero)', desc: 'Ana dikkat çekici banner ve harekete geçirici mesaj', isRequired: true },
    { title: 'Hizmetler', desc: 'Sunduğunuz hizmetlerin detaylı listesi', isRequired: false },
    { title: 'Hakkımızda', desc: 'Şirket misyonu ve vizyonu', isRequired: false },
    { title: 'İletişim Formu', desc: 'Müşteri talepleri için iletişim formu ve harita', isRequired: false },
    { title: 'Galeri', desc: 'Görsel portfolyo veya ürünler galerisi', isRequired: false },
    { title: 'SSS (Sıkça Sorulan Sorular)', desc: 'Müşterilerinizin sorularını önceden yanıtlayın', isRequired: false },
    { title: 'Referanslar', desc: 'Müşteri yorumları ve başarı hikayeleri', isRequired: false },
    { title: 'Blog', desc: 'SEO uyumlu makaleler ve duyurular', isRequired: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {modules.map((m, idx) => (
        <div key={idx} className="flex items-start gap-5 p-6 rounded-[2rem] bg-[#111] border border-white/5 hover:bg-[#151515] hover:border-white/10 transition-all cursor-pointer group">
          <div className={`w-6 h-6 rounded-md border flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors
            ${m.isRequired || idx % 3 === 0 ? 'bg-indigo-500 border-indigo-500' : 'border-white/20 group-hover:border-white/40'}`}>
            {(m.isRequired || idx % 3 === 0) && <CheckCircle2 className="w-4 h-4 text-white" />}
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 flex items-center gap-2">
              {m.title}
              {m.isRequired && <span className="text-[10px] uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">Zorunlu</span>}
            </h4>
            <p className="text-sm text-gray-500">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AIContentSection() {
  return (
    <div className="w-full">
      <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#111] to-[#151525] border border-indigo-500/20 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />

        <div className="flex-1 space-y-6 relative z-10 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto md:mx-0">
            <Wand2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Yapay Zeka İçeriğinizi Üretiyor</h3>
            <p className="text-gray-400 text-lg">
              Seçtiğiniz sektör ve modüllere göre size özel metinler, başlıklar ve açıklamalar hazırlanıyor. Bu işlem birkaç saniye sürebilir.
            </p>
          </div>
          <button className="px-8 py-3.5 bg-white text-black hover:bg-gray-100 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            İçerik Üretimini Başlat
          </button>
        </div>

        <div className="w-full md:w-[400px] space-y-4 relative z-10">
          <div className="h-14 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 flex items-center px-5 gap-4 animate-pulse">
             <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
             <div className="h-3 w-1/2 bg-white/10 rounded-full" />
          </div>
          <div className="h-14 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 flex items-center px-5 gap-4 animate-pulse delay-75">
             <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
             <div className="h-3 w-3/4 bg-white/10 rounded-full" />
          </div>
          <div className="h-14 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 flex items-center px-5 gap-4 animate-pulse delay-150">
             <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
             <div className="h-3 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}

function PreviewSection() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] bg-white overflow-hidden flex flex-col relative shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10">
      <div className="h-14 bg-gray-50 border-b border-gray-200 flex items-center px-6 gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white px-32 py-1.5 rounded-lg text-sm text-gray-500 border border-gray-200 flex items-center shadow-sm">
            yazlik-studio-preview.web.app
          </div>
        </div>
        <div className="w-16" /> {/* Spacer for centering */}
      </div>
      <div className="flex-1 bg-gray-100 flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-200">
            <Eye className="w-8 h-8 text-indigo-500" />
          </div>
          <p className="text-gray-500 font-medium">
            Site Önizlemesi Burada Yüklenecek
          </p>
        </div>
      </div>
    </div>
  );
}

function ExportSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-10 md:p-16 rounded-[2rem] bg-[#111] border border-white/5 text-center flex flex-col items-center gap-8 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 relative z-10">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Her Şey Hazır!</h2>
          <p className="text-gray-400 text-lg">
            Web siteniz başarıyla oluşturuldu. Şimdi kaynak kodunu indirebilir veya tek tıkla canlıya alabilirsiniz.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4 relative z-10">
          <button className="flex-1 py-4 bg-[#1A1A1A] hover:bg-[#222] text-white rounded-xl font-medium transition-all border border-white/10 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Kodu İndir
          </button>
          <button className="flex-1 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
            Yayına Al
          </button>
        </div>
      </div>
    </div>
  );
}
