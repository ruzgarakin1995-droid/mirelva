"use client";

import React from 'react';
import TopAnnouncement from './sections/TopAnnouncement';
import Header from './sections/Header';
import Hero from './sections/Hero';
import FeaturedCategories from './sections/FeaturedCategories';
import TrendingProducts from './sections/TrendingProducts';
import CampaignBanner from './sections/CampaignBanner';
import NewArrivals from './sections/NewArrivals';
import Lookbook from './sections/Lookbook';
import DealOfTheDay from './sections/DealOfTheDay';
import PremiumServices from './sections/PremiumServices';
import CustomerReviews from './sections/CustomerReviews';
import BrandLogos from './sections/BrandLogos';
import Newsletter from './sections/Newsletter';
import StoreLocator from './sections/StoreLocator';
import Footer from './sections/Footer';

export const EcommerceTheme = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <TopAnnouncement />
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <TrendingProducts />
        <CampaignBanner />
        <NewArrivals />
        <Lookbook />
        <DealOfTheDay />
        <PremiumServices />
        <CustomerReviews />
        <BrandLogos />
        <Newsletter />
        <StoreLocator />
      </main>
      <Footer />
    </div>
  );
};

export default EcommerceTheme;

