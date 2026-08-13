"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { RealEstateProperty } from '@/lib/mock-data/ecommerce/realestate';

interface RealEstateWishlistContextType {
  items: RealEstateProperty[];
  toggleWishlist: (property: RealEstateProperty) => void;
  isInWishlist: (propertyId: string) => boolean;
  wishlistCount: number;
}

const RealEstateWishlistContext = createContext<RealEstateWishlistContextType | undefined>(undefined);

export function RealEstateWishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RealEstateProperty[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('aura_estates_wishlist');
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('aura_estates_wishlist', JSON.stringify(items));
    }
  }, [items, isMounted]);

  const toggleWishlist = (property: RealEstateProperty) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === property.id);
      if (exists) {
        return prev.filter(item => item.id !== property.id);
      }
      return [...prev, property];
    });
  };

  const isInWishlist = (propertyId: string) => {
    return items.some(item => item.id === propertyId);
  };

  return (
    <RealEstateWishlistContext.Provider value={{
      items,
      toggleWishlist,
      isInWishlist,
      wishlistCount: items.length
    }}>
      {children}
    </RealEstateWishlistContext.Provider>
  );
}

export function useRealEstateWishlist() {
  const context = useContext(RealEstateWishlistContext);
  if (context === undefined) {
    throw new Error('useRealEstateWishlist must be used within a RealEstateWishlistProvider');
  }
  return context;
}
