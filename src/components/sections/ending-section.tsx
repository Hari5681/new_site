"use client";

import { FloatingParticles } from "@/components/floating-particles";

export function EndingSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-background">
      <FloatingParticles />
      <div className="z-10 animate-in fade-in duration-1000 delay-500 fill-mode-both">
        <p className="font-body text-xl md:text-2xl text-gray-700">
          Take your time. I’ll take mine.
          <br />
          I’m not going anywhere.
        </p>
      </div>
    </section>
  );
}
