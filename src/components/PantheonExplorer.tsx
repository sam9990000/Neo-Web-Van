import { useState } from 'react';
import { MYTH_FIGURES, type FigureFaction } from '../data/troyData';

const FACTION_TABS: { key: FigureFaction; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'troy', label: 'Phe Thành Troy' },
  { key: 'greece', label: 'Phe Hy Lạp' },
  { key: 'olympus', label: 'Đỉnh Ô-lim-pơ' },
];

export function PantheonExplorer() {
  const [selectedFaction, setSelectedFaction] = useState<FigureFaction>('all');
  const [selectedId, setSelectedId] = useState<string>(MYTH_FIGURES[0].id);

  const filteredFigures =
    selectedFaction === 'all'
      ? MYTH_FIGURES
      : MYTH_FIGURES.filter((item) => item.faction === selectedFaction);

  const activeFigure =
    filteredFigures.find((item) => item.id === selectedId) ?? filteredFigures[0];

  const handleFactionChange = (faction: FigureFaction) => {
    setSelectedFaction(faction);
    const nextList =
      faction === 'all'
        ? MYTH_FIGURES
        : MYTH_FIGURES.filter((item) => item.faction === faction);
    if (nextList.length > 0 && !nextList.some((item) => item.id === selectedId)) {
      setSelectedId(nextList[0].id);
    }
  };

  return (
    <section id="than-linh" className="py-16 lg:py-20 border-b border-[#E2E1DC] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2E1DC]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium mb-2">
              02. Hệ Thống Nhân Vật & Thần Thoại
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#18181B] text-balance">
              Các Vị Thần Linh & Anh Hùng Thành Troy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57534E] max-w-2xl">
              Trong sử thi Hy Lạp, cuộc chiến thành Tơ-roa không chỉ là trận quyết đấu giữa hai đạo
              quân trần thế mà còn là bàn cờ ý chí của các vị thần trên đỉnh Ô-lim-pơ.
            </p>
          </div>

          <div
            role="group"
            aria-label="Lọc theo phe phái"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFEFEA] border border-[#E2E1DC] rounded-lg self-start lg:self-auto"
          >
            {FACTION_TABS.map((tab) => {
              const active = selectedFaction === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleFactionChange(tab.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${
                    active
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#57534E] hover:text-[#18181B]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 bg-white border border-[#E2E1DC] rounded-lg overflow-hidden">
            <div className="px-4 py-3 border-b border-[#E2E1DC] flex items-center justify-between text-xs text-[#57534E]">
              <span className="font-medium uppercase tracking-wider">Danh mục nhân vật</span>
              <span className="font-mono tabular-nums">{filteredFigures.length} hồ sơ</span>
            </div>
            <ul className="divide-y divide-[#E2E1DC]">
              {filteredFigures.map((figure) => {
                const isSelected = figure.id === activeFigure.id;
                return (
                  <li key={figure.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(figure.id)}
                      className={`w-full text-left px-4 py-3.5 transition-colors flex items-start justify-between gap-4 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1D3557] ${
                        isSelected ? 'bg-[#1D3557] text-white' : 'hover:bg-[#F8F8F6] text-[#18181B]'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-xs">
                          <span
                            className={`font-mono tabular-nums ${
                              isSelected ? 'text-slate-200' : 'text-[#57534E]'
                            }`}
                          >
                            {figure.index}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className={isSelected ? 'text-slate-200' : 'text-[#57534E]'}>
                            {figure.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className={isSelected ? 'text-slate-200' : 'text-[#8C6239]'}>
                            {figure.factionLabel}
                          </span>
                        </div>
                        <p className="mt-1 font-serif text-base font-semibold truncate">
                          {figure.name}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-mono shrink-0 mt-1 ${
                          isSelected ? 'text-slate-200' : 'text-[#57534E]'
                        }`}
                      >
                        {figure.greekName}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <article className="lg:col-span-7 bg-white border border-[#E2E1DC] rounded-lg p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] pb-4 border-b border-[#E2E1DC]">
              <span className="font-mono tabular-nums font-medium text-[#1D3557]">
                Hồ sơ {activeFigure.index}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeFigure.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#8C6239]">{activeFigure.factionLabel}</span>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18181B]">
                  {activeFigure.name}
                </h3>
                <span className="text-sm font-serif italic text-[#57534E]">
                  {activeFigure.greekName}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-[#44403C]">{activeFigure.title}</p>
            </div>

            <div className="mt-6 py-4 border-y border-[#E2E1DC]">
              <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
                Tính ngữ sử thi tiêu biểu
              </p>
              <p className="mt-1 font-serif text-lg italic text-[#1D3557]">
                “{activeFigure.epithet}”
              </p>
            </div>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                  Vai trò trong cuộc chiến Thành Troy
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-[#292524]">
                  {activeFigure.roleInWar}
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                  Sự kiện then chốt
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-[#292524]">
                  {activeFigure.keyMoment}
                </dd>
              </div>

              <div className="pt-4 border-t border-[#E2E1DC]">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#1D3557]">
                  Liên hệ kiến thức Ngữ Văn 10
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#292524]">
                  {activeFigure.grade10Link}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
