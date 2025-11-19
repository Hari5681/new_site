
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, ReactNode } from "react";
import { LoadingScreen } from "./loading-screen";
import { cn } from "@/lib/utils";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [key, setKey] = useState(pathname);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== key.split('?')[0]) {
      setIsAnimatingOut(true);
      setIsTransitioning(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsAnimatingOut(false);
        setDisplayedChildren(children);
        setKey(pathname + '?' + Date.now());
        // A short delay to allow the new content to mount before fading it in
        setTimeout(() => setIsTransitioning(false), 50);
      }, 500); // Corresponds to animation out duration
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, children, key]);

  return (
    <>
      <LoadingScreen isLoading={isTransitioning && isAnimatingOut} />
      <div 
        key={key} 
        className={cn(
          "transition-opacity duration-500",
          (isTransitioning || isAnimatingOut) ? "opacity-0" : "opacity-100"
        )}
      >
        {displayedChildren}
      </div>
    </>
  );
}
