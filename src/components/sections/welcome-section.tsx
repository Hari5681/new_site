
"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const names = ["chinnu", "navya", "junnu"];
const staticText = ", this little space is just for you.";

export function WelcomeSection() {
  const [visible, setVisible] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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
  }, [typedName, isDeleting, nameIndex]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('journey');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-primary/5">
      <FloatingParticles />
      <div
        className={cn(
            "z-10 transition-all duration-1000 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground/90 min-h-[100px] md:min-h-[100px]">
            <span className="inline-block">
                {typedName}
                <span className="animate-pulse">|</span>
            </span>
            {staticText}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-in fade-in duration-1000 delay-500 fill-mode-both">
          Nov 20 — A day I’ll always remember.
        </p>
      </div>
      <div className="absolute bottom-8 z-10 animate-in fade-in duration-1000 delay-1000 fill-mode-both">
          <button
            onClick={handleScrollDown}
            className="p-2 rounded-full text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary/10 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </button>
      </div>
    </section>
  );
}
