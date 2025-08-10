import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  root = null
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, root]);

  return { ref, isIntersecting: triggerOnce ? hasTriggered : isIntersecting };
}

// Hook for scroll-based animations
export function useScrollAnimation(options: {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  triggerOnce?: boolean;
} = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    animationClass = "animate-in",
    triggerOnce = true
  } = options;

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (isIntersecting) {
      element.classList.add(animationClass);
    } else if (!triggerOnce) {
      element.classList.remove(animationClass);
    }
  }, [isIntersecting, animationClass, triggerOnce, ref]);

  return { ref, isIntersecting };
}

// Hook for parallax effect
export function useParallax(options: {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
} = {}) {
  const { speed = 0.5, direction = 'up', threshold = 0.1 } = options;
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: false
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (!isIntersecting) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      let transform = '';
      switch (direction) {
        case 'up':
          transform = `translateY(${rate}px)`;
          break;
        case 'down':
          transform = `translateY(${-rate}px)`;
          break;
        case 'left':
          transform = `translateX(${rate}px)`;
          break;
        case 'right':
          transform = `translateX(${-rate}px)`;
          break;
      }

      element.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntersecting, speed, direction, ref]);

  return { ref, isIntersecting };
}

// Hook for lazy loading
export function useLazyLoad(options: {
  threshold?: number;
  rootMargin?: string;
  placeholder?: string;
} = {}) {
  const { threshold = 0.1, rootMargin = "50px", placeholder } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const loadImage = (src: string) => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  };

  return {
    ref,
    isIntersecting,
    isLoaded,
    imageSrc,
    loadImage
  };
}
