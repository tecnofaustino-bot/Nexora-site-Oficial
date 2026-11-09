import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Shimmer Background while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#DFD4C4]/40 animate-pulse" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
          className={`w-full h-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${props.style?.objectFit ? '' : 'object-cover'}`}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#F0E9DE] text-[#7C7369] text-xs text-center">
          {fallbackIcon}
          <span className="mt-1 font-medium">{alt}</span>
        </div>
      )}
    </div>
  );
};
