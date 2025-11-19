
"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const names = ["Chinnu", "Navya", "Junnu"];
const staticTextPart1 = "… I love you more than I can ever say.";

export function EndingSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };
  
  useEffect(() => {
    if (!isRevealed) return;

    const handleTyping = () => {
      const currentName = names[nameIndex];
      
      if (isDeleting) {
        if (typedName.length > 0) {
          setTypedName(prev => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setNameIndex(prev => (prev + 1) % names.length);
        }
      } else { // Typing
        if (typedName.length < currentName.length) {
          setTypedName(currentName.substring(0, typedName.length + 1));
        } else {
          // Pause and then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 80 : 120;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typedName, isDeleting, nameIndex, isRevealed]);


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
                <h2 className="font-headline text-5xl md:text-8xl text-pink-400">
                    <span
                        className="inline-block transition-all duration-700 ease-out"
                        style={{ opacity: 1, transform: 'translateY(0) scale(1)' }}
                    >
                        <span className="inline-block">
                          {typedName}
                          <span className="animate-pulse">|</span>
                        </span>
                        {staticTextPart1}
                    </span>
                </h2>
            </div>
        )}

      </div>
    </section>
  );
}
