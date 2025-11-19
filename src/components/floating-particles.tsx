"use client";

import { Heart } from "lucide-react";

const Particle = ({ delay, duration, size }: { delay: number; duration: number; size: number }) => {
  const left = Math.random() * 100;
  return (
    <div
      className="absolute bottom-[-20px] animate-float"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <Heart
        className="text-pink-200/50"
        style={{ width: `${size}px`, height: `${size}px` }}
        fill="currentColor"
        strokeWidth={0}
      />
    </div>
  );
};

export function FloatingParticles() {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 5,
    size: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} duration={p.duration} size={p.size} />
      ))}
    </div>
  );
}
