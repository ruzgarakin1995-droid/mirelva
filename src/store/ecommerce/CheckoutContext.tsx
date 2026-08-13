"use client";

import React, { createContext, useContext, useState } from 'react';

type CheckoutStep = 'CART' | 'INFORMATION' | 'SHIPPING' | 'PAYMENT' | 'SUCCESS';

interface CheckoutData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
  shippingMethod: string;
  paymentMethod: string;
}

interface CheckoutContextType {
  currentStep: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
  checkoutData: CheckoutData;
  updateData: (data: Partial<CheckoutData>) => void;
  placeOrder: () => Promise<string>; // Returns order ID
}

const defaultData: CheckoutData = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: 'Türkiye',
  postalCode: '',
  phone: '',
  shippingMethod: 'standard',
  paymentMethod: 'credit_card'
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setStep] = useState<CheckoutStep>('INFORMATION');
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(defaultData);

  const updateData = (data: Partial<CheckoutData>) => {
    setCheckoutData(prev => ({ ...prev, ...data }));
  };

  const placeOrder = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate fake order ID
    const orderId = `YZLK-${Math.floor(100000 + Math.random() * 900000)}`;
    
    setStep('SUCCESS');
    return orderId;
  };

  return (
    <CheckoutContext.Provider value={{
      currentStep,
      setStep,
      checkoutData,
      updateData,
      placeOrder
    }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
