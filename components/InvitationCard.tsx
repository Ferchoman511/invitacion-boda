"use client";

import { motion } from "framer-motion";

export default function InvitationCard() {
  return (
    <section className="relative w-full max-w-4xl flex flex-col items-center justify-center py-16 px-4 text-center">
      
      {/* MONOGRAMA */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-2"
      >
        <span className="font-script text-4xl sm:text-5xl text-[#C6A75E]">F & L</span>
      </motion.div>

      <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8C7A4B] uppercase font-sans font-medium mb-4">
        Save The Date
      </p>

      {/* NOMBRES DE LOS NOVIOS */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="font-script text-6xl sm:text-7xl md:text-8xl text-[#3B4D3C] my-4 leading-tight"
      >
        Fernando <span className="text-[#C6A75E] font-serif italic text-5xl sm:text-6xl">&</span> Laura
      </motion.h1>

      {/* MENSAJE DE BIENVENIDA */}
      <p className="max-w-xl mx-auto text-sm sm:text-base font-serif text-[#4A4A4A] leading-relaxed my-8 px-4">
        Con alegría en nuestros corazones, te invitamos a celebrar el inicio de nuestra nueva vida juntos.
      </p>

      {/* SEPARADOR DORADO */}
      <div className="flex items-center justify-center gap-3 my-6">
        <div className="h-[1px] w-16 sm:w-24 bg-[#DBC18C]/60" />
        <span className="text-[#C6A75E] text-xs">✦</span>
        <div className="h-[1px] w-16 sm:w-24 bg-[#DBC18C]/60" />
      </div>

      {/* PADRES Y PADRINOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-center my-6 max-w-3xl w-full px-4">
        
        {/* PADRES */}
        <div className="space-y-3">
          <h3 className="text-[11px] sm:text-xs tracking-[0.25em] text-[#8C7A4B] uppercase font-sans font-semibold">
            Ante Dios y con la bendición de nuestros padres
          </h3>
          <div className="text-sm sm:text-base font-serif text-[#2E2E2E] space-y-1.5">
            <p className="flex items-center justify-center gap-1.5">
              Ruben Méndez Segura <span className="text-[#C6A75E] text-xs font-sans">✝</span>
            </p>
            <p>Guadalupe López Domínguez</p>
            <div className="h-3" />
            <p>Benjamín Rodríguez Maceda</p>
            <p>Cecilia Castañeda Huerta</p>
          </div>
        </div>

        {/* PADRINOS */}
        <div className="space-y-3">
          <h3 className="text-[11px] sm:text-xs tracking-[0.25em] text-[#8C7A4B] uppercase font-sans font-semibold">
            Y nuestros padrinos
          </h3>
          <div className="text-sm sm:text-base font-serif text-[#2E2E2E] space-y-1.5">
            <p>Eduardo Hernández Pérez</p>
            <p>Candelaria López Domínguez</p>
          </div>
        </div>

      </div>

      {/* FECHA */}
      <div className="pt-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-20 bg-[#DBC18C]/60" />
          <span className="text-[#C6A75E] text-xs">✦</span>
          <div className="h-[1px] w-20 bg-[#DBC18C]/60" />
        </div>
        <span className="text-base sm:text-lg tracking-[0.4em] text-[#8C7A4B] font-serif font-medium uppercase">
          13 . Marzo . 2027
        </span>
      </div>

</section>
  );
}