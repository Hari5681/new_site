import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
          <div className="space-y-6 font-body text-lg text-card-foreground">
            <p>
              Here you can write the things that are often left unsaid. Pour
              your heart out, share your deepest feelings, and let your words
              build another bridge between you.
            </p>
            <p>
              This is your space to be vulnerable and true.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
