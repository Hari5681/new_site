import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import { FloatingParticles } from "../floating-particles";

export function GallerySection() {
  const images = placeholderImages.filter(img => img.id.startsWith("gallery-"));

  return (
    <section className="w-full py-20 px-4 bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl text-center text-gray-800 mb-12">
          Cherished Memories
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-primary/10 bg-card">
                <CardContent className="p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={image.width}
                    height={image.height}
                    data-ai-hint={image.imageHint}
                    className="w-full h-auto"
                  />
                  {image.description && (
                    <p className="p-4 text-sm font-body text-card-foreground">{image.description}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
