"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Koleksiyon", href: "#collection" },
  { name: "Markalar", href: "#brands" },
  { name: "Hizmetler", href: "#services" },
  { name: "Hakkımızda", href: "#about" },
  { name: "İletişim", href: "#contact" },
];

export function Navbar({ onTestDriveClick }: { onTestDriveClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-600 rounded-sm flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 border-2 border-black transform -rotate-45" />
          </div>
          <span className="text-2xl font-bold tracking-widest text-white uppercase">Aero<span className="text-gray-500">Motors</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-[0.2em] uppercase">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button onClick={onTestDriveClick} className="group relative px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider overflow-hidden rounded-sm">
            <span className="relative z-10 flex items-center gap-2">
              Test Sürüşü
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-white uppercase tracking-wider py-2">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

