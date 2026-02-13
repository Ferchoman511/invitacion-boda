import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import type { ReactNode } from "react";
interface RootLayoutProps {
  children: ReactNode;
}
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("http://localhost:3000"), // 👈 cambia luego
  title: "Nuestra Boda",
  description: "27 Marzo 2027",
  openGraph: {
    title: "Nuestra Boda",
    description: "27 Marzo 2027",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="text-[#2E2E2E] font-sans">{children}</body>
    </html>
  );
}
