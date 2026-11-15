import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Minh họa sử thi Thành Troy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EFEFEA] border border-[#E2E1DC] p-8 text-center ${className}`}
      >
        <BookOpen className="w-8 h-8 text-[#1D3557] mb-3" strokeWidth={1.5} />
        <p className="font-serif text-base font-semibold text-[#18181B]">{fallbackTitle}</p>
        <p className="text-xs text-[#57534E] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
