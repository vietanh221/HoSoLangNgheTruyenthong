import React from 'react';
import { CraftVillage } from '../types/craft';
import { MapPin, Sparkles } from 'lucide-react';

interface VillageSwitcherProps {
  villages: CraftVillage[];
  selectedVillageId: string;
  onSelectVillage: (villageId: string) => void;
}

export const VillageSwitcher: React.FC<VillageSwitcherProps> = ({
  villages,
  selectedVillageId,
  onSelectVillage,
}) => {
  return (
    <div className="border-b border-[#E7DFD3] bg-[#F4EFEA]/80 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-[#786D5F] uppercase tracking-wider shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#8C271E]" />
          <span>Chọn hồ sơ làng nghề:</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {villages.map((village) => {
            const isSelected = village.id === selectedVillageId;
            return (
              <button
                key={village.id}
                onClick={() => onSelectVillage(village.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#8C271E] text-white shadow-xs'
                    : 'bg-white/70 hover:bg-white text-[#4A4237] border border-[#DDD4C5]'
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? 'text-amber-200' : 'text-[#8C271E]'}`} />
                <span>{village.name}</span>
                <span className={`text-[10px] ${isSelected ? 'text-amber-200/90' : 'text-[#857969]'}`}>
                  ({village.province})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
