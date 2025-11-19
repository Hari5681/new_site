
'use client';

import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRef } from "react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const memories = [
    {
      id: '1',
      title: "First Time You Spoke to Me",
      excerpt: "‘Why you don’t talk to anyone?’",
    },
    {
      id: '2',
      title: "My Attempts to Tell You",
      excerpt: "Feelings I tried to share, but couldn't...",
    },
    {
      id: '3',
      title: "Our First Hug",
      excerpt: "A warm connection I’ll never forget.",
    },
    {
      id: '5',
      title: "Your Birthday",
      excerpt: "A day dedicated to you.",
    },
    {
      id: '4',
      title: "Every Small Moment",
      excerpt: "Every talk, every smile... a special chapter.",
    },
  ];

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "relative transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {children}
    </div>
  );
}

export default function TwoMonthsJourneyPage() {

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 relative bg-primary/5 overflow-x-hidden">
      <FloatingParticles />
      <div className="z-10 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
            <Link href="/#">
            <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>
            </Link>
        </div>

        <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground/80">
                memory with u
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4">
                “Moments, conversations, and silent understandings.”
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {memories.map((memory, index) => (
            <AnimatedCard key={memory.id} index={index}>
              <Link href={`/journey/2-months/memory/${memory.id}`}>
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-card cursor-pointer hover:scale-105 hover:shadow-primary/20">
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl text-primary-foreground/80">{memory.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-body text-card-foreground/80 italic">
                      “{memory.excerpt}”
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center my-24 py-12 animate-in fade-in duration-1000 delay-500 fill-mode-both">
            <p className="font-body text-xl md:text-2xl text-muted-foreground">
                These moments meant more than I ever showed.
            </p>
        </div>

      </div>
    </main>
  );
}
