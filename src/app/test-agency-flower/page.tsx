import React from 'react';
import { AgencyFlowerHero } from '@/themes/agency-flower/components/AgencyFlowerHero';

export default function TestAgencyFlowerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* We are only implementing the Hero section for now to showcase the floral animation system */}
      <AgencyFlowerHero />
      
      {/* Placeholder content below to test scroll parallax */}
      <section className="py-32 bg-zinc-50 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h2 className="text-3xl font-light text-zinc-900 mb-6">Scroll Test Section</h2>
          <p className="text-zinc-500 leading-relaxed">
            This section exists to test the scroll parallax effect on the flowers in the hero section above. 
            Scroll up and down to observe how the background, midground, and foreground flowers react at different speeds.
          </p>
        </div>
      </section>
      <section className="py-32 bg-white flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h2 className="text-3xl font-light text-zinc-900 mb-6">Bottom Section</h2>
          <p className="text-zinc-500 leading-relaxed">
            Keep scrolling. Notice how the hero section flowers might slightly translate upwards as you scroll away from them, giving a 3D depth effect.
          </p>
        </div>
      </section>
    </main>
  );
}
