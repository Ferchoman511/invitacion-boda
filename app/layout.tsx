import "./globals.css";
import { Playfair_Display, Inter, Pinyon_Script } from "next/font/google";
import type { ReactNode } from "react";
import SmoothScrolling from "@/components/SmoothScrolling";

interface RootLayoutProps {
  children: ReactNode;
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Nuestra Boda | Fernando & Laura",
  description: "13 de Marzo de 2027",
  openGraph: {
    title: "Nuestra Boda | Fernando & Laura",
    description: "13 de Marzo de 2027",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${pinyon.variable}`}
    >
      <body className="text-[#2E2E2E] font-sans relative bg-[#F8F5F0]">
        
        {/* 🕊️ CAPA 1: Tu patrón de Girasoles y Palomas */}
        <div
          className="fixed inset-0 pointer-events-none z-[-2]"
          style={{
            opacity: 0.12,
            backgroundImage: `url("/images/patron-bodas.png")`, // 👈 Sin saltos de línea
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
          }}
        />

        {/* 🖌️ CAPA 2: La textura táctil de fibras de papel */}
        <div
          className="fixed inset-0 pointer-events-none z-[-1]"
          style={{
            opacity: 0.15,
            mixBlendMode: "multiply",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}