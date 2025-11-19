import { WelcomeSection } from "@/components/sections/welcome-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WelcomeSection />
      <TimelineSection />
    </main>
  );
}
