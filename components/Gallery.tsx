"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const photos = [
    { src: "/gallery/1.jpg", alt: "Fernando y Laura 1" },
    { src: "/gallery/2.jpg", alt: "Fernando y Laura 2" },
    { src: "/gallery/4.jpg", alt: "Fernando y Laura 3" },
  ];

  // Duplicamos las fotos para garantizar un ciclo continuo sin cortes visuales
  const marqueePhotos = [...photos, ...photos, ...photos];

  return (
    <section className="relative w-full flex items-center justify-center py-10 px-4">
      {/* TARJETA ELEGANTE CON MARCO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 border border-[#DBC18C]/50 text-center overflow-hidden"
      >
        {/* Marco decorativo interior con doble línea dorada */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl border border-[#DBC18C]/30 pointer-events-none z-30" />

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
        <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8C7A4B] uppercase font-sans font-medium mb-1 relative z-20">
          Nuestra Historia
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-6 leading-snug relative z-20">
          Momentos Juntos
        </h2>

        {/* CONTENEDOR DEL CARRETE INFINITO */}
        <div className="relative w-full overflow-hidden py-3 z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 w-max cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueePhotos.map((photo, index) => (
              <div
                key={index}
                className="relative w-48 sm:w-56 h-64 sm:h-72 flex-shrink-0 rounded-xl overflow-hidden shadow-md border border-[#DBC18C]/40 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* MENSAJE FINAL */}
        <p className="mt-6 text-xs sm:text-sm font-serif italic text-[#5C5C5C] max-w-md mx-auto relative z-20">
          "El amor no se mira con los ojos, sino con el alma."
        </p>

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-6 relative z-20" />
      </motion.div>
    </section>
  );
}