
'use client';

import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const memories: Record<string, any> = {
    '1': {
        type: 'text',
        title: "First Time You Spoke to Me",
        content: "Nuvvu first time natho matladina moment… ‘Why you don’t talk to anyone?’ ani adigina aa line… naa mind lo still fresh ga undi. Aa voice tone… aa softness… first time vinagane, I knew it was something I can’t forget."
    },
    '2': {
        type: 'multi-part-text',
        title: "My Attempts to Tell You",
        description: "Ninnu choosi na feelings cheppadaniki chesina attempts… anni na gunde lo deep ga nilichipoyayi.",
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
    '3': {
        type: 'text',
        title: 'Our First Hug',
        content: "Mana first hug nee birthday roju. Ado oka warm connection… I’ll never forget it."
    },
    '4': {
        type: 'text',
        title: 'Every Small Moment',
        content: "Netho unna prathi talk, prathi smile, prathi moment… naa life lo special chapter."
    },
};

export default function MemoryDetailPage({ params }: { params: { id: string } }) {
    const memory = memories[params.id];

    if (!memory) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 relative bg-primary/5">
                <FloatingParticles />
                <div className="z-10 w-full max-w-2xl text-center">
                    <h1 className="font-headline text-4xl text-primary-foreground/80">Memory Not Found</h1>
                    <p className="mt-4 font-body text-muted-foreground">This memory doesn't exist or has been moved.</p>
                    <Link href="/journey/2-months" className="mt-8 inline-block">
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Journey
                        </Button>
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-12 relative bg-primary/5">
            <FloatingParticles />
            <div className="z-10 w-full max-w-4xl">
                <div className="mb-8">
                    <Link href="/journey/2-months">
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Journey
                        </Button>
                    </Link>
                </div>

                <div className="animate-in fade-in duration-1000">
                    {memory.type === 'text' && (
                        <Card className="rounded-lg shadow-lg border-primary/10 bg-card">
                            <CardHeader>
                                <CardTitle className="font-headline text-4xl md:text-5xl text-primary-foreground/80">{memory.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-body text-lg text-card-foreground/90 italic leading-relaxed">
                                    “{memory.content}”
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {memory.type === 'multi-part-text' && (
                        <Card className="rounded-lg shadow-lg border-primary/10 bg-card">
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-4xl md:text-5xl text-primary-foreground/80">{memory.title}</CardTitle>
                                {memory.description && <CardDescription className="font-body text-lg italic mt-2">{memory.description}</CardDescription>}
                            </CardHeader>
                            <CardContent className="space-y-6 pt-2">
                                {memory.parts.map((part: any, i: number) => (
                                    <div key={i} className="text-center">
                                        {i > 0 && <Separator className="my-6 w-1/2 mx-auto" />}
                                        <h3 className="font-body font-semibold text-xl text-primary-foreground/70">{part.title}</h3>
                                        <p className="font-body text-lg text-card-foreground/90 italic mt-2">
                                            “{part.text}”
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    );
}
