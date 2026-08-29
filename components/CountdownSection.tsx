"use client";

import Countdown from "react-countdown";
import { motion } from "framer-motion";

const date = new Date("2027-03-13T00:00:00");

export default function CountdownSection() {
  return (
    <section className="relative w-full flex items-center justify-center py-10 px-4">
      {/* TARJETA ELEGANTE CON MARCO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 md:p-14 border border-[#DBC18C]/50 text-center"
      >
        {/* Marco decorativo interior */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl border border-[#DBC18C]/30 pointer-events-none" />

        {/* FLORES ESQUINA SUPERIOR DERECHA
        <img
          src="/images/flores-arriba.png"
          alt="Decoración floral"
          className="absolute -top-12 -right-10 sm:-top-16 sm:-right-14 w-36 sm:w-44 object-contain pointer-events-none drop-shadow-md z-20"
        />

        {/* FLORES ESQUINA INFERIOR IZQUIERDA }
        <img
          src="/images/flores-abajo.png"
          alt="Decoración floral"
          className="absolute -bottom-14 -left-12 sm:-bottom-16 sm:-left-16 w-44 sm:w-52 object-contain pointer-events-none drop-shadow-lg z-20"
        /> */}

        {/* ENCABEZADO */}
        <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8C7A4B] uppercase font-sans font-medium mb-1">
          Cuenta Regresiva
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-8 leading-snug">
          Cada segundo cuenta para el "Sí"
        </h2>

        {/* CONTADOR PERSONALIZADO */}
        <Countdown
          date={date}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-8 my-4">
              {/* BLOQUE DÍAS */}
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#C6A75E] leading-none">
                  {days}
                </span>
                <span className="font-script text-2xl md:text-3xl text-[#2E2E2E] mt-1">
                  días
                </span>
              </div>

              <div className="hidden sm:block text-2xl text-[#C6A75E]/40 font-serif self-start mt-2">
                /
              </div>

              {/* BLOQUE HORAS */}
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#C6A75E] leading-none">
                  {hours}
                </span>
                <span className="font-script text-2xl md:text-3xl text-[#2E2E2E] mt-1">
                  horas
                </span>
              </div>

              <div className="hidden sm:block text-2xl text-[#C6A75E]/40 font-serif self-start mt-2">
                /
              </div>

              {/* BLOQUE MINUTOS */}
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#C6A75E] leading-none">
                  {minutes}
                </span>
                <span className="font-script text-2xl md:text-3xl text-[#2E2E2E] mt-1">
                  minutos
                </span>
              </div>

              <div className="hidden sm:block text-2xl text-[#C6A75E]/40 font-serif self-start mt-2">
                /
              </div>

              {/* BLOQUE SEGUNDOS */}
              <div className="flex flex-col items-center min-w-[60px]">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#C6A75E] leading-none">
                  {seconds}
                </span>
                <span className="font-script text-2xl md:text-3xl text-[#2E2E2E] mt-1">
                  segundos
                </span>
              </div>
            </div>
          )}
        />

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-8" />
      </motion.div>
    </section>
  );
}