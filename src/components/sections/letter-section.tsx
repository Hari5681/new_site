
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
                    Mana tastes match kakapoyina, mana thinking different
                    ayina… nitho matladadam naku surprising ga easy ayindi.
                    Effort laga kaadu, forced laga kaadu… just flow ayindi. Naa
                    overthinking ni nuvvu eppudu judge cheyyaledu, laugh
                    cheyyaledu… calm ga vinavu. Nenu words half ga cheppina,
                    confuse ayina… nuvvu patience tho wait ayyi ardham chesavu.
                    Oka chinna attention, oka ‘em ayyindi?’ ane line… avi naku
                    chaala ekkuva value ayyayi, endukante chala rojul tharvatha
                    nenu someone nundi care feel ayyanu.
                  </p>
                  <p>
                    Ee last 60 days lo nenu nitho attach ayyanu—honestly, naku
                    kuda teliyani ga happen ayyindi. Niku message ivvakapothe day
                    complete ayina feeling raledu. Nee reply late ayithe chinna
                    tension, chinna fear… immediate ga mind lo ‘I hope
                    everything is okay’ ane thought. Nuvvu silence lo unte,
                    nenu unnecessary ga overthink ayya… adi nuvvu kaadhu, naa
                    past nundi vachina fear. Once evaro leave chesina memory…
                    still trigger avuthundi.
                  </p>
                  <p>
                    Inka honest ga cheppalante… konni sarlu nenu silent ayya.
                    Adhi niku pain ivvalani kaadu. Adhi nenu naa pov lo na
                    feelings, na doubts clear chesukuntunna time. Konni sarlu
                    nenu simple care lines expect chesa, like ‘em ayyindi?’,
                    ‘endhuku call cheyyaledu?’… adhi entitlement kaadhu, just
                    that missing-feeling nundi. Oka small line kuda nannu calm
                    chestundi.
                  </p>
                  <p>
                    Nenu okka pedda vishayam realize ayyanu… nenu ninnu hurt
                    cheyyalani eppudu anukoledhu. But naa overthinking, naa
                    fears tho react ayyi, konni sarlu nuvvu already face
                    chesina pain ni malli remind chesina la ayyindi… adhi
                    tharvatha nannu chaala deep ga hit chesindi. ‘I hurt the one
                    person I never wanted to hurt’ ane thought nannu lopala
                    stop chesindi.
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
