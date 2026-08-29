"use client";

import InvitationCard from "./InvitationCard";
import Countdown from "./CountdownSection";
import Itinerary from "./Timeline";
import GiftRegistry from "./GiftRegistry";
import LocationSection from "./LocationSection";
import Gallery from "./Gallery";

interface MainContentProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function MainContent({ isPlaying, toggleMusic }: MainContentProps) {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center bg-[#F4F1ED] overflow-x-hidden pb-20">
      
      {/* 1. FONDO GENERAL CON TEXTURA DE PALOMAS Y GIRASOLES EN RELIEVE */}
      <div 
        className="fixed inset-0 opacity-[0.07] pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/patron-bodas.png')",
          backgroundSize: "420px",
          backgroundRepeat: "repeat",
          filter: "grayscale(100%)",
          mixBlendMode: "multiply"
        }}
      />

      {/* 2. BOTÓN FLOTANTE DE REPRODUCTOR DE MÚSICA */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#3B4D3C] text-[#F4F1ED] border border-[#DBC18C] shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Reproducir o pausar música"
      >
        {isPlaying ? (
          <span className="text-xs font-bold tracking-tighter">❚❚</span>
        ) : (
          <span className="text-xs font-bold ml-0.5">▶</span>
        )}
      </button>

      {/* 3. CONTENIDO EN ORDEN SECUENCIAL */}
      <div className="relative z-10 w-full flex flex-col items-center space-y-12 sm:space-y-16">
        
        {/* Portada / Tarjeta con marco, nombres y padres */}
        <InvitationCard />

        {/* Cuenta regresiva para el 13 de marzo de 2027 */}
        <Countdown />

        {/* Detalles de la Ceremonia y Recepción con mapa */}
        <LocationSection />

        {/* Itinerario del evento con iconos y horas */}
        <Itinerary />
        

        {/* Mesa de regalos / Datos de transferencia o sobre */}
        <GiftRegistry />

        {/*Galleria de Fotos */}
        <Gallery />
      </div>

    </main>
  );
}