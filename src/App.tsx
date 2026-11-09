import React, { useState, useEffect } from 'react';
import { CraftVillage, Artisan, CraftProduct } from './types/craft';
import { INITIAL_CRAFT_VILLAGES, INITIAL_ARTISANS } from './data/craftVillagesData';
import { Navbar } from './components/Navbar';
import { VillageSwitcher } from './components/VillageSwitcher';
import { VillageOverview } from './components/VillageOverview';
import { ProductionProcessViewer } from './components/ProductionProcessViewer';
import { ArtisansDirectory } from './components/ArtisansDirectory';
import { ProductsShowcase } from './components/ProductsShowcase';
import { HeritageMap } from './components/HeritageMap';
import { ReportModal } from './components/ReportModal';
import { Footer } from './components/Footer';

export default function App() {
  const [villages] = useState<CraftVillage[]>(INITIAL_CRAFT_VILLAGES);
  const [selectedVillageId, setSelectedVillageId] = useState<string>('bat-trang');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Persistent Artisans list (includes pre-seeded + user-added with consent)
  const [artisans, setArtisans] = useState<Artisan[]>(() => {
    try {
      const saved = localStorage.getItem('craft_artisans_f01');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_ARTISANS;
  });

  // Keep all products available
  const allProducts: CraftProduct[] = villages.flatMap((v) => v.products);

  const currentVillage = villages.find((v) => v.id === selectedVillageId) || villages[0];

  const handleAddArtisan = (newArtisan: Artisan) => {
    setArtisans((prev) => {
      const updated = [newArtisan, ...prev];
      try {
        localStorage.setItem('craft_artisans_f01', JSON.stringify(updated));
      } catch (err) {
        console.error('Error saving artisans to localStorage:', err);
      }
      return updated;
    });
  };

  const handleSelectVillage = (id: string) => {
    setSelectedVillageId(id);
  };

  // Scroll to top on tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24211E]">
      {/* Top Bar following 3-zone contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Craft Village Switcher */}
      <VillageSwitcher
        villages={villages}
        selectedVillageId={selectedVillageId}
        onSelectVillage={handleSelectVillage}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {activeTab === 'overview' && (
          <VillageOverview
            village={currentVillage}
            onNavigateTab={handleTabChange}
          />
        )}

        {activeTab === 'process' && (
          <ProductionProcessViewer village={currentVillage} />
        )}

        {activeTab === 'artisans' && (
          <ArtisansDirectory
            artisans={artisans}
            villages={villages}
            selectedVillageId={selectedVillageId}
            onAddArtisan={handleAddArtisan}
          />
        )}

        {activeTab === 'products' && (
          <ProductsShowcase
            products={allProducts}
            villages={villages}
            selectedVillageId={selectedVillageId}
          />
        )}

        {activeTab === 'map' && (
          <HeritageMap
            villages={villages}
            selectedVillageId={selectedVillageId}
            onSelectVillage={(id) => {
              setSelectedVillageId(id);
              setActiveTab('overview');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onOpenReport={() => setIsReportOpen(true)} />

      {/* Project Dossier & Evaluation Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}
