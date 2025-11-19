import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Countdown } from "@/components/countdown";

export default function ProposalPage() {
  // Assuming the proposal was on Sep 20, 2023. Change year if needed.
  const proposalDate = "2023-09-20T00:00:00";

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
          <h1 className="font-headline text-4xl md:text-6xl text-gray-800 mb-4 text-center">
            The Day I Proposed
          </h1>
          <p className="font-body text-lg text-card-foreground text-center mb-8">
            Counting every moment since I asked you to be mine.
          </p>
          
          <Countdown date={proposalDate} />

          <div className="space-y-6 font-body text-lg text-card-foreground mt-12">
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
