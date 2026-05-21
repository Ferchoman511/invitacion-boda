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
      <body className="text-[#2E2E2E] font-sans relative">
        {/* 📜 CAPA 1: El degradado difuminado (Luz en el centro, dorado en las orillas) */}
        <div
          className="fixed inset-0 pointer-events-none z-[-2]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #F5F1EB 20%, #DBC18C 100%)",
          }}
        />

        {/* 🖌️ CAPA 2: La textura táctil (Fibras de papel) */}
        <div
          className="fixed inset-0 pointer-events-none z-[-1]"
          style={{
            opacity: 0.25 /* 👈 Ajusta este número: 0.10 para más suave, 0.25 para más rústico */,
            mixBlendMode:
              "multiply" /* Hace que la textura se fusione como tinta en el papel */,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
