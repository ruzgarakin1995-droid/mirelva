import React from "react";
import { getThemes, getComponents } from "@/actions/library";
import LibraryClient from "./LibraryClient";

export const dynamic = "force-dynamic";

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; type?: string; tab?: string }>;
}) {
  const { category = "ALL", type = "ALL", tab = "themes" } = await searchParams;
  const currentTab = tab; // 'themes' or 'components'

  const [themesResult, componentsResult] = await Promise.all([
    getThemes(category),
    getComponents(type)
  ]);

  const themes = themesResult.success ? themesResult.data : [];
  const components = componentsResult.success ? componentsResult.data : [];

  return (
    <div className="flex flex-col h-full space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">Kütüphane</h1>
        <p className="mt-1 text-sm text-gray-400">Tüm temalar ve UI bileşenleri.</p>
      </div>
      
      <LibraryClient 
        initialThemes={themes || []} 
        initialComponents={components || []} 
        currentTab={currentTab} 
      />
    </div>
  );
}
