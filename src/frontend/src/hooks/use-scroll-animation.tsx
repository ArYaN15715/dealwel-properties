import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface ScrollAnimationResult {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {},
): ScrollAnimationResult {
  const isMobile = useIsMobile();
  const mobileThreshold = 0.05;
  const desktopThreshold = 0.12;

  const {
    threshold = isMobile ? mobileThreshold : desktopThreshold,
    rootMargin = "0px 0px -40px 0px",
    once = true,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// Convenience component wrapper for scroll animations
interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "up" | "left" | "right" | "scale";
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateOnScroll({
  children,
  animation = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animClass = {
    up: "shuttle-in-up",
    left: "shuttle-in-left",
    right: "shuttle-in-right",
    scale: "shuttle-scale",
  }[animation];

  const delayClass = delay > 0 ? `delay-${delay}` : "";

  const classes = [
    !isVisible ? "animate-hidden" : "",
    isVisible ? `animate-visible ${animClass}` : "",
    delayClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    // @ts-expect-error -- dynamic tag
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
