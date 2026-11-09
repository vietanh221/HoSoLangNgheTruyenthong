import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';

interface AudioNarrationProps {
  narration: {
    title: string;
    duration: string;
    speaker: string;
    transcript: string;
  };
}

export const AudioNarrationPlayer: React.FC<AudioNarrationProps> = ({ narration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Web Speech API synthesis for authentic Vietnamese voice narration
  const handleTogglePlay = () => {
    if (!('speechSynthesis' in window)) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(narration.transcript);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95; // gentle, storytelling tempo
      utterance.volume = isMuted ? 0 : 1;

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setProgress(0);

      // simulate progress tracking
      const step = 100 / 35; // ~35 seconds
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 98) {
            return 98;
          }
          return prev + step;
        });
      }, 1000);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if ('speechSynthesis' in window) {
      if (!isMuted) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // Reset on narration change
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [narration.transcript]);

  return (
    <div className="bg-[#FAF7F2] border border-[#E2D8C9] rounded-lg p-4 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className="w-10 h-10 rounded-full bg-[#8C271E] hover:bg-[#731E17] text-white flex items-center justify-center transition-transform active:scale-95 shrink-0 shadow-xs cursor-pointer"
            title={isPlaying ? 'Tạm dừng thuyết minh' : 'Phát thuyết minh âm thanh di sản'}
            aria-label={isPlaying ? 'Tạm dừng thuyết minh' : 'Phát thuyết minh âm thanh di sản'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C271E]">
                Thuyết minh âm thanh số
              </span>
              <span className="text-xs text-[#857969]">· {narration.duration}</span>
            </div>
            <p className="text-sm font-medium text-[#24211E] line-clamp-1">
              {narration.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress bar */}
          <div className="flex-1 sm:w-48 bg-[#E7DFD3] h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#8C271E] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleToggleMute}
              className="p-1.5 text-[#5C5348] hover:text-[#24211E] rounded transition-colors cursor-pointer"
              title={isMuted ? 'Bật âm' : 'Tắt âm'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-1 text-xs font-medium text-[#5C5348] hover:text-[#8C271E] py-1 px-2 rounded hover:bg-[#F2ECE3] transition-colors cursor-pointer"
            >
              <span>Lời thoại</span>
              {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {showTranscript && (
        <div className="mt-3 pt-3 border-t border-[#E7DFD3] text-xs leading-relaxed text-[#5C5348] bg-[#F7F2EB] p-3 rounded">
          <p className="italic font-serif text-[#3E3831]">
            "{narration.transcript}"
          </p>
          <div className="mt-2 text-[11px] text-[#857969] flex items-center justify-between">
            <span>Thuyết minh: {narration.speaker}</span>
            <span>Hệ thống số hóa hồ sơ di sản F01</span>
          </div>
        </div>
      )}
    </div>
  );
};
