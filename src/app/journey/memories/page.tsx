
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const memories = [
  {
    type: 'image',
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1516151322954-621642a2b64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb3VwbGUlMjBiZWFjaHxlbnwwfHx8fDE3NjM1MjI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "couple beach",
    caption: "Ee moment naatho epudu untundi.",
    width: 500,
    height: 750,
  },
  {
    type: 'text',
    id: 'memory-1',
    content: "Nuvvu first time natho matladina moment… ‘Why you don’t talk to anyone?’ ani adigina aa line… naa mind lo still fresh ga undi. Aa voice tone… aa softness… first time vinagane, I knew it was something I can’t forget."
  },
  {
    type: 'image',
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1597308011529-f634f4cab827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb3p5JTIwY2FmZXxlbnwwfHx8fDE3NjM0NzA4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "cozy cafe",
    caption: "Nuvvu ila navvindi… na day marchipoyindi.",
    width: 500,
    height: 400,
  },
  {
    type: 'multi-part-text',
    id: 'memory-2',
    title: "Ninnu choosi na feelings cheppadaniki chesina attempts…",
    description: "anni na gunde lo deep ga nilichipoyayi.",
    parts: [
      {
        title: "1st Attempt — 10-01-2025 (Sankranthi Event)",
        text: "Radish maroon half vesukoni vachinav… aa roju cheppalani anukunna… kani dhairyam raledu."
      },
      {
        title: "2nd Attempt — 01-02-2025",
        text: "Drink chesi college degara ki vachanu… kani Bharath matter lo stop ayyi poyanu."
      },
      {
        title: "3rd Attempt — 28-03-2025 (Last day of fest)",
        text: "Ninnu follow ayyanu… cheppalani anukunna… kani words raledu."
      },
      {
        title: "4th Attempt — 20-09-2025",
        text: "Ee rozey nenu direct ga message chesa. Ee attempt na life lo biggest memory."
      }
    ]
  },
  {
    type: 'image',
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1695049761557-cb56d348c297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxob2xkaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzYzNDc3MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "holding hands",
    caption: "Idi chala special memory.",
    width: 500,
    height: 350,
  },
  {
    type: 'image',
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1501901609772-df0848060b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb3VwbGUlMjBzbWlsaW5nfGVufDB8fHx8MTc2MzUyNzI0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "couple smiling",
    caption: "Rojanta nee gurinthey.",
    width: 500,
    height: 500,
  },
  {
    type: 'text',
    id: 'memory-3',
    content: "Mana first hug nee birthday roju. Ado oka warm connection… I’ll never forget it."
  },
  {
    type: 'image',
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1516366353199-ed694fec414f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMHZpZXd8ZW58MHx8fHwxNzYzNTUxOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "mountain view",
    caption: "Ee moment naatho epudu untundi.",
    width: 500,
    height: 800,
  },
  {
    type: 'text',
    id: 'memory-4',
    content: "Netho unna prathi talk, prathi smile, prathi moment… naa life lo special chapter."
  },
  {
    type: 'image',
    id: 7,
    imageUrl: "https://i.ibb.co/L5BYS5v/image.png",
    imageHint: "couple drawing",
    caption: "Our first masterpiece.",
    width: 500,
    height: 500,
  },
  {
    type: 'image',
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1656558136312-71b8f36bea25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb3VwbGUlMjB0cmF2ZWx8ZW58MHx8fHwxNzYzNTI0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "couple travel",
    caption: "Nuvvu ila navvindi… na day marchipoyindi.",
    width: 500,
    height: 650,
  },
];

export default function MemoriesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 relative bg-primary/5">
      <FloatingParticles />
      <div className="z-10 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
            <Link href="/#">
            <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>
            </Link>
        </div>

        <div className="text-center mb-12 animate-in fade-in duration-1000">
            <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground/80">
                Memories I kept close…
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-4">
                “Nuvvu teliyakunda naa day lo kalisipoyina chinna chinna moments.”
            </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="break-inside-avoid animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              {memory.type === 'image' && (
                <Card className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-primary/10 bg-card group hover:scale-105 hover:shadow-primary/20">
                  <CardContent className="p-0">
                    <Image
                      src={memory.imageUrl}
                      alt={memory.caption || ''}
                      width={memory.width}
                      height={memory.height}
                      data-ai-hint={memory.imageHint}
                      className="w-full h-auto"
                    />
                    {memory.caption && (
                      <p className="p-4 text-sm font-body text-card-foreground/80 italic">
                        {memory.caption}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {memory.type === 'text' && (
                <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-primary/10 bg-card group hover:scale-105 hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-card-foreground/90 italic leading-relaxed">
                      {memory.content}
                    </p>
                  </CardContent>
                </Card>
              )}

              {memory.type === 'multi-part-text' && (
                 <Card className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-primary/10 bg-card group hover:scale-105 hover:shadow-primary/20">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl text-primary-foreground/80">{memory.title}</CardTitle>
                      {memory.description && <CardDescription className="font-body italic">{memory.description}</CardDescription>}
                    </CardHeader>
                    <CardContent className="space-y-4 pt-0">
                      {memory.parts.map((part, i) => (
                        <div key={i}>
                          { i > 0 && <Separator className="my-3" /> }
                          <p className="font-body font-semibold text-sm text-primary-foreground/70">{part.title}</p>
                          <p className="font-body text-base text-card-foreground/90 italic mt-1">
                            “{part.text}”
                          </p>
                        </div>
                      ))}
                    </CardContent>
                 </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

    