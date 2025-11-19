import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const unspokenLines = [
  {
    id: 1,
    line: "The way you smile when you think no one is looking... it's my favorite thing in the world.",
  },
  {
    id: 2,
    line: "Sometimes I get scared of how much I love you, because I can't imagine my life without you.",
  },
  {
    id: 3,
    line: "I replay our first date in my head more often than I'd admit.",
  },
];

export default function UnspokenLinesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24 relative bg-background">
      <FloatingParticles />
      <div className="z-10 w-full max-w-4xl">
        <Link href="/#">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="font-headline text-4xl md:text-6xl text-gray-800 mb-4">
            Unspoken Lines
          </h1>
          <p className="font-body text-lg text-card-foreground mb-8">
            Here you can write the things that are often left unsaid. Pour your
            heart out, share your deepest feelings, and let your words build
            another bridge between you.
          </p>

          <div className="grid gap-6 md:grid-cols-1">
            {unspokenLines.map((item) => (
              <Card key={item.id} className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <p className="font-body text-lg text-card-foreground italic">
                    "{item.line}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}