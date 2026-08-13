export type DepthLayer = 'background' | 'midground' | 'foreground';

export interface FlowerConfig {
  id: string;
  image: string;
  depth: DepthLayer;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  floatDuration: number;
  delay: number;
  yRange: [number, number];
  xRange: [number, number];
  rotateRange: [number, number];
  scaleRange: [number, number];
  className?: string; // For responsive Tailwind classes (e.g., hidden md:block)
}

const images = [
  '/images/agency-flower/indir.webp',     // 0: Red Dahlia (Cut on Left)
  '/images/agency-flower/indir (1).webp', // 1: Purple Tulip (No cuts)
  '/images/agency-flower/indir (2).webp', // 2: Blue Delphinium (Tall)
  '/images/agency-flower/indir (3).webp', // 3: Green Leaves (Cut on Right)
  '/images/agency-flower/indir (4).webp', // 4: Red Amaryllis (Cut on Left & Bottom)
  '/images/agency-flower/indir (5).webp', // 5: Blue Hydrangea (Round)
  '/images/agency-flower/indir (6).webp', // 6: Pink Peony
  '/images/agency-flower/indir (7).webp', // 7: Purple Iris (Cut on Right)
  '/images/agency-flower/indir (8).webp', // 8: Pink Protea
  '/images/agency-flower/indir (9).webp', // 9: Orange Calla Lily (Cut on Bottom)
  '/images/agency-flower/indir (10).webp',// 10: Huge White Peony
  '/images/agency-flower/indir (11).webp' // 11: Yellow Tulip
];

// STRICT ANIMATION RANGES (Avoid breaking layout or safe zone)
const MOVEMENT = {
  X: [-8, 8] as [number, number],
  Y: [-10, 10] as [number, number],
  R: [-1.5, 1.5] as [number, number],
  S: [1, 1.02] as [number, number],
};

export const flowerInstances: FlowerConfig[] = [
  // ==================================================
  // 1. SOL TARAF (LEFT SIDE)
  // ==================================================
  
  // SOL ÜST: Büyük kırmızı çiçek (Red Dahlia)
  { 
    id: 'tl-red-dahlia', 
    image: images[0], 
    depth: 'background', // 10
    top: '-5%', 
    left: '-5%', // Cut on left, so pushing it slightly out to hide the cut
    width: 'clamp(140px, 28vw, 420px)', // Reduced min for tablet
    className: 'hidden lg:block',
    floatDuration: 12, delay: 0.2, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S
  },
  
  // SOL ÜST / ORTA: Büyük mor/lila lale (Purple Tulip)
  { 
    id: 'lm-purple-tulip', 
    image: images[1], 
    depth: 'midground', // 20
    top: '32%', 
    left: '-6%', 
    width: 'clamp(120px, 22vw, 360px)', 
    className: 'hidden md:block',
    floatDuration: 14, delay: 1.1, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SOL ORTA: Küçük/orta mor çiçek (Purple Iris) - Boşluk doldurucu
  { 
    id: 'ml-purple-iris', 
    image: images[7], 
    depth: 'background', // 10
    bottom: '15%', 
    left: '-2%', 
    // It has a cut on the RIGHT, so we tuck its right edge behind the White Peony!
    width: 'clamp(100px, 20vw, 320px)', 
    className: 'hidden md:block',
    floatDuration: 11, delay: 1.2, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SOL ALT: Büyük beyaz çiçek (White Peony)
  { 
    id: 'bl-white-peony', 
    image: images[10], 
    depth: 'foreground', // 30
    bottom: '-12%', 
    left: '-8%', 
    width: 'clamp(180px, 35vw, 550px)', // Reduced min from 280px for mobile
    floatDuration: 9, delay: 0.8, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // ==================================================
  // 3. ALT KISIM (BEYAZ'DAN SONRA SOL->SAĞ)
  // ==================================================

  // SOL ALT / ORTA: Büyük mavi hydrangea
  { 
    id: 'bl-blue-hydrangea', 
    image: images[5], 
    depth: 'background', // 10 (Behind white peony)
    bottom: '-2%', 
    left: '18%', 
    width: 'clamp(100px, 25vw, 380px)', // Reduced min from 180px
    floatDuration: 10, delay: 0.5, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // ALT MERKEZ: Pembe Protea
  { 
    id: 'bc-pink-protea', 
    image: images[8], 
    depth: 'foreground', // 30
    bottom: '-8%', 
    left: '38%', 
    width: 'clamp(90px, 22vw, 300px)', // Reduced min from 150px
    floatDuration: 8.5, delay: 2.4, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // ALT MERKEZ SAĞ: Pembe Şakayık (Arkada)
  { 
    id: 'bc-pink-peony', 
    image: images[6], 
    depth: 'background', // 10
    bottom: '2%', 
    left: '52%', 
    width: 'clamp(80px, 20vw, 280px)', 
    className: 'hidden md:block',
    floatDuration: 13, delay: 1.8, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SAĞ ALT / ORTA: Turuncu calla lily (Geçiş çiçeği)
  { 
    id: 'rb-orange-lily', 
    image: images[9], 
    depth: 'midground', // 20
    bottom: '-12%', 
    right: '40%', 
    width: 'clamp(100px, 24vw, 340px)', // Reduced min from 160px
    floatDuration: 9.5, delay: 2.1, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SAĞ ALT: Büyük sarı çiçek (Yellow Tulip)
  { 
    id: 'rb-yellow-tulip', 
    image: images[11], 
    depth: 'foreground', // 30
    bottom: '-6%', 
    right: '25%', 
    width: 'clamp(100px, 22vw, 320px)', 
    className: 'hidden sm:block',
    floatDuration: 10, delay: 1.5, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // ==================================================
  // 2. SAĞ TARAF (RIGHT SIDE)
  // ==================================================
  
  // SAĞ ORTA / ALT: Büyük kırmızı çiçek (Red Amaryllis)
  { 
    id: 'rb-red-amaryllis', 
    image: images[4], 
    depth: 'midground', // 20
    bottom: '-8%', 
    right: '-5%', 
    width: 'clamp(140px, 28vw, 450px)', // Reduced min from 200px
    floatDuration: 11, delay: 3.0, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SAĞ ORTA: Yeşil yapraklı çiçek/gövde (Secondary layer)
  { 
    id: 'rm-green-leaves', 
    image: images[3], 
    depth: 'background', // 10
    bottom: '12%', 
    right: '-5%', // Cut on right, so tuck it out slightly
    width: 'clamp(80px, 15vw, 220px)', 
    className: 'hidden md:block',
    floatDuration: 14, delay: 2.7, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  },

  // SAĞ ÜST / ORTA: Büyük mavi çiçek grubu (Blue Delphinium)
  { 
    id: 'rt-blue-delphinium', 
    image: images[2], 
    depth: 'background', // 10
    top: '12%', 
    right: '-10%', 
    width: 'clamp(140px, 28vw, 450px)', 
    className: 'hidden lg:block',
    floatDuration: 15, delay: 3.3, yRange: MOVEMENT.Y, xRange: MOVEMENT.X, rotateRange: MOVEMENT.R, scaleRange: MOVEMENT.S 
  }
];
