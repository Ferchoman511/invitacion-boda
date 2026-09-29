"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
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
          Ubicación
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-8 leading-snug">
          ¿Dónde y Cuándo?
        </h2>

        {/* CONTENIDO DE UBICACIONES */}
        <div className="space-y-8 max-w-lg mx-auto text-center relative z-10">
          
          {/* CEREMONIA RELIGIOSA */}
          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C6A75E] uppercase">
              13:00 HRS
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#2E2E2E] font-medium">
              Ceremonia Religiosa
            </h3>
            <img src="images/igl.png" alt="iglesia"  className="w-[4cm] h-[4cm] object-contain mx-auto" />
            <p className="text-xs sm:text-sm font-serif text-[#5C5C5C]">
              Parroquia de San Felipe de Jesus
            </p>
            <a
              href="https://maps.app.goo.gl/rbHxmM845z81LGGc9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase font-sans text-white bg-[#3B4D3C] hover:bg-[#2E3C2F] rounded-full transition-colors shadow-md"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* SEPARADOR DORADO */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-12 bg-[#DBC18C]/40" />
            <span className="text-[#C6A75E] text-xs">✦</span>
            <div className="h-[1px] w-12 bg-[#DBC18C]/40" />
          </div>

          {/* RECEPCIÓN */}
          <div className="space-y-2">
            <span className="text-xs font-sans font-semibold tracking-widest text-[#C6A75E] uppercase">
              15:00 HRS
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#2E2E2E] font-medium">
              Recepción y Fiesta
            </h3>
            <img src="images/jard.png" alt="jardin" className="w-[4cm] h-[4cm] object-contain mx-auto" />
            <p className="text-xs sm:text-sm font-serif text-[#5C5C5C]">
              Jardín Villa Leona
            </p>
            <a
              href="https://maps.app.goo.gl/ZUo2Dk7K28p2u81B8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase font-sans text-white bg-[#3B4D3C] hover:bg-[#2E3C2F] rounded-full transition-colors shadow-md"
            >
              Ver en Google Maps
            </a>
          </div>

        </div>

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-10" />
      </motion.div>
    </section>
  );
}