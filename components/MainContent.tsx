"use client";

import { motion } from "framer-motion";
import LocationSection from "@/components/LocationSection";
import Timeline from "@/components/Timeline";
import RSVPForm from "@/components/RSVPForm";
import MusicPlayer from "@/components/MusicPlayer";
import Gallery from "./Gallery";
import CountdownSection from "./CountdownSection"; // 👈 Importamos tu nuevo contador

interface MainContentProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MainContent({
  isPlaying,
  toggleMusic,
}: MainContentProps) {
  return (
    <main className="text-[#2E2E2E]">
      {" "}
      {/* Sin color de fondo para que se vea el pergamino */}
      {/* 🌿 PORTADA PRINCIPAL */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="z-10 max-w-4xl"
        >
          <span className="text-[#C6A75E] tracking-[0.4em] uppercase text-xs mb-8 block font-medium">
            Save the Date
          </span>

          {/* ✍️ Nombres en Dorado y Manuscrita */}
          <h1 className="font-script text-8xl md:text-[120px] text-[#C6A75E] leading-[0.8] mb-10 drop-shadow-sm">
            Fernando <span className="block md:inline">&</span> Laura
          </h1>

          {/* 📜 Mensaje en Serif y Negro */}
          <p className="font-serif uppercase tracking-widest text-sm mb-16 text-[#6B6B6B] leading-relaxed">
            Con alegría en nuestros corazones,
            <br className="hidden md:block" />
            te invitamos a celebrar el inicio
            <br className="hidden md:block" />
            de nuestra nueva vida juntos.
          </p>
          {/* 👨‍👩‍👧‍👦 SECCIÓN DE PADRES Y PADRINOS */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-32 font-serif text-[#2E2E2E] mb-12">
            {/* Columna de Padres */}
            <div className="space-y-3">
              <p className="text-xs tracking-[0.3em] text-[#C6A75E] uppercase mb-5 font-medium">
                Ante dios
                <br className="hidden md:block" />y con la bendición de nuestros
                padres
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg">Ruben Méndez Segura</p>
                <img
                  src="icons/cruz.svg"
                  alt="Homenaje"
                  className="w-5 h-5 object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(68%) sepia(21%) saturate(1335%) hue-rotate(2deg) brightness(98%) contrast(92%)",
                  }}
                />
              </div>
              <p className="text-lg">Guadalupe López Domínguez</p>
              <div className="h-4" /> {/* Espaciador */}
              <p className="text-lg">Benjamín Rodríguez Maceda</p>
              <p className="text-lg">Cecilia Castañeda Huerta</p>
            </div>

            {/* Columna de Padrinos */}
            <div className="space-y-3 mt-8 md:mt-0">
              <p className="text-xs tracking-[0.3em] text-[#C6A75E] uppercase mb-5 font-medium">
                Y nuestros padrinos
              </p>
              <p className="text-lg">Eduardo Hernández Pérez</p>
              <p className="text-lg">Candelaria López Domínguez</p>
            </div>
          </div>
          {/* Divisor elegante */}
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="w-16 h-[1px] bg-[#C6A75E]/40" />
            <span className="text-[#C6A75E] text-xl">✦</span>
            <div className="w-16 h-[1px] bg-[#C6A75E]/40" />
          </div>

          {/* Fecha */}
          <p className="font-serif text-lg md:text-xl tracking-[0.3em] text-[#C6A75E] uppercase">
            13 . MARZO . 2027
          </p>
        </motion.div>
      </section>
      {/* ⏳ CONTADOR */}
      <CountdownSection />
      {/* 📍 UBICACIÓN */}
      <LocationSection />
      {/* 🕊 TIMELINE */}
      <Timeline />
      {/* 🖼 GALERÍA */}
      <Gallery />
      {/* 💌 RSVP */}
      <section className="py-24">
        <h2 className="font-script text-6xl md:text-7xl text-[#C6A75E] mb-2 text-center">
          Confirma tu Asistencia
        </h2>
        <RSVPForm />
      </section>
      {/* 🎵 REPRODUCTOR DE MÚSICA */}
      <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
    </main>
  );
}
