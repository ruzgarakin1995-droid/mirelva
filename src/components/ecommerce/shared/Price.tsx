import React from 'react';

interface PriceProps {
  amount: number;
  compareAt?: number;
  currency?: string;
  className?: string;
  compareAtClassName?: string;
}

export function Price({ amount, compareAt, currency = '₺', className = '', compareAtClassName = '' }: PriceProps) {
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {compareAt && compareAt > amount && (
        <span className={`line-through text-gray-400 ${compareAtClassName}`}>
          {formatPrice(compareAt)} {currency}
        </span>
      )}
      <span className={`font-semibold ${className}`}>
        {formatPrice(amount)} {currency}
      </span>
    </div>
  );
}
