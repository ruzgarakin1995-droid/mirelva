import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  count?: number;
  size?: number;
  showText?: boolean;
}

export function Rating({ rating, count, size = 16, showText = true }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-400">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" strokeWidth={1} />
        ))}
        {hasHalfStar && (
           // Rough half star using gradient (in real app we might use half icon or clip-path)
          <div style={{ position: 'relative', width: size, height: size }}>
             <Star size={size} className="text-gray-300 absolute" strokeWidth={1} />
             <div style={{ width: '50%', overflow: 'hidden', position: 'absolute' }}>
               <Star size={size} fill="currentColor" strokeWidth={1} />
             </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-gray-300" strokeWidth={1} />
        ))}
      </div>
      {showText && (
        <span className="text-sm text-gray-500 font-medium">
          {rating.toFixed(1)} {count !== undefined && `(${count})`}
        </span>
      )}
    </div>
  );
}
