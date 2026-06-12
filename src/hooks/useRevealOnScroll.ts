"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useRevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const init = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-card"
      );

      if (!elements.length) return;

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      elements.forEach((el) => observer!.observe(el));
    };

    // 🔥 CRITICAL FIX: wait for DOM AFTER route change render
    const timeout = setTimeout(() => {
      init();
    }, 50);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname]); // 👈 THIS is what you were missing
}