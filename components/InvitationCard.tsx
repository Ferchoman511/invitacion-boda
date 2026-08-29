"use client";

import { motion } from "framer-motion";

export default function InvitationCard() {
  return (
    <section className="relative w-full max-w-5xl flex flex-col items-center justify-center py-16 px-4 text-center">
      
      {/* MONOGRAMA / SELLO CENTRADO */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-2 flex justify-center"
      >
        <img 
          src="/images/sello.png" 
          alt="monograma" 
          height={200} 
          width={200} 
          className="mb-2 object-contain"
        />
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


Después de 10 años de historia,
miles de besos,
más de 1,500 taquitos, hamburguesas y antojitos,
una pandemia superada,
una ingeniería juntos,
200 órdenes de alitas,
miles de risas,
innumerables aventuras,
algunas caídas,
muchísimas series que empezamos
y muy pocas que terminamos...

Y después de decir “sí”,

hemos decidido continuar esta historia,
pero ahora, para toda la vida.

¡NOS CASAMOS!
      </p>

      {/* SEPARADOR DORADO */}
      <div className="flex items-center justify-center gap-3 my-6">
        <div className="h-[1px] w-16 sm:w-24 bg-[#DBC18C]/60" />
        <span className="text-[#C6A75E] text-xs">✦</span>
        <div className="h-[1px] w-16 sm:w-24 bg-[#DBC18C]/60" />
      </div>

      {/* PADRES Y PADRINOS (GRID ÚNICO Y BIEN DISTRIBUIDO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-center my-10 max-w-4xl w-full px-4">
        
        {/* PADRES */}
        <div className="space-y-4">
          <h3 className="text-xs sm:text-sm tracking-[0.25em] text-[#8C7A4B] uppercase font-sans font-semibold">
            Ante Dios y con la bendición de nuestros padres
          </h3>
          <div className="text-lg sm:text-2xl font-serif text-[#2E2E2E] space-y-2 leading-relaxed">
            <div className="h-4 gap-2" />
            <p>Benjamín Rodríguez Maceda</p>
            <p>Cecilia Castañeda Huerta</p>
            <br />
            <p className="flex items-center justify-center ">
              Ruben Méndez Segura <span className="text-[#C6A75E] text-2xl font-sans">✝</span>
            </p>
            <p>Guadalupe López Domínguez</p>
          </div>
        </div>

        {/* PADRINOS */}
        <div className="space-y-4">
          <h3 className="text-xs sm:text-sm tracking-[0.25em] text-[#8C7A4B] uppercase font-sans font-semibold">
            Y nuestros padrinos
          </h3>
          <div className="text-lg sm:text-2xl font-serif text-[#2E2E2E] space-y-2 leading-relaxed">
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