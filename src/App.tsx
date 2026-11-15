import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TimelineChronicle } from './components/TimelineChronicle';
import { PantheonExplorer } from './components/PantheonExplorer';
import { ExcerptReader } from './components/ExcerptReader';
import { AnalysisSection } from './components/AnalysisSection';
import { QuizAndStudy } from './components/QuizAndStudy';
import { GitHubPublishModal, triggerStandaloneHtmlDownload } from './components/GitHubPublishModal';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / maxScroll)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#18181B] overflow-x-clip">
      <Header scrollProgress={scrollProgress} />

      <main className="flex-1">
        <HeroSection />
        <TimelineChronicle />
        <PantheonExplorer />
        <ExcerptReader />
        <AnalysisSection />
        <QuizAndStudy />
      </main>

      <footer className="border-t border-[#E2E1DC] bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
          <div>
            <p className="font-serif text-sm font-semibold text-[#18181B]">
              Thành Troy · Chuyên Trang Ngữ Văn Lớp 10
            </p>
            <p className="mt-1">
              Tài liệu tham khảo học tập Sử thi <span className="italic">I-li-át</span> (Hô-me-rơ) và Hệ thống Thần thoại Hy Lạp.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#tong-quan" className="hover:text-[#18181B] transition-colors">
              Tổng quan
            </a>
            <a href="#than-linh" className="hover:text-[#18181B] transition-colors">
              Thần linh
            </a>
            <a href="#doan-trich" className="hover:text-[#18181B] transition-colors">
              Đoạn trích
            </a>
            <a href="#on-tap" className="hover:text-[#18181B] transition-colors">
              Ôn tập
            </a>
            <button
              type="button"
              onClick={() => triggerStandaloneHtmlDownload()}
              className="font-medium text-[#18181B] hover:text-[#1D3557] hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
            >
              Tải file index.html
            </button>
            <button
              type="button"
              onClick={() => setIsGitHubModalOpen(true)}
              className="font-medium text-[#1D3557] hover:underline underline-offset-4 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
            >
              Xuất bản GitHub Pages
            </button>
          </div>
        </div>
      </footer>

      <GitHubPublishModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}
