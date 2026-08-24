"use client";

import SectionCard from "./SectionCard";

export default function Gallery() {
  const photos = [
    { src: "/images/pareja-1.jpg", alt: "Fernando y Laura 1" },
    { src: "/images/pareja-2.jpg", alt: "Fernando y Laura 2" },
    { src: "/images/pareja-3.jpg", alt: "Fernando y Laura 3" },
  ];

  return (
    <SectionCard titleTag="Nuestra Historia" title="Momentos Juntos">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md border border-[#DBC18C]/30 group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs sm:text-sm font-serif italic text-[#5C5C5C] max-w-md mx-auto">
        "El amor no se mira con los ojos, sino con el alma."
      </p>
    </SectionCard>
  );
}