interface HeaderProps {
  scrollProgress: number;
}

const NAV_ITEMS = [
  { href: '#tong-quan', label: 'Tổng quan' },
  { href: '#than-linh', label: 'Thần linh' },
  { href: '#doan-trich', label: 'Đoạn trích' },
  { href: '#phan-tich', label: 'Phân tích' },
  { href: '#on-tap', label: 'Ôn tập' },
];

export function Header({ scrollProgress }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-sm border-b border-[#E2E1DC]">
      <div
        className="h-[2px] bg-[#1D3557] transition-transform duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3557]"
        >
          Thành Troy · Ngữ Văn 10
        </a>

        <nav
          aria-label="Điều hướng chính"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#18181B] hover:underline underline-offset-4 decoration-[#1D3557] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3557]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href="#on-tap"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#1D3557] rounded-md hover:bg-[#152843] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
          >
            Làm trắc nghiệm
          </a>
        </div>
      </div>
    </header>
  );
}
