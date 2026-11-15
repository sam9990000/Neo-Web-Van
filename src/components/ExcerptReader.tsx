import { useState } from 'react';
import { BookOpen, Eye, EyeOff } from 'lucide-react';
import { EXCERPT_PASSAGES } from '../data/troyData';

export function ExcerptReader() {
  const [selectedId, setSelectedId] = useState<string>(EXCERPT_PASSAGES[0].id);
  const [showAnswerHint, setShowAnswerHint] = useState<boolean>(false);

  const activeNote =
    EXCERPT_PASSAGES.find((item) => item.id === selectedId) ?? EXCERPT_PASSAGES[0];

  const handleSelectPassage = (id: string) => {
    setSelectedId(id);
    setShowAnswerHint(false);
  };

  return (
    <section id="doan-trich" className="py-16 lg:py-20 border-b border-[#E2E1DC] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pb-8 border-b border-[#E2E1DC]">
          <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium mb-2">
            03. Đọc Hiểu Văn Bản Trọng Tâm SGK Ngữ Văn 10
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#18181B] text-balance">
            Héc-to Từ Biệt Ăng-đrô-mác
          </h2>
          <p className="mt-2 text-sm text-[#57534E]">
            Trích Khúc ca VI, sử thi <span className="italic">I-li-át</span> (Hô-me-rơ){' '}
            <span aria-hidden="true" className="mx-1.5">·</span> Nhấp vào từng đoạn để xem chú thích nghệ thuật và câu hỏi đọc hiểu bên lề.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            {EXCERPT_PASSAGES.map((passage, idx) => {
              const isSelected = passage.id === activeNote.id;
              const parts = passage.text.split(passage.highlightedPhrase);

              return (
                <article
                  key={passage.id}
                  onClick={() => handleSelectPassage(passage.id)}
                  className={`p-6 rounded-lg border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#F8F8F6] border-[#1D3557]'
                      : 'bg-white border-[#E2E1DC] hover:bg-[#F8F8F6]/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
                      {passage.sectionLabel}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectPassage(passage.id);
                      }}
                      className={`text-xs font-medium whitespace-nowrap shrink-0 underline underline-offset-4 ${
                        isSelected ? 'text-[#1D3557]' : 'text-[#57534E] hover:text-[#18181B]'
                      }`}
                    >
                      {isSelected ? 'Đang xem chú thích' : 'Xem chú thích'}
                    </button>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#18181B] mb-3">
                    {passage.title}
                  </h3>

                  <p
                    className={`font-serif text-[17px] leading-[1.85] text-[#292524] max-w-prose ${
                      idx === 0
                        ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1D3557]'
                        : ''
                    }`}
                  >
                    {parts.length === 2 ? (
                      <>
                        {parts[0]}
                        <mark className="bg-[#EFEFEA] text-[#1D3557] font-semibold px-1 py-0.5 rounded-xs border-b border-[#1D3557]">
                          {passage.highlightedPhrase}
                        </mark>
                        {parts[1]}
                      </>
                    ) : (
                      passage.text
                    )}
                  </p>
                </article>
              );
            })}
          </div>

          <aside
            aria-label="Chú thích lề văn bản"
            className="lg:col-span-5 lg:sticky lg:top-24 bg-[#F8F8F6] border border-[#E2E1DC] rounded-lg p-6 sm:p-7"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#1D3557] pb-3 border-b border-[#E2E1DC]">
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Ghi chú đọc hiểu · {activeNote.sectionLabel}</span>
            </div>

            <h3 className="mt-4 font-serif text-xl font-semibold text-[#18181B]">
              {activeNote.noteTitle}
            </h3>

            <p className="mt-1.5 text-xs font-medium text-[#8C6239]">
              Biện pháp: {activeNote.literaryDevice}
            </p>

            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
              {activeNote.explanation}
            </p>

            <div className="mt-6 pt-5 border-t border-[#E2E1DC]">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#18181B]">
                Câu hỏi đọc hiểu SGK
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#18181B]">
                {activeNote.sgkQuestion}
              </p>

              <button
                type="button"
                onClick={() => setShowAnswerHint((prev) => !prev)}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md border border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
              >
                {showAnswerHint ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Ẩn gợi ý trả lời</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Xem gợi ý trả lời</span>
                  </>
                )}
              </button>

              {showAnswerHint && (
                <div className="mt-4 p-4 bg-white border border-[#E2E1DC] rounded-md">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#1D3557] mb-1">
                    Gợi ý đáp án chuẩn Ngữ Văn 10
                  </p>
                  <p className="text-sm leading-relaxed text-[#292524]">
                    {activeNote.sgkAnswerHint}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
