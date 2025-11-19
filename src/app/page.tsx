import { WelcomeSection } from "@/components/sections/welcome-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { LetterSection } from "@/components/sections/letter-section";
import { EndingSection } from "@/components/sections/ending-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WelcomeSection />
      <TimelineSection />
      <GallerySection />
      <LetterSection />
      <EndingSection />
    </main>
  );
}
