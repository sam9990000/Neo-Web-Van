import { useEffect, useState } from 'react';
import { Check, Copy, Download, ExternalLink, X } from 'lucide-react';

interface GitHubPublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export async function triggerStandaloneHtmlDownload(
  onStatus?: (status: 'idle' | 'downloading' | 'done' | 'error') => void
) {
  onStatus?.('downloading');
  try {
    const response = await fetch('./thanh-troy-ngu-van-10.html');
    if (!response.ok) {
      throw new Error('Không thể tải tệp đóng gói sẵn');
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    onStatus?.('done');
  } catch {
    onStatus?.('error');
  }
}

export function GitHubPublishModal({ isOpen, onClose }: GitHubPublishModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'done' | 'error'>(
    'idle'
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-[#E2E1DC] rounded-lg p-6 sm:p-8 text-[#18181B]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E2E1DC]">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#57534E] font-medium">
              Triển Khai Công Khai
            </p>
            <h2
              id="github-modal-title"
              className="mt-1 font-serif text-2xl font-semibold text-[#18181B]"
            >
              Tải File & Lấy Link Web Qua GitHub Pages
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng hộp thoại"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[#E2E1DC] text-[#57534E] hover:text-[#18181B] hover:bg-[#F8F8F6] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3557]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-[#292524]">
          <div className="p-4 sm:p-5 bg-[#F8F8F6] border border-[#E2E1DC] rounded-md">
            <p className="font-semibold text-[#18181B]">
              Bước 1 · Tải file web hoàn chỉnh (chỉ 1 file duy nhất)
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#57534E]">
              Tệp <code className="font-mono text-xs bg-[#EFEFEA] px-1.5 py-0.5 rounded">index.html</code>{' '}
              đã gói sẵn toàn bộ nội dung, trắc nghiệm và tranh minh họa. Tải về máy xong là đưa
              thẳng lên GitHub được ngay, không cần cài thêm phần mềm.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={downloadState === 'downloading'}
                onClick={() => triggerStandaloneHtmlDownload(setDownloadState)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#1D3557] rounded-md hover:bg-[#152843] disabled:opacity-60 transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>
                  {downloadState === 'downloading'
                    ? 'Đang tải file...'
                    : downloadState === 'done'
                    ? 'Đã tải index.html (bấm để tải lại)'
                    : 'Tải file index.html'}
                </span>
              </button>

              <a
                href="./thanh-troy-ngu-van-10.html"
                download="index.html"
                className="text-xs font-medium text-[#1D3557] underline underline-offset-4 hover:text-[#152843] whitespace-nowrap"
              >
                Link tải dự phòng
              </a>
            </div>
            {downloadState === 'error' && (
              <p className="mt-2 text-xs text-red-700">
                Không tải tự động được trong khung xem trước. Hãy bấm chuột phải vào “Link tải dự
                phòng” rồi chọn “Lưu liên kết thành...”.
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="pb-4 border-b border-[#E2E1DC]">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#1D3557]">
                Bước 2 & 3 · Đưa lên GitHub để lấy link công khai
              </p>
              <ol className="mt-2.5 space-y-2 list-decimal list-inside text-[#292524]">
                <li>
                  Mở{' '}
                  <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#1D3557] font-medium underline underline-offset-4"
                  >
                    <span>github.com/new</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                  , đặt tên dự án (ví dụ <code className="font-mono text-xs bg-[#EFEFEA] px-1.5 py-0.5 rounded">thanh-troy</code>), chọn{' '}
                  <span className="font-semibold">Public</span> rồi bấm <span className="font-semibold">Create repository</span>.
                </li>
                <li>
                  Bấm dòng <span className="font-semibold">uploading an existing file</span> (hoặc{' '}
                  <span className="font-semibold">Add file → Upload files</span>), kéo thả file{' '}
                  <code className="font-mono text-xs bg-[#EFEFEA] px-1.5 py-0.5 rounded">index.html</code>{' '}
                  vừa tải vào rồi bấm <span className="font-semibold">Commit changes</span>.
                </li>
                <li>
                  Vào <span className="font-semibold">Settings → Pages</span>, tại mục{' '}
                  <span className="font-semibold">Branch</span> chọn{' '}
                  <code className="font-mono text-xs bg-[#EFEFEA] px-1.5 py-0.5 rounded">main</code>{' '}
                  và <code className="font-mono text-xs bg-[#EFEFEA] px-1.5 py-0.5 rounded">/ (root)</code>{' '}
                  rồi bấm <span className="font-semibold">Save</span>.
                </li>
              </ol>
            </div>

            <div className="p-4 bg-[#F8F8F6] border border-[#E2E1DC] rounded-md">
              <p className="font-semibold text-[#18181B]">
                Link web của bạn sau khoảng 1 phút sẽ có dạng:
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <code className="font-mono text-xs sm:text-sm text-[#1D3557] break-all">
                  https://&lt;ten-tai-khoan&gt;.github.io/&lt;ten-du-an&gt;/
                </code>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy('url-pattern', 'https://<ten-tai-khoan>.github.io/<ten-du-an>/')
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-[#E2E1DC] bg-white text-[#18181B] hover:border-[#1D3557] transition-colors whitespace-nowrap shrink-0"
                >
                  {copiedKey === 'url-pattern' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Sao chép mẫu</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E2E1DC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-[#1D3557] rounded-md hover:bg-[#152843] transition-colors whitespace-nowrap shrink-0"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
