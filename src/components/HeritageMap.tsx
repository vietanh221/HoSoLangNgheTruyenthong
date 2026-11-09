import React from 'react';
import { CraftVillage } from '../types/craft';
import { MapPin, Navigation, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeritageMapProps {
  villages: CraftVillage[];
  selectedVillageId: string;
  onSelectVillage: (villageId: string) => void;
}

export const HeritageMap: React.FC<HeritageMapProps> = ({
  villages,
  selectedVillageId,
  onSelectVillage,
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7DFD3] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C271E]">
            <span>Không gian địa lý di sản</span>
            <span>·</span>
            <span>Bản đồ số</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#24211E]">
            Mạng lưới làng nghề truyền thống Bắc Bộ
          </h2>
          <p className="mt-1 text-sm text-[#5C5348]">
            Hành trình kết nối các di sản văn hóa phi vật thể dọc các lưu vực sông Hồng, sông Đuống và sông Nhuệ.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#5C5348] bg-white px-3 py-2 rounded-lg border border-[#E0D7C9]">
          <Compass className="w-4 h-4 text-[#8C271E]" />
          <span>Hệ tọa độ định vị số di sản</span>
        </div>
      </div>

      {/* Interactive Map Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Visual Map Representation */}
        <div className="lg:col-span-7 bg-[#F4EFEA] rounded-xl border border-[#DECDB8] p-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#8C271E_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Map Top Bar */}
          <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-xs p-3 rounded-lg border border-[#DDD3C3] text-xs">
            <span className="font-serif font-bold text-[#24211E]">Bản đồ địa văn hóa di sản</span>
            <span className="text-[#857969]">Vùng châu thổ sông Hồng</span>
          </div>

          {/* Interactive Map Points */}
          <div className="relative z-10 my-8 space-y-4">
            {villages.map((v) => {
              const isSelected = v.id === selectedVillageId;
              return (
                <div
                  key={v.id}
                  onClick={() => onSelectVillage(v.id)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#8C271E] shadow-md ring-2 ring-[#8C271E]/10 translate-x-2'
                      : 'bg-white/80 hover:bg-white border-[#E4DACD] hover:border-[#8C271E]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#8C271E] text-white' : 'bg-[#EFEAE2] text-[#8C271E]'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#24211E]">
                          {v.name}
                        </h4>
                        <p className="text-xs text-[#857969] line-clamp-1">
                          {v.locationAddress}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono text-[#8C271E] block">
                        {v.coordinates.lat.toFixed(4)}°N, {v.coordinates.lng.toFixed(4)}°E
                      </span>
                      <span className="text-[10px] text-[#2F6B38] font-medium flex items-center gap-1 justify-end">
                        <ShieldCheck className="w-3 h-3" />
                        {v.metrics.consentedCount} nghệ nhân công bố
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Footer Note */}
          <div className="relative z-10 text-[11px] text-[#7A6F60] flex items-center justify-between pt-2 border-t border-[#E5DACD]">
            <span>Số hóa tọa độ WGS84 phục vụ nghiên cứu & du lịch</span>
            <span>Hệ thống hồ sơ F01</span>
          </div>
        </div>

        {/* Selected Village Detail Card */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-[#E2D8C9] p-6 shadow-xs space-y-5">
          {(() => {
            const current = villages.find((v) => v.id === selectedVillageId) || villages[0];
            return (
              <>
                <div className="aspect-16/10 rounded-lg overflow-hidden border border-[#E7DFD3] relative">
                  <img
                    src={current.coverImage}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded backdrop-blur-xs">
                    {current.province}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C271E]">
                    {current.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#24211E] mt-1">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#5C5348] mt-2 leading-relaxed">
                    {current.briefDescription}
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#EBE3D6] space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#857969]">Địa chỉ hành chính:</span>
                    <span className="font-medium text-[#24211E] text-right max-w-[60%]">{current.locationAddress}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                    <span className="text-[#857969]">Lễ hội truyền thống:</span>
                    <span className="font-medium text-[#24211E]">{current.festival.dateLunar}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#857969]">Tổ nghề tôn xưng:</span>
                    <span className="font-medium text-[#24211E]">{current.patronSaint}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectVillage(current.id)}
                    className="w-full py-2.5 px-4 text-xs font-semibold rounded bg-[#8C271E] text-white hover:bg-[#731E17] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Mở toàn bộ hồ sơ làng nghề</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
