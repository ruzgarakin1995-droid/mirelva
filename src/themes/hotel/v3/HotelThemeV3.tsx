"use client";

import { CinematicHero } from "./sections/CinematicHero";
import { BrandStory } from "./sections/BrandStory";
import { ResortExperience } from "./sections/ResortExperience";
import { SuiteShowcase } from "./sections/SuiteShowcase";
import { Gastronomy } from "./sections/Gastronomy";
import { Wellness } from "./sections/Wellness";
import { Experiences } from "./sections/Experiences";
import { InfiniteGallery } from "./sections/InfiniteGallery";
import { Amenities } from "./sections/Amenities";
import { Testimonials } from "./sections/Testimonials";
import { Location } from "./sections/Location";
import { Newsletter } from "./sections/Newsletter";
import { InstagramFeed } from "./sections/InstagramFeed";
import { Footer } from "./sections/Footer";
import { StickyBooking } from "./sections/StickyBooking";

export default function HotelThemeV3() {
  return (
    <main className="bg-zinc-900 font-sans selection:bg-[#F7E7CE] selection:text-zinc-900">
      <CinematicHero />
      <BrandStory />
      <ResortExperience />
      <SuiteShowcase />
      <Gastronomy />
      <Wellness />
      <Experiences />
      <InfiniteGallery />
      <Amenities />
      <Testimonials />
      <Location />
      <Newsletter />
      <InstagramFeed />
      <Footer />
      <StickyBooking />
    </main>
  );
}