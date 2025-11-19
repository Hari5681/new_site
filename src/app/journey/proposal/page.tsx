import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Countdown } from "@/components/countdown";

export default function ProposalPage() {
  const proposalDate = "2025-09-20T00:00:00";

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
            The Day I'll Propose
          </h1>
          <p className="font-body text-lg text-card-foreground text-center mb-8">
            Counting down every moment until I ask you to be mine.
          </p>
          
          <Countdown date={proposalDate} />

          <div className="space-y-6 font-body text-lg text-card-foreground mt-12 text-center">
            <p>
              This day became the day I stopped hiding my heart and finally let it speak.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
