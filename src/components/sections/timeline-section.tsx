"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useOnScreen } from "@/hooks/use-on-screen";

const timelineEvents = [
  { id: 1, text: "The day I proposed…" },
  { id: 2, text: "Two months of memories…" },
  { id: 3, text: "Small moments that meant everything to me." },
];

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="hidden md:block absolute top-7 -left-5 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
      {children}
    </div>
  );
}

export function TimelineSection() {
  return (
    <section className="w-full py-20 px-4 bg-primary/10">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-headline text-4xl md:text-6xl text-center text-gray-800 mb-16">
          Our Journey
        </h2>
        <div className="relative md:border-l-2 md:border-accent/50 md:pl-10 space-y-12">
          {timelineEvents.map((event, index) => (
            <AnimatedCard key={event.id} index={index}>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-card">
                <CardContent className="p-6">
                  <p className="text-lg font-body text-card-foreground">{event.text}</p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
