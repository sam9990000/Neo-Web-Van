import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TIMELINE_STAGES } from '../data/troyData';
import { ResilientImage } from './ResilientImage';

export function TimelineChronicle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TIMELINE_STAGES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TIMELINE_STAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TIMELINE_STAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="tong-quan" className="py-16 lg:py-20 border-b border-[#E2E1DC] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2E1DC]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium mb-2">
              01. Biên Niên Sử Thi
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#18181B] text-balance">
              Mười Năm Cuộc Chiến Thành Troy
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Giai đoạn trước"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E2E1DC] text-[#18181B] hover:bg-[#F8F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono tabular-nums text-xs text-[#57534E] px-2 whitespace-nowrap">
              {current.step} / 0{TIMELINE_STAGES.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Giai đoạn tiếp theo"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E2E1DC] text-[#18181B] hover:bg-[#F8F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Các giai đoạn cuộc chiến thành Troy"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#E2E1DC]"
        >
          {TIMELINE_STAGES.map((stage, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-4 sm:p-5 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1D3557] ${
                  isActive
                    ? 'border-[#1D3557] bg-[#F8F8F6]'
                    : 'border-transparent hover:bg-[#F8F8F6]/60'
                }`}
              >
                <div className="flex items-center gap-2 text-xs text-[#57534E]">
                  <span className="font-mono tabular-nums font-medium text-[#1D3557]">
                    {stage.step}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{stage.timeframe}</span>
                </div>
                <p
                  className={`mt-1.5 text-sm font-semibold leading-snug ${
                    isActive ? 'text-[#18181B]' : 'text-[#44403C]'
                  }`}
                >
                  {stage.title}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col">
            <figure className="flex-1 flex flex-col bg-[#F8F8F6] border border-[#E2E1DC] p-2.5 rounded-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded bg-[#EFEFEA]">
                <ResilientImage
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackTitle={current.title}
                />
              </div>
              <figcaption className="pt-2.5 px-1 text-xs font-serif italic text-[#57534E]">
                {current.caption}
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium text-[#8C6239] uppercase tracking-wider">
                Giai đoạn {current.step} <span aria-hidden="true">·</span> {current.timeframe}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#18181B] text-balance">
                {current.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#57534E]">{current.subtitle}</p>

              <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-[#292524]">
                {current.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-[#E2E1DC]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                  Bước ngoặt cốt truyện
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                  {current.keyConflict}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F8F8F6] border border-[#E2E1DC] rounded-md">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#1D3557]">
                Ghi chú Ngữ Văn 10
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#292524]">{current.literaryNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
