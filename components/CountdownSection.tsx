"use client";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

const date = new Date("2027-03-13T00:00:00");

export default function CountdownSection() {
  return (
    <section className="pt-2 pb-16 md:pt-4 md:pb-24 text-center px-6 -mt-8">
      {/* Título decorativo */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-script text-5xl md:text-6xl text-[#C6A75E] mb-12"
      >
        Cada segundo cuenta para el "Sí"
      </motion.h2>

      <Countdown
        date={date}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {/* BLOQUE DÍAS */}
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-serif font-light text-[#C6A75E] leading-none">
                {days}
              </span>
              <span className="font-script text-3xl md:text-4xl text-[#2E2E2E] mt-3">
                días
              </span>
            </div>

            <div className="hidden md:block text-4xl text-[#C6A75E]/40 font-serif self-start mt-4">
              /
            </div>

            {/* BLOQUE HORAS */}
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-serif font-light text-[#C6A75E] leading-none">
                {hours}
              </span>
              <span className="font-script text-3xl md:text-4xl text-[#2E2E2E] mt-3">
                horas
              </span>
            </div>

            <div className="hidden md:block text-4xl text-[#C6A75E]/40 font-serif self-start mt-4">
              /
            </div>

            {/* BLOQUE MINUTOS */}
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-serif font-light text-[#C6A75E] leading-none">
                {minutes}
              </span>
              <span className="font-script text-3xl md:text-4xl text-[#2E2E2E] mt-3">
                minutos
              </span>
            </div>

            <div className="hidden md:block text-4xl text-[#C6A75E]/40 font-serif self-start mt-4">
              /
            </div>

            {/* BLOQUE SEGUNDOS */}
            <div className="flex flex-col items-center">
              <span className="text-6xl md:text-8xl font-serif font-light text-[#C6A75E] leading-none">
                {seconds}
              </span>
              <span className="font-script text-3xl md:text-4xl text-[#2E2E2E] mt-3">
                segundos
              </span>
            </div>
          </div>
        )}
      />

      {/* Divisor final */}
      <div className="w-16 h-[1px] bg-[#C6A75E]/30 mx-auto mt-16" />
    </section>
  );
}
