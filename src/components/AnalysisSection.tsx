import { useState } from 'react';
import {
  ART_ANALYSIS,
  CONTENT_ANALYSIS,
  CURRICULUM_COMPARISON,
} from '../data/troyData';

type AnalysisTab = 'literary' | 'curriculum';

export function AnalysisSection() {
  const [activeTab, setActiveTab] = useState<AnalysisTab>('literary');

  return (
    <section id="phan-tich" className="py-16 lg:py-20 border-b border-[#E2E1DC] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E2E1DC]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium mb-2">
              04. Tổng Kết Chuyên Sâu
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#18181B] text-balance">
              Giá Trị Nội Dung, Nghệ Thuật & Hệ Thống SGK
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Chế độ xem phân tích"
            className="inline-flex items-center gap-1 p-1 bg-[#EFEFEA] border border-[#E2E1DC] rounded-lg self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'literary'}
              onClick={() => setActiveTab('literary')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${
                activeTab === 'literary'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#57534E] hover:text-[#18181B]'
              }`}
            >
              Nội dung & Nghệ thuật
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'curriculum'}
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557] ${
                activeTab === 'curriculum'
                  ? 'bg-white text-[#18181B] shadow-xs'
                  : 'text-[#57534E] hover:text-[#18181B]'
              }`}
            >
              Đối chiếu Ngữ Văn 10
            </button>
          </div>
        </div>

        {activeTab === 'literary' ? (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white border border-[#E2E1DC] rounded-lg p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#18181B] pb-4 border-b border-[#E2E1DC]">
                Giá trị nội dung
              </h3>
              <div className="divide-y divide-[#E2E1DC]">
                {CONTENT_ANALYSIS.map((point) => (
                  <div key={point.index} className="py-5 first:pt-4 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono tabular-nums text-xs font-semibold text-[#1D3557]">
                        {point.index}
                      </span>
                      <h4 className="text-base font-semibold text-[#18181B]">{point.title}</h4>
                    </div>
                    <p className="mt-1.5 pl-7 text-sm font-medium text-[#57534E]">
                      {point.summary}
                    </p>
                    <p className="mt-2 pl-7 text-sm leading-relaxed text-[#292524]">
                      {point.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E2E1DC] rounded-lg p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#18181B] pb-4 border-b border-[#E2E1DC]">
                Đặc sắc nghệ thuật sử thi
              </h3>
              <div className="divide-y divide-[#E2E1DC]">
                {ART_ANALYSIS.map((point) => (
                  <div key={point.index} className="py-5 first:pt-4 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono tabular-nums text-xs font-semibold text-[#8C6239]">
                        {point.index}
                      </span>
                      <h4 className="text-base font-semibold text-[#18181B]">{point.title}</h4>
                    </div>
                    <p className="mt-1.5 pl-7 text-sm font-medium text-[#57534E]">
                      {point.summary}
                    </p>
                    <p className="mt-2 pl-7 text-sm leading-relaxed text-[#292524]">
                      {point.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 bg-white border border-[#E2E1DC] rounded-lg overflow-hidden">
            <div className="p-6 border-b border-[#E2E1DC]">
              <h3 className="font-serif text-xl font-semibold text-[#18181B]">
                Vị trí của “Thành Troy (I-li-át)” trong 3 bộ sách Ngữ Văn lớp 10
              </h3>
              <p className="mt-1.5 text-sm text-[#57534E]">
                Bảng tổng hợp giúp phân biệt rành mạch văn bản sử thi Hy Lạp về Thành Troy với các
                văn bản thần thoại cùng chương trình lớp 10 (kể cả khi dễ nhầm lẫn tên gọi với{' '}
                <span className="font-semibold text-[#18181B]">Thần Trụ Trời</span>).
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E1DC] bg-[#F8F8F6] text-xs uppercase tracking-wider text-[#57534E]">
                    <th className="py-3.5 px-5 font-semibold">Văn bản</th>
                    <th className="py-3.5 px-5 font-semibold">Thể loại</th>
                    <th className="py-3.5 px-5 font-semibold">Bộ sách SGK</th>
                    <th className="py-3.5 px-5 font-semibold">Chủ đề & Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E1DC] text-sm">
                  {CURRICULUM_COMPARISON.map((row) => (
                    <tr key={row.workTitle} className="hover:bg-[#F8F8F6]/70">
                      <td className="py-4 px-5 font-serif font-semibold text-[#18181B]">
                        {row.workTitle}
                      </td>
                      <td className="py-4 px-5 text-[#44403C] whitespace-nowrap">{row.genre}</td>
                      <td className="py-4 px-5 text-[#57534E]">{row.textbook}</td>
                      <td className="py-4 px-5 text-[#292524]">
                        <p className="font-medium">{row.coreTheme}</p>
                        <p className="text-xs text-[#57534E] mt-1">{row.connectionNote}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
