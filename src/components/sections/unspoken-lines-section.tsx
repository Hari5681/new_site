import { FloatingParticles } from "../floating-particles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function UnspokenLinesSection() {
  return (
    <section className="w-full py-24 px-4 bg-primary/10 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl text-center text-gray-800 mb-12">
          Unspoken Lines from me
        </h2>
        <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-primary/10 text-center">
          <p className="font-body text-lg leading-relaxed text-card-foreground mb-8">
            Here are the things that are often left unsaid. A place for my
            heart to speak freely.
          </p>
          <Link href="/journey/unspoken-lines">
            <Button>
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
