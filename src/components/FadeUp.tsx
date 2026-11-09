import React, { useEffect, useRef, useState } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // optional delay in ms
  threshold?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.12
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: '300ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 will-change-[opacity,transform]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
