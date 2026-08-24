"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  titleTag?: string;
  title?: string;
  className?: string;
}

export default function SectionCard({
  children,
  titleTag,
  title,
  className = "",
}: SectionCardProps) {
  return (
    <section className="relative w-full flex items-center justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className={`relative w-full max-w-2xl bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 md:p-14 border border-[#DBC18C]/50 text-center ${className}`}
      >
        {/* Marco decorativo interior con doble línea dorada */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl border border-[#DBC18C]/30 pointer-events-none" />

        {/* FLORES ESQUINA SUPERIOR DERECHA */}
        <img
          src="/images/flores-arriba.png"
          alt="Decoración floral"
          className="absolute -top-12 -right-10 sm:-top-16 sm:-right-14 w-36 sm:w-44 object-contain pointer-events-none drop-shadow-md z-20"
        />

        {/* FLORES ESQUINA INFERIOR IZQUIERDA */}
        <img
          src="/images/flores-abajo.png"
          alt="Decoración floral"
          className="absolute -bottom-14 -left-12 sm:-bottom-16 sm:-left-16 w-44 sm:w-52 object-contain pointer-events-none drop-shadow-lg z-20"
        />

        {/* Encabezado opcional */}
        {titleTag && (
          <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8C7A4B] uppercase font-sans font-medium mb-1">
            {titleTag}
          </p>
        )}
        {title && (
          <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-8 leading-snug">
            {title}
          </h2>
        )}

        {/* Contenido de la sección */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </section>
  );
}
