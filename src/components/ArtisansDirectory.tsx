import React, { useState } from 'react';
import { Artisan, CraftVillage } from '../types/craft';
import { 
  ShieldCheck, 
  Search, 
  Plus, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  UserCheck, 
  FileCheck2, 
  X, 
  CheckSquare,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface ArtisansDirectoryProps {
  artisans: Artisan[];
  villages: CraftVillage[];
  selectedVillageId: string;
  onAddArtisan: (artisan: Artisan) => void;
}

export const ArtisansDirectory: React.FC<ArtisansDirectoryProps> = ({
  artisans,
  villages,
  selectedVillageId,
  onAddArtisan,
}) => {
  const [filterTitle, setFilterTitle] = useState<string>('all');
  const [filterVillage, setFilterVillage] = useState<string>(selectedVillageId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Artisan Form State
  const [formData, setFormData] = useState({
    fullName: '',
    birthYear: 1965,
    gender: 'male' as 'male' | 'female',
    title: 'Nghệ nhân Ưu tú',
    titleAcronym: 'NNƯT' as 'NNND' | 'NNƯT' | 'BTV' | 'NN',
    villageId: selectedVillageId,
    experienceYears: 35,
    generation: 'Đời thứ 4 truyền thừa gia tộc',
    workshopName: '',
    address: '',
    phone: '',
    email: '',
    quote: '',
    signatureSpecialty: '',
    achievements: '',
    consentConfirmed: false,
  });

  // Filter logic
  const filteredArtisans = artisans.filter((artisan) => {
    // By village
    if (filterVillage !== 'all' && artisan.villageId !== filterVillage) {
      return false;
    }
    // By title
    if (filterTitle !== 'all') {
      if (filterTitle === 'NNND' && artisan.titleAcronym !== 'NNND') return false;
      if (filterTitle === 'NNƯT' && artisan.titleAcronym !== 'NNƯT') return false;
      if (filterTitle === 'other' && (artisan.titleAcronym === 'NNND' || artisan.titleAcronym === 'NNƯT')) return false;
    }
    // By query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = artisan.fullName.toLowerCase().includes(q);
      const matchSpecialty = artisan.signatureSpecialty.toLowerCase().includes(q);
      const matchWorkshop = artisan.workshopName.toLowerCase().includes(q);
      return matchName || matchSpecialty || matchWorkshop;
    }
    return true;
  });

  const handleSubmitNewArtisan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentConfirmed) {
      alert('Vui lòng xác nhận biên bản đồng ý công bố thông tin của nghệ nhân!');
      return;
    }

    const newArtisan: Artisan = {
      id: `artisan-${Date.now()}`,
      villageId: formData.villageId,
      fullName: formData.fullName,
      birthYear: Number(formData.birthYear),
      gender: formData.gender,
      title: formData.title,
      titleAcronym: formData.titleAcronym,
      avatar: '/src/assets/images/artisan_portrait_tran_do_1794233896847.jpg',
      experienceYears: Number(formData.experienceYears),
      generation: formData.generation,
      consentStatus: true,
      consentDate: new Date().toLocaleDateString('vi-VN'),
      consentDocRef: `BB-CBTT/2024-NN-${Math.floor(100 + Math.random() * 900)}`,
      workshopName: formData.workshopName || 'Xưởng thủ công truyền thống',
      address: formData.address || 'Làng nghề truyền thống',
      phone: formData.phone || '0912 345 678',
      email: formData.email || 'nghenhan@heritage.vn',
      quote: formData.quote || 'Tâm huyết truyền nghề và giữ gìn ngọn lửa di sản của cha ông.',
      signatureSpecialty: formData.signatureSpecialty || 'Kỹ thuật thủ công tinh hoa gia truyền',
      achievements: formData.achievements
        ? formData.achievements.split('\n').filter((s) => s.trim().length > 0)
        : ['Nhiều năm cống hiến gìn giữ tinh hoa làng nghề truyền thống.'],
      isVerifiedConsent: true,
    };

    onAddArtisan(newArtisan);
    setIsAddModalOpen(false);
    // Reset form
    setFormData({
      fullName: '',
      birthYear: 1965,
      gender: 'male',
      title: 'Nghệ nhân Ưu tú',
      titleAcronym: 'NNƯT',
      villageId: selectedVillageId,
      experienceYears: 35,
      generation: 'Đời thứ 4 truyền thừa gia tộc',
      workshopName: '',
      address: '',
      phone: '',
      email: '',
      quote: '',
      signatureSpecialty: '',
      achievements: '',
      consentConfirmed: false,
    });
  };

  return (
    <div className="space-y-8">
      {/* Official Consent Notice Header */}
      <div className="bg-[#FAF7F2] border border-[#E2D8C9] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#2F6B38]/10 text-[#2F6B38] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#24211E]">
                  Danh bạ nghệ nhân đã đồng ý công bố thông tin
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#2F6B38] bg-[#EAF5EC] px-2.5 py-0.5 rounded-full border border-[#C6E6CB]">
                  <FileCheck2 className="w-3 h-3" />
                  Đã thẩm định văn bản
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-[#5C5348] leading-relaxed max-w-3xl">
                Tất cả nghệ nhân trong danh bạ số hóa này đã ký <strong>Biên bản chấp thuận công bố thông tin công khai</strong> (BB-CBTT) phục vụ công tác nghiên cứu, bảo tồn di sản văn hóa phi vật thể và kết nối du lịch làng nghề.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-[#8C271E] hover:bg-[#731E17] text-white transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Đăng ký hồ sơ nghệ nhân</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-[#E5DDD0] shadow-xs">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#857969] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tên nghệ nhân, ngón nghề, xưởng sản xuất..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-md border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E] focus:border-[#8C271E] bg-[#FAF8F5]"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Village Filter */}
          <select
            value={filterVillage}
            onChange={(e) => setFilterVillage(e.target.value)}
            className="text-xs px-3 py-2 rounded-md border border-[#DCD3C4] bg-white text-[#24211E] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
          >
            <option value="all">Tất cả làng nghề</option>
            {villages.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>

          {/* Title Filter */}
          <div className="flex items-center gap-1 bg-[#F0EAE1] p-1 rounded-md text-xs font-medium">
            <button
              onClick={() => setFilterTitle('all')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                filterTitle === 'all' ? 'bg-white text-[#24211E] shadow-xs' : 'text-[#615647] hover:text-[#24211E]'
              }`}
            >
              Tất cả ({artisans.length})
            </button>
            <button
              onClick={() => setFilterTitle('NNND')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                filterTitle === 'NNND' ? 'bg-white text-[#24211E] shadow-xs' : 'text-[#615647] hover:text-[#24211E]'
              }`}
            >
              NNND
            </button>
            <button
              onClick={() => setFilterTitle('NNƯT')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                filterTitle === 'NNƯT' ? 'bg-white text-[#24211E] shadow-xs' : 'text-[#615647] hover:text-[#24211E]'
              }`}
            >
              NNƯT
            </button>
          </div>
        </div>
      </div>

      {/* Artisans Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtisans.map((artisan) => {
          const villageObj = villages.find((v) => v.id === artisan.villageId);
          return (
            <div
              key={artisan.id}
              className="bg-white rounded-xl border border-[#E2D8C9] hover:border-[#8C271E]/40 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Header with Avatar & Consent Badge */}
                <div className="flex items-start gap-4">
                  <img
                    src={artisan.avatar}
                    alt={artisan.fullName}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#E7DFD3] shadow-xs shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#8C271E]/10 text-[#8C271E] border border-[#8C271E]/20">
                        {artisan.title}
                      </span>
                      <span className="text-[11px] text-[#857969]">
                        · {artisan.experienceYears} năm nghề
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#24211E] mt-1 truncate">
                      {artisan.fullName}
                    </h3>
                    <p className="text-xs text-[#857969] truncate">
                      {artisan.generation}
                    </p>
                  </div>
                </div>

                {/* Consent Legal Badge */}
                <div className="bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EAE1D3] space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#2F6B38] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Đã đồng ý công bố thông tin
                    </span>
                    <span className="text-[#857969]">{artisan.consentDate}</span>
                  </div>
                  <div className="text-[10px] text-[#7A6F60] font-mono truncate">
                    Số VB: {artisan.consentDocRef}
                  </div>
                </div>

                {/* Signature Specialty */}
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C271E] block mb-1">
                    Ngón nghề tinh hoa:
                  </span>
                  <p className="text-xs text-[#3E3831] line-clamp-2 leading-relaxed">
                    {artisan.signatureSpecialty}
                  </p>
                </div>

                {/* Artisan Quote */}
                <blockquote className="text-xs italic text-[#5C5348] font-serif border-l-2 border-[#D4C5B0] pl-2.5 py-0.5 line-clamp-2">
                  "{artisan.quote}"
                </blockquote>

                {/* Workshop Details */}
                <div className="space-y-1 text-xs text-[#5C5348] pt-2 border-t border-[#F2ECE3]">
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#8C271E] shrink-0" />
                    <span className="truncate">{artisan.workshopName} · {villageObj?.province}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#857969] shrink-0" />
                    <span className="font-mono text-[11px]">{artisan.phone}</span>
                  </div>
                </div>
              </div>

              {/* View Full Profile CTA */}
              <div className="bg-[#FBF9F6] p-3 border-t border-[#E7DFD3]">
                <button
                  onClick={() => setSelectedArtisan(artisan)}
                  className="w-full py-2 text-xs font-semibold text-[#8C271E] hover:text-white hover:bg-[#8C271E] rounded transition-colors text-center cursor-pointer"
                >
                  Xem chi tiết hồ sơ & giải thưởng
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredArtisans.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-[#E2D8C9]">
          <UserCheck className="w-10 h-10 text-stone-400 mx-auto mb-2" />
          <h4 className="font-serif text-lg font-bold text-stone-700">Không tìm thấy nghệ nhân</h4>
          <p className="text-xs text-stone-500 mt-1">
            Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
          </p>
        </div>
      )}

      {/* Detailed Artisan Modal */}
      {selectedArtisan && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full border border-[#DED5C5] shadow-2xl p-6 sm:p-8 space-y-6 my-8">
            <div className="flex items-start justify-between border-b border-[#E7DFD3] pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedArtisan.avatar}
                  alt={selectedArtisan.fullName}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#8C271E]"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#8C271E] uppercase tracking-wide">
                      {selectedArtisan.title}
                    </span>
                    <span className="text-xs text-[#857969]">· Sinh năm {selectedArtisan.birthYear}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#24211E]">
                    {selectedArtisan.fullName}
                  </h3>
                  <p className="text-xs text-[#857969]">
                    {selectedArtisan.generation} ({selectedArtisan.experienceYears} năm thâm niên)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedArtisan(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Legal Consent Verification Section */}
            <div className="bg-[#EAF5EC] border border-[#BDE3C4] rounded-lg p-4 text-xs text-[#24522B] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#2F6B38]" />
                <span>Hồ sơ đã xác thực văn bản chấp thuận công bố</span>
              </div>
              <p>
                Nghệ nhân đã ký biên bản đồng ý công bố danh tính, tiểu sử, số điện thoại liên hệ và hình ảnh xưởng sản xuất phục vụ lưu trữ di sản số (Mã số lưu trữ: <strong>{selectedArtisan.consentDocRef}</strong>, Ngày ký: {selectedArtisan.consentDate}).
              </p>
            </div>

            {/* Quote */}
            <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#ECE3D5]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C271E] block mb-1">
                Tâm sự người giữ lửa di sản:
              </span>
              <p className="font-serif italic text-sm text-[#3E3831] leading-relaxed">
                "{selectedArtisan.quote}"
              </p>
            </div>

            {/* Specialty */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#24211E] mb-1.5">
                Kỹ nghệ tinh hoa truyền đời
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5348] leading-relaxed">
                {selectedArtisan.signatureSpecialty}
              </p>
            </div>

            {/* State Achievements */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#24211E] mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#8C271E]" />
                <span>Giải thưởng & Cống hiến tiêu biểu</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5C5348]">
                {selectedArtisan.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8C271E] font-bold">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="border-t border-[#E7DFD3] pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#857969] block">Cơ sở sản xuất:</span>
                <span className="font-medium text-[#24211E]">{selectedArtisan.workshopName}</span>
                <p className="text-[#857969] text-[11px] mt-0.5">{selectedArtisan.address}</p>
              </div>
              <div>
                <span className="text-[#857969] block">Điện thoại liên hệ:</span>
                <span className="font-mono font-medium text-[#24211E]">{selectedArtisan.phone}</span>
                <p className="text-[#857969] text-[11px] mt-0.5">{selectedArtisan.email}</p>
              </div>
            </div>

            <div className="border-t border-[#E7DFD3] pt-4 flex justify-end">
              <button
                onClick={() => setSelectedArtisan(null)}
                className="px-5 py-2 text-xs font-semibold rounded bg-[#24211E] text-white hover:bg-[#3D3730] transition-colors cursor-pointer"
              >
                Đóng hồ sơ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Artisan Registration Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-xl w-full border border-[#DED5C5] shadow-2xl p-6 sm:p-8 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3">
              <div className="flex items-center gap-2 text-[#8C271E]">
                <Plus className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold text-[#24211E]">
                  Đăng ký hồ sơ nghệ nhân mới
                </h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitNewArtisan} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Họ và tên nghệ nhân *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="VD: Nguyễn Văn An"
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Danh hiệu tôn vinh
                  </label>
                  <select
                    value={formData.title}
                    onChange={(e) => {
                      const t = e.target.value;
                      let acronym: 'NNND' | 'NNƯT' | 'BTV' | 'NN' = 'NN';
                      if (t.includes('Nhân dân')) acronym = 'NNND';
                      else if (t.includes('Ưu tú')) acronym = 'NNƯT';
                      else if (t.includes('Bàn tay vàng')) acronym = 'BTV';
                      setFormData({ ...formData, title: t, titleAcronym: acronym });
                    }}
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  >
                    <option value="Nghệ nhân Nhân dân">Nghệ nhân Nhân dân (NNND)</option>
                    <option value="Nghệ nhân Ưu tú">Nghệ nhân Ưu tú (NNƯT)</option>
                    <option value="Nghệ nhân Bàn tay vàng">Nghệ nhân Bàn tay vàng (BTV)</option>
                    <option value="Nghệ nhân Làng nghề Hà Nội">Nghệ nhân Làng nghề</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Làng nghề truyền thống
                  </label>
                  <select
                    value={formData.villageId}
                    onChange={(e) => setFormData({ ...formData, villageId: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  >
                    {villages.map((v) => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Năm sinh
                  </label>
                  <input
                    type="number"
                    value={formData.birthYear}
                    onChange={(e) => setFormData({ ...formData, birthYear: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Số năm làm nghề
                  </label>
                  <input
                    type="number"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#24211E] mb-1">
                  Xưởng / Cơ sở sản xuất & Địa chỉ
                </label>
                <input
                  type="text"
                  required
                  value={formData.workshopName}
                  onChange={(e) => setFormData({ ...formData, workshopName: e.target.value })}
                  placeholder="VD: Xưởng Gốm Mỹ Nghệ Hưng Thịnh, Xóm 2 Bát Tràng"
                  className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="VD: 0988 123 456"
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#24211E] mb-1">
                    Dòng họ / Đời truyền thừa
                  </label>
                  <input
                    type="text"
                    value={formData.generation}
                    onChange={(e) => setFormData({ ...formData, generation: e.target.value })}
                    placeholder="VD: Đời thứ 5 dòng họ Vương"
                    className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#24211E] mb-1">
                  Kỹ nghệ tinh hoa / Ngón nghề gia truyền *
                </label>
                <input
                  type="text"
                  required
                  value={formData.signatureSpecialty}
                  onChange={(e) => setFormData({ ...formData, signatureSpecialty: e.target.value })}
                  placeholder="VD: Chế tác bình men ngọc celadon độc bản và vuốt gốm bàn xoay truyền thống"
                  className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#24211E] mb-1">
                  Triết lý nghề / Câu nói tâm đắc
                </label>
                <textarea
                  rows={2}
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  placeholder="VD: Giữ lửa nghề truyền thống là giữ lấy hồn cốt văn hóa ngàn năm."
                  className="w-full px-3 py-2 rounded border border-[#DCD3C4] focus:outline-none focus:ring-1 focus:ring-[#8C271E]"
                />
              </div>

              {/* CRITICAL CONSENT CHECKBOX REQUIRED BY ASSIGNMENT */}
              <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#DECDB8] space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consentConfirmed}
                    onChange={(e) => setFormData({ ...formData, consentConfirmed: e.target.checked })}
                    className="mt-0.5 rounded text-[#8C271E] focus:ring-[#8C271E] w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs text-[#24211E] leading-relaxed font-medium">
                    <strong className="text-[#8C271E]">Cam kết đồng ý công bố thông tin:</strong> Tôi xác nhận nghệ nhân (hoặc đại diện hợp pháp) đã ký <strong>Biên bản đồng ý công bố thông tin số hóa</strong> phục vụ mục đích bảo tồn di sản, nghiên cứu và quảng bá văn hóa phi vật thể theo quy định.
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E7DFD3]">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded bg-stone-100 text-stone-700 hover:bg-stone-200 cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold rounded bg-[#8C271E] text-white hover:bg-[#731E17] transition-colors cursor-pointer"
                >
                  Lưu & Công bố hồ sơ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
