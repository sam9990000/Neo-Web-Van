import { ArrowRight } from 'lucide-react';
import { TROY_IMAGES } from '../data/troyData';
import { ResilientImage } from './ResilientImage';

const CURRICULUM_FACTS = [
  { label: 'Tác phẩm gốc', value: 'Sử thi I-li-át (Khúc ca VI)' },
  { label: 'Tác giả', value: 'Đại thi hào Hô-me-rơ' },
  { label: 'Sách giáo khoa', value: 'Ngữ Văn 10 · Kết nối tri thức' },
  { label: 'Trọng tâm bài học', value: 'Anh hùng sử thi & Thần linh' },
];

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[#E2E1DC] bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-12 lg:pt-14 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#57534E] mb-4">
                Ngữ Văn Lớp 10 <span aria-hidden="true" className="mx-1.5">·</span> Sử Thi Hy Lạp{' '}
                <span aria-hidden="true" className="mx-1.5">·</span> Hồ Sơ Văn Học
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold leading-[1.12] tracking-tight text-[#18181B] text-balance">
                Thành Troy & Các Vị Thần Trong Sử Thi I-li-át
              </h1>

              <p className="mt-6 text-base sm:text-[17px] leading-relaxed text-[#44403C] max-w-xl">
                Khám phá toàn cảnh cuộc chiến mười năm quanh thành cổ Tơ-roa, hệ thống thần linh
                trên đỉnh Ô-lim-pơ và phân tích chuyên sâu đoạn trích trọng tâm{' '}
                <span className="font-semibold text-[#18181B]">
                  “Héc-to từ biệt Ăng-đrô-mác”
                </span>{' '}
                trong chương trình Ngữ Văn lớp 10.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E1DC] flex flex-wrap items-center gap-5">
              <a
                href="#doan-trich"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1D3557] rounded-md hover:bg-[#152843] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
              >
                <span>Đọc hiểu đoạn trích SGK</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#than-linh"
                className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-[#18181B] hover:text-[#1D3557] underline underline-offset-4 decoration-[#D6CEBE] hover:decoration-[#1D3557] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
              >
                Khám phá các vị thần & anh hùng
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <figure className="flex-1 flex flex-col bg-white border border-[#E2E1DC] p-2.5 rounded-lg">
              <div className="relative flex-1 min-h-[260px] lg:min-h-[360px] overflow-hidden rounded bg-[#EFEFEA]">
                <ResilientImage
                  src={TROY_IMAGES.heroCitadel}
                  alt="Toàn cảnh thành cổ Tơ-roa kiên cố nhìn ra biển Ê-giê và hạm đội chiến thuyền Hy Lạp lúc hoàng hôn"
                  className="w-full h-full lg:h-full object-cover"
                  fallbackTitle="Thành Tơ-roa bên bờ biển Ê-giê"
                />
              </div>
              <figcaption className="pt-2.5 px-1 text-xs font-serif italic text-[#57534E]">
                Hình 1 · Thành Tơ-roa tường cao hào sâu bên bờ biển Ê-giê, bối cảnh thiên sử thi I-li-át.
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#E2E1DC] pt-6 gap-6">
          {CURRICULUM_FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col">
              <dt className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[#18181B]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
