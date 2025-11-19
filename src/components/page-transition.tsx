"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, ReactNode } from "react";
import { LoadingScreen } from "./loading-screen";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [key, setKey] = useState(pathname);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== key.split('?')[0]) {
      setIsTransitioning(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setDisplayedChildren(children);
        setKey(pathname + '?' + Date.now());
        setIsTransitioning(false);
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
      <LoadingScreen isLoading={isTransitioning} />
      <div key={key} className="animate-in fade-in duration-700">
        {displayedChildren}
      </div>
    </>
  );
}
