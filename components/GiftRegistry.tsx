"use client";

import { motion } from "framer-motion";

export default function GiftRegistry() {
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
        {/* Marco decorativo interior con doble línea dorada */}
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
          Detalles
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-4 leading-snug">
          Mesa de Regalos
        </h2>

        {/* MENSAJE DE INTRODUCCIÓN */}
        <p className="font-serif text-[#4A4A4A] text-sm sm:text-base leading-relaxed mb-8 italic max-w-lg mx-auto">
          "Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros para empezar nuestro hogar, aquí les dejamos nuestras mesas de regalos."
        </p>

        {/* TARJETAS DE OPCIONES (LIVERPOOL Y AMAZON) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          
          {/* LIVERPOOL */}
          <div className="p-6 border border-[#DBC18C]/40 rounded-xl bg-[#F4F1ED]/50 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#8C7A4B] block mb-1">
                Mesa Departamental
              </span>
              <h3 className="font-serif text-xl font-medium text-[#2E2E2E] mb-2">
                Liverpool
              </h3>
              <p className="text-xs text-[#6B6B6B] mb-6 font-serif leading-relaxed">
                Número de evento: <br />
                <span className="font-semibold text-base text-[#2E2E2E] font-sans tracking-wide">
                  60028749
                </span>
              </p>
            </div>
            <a
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/60028749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#3B4D3C] text-white text-[11px] font-sans uppercase tracking-[0.2em] py-2.5 rounded-full hover:bg-[#2E3C2F] transition-colors shadow-md"
            >
              Ver Mesa
            </a>
          </div>

          {/* AMAZON */}
          <div className="p-6 border border-[#DBC18C]/40 rounded-xl bg-[#F4F1ED]/50 flex flex-col items-center justify-between shadow-sm">
            <div className="w-full flex flex-col items-center">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#8C7A4B] block mb-1">
                Mesa Online
              </span>
              <h3 className="font-serif text-xl font-medium text-[#2E2E2E] mb-2">
                Amazon
              </h3>
              
              {/* QR con mix-blend-multiply para fondo transparente */}
              <div className="w-24 h-24 my-1 flex items-center justify-center">
                <img
                  src="/images/QR.jpeg"
                  alt="Código QR Mesa de Regalos Amazon"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>
            
            <a
              href="https://www.amazon.com.mx/wedding/guest-view/2ZMJIBB0KBOZC" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-[#3B4D3C] text-white text-[11px] font-sans uppercase tracking-[0.2em] py-2.5 rounded-full hover:bg-[#2E3C2F] transition-colors shadow-md mt-4"
            >
              Ver Mesa
            </a>
          </div>

        </div>

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-10" />
      </motion.div>
    </section>
  );
}