"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { EcommerceProduct } from '@/types/ecommerce';

interface WishlistContextType {
  items: EcommerceProduct[];
  toggleWishlist: (product: EcommerceProduct) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<EcommerceProduct[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('yazlik_wishlist');
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('yazlik_wishlist', JSON.stringify(items));
    }
  }, [items, isMounted]);

  const toggleWishlist = (product: EcommerceProduct) => {
    setItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{
      items,
      toggleWishlist,
      isInWishlist,
      wishlistCount: items.length
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
