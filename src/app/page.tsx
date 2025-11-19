import { WelcomeSection } from "@/components/sections/welcome-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { EndingSection } from "@/components/sections/ending-section";
import { IveWaitedSection } from "@/components/sections/ive-waited-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WelcomeSection />
      <TimelineSection />
      <IveWaitedSection />
      <EndingSection />
    </main>
  );
}
