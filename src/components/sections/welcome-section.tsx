
"use client";

import { FloatingParticles } from "@/components/floating-particles";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const names = ["chinnu", "junnu", "navya"];

export function WelcomeSection() {
  const [visible, setVisible] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        setFade(true); // Start fade-in
      }, 500); // Duration of fade-out
    }, 2500); // Time each name is displayed

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      <FloatingParticles />
      <div
        className={cn(
            "z-10 transition-all duration-1000 ease-out",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <h1 className="font-headline text-5xl md:text-7xl text-gray-800">
            <span className="inline-block">
                <span
                    className={cn(
                    "inline-block transition-all duration-500 ease-out",
                    fade ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"
                    )}
                >
                    {names[nameIndex]}
                </span>
            </span>
          , this little space is just for you.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Nov 20 — A day I’ll always remember.
        </p>
      </div>
    </section>
  );
}
