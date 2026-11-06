"use client";

import { useEffect, useRef, useState } from "react";

// Counts a leading number up from 0 when it scrolls into view, keeping any suffix such as "+".
// Values without a leading number are shown unchanged. Reduced-motion users see the final value.
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState<number | null>(target === null ? null : 0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (target === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(target * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  if (target === null) return <span>{value}</span>;
  return (
    <span ref={ref} className="tabular-nums">
      {display ?? 0}
      {suffix}
    </span>
  );
}
