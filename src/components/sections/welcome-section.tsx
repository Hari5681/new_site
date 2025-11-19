
"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const names = ["chinnu", "junnu", "navya"];
const fullTextPrefix = ", this little space is just for you.";

export function WelcomeSection() {
  const [visible, setVisible] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentName = names[nameIndex];
      const fullText = currentName + fullTextPrefix;
      
      if (isDeleting) {
        // Deleting name part
        setTypedText(prev => prev.substring(0, prev.length - 1));
        if (typedText.length === 0) {
            setIsDeleting(false);
            setNameIndex(prev => (prev + 1) % names.length);
        }
      } else {
        // Typing name part
        if (typedText.length < currentName.length) {
          setTypedText(fullText.substring(0, typedText.length + 1));
        } else if (typedText.length < fullText.length) {
          // Typing suffix part
          setTypedText(fullText.substring(0, typedText.length + 1));
        } else {
          // Pause and then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, nameIndex]);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-primary/5">
      <FloatingParticles />
      <div
        className={cn(
            "z-10 transition-all duration-1000 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground/90 min-h-[160px] md:min-h-[100px]">
            <span className="inline-block">
                {typedText}
                <span className="animate-pulse">|</span>
            </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-in fade-in duration-1000 delay-500 fill-mode-both">
          Nov 20 — A day I’ll always remember.
        </p>
      </div>
    </section>
  );
}
