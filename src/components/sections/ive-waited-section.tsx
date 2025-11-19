
"use client";

import { FloatingParticles } from "@/components/floating-particles";

export function IveWaitedSection() {
  return (
    <section className="w-full py-24 px-4 bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-3xl relative z-10 text-center animate-in fade-in duration-1000 delay-500 fill-mode-both">
        
      </div>
    </section>
  );
}
