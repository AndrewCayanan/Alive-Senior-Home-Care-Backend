"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

export default function RevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔥 THIS is the missing piece
  useRevealOnScroll();

  // re-trigger on route change
  useEffect(() => {
    // nothing needed except rerender trigger
  }, [pathname]);

  return <>{children}</>;
}