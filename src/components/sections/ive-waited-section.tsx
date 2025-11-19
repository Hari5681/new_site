
"use client";

import { FloatingParticles } from "@/components/floating-particles";

export function IveWaitedSection() {
  return (
    <section className="w-full py-24 px-4 bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-3xl relative z-10 text-center animate-in fade-in duration-1000 delay-500 fill-mode-both">
        <h2 className="font-headline text-5xl md:text-7xl text-primary-foreground/80">
          I've waited...
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          ...for this feeling, this connection, this moment with you. Every day has been a step closer to this, and it's more than I could have ever imagined.
        </p>
      </div>
    </section>
  );
}
