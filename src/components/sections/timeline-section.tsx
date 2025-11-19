
"use client";

import { useRef } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOnScreen } from "@/hooks/use-on-screen";
import { FloatingParticles } from "@/components/floating-particles";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const timelineEvents = [
  { id: 1, title: "The Day I'll Propose…", href: "/journey/proposal", description: "Counting down to our forever." },
  { id: 2, title: "memories", href: "/journey/2-months", description: "Moments I’ll always keep close." },
  { id: 3, title: "A Letter For You", href: "/journey/letter", description: "Words straight from my heart." },
];

function AnimatedCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
}

export function TimelineSection() {
  return (
    <section id="journey" className="w-full py-24 px-4 bg-primary/10 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl text-primary-foreground/80 animate-in fade-in-0 duration-1000">
            KEEP JOURNER
          </h2>
           <p className="font-body text-lg md:text-xl text-muted-foreground mt-4 animate-in fade-in-0 duration-1000 delay-200">
                A collection of our shared moments and feelings.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <AnimatedCard key={event.id} index={index}>
              <Link href={event.href} className="block group">
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-primary/20 bg-card cursor-pointer transform hover:-translate-y-2 hover:shadow-primary/20">
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-base text-card-foreground/80 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300">
                        <span>Explore</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

