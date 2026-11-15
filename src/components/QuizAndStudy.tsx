import { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, RotateCcw, XCircle } from 'lucide-react';
import { QUIZ_QUESTIONS, STUDY_FLASHCARDS } from '../data/troyData';

type PracticeMode = 'quiz' | 'study';

export function QuizAndStudy() {
  const [mode, setMode] = useState<PracticeMode>('quiz');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'card-1': true,
  });

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const userChoice = selectedAnswers[currentQuestion.id];
  const hasAnsweredCurrent = userChoice !== undefined;

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = QUIZ_QUESTIONS.reduce((sum, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? sum + 1 : sum;
  }, 0);

  const handleSelectOption = (optionIdx: number) => {
    if (hasAnsweredCurrent) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIdx,
    }));
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  const toggleFlashcard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="on-tap" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2E1DC]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium mb-2">
              05. Kiểm Tra Kiến Thức & Soạn Bài
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#18181B] text-balance">
              Ôn Tập Thành Troy · Ngữ Văn 10
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Chế độ ôn tập"
            className="inline-flex items-center gap-1 p-1 bg-[#EFEFEA] border border-[#E2E1DC] rounded-lg self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'quiz'}
              onClick={() => setMode('quiz')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${
                mode === 'quiz'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#57534E] hover:text-[#18181B]'
              }`}
            >
              Trắc nghiệm (8 câu)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'study'}
              onClick={() => setMode('study')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${
                mode === 'study'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#57534E] hover:text-[#18181B]'
              }`}
            >
              Dàn ý tự luận (4 đề)
            </button>
          </div>
        </div>

        {mode === 'quiz' ? (
          <div className="mt-10 max-w-3xl mx-auto">
            {showResults ? (
              <div className="bg-[#F8F8F6] border border-[#E2E1DC] rounded-lg p-6 sm:p-8">
                <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
                  Kết quả luyện tập
                </p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl font-semibold text-[#18181B]">
                    Bạn trả lời đúng{' '}
                    <span className="font-mono tabular-nums text-[#1D3557]">
                      {correctCount}/{QUIZ_QUESTIONS.length}
                    </span>{' '}
                    câu hỏi
                  </h3>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1D3557] rounded-md hover:bg-[#152843] transition-colors whitespace-nowrap shrink-0"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Làm lại bài</span>
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E2E1DC] divide-y divide-[#E2E1DC]">
                  {QUIZ_QUESTIONS.map((q, index) => {
                    const picked = selectedAnswers[q.id];
                    const isCorrect = picked === q.correctIndex;
                    return (
                      <div key={q.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm font-semibold text-[#18181B]">
                            <span className="font-mono tabular-nums mr-2 text-[#57534E]">
                              0{index + 1}.
                            </span>
                            {q.question}
                          </p>
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-medium shrink-0 ${
                              isCorrect ? 'text-emerald-700' : 'text-red-700'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                <span>Chính xác</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4" aria-hidden="true" />
                                <span>Chưa đúng</span>
                              </>
                            )}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs text-[#44403C]">
                          Đáp án đúng: <span className="font-semibold">{q.options[q.correctIndex]}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-[#F8F8F6] border border-[#E2E1DC] rounded-lg p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2E1DC]">
                  <span className="text-xs font-mono tabular-nums font-medium text-[#57534E]">
                    Câu {currentIdx + 1} / {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-xs font-mono tabular-nums text-[#57534E]">
                    Đã trả lời: {answeredCount}/{QUIZ_QUESTIONS.length} · Đúng: {correctCount}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl sm:text-2xl font-semibold text-[#18181B] leading-snug">
                  {currentQuestion.question}
                </h3>

                <div className="mt-6 space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isPicked = userChoice === idx;
                    const isCorrectOption = idx === currentQuestion.correctIndex;
                    const optionLetter = ['A', 'B', 'C', 'D'][idx];

                    let rowStyle =
                      'bg-white border-[#E2E1DC] text-[#18181B] hover:border-[#1D3557]';
                    if (hasAnsweredCurrent) {
                      if (isCorrectOption) {
                        rowStyle = 'bg-emerald-50 border-emerald-700 text-emerald-950';
                      } else if (isPicked && !isCorrectOption) {
                        rowStyle = 'bg-red-50 border-red-700 text-red-950';
                      } else {
                        rowStyle = 'bg-white border-[#E2E1DC] text-[#57534E] opacity-75';
                      }
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={hasAnsweredCurrent}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left px-4 py-3.5 rounded-md border transition-colors flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${rowStyle}`}
                      >
                        <span className="text-sm sm:text-[15px] leading-snug">
                          <span className="font-mono font-semibold mr-3">{optionLetter}.</span>
                          {option}
                        </span>
                        {hasAnsweredCurrent && isCorrectOption && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 shrink-0">
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                            <span>Đáp án đúng</span>
                          </span>
                        )}
                        {hasAnsweredCurrent && isPicked && !isCorrectOption && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-800 shrink-0">
                            <XCircle className="w-4 h-4" aria-hidden="true" />
                            <span>Bạn đã chọn</span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {hasAnsweredCurrent && (
                  <div className="mt-6 p-4 bg-white border border-[#E2E1DC] rounded-md">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#1D3557]">
                      Giải thích kiến thức
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#292524]">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-5 border-t border-[#E2E1DC] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    disabled={currentIdx === 0}
                    onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 text-xs font-medium rounded-md border border-[#E2E1DC] text-[#18181B] disabled:opacity-40 hover:bg-white transition-colors whitespace-nowrap shrink-0"
                  >
                    Câu trước
                  </button>

                  <div className="flex items-center gap-3">
                    {answeredCount === QUIZ_QUESTIONS.length && (
                      <button
                        type="button"
                        onClick={() => setShowResults(true)}
                        className="px-4 py-2 text-xs font-medium rounded-md border border-[#1D3557] text-[#1D3557] hover:bg-[#EFEFEA] transition-colors whitespace-nowrap shrink-0"
                      >
                        Xem tổng kết
                      </button>
                    )}
                    <button
                      type="button"
                      disabled={!hasAnsweredCurrent}
                      onClick={handleNextQuestion}
                      className="px-5 py-2 text-xs font-medium rounded-md bg-[#1D3557] text-white disabled:opacity-40 hover:bg-[#152843] transition-colors whitespace-nowrap shrink-0"
                    >
                      {currentIdx === QUIZ_QUESTIONS.length - 1 ? 'Hoàn thành bài' : 'Câu tiếp theo'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDY_FLASHCARDS.map((card) => {
              const isOpen = Boolean(expandedCards[card.id]);
              return (
                <article
                  key={card.id}
                  className="bg-[#F8F8F6] border border-[#E2E1DC] rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#8C6239]">
                        {card.tag}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleFlashcard(card.id)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1D3557] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                      >
                        <span>{isOpen ? 'Thu gọn dàn ý' : 'Xem dàn ý gợi ý'}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-4 h-4" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-[#18181B] leading-snug">
                      {card.prompt}
                    </h3>
                  </div>

                  {isOpen && (
                    <ul className="mt-4 pt-4 border-t border-[#E2E1DC] space-y-2.5 text-sm leading-relaxed text-[#292524]">
                      {card.outline.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
