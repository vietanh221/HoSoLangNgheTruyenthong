import React from 'react';
import { CraftVillage } from '../types/craft';
import { AudioNarrationPlayer } from './AudioNarrationPlayer';
import { 
  History, 
  MapPin, 
  Sparkles, 
  Users, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  Landmark,
  Layers,
  Award
} from 'lucide-react';

interface VillageOverviewProps {
  village: CraftVillage;
  onNavigateTab: (tab: string) => void;
}

export const VillageOverview: React.FC<VillageOverviewProps> = ({
  village,
  onNavigateTab,
}) => {
  return (
    <div className="space-y-10">
      {/* Hero Showcase Frame */}
      <section className="relative overflow-hidden rounded-xl border border-[#E2D8C9] bg-white shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Canvas */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px]">
            <img
              src={village.coverImage}
              alt={village.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-200">
                <span className="uppercase tracking-wider">{village.categoryLabel}</span>
                <span>·</span>
                <span>{village.establishedEra}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {village.name}
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{village.locationAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Info & Heritage Dossier */}
          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-[#FDFBF7]">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8C271E]">
                  Hồ Sơ Di Sản Quốc Gia
                </span>
                <h2 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-[#24211E]">
                  Tinh hoa di sản thủ công
                </h2>
                <div className="mt-2.5 flex items-center gap-2 text-xs text-[#5C5348] bg-[#F2EDE4] p-2.5 rounded border border-[#E3D9CC]">
                  <ShieldCheck className="w-4 h-4 text-[#8C271E] shrink-0" />
                  <span className="font-medium text-[#24211E]">{village.heritageStatus}</span>
                </div>
              </div>

              <p className="text-sm text-[#5C5348] leading-relaxed">
                {village.briefDescription}
              </p>

              <div className="border-t border-[#E7DFD3] pt-4 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#857969]">Tổ nghề tôn vinh:</span>
                  <span className="font-medium text-[#24211E] text-right">{village.patronSaint}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#857969]">Vùng địa lý:</span>
                  <span className="font-medium text-[#24211E]">{village.province}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                  <span className="text-[#857969]">Lễ hội truyền thống:</span>
                  <span className="font-medium text-[#24211E]">{village.festival.dateLunar}</span>
                </div>
              </div>
            </div>

            {/* Direct Navigation Buttons */}
            <div className="mt-6 pt-4 border-t border-[#E7DFD3] grid grid-cols-2 gap-2">
              <button
                onClick={() => onNavigateTab('process')}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded bg-[#8C271E] text-white hover:bg-[#731E17] transition-colors cursor-pointer"
              >
                <span>Quy trình kỹ thuật</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigateTab('artisans')}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded bg-[#F0EAE1] hover:bg-[#E5DDCF] text-[#332D26] transition-colors cursor-pointer"
              >
                <span>Danh bạ nghệ nhân</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Audio Narration Bar */}
        <div className="border-t border-[#E2D8C9] p-4 bg-[#F8F4EE]">
          <AudioNarrationPlayer narration={village.audioNarration} />
        </div>
      </section>

      {/* KPI & Metric Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-[#E5DDD0] shadow-xs">
          <div className="flex items-center justify-between text-[#857969] text-xs">
            <span>Nghệ nhân công bố</span>
            <Users className="w-4 h-4 text-[#8C271E]" />
          </div>
          <div className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-[#24211E] tabular-nums">
            {village.metrics.consentedCount}
            <span className="text-xs font-sans font-normal text-[#857969] ml-1">/ {village.metrics.artisanTotal} nghệ nhân</span>
          </div>
          <p className="mt-1 text-[11px] text-[#2F6B38] font-medium flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            100% đã ký văn bản đồng ý
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-[#E5DDD0] shadow-xs">
          <div className="flex items-center justify-between text-[#857969] text-xs">
            <span>Xưởng chế tác hoạt động</span>
            <Landmark className="w-4 h-4 text-[#C85A32]" />
          </div>
          <div className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-[#24211E] tabular-nums">
            {village.metrics.activeWorkshops}
            <span className="text-xs font-sans font-normal text-[#857969] ml-1">cơ sở</span>
          </div>
          <p className="mt-1 text-[11px] text-[#857969]">
            Lò thủ công & xưởng truyền thừa
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-[#E5DDD0] shadow-xs">
          <div className="flex items-center justify-between text-[#857969] text-xs">
            <span>Sản phẩm OCOP</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-[#24211E] tabular-nums">
            {village.metrics.ocopProductsCount}
            <span className="text-xs font-sans font-normal text-[#857969] ml-1">mặt hàng</span>
          </div>
          <p className="mt-1 text-[11px] text-[#857969]">
            Đạt chuẩn 4 - 5 sao quốc gia
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-[#E5DDD0] shadow-xs">
          <div className="flex items-center justify-between text-[#857969] text-xs">
            <span>Quy trình sản xuất</span>
            <Layers className="w-4 h-4 text-[#8C271E]" />
          </div>
          <div className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-[#24211E] tabular-nums">
            {village.productionProcess.length}
            <span className="text-xs font-sans font-normal text-[#857969] ml-1">bước chuẩn hóa</span>
          </div>
          <p className="mt-1 text-[11px] text-[#857969]">
            Kèm mẹo nghề gia truyền
          </p>
        </div>
      </section>

      {/* Historical Chronology & Heritage Evolution */}
      <section className="bg-white rounded-xl border border-[#E2D8C9] p-6 lg:p-8 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-[#8C271E]" />
            <h2 className="font-serif text-2xl font-bold text-[#24211E]">
              Lịch sử hình thành & Biên niên sử di sản
            </h2>
          </div>
          <span className="text-xs text-[#857969]">
            Hồ sơ số hóa F01
          </span>
        </div>

        <div className="relative border-l-2 border-[#D4C5B0] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {village.historicalChronology.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#8C271E] border-2 border-white shadow-xs" />
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C271E]">
                  {item.period}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#24211E]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C5348] leading-relaxed max-w-3xl">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Significance & Annual Festival */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl border border-[#E2D8C9] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#8C271E] mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Giá trị văn hóa cốt lõi</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#24211E] mb-3">
              Hồn cốt dân tộc trong từng thớ gốm, sợi tơ
            </h3>
            <p className="text-sm text-[#5C5348] leading-relaxed">
              {village.culturalSignificance}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EAE1] text-xs text-[#857969] italic">
            "Bảo tồn làng nghề không chỉ là giữ lấy sinh kế, mà là gìn giữ căn cước và bản sắc văn hóa ngàn năm của dân tộc Việt."
          </div>
        </section>

        <section className="bg-white rounded-xl border border-[#E2D8C9] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#8C271E] mb-3">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Lễ hội tổ nghề truyền thống</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#24211E] mb-1">
              {village.festival.name}
            </h3>
            <span className="inline-block text-xs font-medium text-[#8C271E] mb-3">
              Thời gian: {village.festival.dateLunar}
            </span>
            <p className="text-sm text-[#5C5348] leading-relaxed">
              {village.festival.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
            <span className="text-[#857969]">Không gian thực hành tín ngưỡng:</span>
            <span className="font-medium text-[#24211E]">Đình làng & Bến sông thiêng</span>
          </div>
        </section>
      </div>
    </div>
  );
};
