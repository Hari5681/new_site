
"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function EndingSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const textToReveal = "Chunnu… I love you more than I can ever say.".split(" ");

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-background">
      <FloatingParticles />
      <div className="z-10 animate-in fade-in duration-1000 delay-500 fill-mode-both">
        
        {!isRevealed ? (
            <div className="flex flex-col items-center gap-4">
                <Button 
                    onClick={handleReveal} 
                    size="lg" 
                    className="rounded-full p-6 shadow-lg transform transition-transform hover:scale-110 bg-pink-400 hover:bg-pink-500 text-white animate-pulse shadow-pink-400/50"
                >
                    <Heart className="w-8 h-8" />
                </Button>
                <p className="font-body text-lg text-muted-foreground">Click Me</p>
            </div>
        ) : (
            <div className="flex flex-col items-center">
                <h2 
                    className="font-headline text-5xl md:text-8xl text-pink-400"
                >
                    {textToReveal.map((word, index) => (
                        <span
                            key={index}
                            className="inline-block transition-all duration-700 ease-out"
                            style={{ 
                                opacity: isRevealed ? 1 : 0, 
                                transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                                transitionDelay: `${index * 200}ms`
                            }}
                        >
                            {word}&nbsp;
                        </span>
                    ))}
                </h2>
            </div>
        )}

      </div>
    </section>
  );
}
