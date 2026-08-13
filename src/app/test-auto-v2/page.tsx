import React from 'react';
import AutoThemeV2 from '@/themes/auto/v2/AutoThemeV2';

export default function TestAutoV2Page() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <AutoThemeV2 />
    </main>
  );
}
