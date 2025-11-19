import { WelcomeSection } from "@/components/sections/welcome-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { LetterSection } from "@/components/sections/letter-section";
import { UnspokenLinesSection } from "@/components/sections/unspoken-lines-section";
import { EndingSection } from "@/components/sections/ending-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WelcomeSection />
      <TimelineSection />
      <LetterSection />
      <UnspokenLinesSection />
      <EndingSection />
    </main>
  );
}
