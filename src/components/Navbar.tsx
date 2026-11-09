import React from 'react';
import { FileText, Award } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenReport,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded bg-[#8C271E] flex items-center justify-center text-amber-100 font-serif font-bold text-base shadow-sm group-hover:bg-[#721F17] transition-colors">
            Đ
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-tight text-[#24211E]">
              Hồ Sơ Số Làng Nghề
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C5348]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap pb-1 transition-colors relative ${
              activeTab === 'overview' 
                ? 'text-[#8C271E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C271E]' 
                : 'hover:text-[#24211E]'
            }`}
          >
            Hồ sơ làng nghề
          </button>
          
          <button
            onClick={() => setActiveTab('process')}
            className={`whitespace-nowrap pb-1 transition-colors relative ${
              activeTab === 'process' 
                ? 'text-[#8C271E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C271E]' 
                : 'hover:text-[#24211E]'
            }`}
          >
            Quy trình sản xuất
          </button>

          <button
            onClick={() => setActiveTab('artisans')}
            className={`whitespace-nowrap pb-1 transition-colors relative ${
              activeTab === 'artisans' 
                ? 'text-[#8C271E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C271E]' 
                : 'hover:text-[#24211E]'
            }`}
          >
            Nghệ nhân công bố
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`whitespace-nowrap pb-1 transition-colors relative ${
              activeTab === 'products' 
                ? 'text-[#8C271E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C271E]' 
                : 'hover:text-[#24211E]'
            }`}
          >
            Sản phẩm tiêu biểu
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`whitespace-nowrap pb-1 transition-colors relative ${
              activeTab === 'map' 
                ? 'text-[#8C271E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C271E]' 
                : 'hover:text-[#24211E]'
            }`}
          >
            Bản đồ di sản
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#786D5F] mr-2">
            <Award className="w-3.5 h-3.5 text-[#8C271E]" />
            <span>F01: Phạm Việt Anh (PH59336)</span>
          </div>

          <a
            href="/PH59336_F01_SourceCode.zip"
            download="PH59336_F01_SourceCode.zip"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#24211E] bg-[#EFEAE2] hover:bg-[#E5DDCF] rounded-md transition-colors whitespace-nowrap border border-[#DCD3C4]"
            title="Tải toàn bộ mã nguồn file ZIP để đẩy lên GitHub"
          >
            <span>Tải Code (.zip)</span>
          </a>

          <button
            onClick={onOpenReport}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white bg-[#8C271E] hover:bg-[#721F17] rounded-md transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Báo cáo F01</span>
          </button>
        </div>

      </div>
    </header>
  );
};
