import ImageReveal from "@/components/ui/image-tiles";
import React from "react";

const collections = [
  {
    title: "Collection I - The Essentials",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=500&auto=format&fit=crop"
    ]
  },
  {
    title: "Collection II - Avant-Garde",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=500&auto=format&fit=crop"
    ]
  }
];

export default function DemoOne() {
  return (
    <div className="flex flex-col items-center py-10 bg-bone/30 gap-16 overflow-hidden">
      {collections.map((collection, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          <ImageReveal
            image1={collection.images[0]}
            image2={collection.images[1]}
            image3={collection.images[2]}
            image4={collection.images[3]}
            image5={collection.images[4]}
          />
          <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-ink/60">{collection.title}</p>
        </div>
      ))}
    </div>
  );
}
