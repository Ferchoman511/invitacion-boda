"use client";

import LocationSection from "@/components/LocationSection";
import Timeline from "@/components/Timeline";
import RSVPForm from "@/components/RSVPForm";
import MusicPlayer from "@/components/MusicPlayer";
import Gallery from "./Gallery";

interface MainContentProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MainContent({
  isPlaying,
  toggleMusic,
}: MainContentProps) {
  return (
    <main className="bg-[#F5F1EB] text-[#2E2E2E]">
      {/* 🌿 HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Fernando & Laura
        </h1>

        <p className="text-lg md:text-xl text-[#6B6B6B] max-w-xl">
          Con alegría en nuestros corazones, te invitamos a celebrar el inicio
          de nuestra nueva vida juntos.
        </p>

        <p className="mt-8 text-sm tracking-widest text-[#C6A75E]">
          13 · Marzo · 2027
        </p>
      </section>

      {/* 📍 UBICACIÓN */}
      <LocationSection />

      {/* 🕊 TIMELINE */}
      <Timeline />

      {/* 🖼 GALERÍA */}

      <Gallery />

      {/* 💌 RSVP */}
      <section className="py-24 bg-white">
        <h2 className="text-4xl font-serif text-center mb-12">
          Confirma tu Asistencia
        </h2>

        <div className="max-w-xl mx-auto px-6">
          <RSVPForm />
        </div>
      </section>

      {/* 🎶 MUSIC FLOAT */}
      <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
    </main>
  );
}
