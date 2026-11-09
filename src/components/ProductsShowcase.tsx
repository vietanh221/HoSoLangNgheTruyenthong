import React, { useState } from 'react';
import { CraftProduct, CraftVillage } from '../types/craft';
import { 
  Award, 
  Sparkles, 
  Clock, 
  Star, 
  Tag, 
  X, 
  MessageSquare, 
  Compass,
  Check
} from 'lucide-react';

interface ProductsShowcaseProps {
  products: CraftProduct[];
  villages: CraftVillage[];
  selectedVillageId: string;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  products,
  villages,
  selectedVillageId,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<CraftProduct | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const villageObj = villages.find((v) => v.id === selectedVillageId);

  // Collect products for current village, or show all if desired
  const displayProducts = products.filter((p) => p.villageId === selectedVillageId);

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSelectedProduct(null);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7DFD3] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C271E]">
            <span>Bộ sưu tập hiện vật số hóa</span>
            <span>·</span>
            <span>{villageObj?.name}</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#24211E]">
            Sản phẩm tiêu biểu & Kiệt tác di sản
          </h2>
          <p className="mt-1 text-sm text-[#5C5348]">
            Các tác phẩm thủ công mỹ nghệ đạt phân hạng OCOP quốc gia và bảo vật phục dựng văn hóa truyền thống.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-amber-50 text-amber-900 border border-amber-200 px-3.5 py-2 rounded-lg self-start sm:self-auto">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>Tiêu chuẩn OCOP 4 - 5 Sao Quốc Gia</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-[#E2D8C9] hover:border-[#8C271E]/40 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Product Visual */}
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100 group">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-xs text-amber-300 text-xs px-2.5 py-1 rounded">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{product.ocopRank} Sao OCOP</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-xs px-2.5 py-1 rounded font-medium shadow-xs">
                  {product.dimensions}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#857969] mb-1">
                    <span>Nghệ nhân chế tác:</span>
                    <strong className="text-[#8C271E] font-medium">{product.artisanName}</strong>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#24211E]">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5C5348] leading-relaxed line-clamp-3">
                  {product.culturalMeaning}
                </p>

                {/* Material & Specs */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-lg border border-[#EAE1D3] space-y-2 text-xs">
                  <div>
                    <span className="text-[#857969] block text-[11px] uppercase tracking-wider">Chất liệu chế tác:</span>
                    <span className="font-medium text-[#24211E]">{product.material}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-[#F0EAE1]">
                    <span className="text-[#857969] text-[11px]">Thời gian tác tạo:</span>
                    <span className="font-medium text-[#24211E] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8C271E]" />
                      {product.estimatedTime}
                    </span>
                  </div>
                </div>

                {/* Applied Techniques */}
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C271E] block mb-1.5">
                    Kỹ nghệ ứng dụng:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techniquesUsed.map((tech, idx) => (
                      <span key={idx} className="text-[11px] bg-[#F3EDE3] text-[#423A30] px-2 py-0.5 rounded border border-[#E4DACD]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footbar */}
            <div className="bg-[#FAF8F5] p-4 border-t border-[#E7DFD3] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#857969] block">Khoảng giá lưu hành:</span>
                <span className="font-serif font-bold text-sm text-[#8C271E]">{product.priceReference}</span>
              </div>
              <button
                onClick={() => setSelectedProduct(product)}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#8C271E] text-white hover:bg-[#731E17] transition-colors cursor-pointer"
              >
                Chi tiết & Thuyết minh
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full border border-[#DED5C5] shadow-2xl p-6 sm:p-8 space-y-6 my-8">
            <div className="flex items-start justify-between border-b border-[#E7DFD3] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>Sản phẩm OCOP {selectedProduct.ocopRank} Sao cấp Quốc gia</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#24211E] mt-1">
                  {selectedProduct.name}
                </h3>
                <span className="text-xs text-[#857969]">
                  Nghệ nhân thực hiện: {selectedProduct.artisanName}
                </span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-16/9 rounded-lg overflow-hidden border border-[#E2D8C9]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C271E]">
                Ý nghĩa văn hóa & Triết lý mỹ thuật
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5348] leading-relaxed">
                {selectedProduct.culturalMeaning}
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#ECE3D5] space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                <span className="text-[#857969]">Chất liệu:</span>
                <span className="font-medium text-[#24211E]">{selectedProduct.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                <span className="text-[#857969]">Kích thước thực:</span>
                <span className="font-medium text-[#24211E]">{selectedProduct.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F0EAE1]">
                <span className="text-[#857969]">Thời gian hoàn thiện:</span>
                <span className="font-medium text-[#24211E]">{selectedProduct.estimatedTime}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#857969]">Ghi chú giám tuyển:</span>
                <span className="font-medium text-[#24211E] italic text-right">{selectedProduct.curatorNote}</span>
              </div>
            </div>

            {/* Quick Contact Form */}
            {inquirySuccess ? (
              <div className="bg-[#EAF5EC] border border-[#BDE3C4] text-[#24522B] p-4 rounded-lg text-center flex items-center justify-center gap-2 text-xs font-semibold">
                <Check className="w-4 h-4 text-[#2F6B38]" />
                <span>Yêu cầu kết nối xưởng nghệ nhân đã được ghi nhận thành công!</span>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-3 border-t border-[#E7DFD3] pt-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#24211E]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#8C271E]" />
                  <span>Kết nối nghệ nhân / Đặt hàng chế tác độc bản</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên của bạn"
                    className="px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    className="px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2 text-xs font-semibold rounded bg-stone-100 text-stone-700 hover:bg-stone-200 cursor-pointer"
                  >
                    Đóng
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold rounded bg-[#8C271E] text-white hover:bg-[#731E17] transition-colors cursor-pointer"
                  >
                    Gửi yêu cầu kết nối
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
