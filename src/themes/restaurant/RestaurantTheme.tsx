"use client";
import React from 'react';
import './restaurant.css';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Concept from './sections/Concept';
import ChefStory from './sections/ChefStory';
import SignatureDishes from './sections/SignatureDishes';
import Menu from './sections/Menu';
import WineList from './sections/WineList';
import PrivateDining from './sections/PrivateDining';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Location from './sections/Location';
import Footer from './sections/Footer';

export default function RestaurantTheme({ clientData }: { clientData?: any }) {
  return (
    <div className="bg-black min-h-screen text-gray-100 selection:bg-gold selection:text-black">
      <Header />
      <main>
        <Hero />
        <Concept />
        <ChefStory />
        <SignatureDishes />
        <Menu />
        <WineList />
        <PrivateDining />
        <Events />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

