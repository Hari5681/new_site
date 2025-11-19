'use client';

import { Heart } from 'lucide-react';

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/10 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative">
        <Heart
          className="text-pink-300 w-24 h-24 animate-pulse"
          fill="currentColor"
        />
        <Heart
          className="absolute top-0 left-0 text-pink-300 w-24 h-24 animate-ping"
          fill="currentColor"
        />
      </div>
    </div>
  );
}
