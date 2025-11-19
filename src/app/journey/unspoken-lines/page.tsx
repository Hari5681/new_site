'use client';

import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const unspokenLines = [
  {
    id: 1,
    line: "The way your eyes light up when you talk about something you're passionate about is captivating.",
  },
  {
    id: 2,
    line: "You have a kindness that you show in small ways, even when you think no one is watching.",
  },
  {
    id: 3,
    line: "I've noticed you have a quiet strength that gets you through anything.",
  },
];

export default function UnspokenLinesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24 relative bg-background">
      <FloatingParticles />
      <div className="z-10 w-full max-w-4xl">
        <div className="animate-in fade-in duration-500">
            <Link href="/#">
            <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>
            </Link>
        </div>
        <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-1000 delay-200 fill-mode-both">
          <h1 className="font-headline text-4xl md:text-6xl text-gray-800 mb-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300 fill-mode-both">
            Unspoken Lines
          </h1>
          <p className="font-body text-lg text-card-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500 fill-mode-both">
            Here you can write the things that are often left unsaid. Pour your
            heart out, share your deepest feelings, and let your words build
            another bridge between you.
          </p>

          <div className="grid gap-6 md:grid-cols-1">
            {unspokenLines.map((item, index) => (
              <div key={item.id} className="animate-in fade-in-0 slide-in-from-bottom-5 duration-700 fill-mode-both" style={{ animationDelay: `${700 + index * 200}ms` }}>
                <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-6">
                    <p className="font-body text-lg text-card-foreground italic">
                        "{item.line}"
                    </p>
                    </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
