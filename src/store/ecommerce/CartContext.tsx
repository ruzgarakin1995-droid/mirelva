"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, EcommerceProduct, ProductVariant } from '@/types/ecommerce';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: EcommerceProduct, quantity: number, selectedVariants?: Record<string, ProductVariant>) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('yazlik_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from local storage", e);
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('yazlik_cart', JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addToCart = (product: EcommerceProduct, quantity: number, selectedVariants?: Record<string, ProductVariant>) => {
    setItems(prev => {
      // Check if product with exact same variants is already in cart
      const variantString = selectedVariants ? JSON.stringify(selectedVariants) : '';
      const existingItemIndex = prev.findIndex(
        item => item.product.id === product.id && (item.selectedVariants ? JSON.stringify(item.selectedVariants) : '') === variantString
      );

      if (existingItemIndex > -1) {
        // Update quantity
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      // Add new item
      const newItem: CartItem = {
        cartItemId: `${product.id}-${Date.now()}`,
        product,
        quantity,
        selectedVariants
      };
      return [...prev, newItem];
    });
    
    // Automatically open cart when adding
    setCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems(prev => prev.map(item => 
      item.cartItemId === cartItemId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate subtotal taking variant overrides or discount prices into account
  const subtotal = items.reduce((total, item) => {
    let itemPrice = item.product.price;
    // If a selected variant has an overridden price, we might use that. For simplicity, we just use base price or variant price if defined differently in your model.
    return total + (itemPrice * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      subtotal,
      isCartOpen,
      setCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
