
'use client';

import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {

  return (
    <div className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-primary/10 backdrop-blur-sm transition-opacity duration-500",
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}>
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
