"use client";

import React, { useState } from "react";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { FeaturedCars } from "./sections/FeaturedCars";
import { Stats } from "./sections/Stats";
import { Brands } from "./sections/Brands";
import { Showroom } from "./sections/Showroom";
import { Services } from "./sections/Services";
import { Financing } from "./sections/Financing";
import { Process } from "./sections/Process";
import { Reviews } from "./sections/Reviews";
import { AboutUs } from "./sections/AboutUs";
import { FAQ } from "./sections/FAQ";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { TestDriveModal } from "./components/TestDriveModal";

export default function AutoTheme({ clientData }: { clientData?: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-700 selection:text-white scroll-smooth">
      <Navbar onTestDriveClick={handleOpenModal} />
      
      <main>
        {/* Hero Section */}
        <Hero onTestDriveClick={handleOpenModal} />
        
        {/* Featured Collection */}
        <FeaturedCars />
        
        {/* Key Statistics */}
        <Stats />
        
        {/* Partner Brands */}
        <Brands />
        
        {/* Showroom Experience */}
        <Showroom />
        
        {/* Our Process */}
        <Process />
        
        {/* Premium Services */}
        <Services />
        
        {/* Tailored Financing */}
        <Financing />
        
        {/* Legacy & History */}
        <AboutUs />
        
        {/* Client Testimonials */}
        <Reviews />
        
        {/* Common Questions */}
        <FAQ />
        
        {/* Direct Contact */}
        <Contact />
      </main>
      
      <Footer />

      {/* Modals */}
      <TestDriveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

