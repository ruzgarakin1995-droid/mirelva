"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Settings = {
  storeName: string;
  phone: string;
  whatsapp: string;
  address: string;
  email: string;
  instagram: string;
  workingHours: string;
};

type SettingsContextType = {
  settings: Settings | null;
  loading: boolean;
};

const SettingsContext = createContext<SettingsContextType>({ settings: null, loading: true });

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/store/settings')
      .then(res => res.json())
      .then(data => {
        setSettings(data);
      })
      .catch(err => console.error("Error fetching settings:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
