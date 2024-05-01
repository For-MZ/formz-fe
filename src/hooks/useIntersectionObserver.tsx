'use client';

import { useEffect, useRef } from 'react';

/**
 * Intersection Observer를 사용하여 요소의 교차를 감지하는 커스텀 훅
 * @param onIntersect 교차했을때 실행할 콜백함수
 * @param options Intersection Observer 옵션 (기본값: root: null, rootMargin: '0px', threshold: 0.1)
 * @returns observerRef: 요소의 교차를 감지하는 Intersection Observer의 참조
 */
export default function useIntersectionObserver(
  onIntersect: () => void,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  },
) {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 교차하면 콜백 함수 실행
          onIntersect();
        }
      });
    };

    // IntersectionObserver 인스턴스 생성
    const observer = new IntersectionObserver(callback, options);

    // observerRef.current가 참일때만 관찰 시작
    if (observerRef.current) {
      observer.observe(observerRef.current as HTMLElement);
    }

    // 사용하는 컴포넌트가 언마운될시 관찰 중지
    return () => observer.disconnect();
  }, [onIntersect, options]);

  return { observerRef };
}
