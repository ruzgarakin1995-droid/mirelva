import React from "react";
import { getSettings, getApiKeys } from "@/actions/settings";
import SettingsClient from "./SettingsClient";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const [settingsResult, apiKeysResult] = await Promise.all([
    getSettings(),
    getApiKeys()
  ]);

  const settings = settingsResult.success ? settingsResult.data : {};
  const apiKeys = apiKeysResult.success ? apiKeysResult.data : [];

  return (
    <div className="flex flex-col h-full space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">Ayarlar</h1>
        <p className="mt-1 text-sm text-gray-400">Sistem yapılandırması ve entegrasyonlar.</p>
      </div>
      
      <SettingsClient 
        initialSettings={settings || []} 
        initialApiKeys={apiKeys || []} 
      />
    </div>
  );
}
