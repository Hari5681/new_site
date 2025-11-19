
"use client";

import { useState } from "react";
import { FloatingParticles } from "../floating-particles";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function LetterSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="w-full py-24 px-4 bg-primary/10 relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-3xl relative z-10 flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-6xl text-center text-gray-800 mb-12">
          A Letter For You
        </h2>
        <div
          className="w-full max-w-2xl h-[600px] perspective-1000"
          onClick={handleCardClick}
        >
          <div
            className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front of the card */}
            <Card className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-card p-8 cursor-pointer shadow-lg">
              <Mail className="w-24 h-24 text-primary" />
              <p className="mt-4 font-body text-lg text-muted-foreground">
                Click to open
              </p>
            </Card>

            {/* Back of the card */}
            <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-card shadow-lg overflow-y-auto">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-4 font-body text-base md:text-lg text-card-foreground leading-relaxed">
                  <p>
                    Nuvvu chupīnchina care, attention… honestly, naku chaala impact chesindi. Nenu imagination lo anukune ammai ante— calm ga, silent ga, soft behaviour tho untundi ani. Kani nitho journey start ayyaka… nenu realize ayyanu, naa imagination kanna real person important ani.
                  </p>
                  <p>
                    Nijamga naku correct ga set ayye ammai ante… naa overthinking ni judge cheyakunda handle chese, naa silence ni meaning tho ardham chese, naku pressure lekunda calm feel cheyyinche ammai. And nitho unnapude naku clarity ochindi— ‘maybe naa mind lo anukune ideal ammai kaadhu… naa life lo kavalsindhi nuvve laantodi’ ani.
                  </p>
                  <p>
                    Nijam ga relaxed ga cheppalante… nennu artham chesukune ammai kavali. Ok mari thanaki nuvvu nannu ardham chesutunnav anukunte… mari nenu kuda ninnu, nee situations ni same clarity tho ardham chesukovali. But konni vishayallo… nenu fail ayyanu. Adhi intention kaadhu… adhi na overthinking, na fears disturb chesina time.
                  </p>
                  <p>
                    Naa mind sometimes unnecessary ga run avvadam valla, nuvvu hurt ayye la matladina moments ochai. Nee past lo unna pain malli gurthu chesina la ayipoyindi… adhi nenu eppudu kuda wish cheyyaledu.
                  </p>
                   <p>
                    Nuvvu tappu cheyyakunda unnapatiki, nenu naa doubts valla oka sari kaadu— many times same mistakes repeat chesa. That’s the part nannu nene bad ga feel avvadaniki reason. Nuvvu deserve chesedi calm, safe, soft love… ekani konni sarlu nenu naa fears ki lose ayyanu.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
