import { FloatingParticles } from "../floating-particles";

export function UnspokenLinesSection() {
  return (
    <section className="w-full py-24 px-4 bg-primary/10 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl text-center text-gray-800 mb-12">
          Unspoken Lines from me
        </h2>
        <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg border border-primary/10">
          <p className="font-body text-lg text-center leading-relaxed text-card-foreground">
            Here you can write the things that are often left unsaid. Pour your heart out, share your deepest feelings, and let your words build another bridge between you.
          </p>
        </div>
      </div>
    </section>
  );
}
