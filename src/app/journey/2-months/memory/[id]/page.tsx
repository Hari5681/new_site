
'use client';

import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/floating-particles";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import Image from "next/image";

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
        type: 'image-with-text',
        title: 'Our First Hug',
        content: "Mana first hug nee birthday roju. Ado oka warm connection… I’ll never forget it.",
        imageUrl: "https://i.postimg.cc/N0bC1rmh/Whats-App-Image-2025-11-19-at-21-59-18-2c0abdd0.jpg",
        imageHint: "couple drawing"
    },
    '4': {
        type: 'text',
        title: 'Every Small Moment',
        content: "Netho unna prathi talk, prathi smile, prathi moment… naa life lo special chapter."
    },
    '5': {
        type: 'image-with-text',
        title: 'Your Birthday',
        content: "Nee birthday roju… aa day ni nenu eppudu marchiponu. Endukante aa rojuna nenu nee gurinchi okka different feeling feel ayyanu. Naa heart lo adi calm, warm, soft ga settle ayipoyindi. Aa rojuna ninnu chusina way… naatho epudu undi. That day felt special… different… unforgettable.",
        imageUrl: "https://i.postimg.cc/P51017rM/Whats-App-Image-2025-11-19-at-17-12-20-ecda54e6.jpg",
        imageHint: "birthday celebration"
    }
};

export default function MemoryDetailPage() {
    const params = useParams();
    const memory = memories[params.id as string];

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
                <div className="mb-8 animate-in fade-in duration-500">
                    <Link href="/journey/2-months">
                        <Button variant="ghost">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Journey
                        </Button>
                    </Link>
                </div>

                <div className="animate-in fade-in-0 zoom-in-95 duration-1000">
                    {memory.type === 'text' && (
                        <Card className="rounded-2xl shadow-lg border-primary/10 bg-card overflow-hidden">
                            <CardHeader className="bg-primary/5 p-8">
                                <CardTitle className="font-headline text-4xl md:text-5xl text-primary-foreground/80 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 fill-mode-both">{memory.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <p className="font-body text-lg text-card-foreground/90 italic leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500 fill-mode-both">
                                    “{memory.content}”
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {memory.type === 'multi-part-text' && (
                        <Card className="rounded-2xl shadow-lg border-primary/10 bg-card overflow-hidden">
                            <CardHeader className="text-center bg-primary/5 p-8">
                                <CardTitle className="font-headline text-4xl md:text-5xl text-primary-foreground/80 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 fill-mode-both">{memory.title}</CardTitle>
                                {memory.description && <CardDescription className="font-body text-lg italic mt-2 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-400 fill-mode-both">{memory.description}</CardDescription>}
                            </CardHeader>
                            <CardContent className="space-y-6 p-8">
                                {memory.parts.map((part: any, i: number) => (
                                    <div key={i} className="text-center animate-in fade-in-0 slide-in-from-bottom-5 duration-700 fill-mode-both" style={{ animationDelay: `${600 + i * 200}ms` }}>
                                        {i > 0 && <Separator className="my-6 w-1/2 mx-auto bg-primary/20" />}
                                        <h3 className="font-body font-semibold text-xl text-primary-foreground/70">{part.title}</h3>
                                        <p className="font-body text-lg text-card-foreground/90 italic mt-2">
                                            “{part.text}”
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}

                    {memory.type === 'image-with-text' && (
                        <Card className="rounded-2xl shadow-lg border-primary/10 bg-card overflow-hidden">
                             <CardHeader className="bg-primary/5 p-8 text-center">
                                <CardTitle className="font-headline text-4xl md:text-5xl text-primary-foreground/80 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 fill-mode-both">{memory.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                                <div className="animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 fill-mode-both">
                                     <Image
                                        src={memory.imageUrl}
                                        alt={memory.title}
                                        width={500}
                                        height={500}
                                        className="rounded-lg shadow-lg object-cover aspect-square"
                                        data-ai-hint={memory.imageHint}
                                    />
                                </div>
                                <div className="animate-in fade-in slide-in-from-right-10 duration-1000 delay-500 fill-mode-both">
                                    <p className="font-body text-lg text-card-foreground/90 italic leading-relaxed">
                                        “{memory.content}”
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    );
}
