import React, { useState } from 'react';
import { CraftVillage } from '../types/craft';
import { 
  CheckCircle2, 
  Wrench, 
  Clock, 
  Lightbulb, 
  Volume2, 
  ArrowLeft, 
  ArrowRight,
  ListOrdered,
  LayoutGrid
} from 'lucide-react';

interface ProductionProcessViewerProps {
  village: CraftVillage;
}

export const ProductionProcessViewer: React.FC<ProductionProcessViewerProps> = ({ village }) => {
  const steps = village.productionProcess;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'stepper' | 'all'>('stepper');
  const [isSimulatingSound, setIsSimulatingSound] = useState(false);

  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleToggleSound = () => {
    setIsSimulatingSound(!isSimulatingSound);
  };

  return (
    <div className="space-y-8">
      {/* Header and Mode Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7DFD3] pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C271E]">
            <span>Kỹ nghệ bí truyền</span>
            <span>·</span>
            <span>{village.name}</span>
          </div>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#24211E]">
            Quy trình sản xuất từng bước
          </h2>
          <p className="mt-1 text-sm text-[#5C5348]">
            Hệ thống hóa các công đoạn từ tuyển quặng/nguyên liệu thô đến khi ra thành phẩm tinh xảo.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#EFEAE2] rounded-md self-start sm:self-auto">
          <button
            onClick={() => setViewMode('stepper')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'stepper'
                ? 'bg-white text-[#24211E] shadow-xs'
                : 'text-[#6B6153] hover:text-[#24211E]'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Từng bước</span>
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'all'
                ? 'bg-white text-[#24211E] shadow-xs'
                : 'text-[#6B6153] hover:text-[#24211E]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Toàn cảnh</span>
          </button>
        </div>
      </div>

      {viewMode === 'stepper' ? (
        <div className="space-y-6">
          {/* Step Selector Horizontal Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {steps.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-medium transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#8C271E] text-white border-[#8C271E] shadow-xs'
                      : 'bg-white text-[#4A4237] border-[#DDD4C5] hover:border-[#8C271E]/50'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#EAE4D9] text-[#5C5348]'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="font-serif font-semibold">{step.title.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-white rounded-xl border border-[#E2D8C9] p-6 lg:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7DFD3] pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F4EFEA] text-[#8C271E] border border-[#E6DDD0]">
                  {currentStep.stageName} · Bước {currentStep.stepNumber}/{steps.length}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#857969]">
                  <Clock className="w-3.5 h-3.5 text-[#8C271E]" />
                  <span>{currentStep.estimatedDuration}</span>
                </div>
              </div>

              {currentStep.soundAmbientLabel && (
                <button
                  onClick={handleToggleSound}
                  className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    isSimulatingSound 
                      ? 'bg-[#8C271E] text-white border-[#8C271E]' 
                      : 'bg-[#F9F6F0] text-[#5C5348] border-[#E0D5C3] hover:text-[#24211E]'
                  }`}
                  title="Nhịp điệu âm thanh lao động truyền thống"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isSimulatingSound ? 'Đang mô phỏng:' : 'Âm thanh nghề:'}</span>
                  <span className="italic">{currentStep.soundAmbientLabel}</span>
                </button>
              )}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#24211E]">
                  {currentStep.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C5348] leading-relaxed">
                  {currentStep.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Technical Details */}
                <div className="bg-[#FAF7F2] p-5 rounded-lg border border-[#EBE3D6]">
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#24211E]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C271E]" />
                    <span>Yêu cầu kỹ thuật ngặt nghèo</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#4A4237]">
                    {currentStep.technicalDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#8C271E] font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Traditional Tools & Equipment */}
                <div className="bg-[#FAF7F2] p-5 rounded-lg border border-[#EBE3D6]">
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#24211E]">
                    <Wrench className="w-4 h-4 text-[#C85A32]" />
                    <span>Dụng cụ chuyên dụng truyền thống</span>
                  </div>
                  <div className="space-y-2">
                    {currentStep.traditionalTools.map((tool, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-[#4A4237] py-1 border-b border-[#EFEAE2] last:border-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C271E]" />
                        <span className="font-medium text-[#24211E]">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Artisan Secret Tip Callout */}
              <div className="bg-[#F8F3EC] border border-[#E1D6C5] rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C271E] mb-1.5">
                  <Lightbulb className="w-4 h-4 text-[#8C271E]" />
                  <span>Mẹo nghề gia truyền (Bí kíp nghệ nhân)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#443C33] italic leading-relaxed font-serif">
                  "{currentStep.artisanSecret}"
                </p>
              </div>
            </div>

            {/* Stepper Navigation Footbar */}
            <div className="mt-8 pt-5 border-t border-[#E7DFD3] flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  currentStepIndex === 0
                    ? 'text-stone-400 bg-stone-100 cursor-not-allowed'
                    : 'text-[#24211E] bg-[#EFEAE2] hover:bg-[#E5DDCF]'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Bước trước</span>
              </button>

              <span className="text-xs font-medium text-[#857969]">
                Bước {currentStepIndex + 1} / {steps.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentStepIndex === steps.length - 1}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  currentStepIndex === steps.length - 1
                    ? 'text-stone-400 bg-stone-100 cursor-not-allowed'
                    : 'text-white bg-[#8C271E] hover:bg-[#731E17]'
                }`}
              >
                <span>Bước tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* All-in-one Vertical Timeline View */
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.stepNumber} className="bg-white rounded-xl border border-[#E2D8C9] p-6 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EAE1] pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#8C271E] text-white flex items-center justify-center text-xs font-bold">
                    {step.stepNumber}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#24211E]">
                    {step.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#857969]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.estimatedDuration}</span>
                </div>
              </div>

              <p className="text-sm text-[#5C5348] leading-relaxed">
                {step.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#FAF7F2] p-4 rounded border border-[#ECE4D8]">
                  <span className="font-semibold text-[#8C271E] block mb-2 uppercase tracking-wide text-[11px]">
                    Kỹ thuật cốt lõi:
                  </span>
                  <ul className="space-y-1 text-[#4A4237]">
                    {step.technicalDetails.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#8C271E]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded border border-[#ECE4D8] flex flex-col justify-between">
                  <div>
                    <span className="font-semibold text-[#C85A32] block mb-2 uppercase tracking-wide text-[11px]">
                      Dụng cụ:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.traditionalTools.map((t, i) => (
                        <span key={i} className="bg-white px-2 py-1 rounded border border-[#E0D7C9] text-[#24211E]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#EFEAE2] text-[11px] text-[#63584A] italic">
                    <strong className="text-[#8C271E] not-italic">Mẹo nghề: </strong>
                    "{step.artisanSecret}"
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
