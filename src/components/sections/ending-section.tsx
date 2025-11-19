"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function EndingSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-background">
      <FloatingParticles />
      <div className="z-10 animate-in fade-in duration-1000 delay-500 fill-mode-both">
        
        {!isRevealed ? (
            <div className="flex flex-col items-center gap-8">
                <Button onClick={handleReveal} size="lg" className="rounded-full p-6 shadow-lg transform transition-transform hover:scale-110">
                    <Heart className="w-8 h-8" />
                </Button>
            </div>
        ) : (
            <div className="flex flex-col items-center">
                <h2 
                    className={cn(
                        "font-headline text-5xl md:text-8xl text-pink-400 transition-all duration-1000 ease-in-out",
                        isRevealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
                    )}
                >
                    I LOVE SO MUCH CHINNU
                </h2>
            </div>
        )}

      </div>
    </section>
  );
}
