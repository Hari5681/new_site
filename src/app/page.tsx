import { WelcomeSection } from "@/components/sections/welcome-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { MemoriesSection } from "@/components/sections/memories-section";
import { EndingSection } from "@/components/sections/ending-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WelcomeSection />
      <TimelineSection />
      <MemoriesSection />
      <EndingSection />
    </main>
  );
}
