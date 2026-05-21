// components/SmoothScrolling.tsx
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Qué tan suave es (menor = más suave)
        duration: 1.5, // Duración de la inercia
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
