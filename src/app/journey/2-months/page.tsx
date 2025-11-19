
'use client';

import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft, Heart, MessageSquare, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    title: "Day 1 – First spark",
    text: "A small crush… a calm vibe I didn’t expect.",
    icon: Heart,
  },
  {
    title: "Early Days – Getting comfortable",
    text: "Slowly, talking to you felt natural, effortless, and warm.",
    icon: MessageSquare,
  },
  {
    title: "Week 1 – Understanding begins",
    text: "You listened without judging. Even my overthinking felt safe.",
    icon: Star,
  },
  {
    title: "Week 2 – Unexpected attachment",
    text: "Your small cares, small questions, small attention… all touched me deeply.",
    icon: Heart,
  },
  {
    title: "Week 3 – Fear + comfort",
    text: "My past scared me, but your presence softened things.",
    icon: MessageSquare,
  },
  {
    title: "Week 4 – Silent feelings",
    text: "Talking to you became a habit… a part of my day.",
    icon: Star,
  },
  {
    title: "Month 2 – Realization",
    text: "I didn’t plan it, but I got attached… naturally, silently, deeply.",
    icon: Heart,
  },
  {
    title: "Up to Today – What I feel now",
    text: "You filled a space I didn’t know was empty.",
    icon: Star,
  },
];

const memoryNotes = [
    { text: "Your calm replies" },
    { text: "The way you listened" },
    { text: "Your small care" },
    { text: "Your softness" },
    { text: "Your unexpected presence" },
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
      <div className="hidden md:block absolute top-7 -left-5 w-4 h-4 bg-accent rounded-full border-4 border-primary/10 z-10"></div>
      {children}
    </div>
  );
}


export default function TwoMonthsJourneyPage() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteVisible = useOnScreen(quoteRef);

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
                Our 2-Month Journey
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4">
                “Two months of moments, conversations, and silent understandings.”
            </p>
        </div>

        <div className="relative md:border-l-2 md:border-accent/50 md:pl-10 space-y-12 mb-24">
          {timelineEvents.map((event, index) => (
            <AnimatedCard key={event.title} index={index}>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/20 bg-card cursor-pointer">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <event.icon className="w-6 h-6 text-primary" />
                        <CardTitle className="font-headline text-2xl text-primary-foreground/80">{event.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-body text-card-foreground/80 italic">
                    “{event.text}”
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        <div 
            ref={quoteRef}
            className={cn("text-center my-24 transition-opacity duration-1000", isQuoteVisible ? "opacity-100" : "opacity-0")}
        >
            <p className="font-headline text-4xl md:text-5xl text-primary-foreground/70 italic">
                “Some connections don’t need time… they just need truth.”
            </p>
        </div>

        <div className="my-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {memoryNotes.map((note, index) => (
                     <div
                        key={index}
                        className="break-inside-avoid animate-in fade-in slide-in-from-bottom-5 duration-700"
                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                     >
                        <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-primary/10 bg-card hover:scale-105 hover:shadow-primary/20 h-full">
                            <CardContent className="p-6 flex items-center justify-center h-full">
                                <p className="font-body text-base text-card-foreground/90 italic text-center">
                                {note.text}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className="my-24">
             <Card className="rounded-lg shadow-lg border-primary/10 bg-white/30 backdrop-blur-md">
                <CardContent className="p-8 md:p-12">
                    <p className="font-body text-lg text-card-foreground/80 italic leading-relaxed text-center">
                        This is a placeholder for your emotional paragraph. You can add your thoughts here later.
                    </p>
                </CardContent>
             </Card>
        </div>

        <div className="text-center my-24 py-12 animate-in fade-in duration-1000 delay-500 fill-mode-both">
            <p className="font-body text-xl md:text-2xl text-muted-foreground">
                These 2 months meant more than I ever showed.
            </p>
        </div>

      </div>
    </main>
  );
}
