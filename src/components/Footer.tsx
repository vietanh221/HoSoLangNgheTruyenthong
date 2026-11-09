import React from 'react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReport }) => {
  return (
    <footer className="border-t border-[#E7DFD3] bg-[#F5EFE8] text-[#5C5348] text-xs mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E3D9CC]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#8C271E] text-amber-100 flex items-center justify-center font-serif font-bold text-xs">
                Đ
              </div>
              <span className="font-serif font-bold text-base text-[#24211E]">
                Hồ Sơ Số Làng Nghề Truyền Thống Việt Nam
              </span>
            </div>
            <p className="text-[#857969] text-xs max-w-xl">
              Nền tảng số hóa di sản văn hóa phi vật thể: Lưu trữ lịch sử làng nghề, quy trình chế tác tinh hoa từng bước, danh bạ nghệ nhân có kiểm định sự đồng ý và kiệt tác thủ công mỹ nghệ.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-[#DECDB8] shadow-xs flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[10px] uppercase font-bold text-[#8C271E] tracking-wider">
                Đồ án / Bài tập: F01
              </div>
              <div className="font-serif font-bold text-sm text-[#24211E]">
                Phạm Việt Anh
              </div>
              <div className="text-[11px] font-mono text-[#857969]">
                Mã SV: PH59336
              </div>
            </div>
            <button
              onClick={onOpenReport}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#8C271E] hover:bg-[#731E17] text-white transition-colors cursor-pointer"
            >
              Báo cáo F01
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-[#857969]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2F6B38]" />
            <span>Dữ liệu nghệ nhân được công bố theo biên bản đồng ý (BB-CBTT) & quy định pháp luật bảo vệ di sản.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Bảo tồn với</span>
            <Heart className="w-3 h-3 text-[#8C271E] fill-[#8C271E]" />
            <span>cho Di sản Việt Nam © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
