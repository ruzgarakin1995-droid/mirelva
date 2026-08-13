import React from 'react';
import { DentistHero } from '@/themes/dentist/components/DentistHero';
import { Philosophy } from '@/themes/dentist/components/Philosophy';
import { Process } from '@/themes/dentist/components/Process';
import { Services } from '@/themes/dentist/components/Services';
import { Doctors } from '@/themes/dentist/components/Doctors';
import { Technology } from '@/themes/dentist/components/Technology';
import { BeforeAfter } from '@/themes/dentist/components/BeforeAfter';
import { ClinicGallery } from '@/themes/dentist/components/ClinicGallery';
import { Testimonials } from '@/themes/dentist/components/Testimonials';
import { BookingCTA } from '@/themes/dentist/components/BookingCTA';

export default function DentistHomePage() {
  return (
    <>
      <DentistHero />
      <Philosophy />
      <Process />
      <Services limit={6} />
      <BeforeAfter />
      <Technology />
      <Doctors limit={2} />
      <ClinicGallery />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
