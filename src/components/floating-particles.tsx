"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Particle = ({
  delay,
  duration,
  size,
  left,
}: {
  delay: number;
  duration: number;
  size: number;
  left: number;
}) => {
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

type ParticleData = {
  id: number;
  delay: number;
  duration: number;
  size: number;
  left: number;
};

export function FloatingParticles() {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 5,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {particles.map((p) => (
        <Particle
          key={p.id}
          delay={p.delay}
          duration={p.duration}
          size={p.size}
          left={p.left}
        />
      ))}
    </div>
  );
}
