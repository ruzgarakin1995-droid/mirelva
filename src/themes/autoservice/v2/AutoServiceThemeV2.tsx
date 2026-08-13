import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { BeforeAfter } from './sections/BeforeAfter';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export function AutoServiceThemeV2() {
  return (
    <main className="relative min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
