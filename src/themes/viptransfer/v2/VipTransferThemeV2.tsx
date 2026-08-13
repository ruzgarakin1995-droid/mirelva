'use client';

import React from 'react';
import './viptransfer.css';
import HeroSection from './sections/HeroSection';
import ReservationSection from './sections/ReservationSection';
import FleetSection from './sections/FleetSection';
import ChauffeursSection from './sections/ChauffeursSection';
import ServicesSection from './sections/ServicesSection';
import FlightTrackingSection from './sections/FlightTrackingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FeaturesSection from './sections/FeaturesSection';
import FAQSection from './sections/FAQSection';
import FooterSection from './sections/FooterSection';

export default function VipTransferThemeV2() {
  return (
    <div className="vip-theme-v2">
      <HeroSection />
      <ReservationSection />
      <FeaturesSection />
      <FleetSection />
      <ServicesSection />
      <FlightTrackingSection />
      <ChauffeursSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
