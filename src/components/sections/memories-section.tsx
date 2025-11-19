
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FloatingParticles } from "../floating-particles";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const memories = [
    {
      id: '1',
      imageUrl: "https://i.postimg.cc/P51017rM/Whats-App-Image-2025-11-19-at-17-12-20-ecda54e6.jpg",
      imageHint: "birthday celebration",
      title: "Your Birthday",
      excerpt: "A day dedicated to you.",
      href: "/journey/2-months/memory/5"
    },
    {
      id: '2',
      imageUrl: "https://i.postimg.cc/tRSbg8Yx/Whats-App-Image-2025-11-19-at-21-59-18-25c5fef8.jpg",
      imageHint: "couple drawing",
      title: "Our First Hug",
      excerpt: "A warm connection I’ll never forget.",
      href: "/journey/2-months/memory/3"
    },
    {
      id: '3',
      imageUrl: "https://i.ibb.co/L5BYS5v/image.png",
      imageHint: "couple drawing",
      title: "Every Small Moment",
      excerpt: "Every talk, every smile... a special chapter.",
      href: "/journey/2-months/memory/4"
    },
  ];

export function MemoriesSection() {
  return (
    <section className="w-full py-20 px-4 bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h2 className="font-headline text-5xl md:text-7xl text-primary-foreground/80">
                Moments I Cherish
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4">
                A few of the many memories that I hold close.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div key={memory.id} className="animate-in fade-in-0 slide-in-from-bottom-5 duration-700 fill-mode-both" style={{ animationDelay: `${200 + index * 200}ms` }}>
              <Link href={memory.href} className="block group">
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-primary/20 bg-card cursor-pointer transform hover:-translate-y-2 hover:shadow-primary/20 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <Image
                            src={memory.imageUrl}
                            alt={memory.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            data-ai-hint={memory.imageHint}
                        />
                    </div>
                  <CardHeader>
                      <CardTitle className="font-headline text-3xl text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300">{memory.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-body text-card-foreground/80 italic mb-4">
                      “{memory.excerpt}”
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300">
                        <span>Relive Moment</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
