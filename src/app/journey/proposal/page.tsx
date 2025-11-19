import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProposalPage() {
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
            The Day I Proposed
          </h1>
          <div className="space-y-6 font-body text-lg text-card-foreground">
            <p>
              This is where you can write about the proposal. Add all the
              details, how you felt, and what made it so special.
            </p>
            <p>
              You can add more paragraphs here to elaborate on the memory.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
