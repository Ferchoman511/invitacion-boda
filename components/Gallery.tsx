"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const photos = [
    {
      src: "/gallery/1.jpg",
      alt: "Fernando y Laura 1",
      caption: "Nuestro primer viaje juntos",
      rotation: "-rotate-3 hover:rotate-0",
      delay: 0.1,
    },
    {
      src: "/gallery/2.jpg",
      alt: "Fernando y Laura 2",
      caption: "El día del 'Sí'",
      rotation: "rotate-2 hover:rotate-0",
      delay: 0.2,
    },
    {
      src: "/gallery/4.jpg",
      alt: "Fernando y Laura 3",
      caption: "Construyendo nuestro futuro",
      rotation: "-rotate-2 hover:rotate-0",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center py-10 px-4">
      {/* TARJETA ELEGANTE CON MARCO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-3xl bg-[#FCFAF7]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 md:p-14 border border-[#DBC18C]/50 text-center"
      >
        {/* Marco interior */}
        <div className="absolute inset-3 sm:inset-4 rounded-xl border border-[#DBC18C]/30 pointer-events-none" />

        {/* FLORES ESQUINA SUPERIOR DERECHA 
        <img
          src="/images/flores-arriba.png"
          alt="Decoración floral"
          className="absolute -top-12 -right-10 sm:-top-16 sm:-right-14 w-36 sm:w-44 object-contain pointer-events-none drop-shadow-md z-20"
        />*/}

        {/* FLORES ESQUINA INFERIOR IZQUIERDA 
        <img
          src="/images/flores-abajo.png"
          alt="Decoración floral"
          className="absolute -bottom-14 -left-12 sm:-bottom-16 sm:-left-16 w-44 sm:w-52 object-contain pointer-events-none drop-shadow-lg z-20"
        />*/}

        {/* ENCABEZADO */}
        <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8C7A4B] uppercase font-sans font-medium mb-1">
          Nuestra Historia
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-10 leading-snug">
          Momentos Inolvidables
        </h2>

        {/* POLAROIDS DESORDENADAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 max-w-2xl mx-auto py-4 relative z-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: photo.delay }}
              className={`bg-white p-3.5 pb-5 rounded-sm shadow-xl border border-gray-200/60 transform transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-2xl ${photo.rotation} cursor-pointer group`}
            >
              {/* IMAGEN DE LA POLAROID */}
              <div className="w-full h-56 sm:h-60 overflow-hidden bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* PIE DE FOTO EN ESTILO ESCRITO A MANO */}
              <p className="font-script text-lg sm:text-xl text-[#3B4D3C] mt-3 tracking-wide leading-tight">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CITA FINAL */}
        <p className="mt-8 text-xs sm:text-sm font-serif italic text-[#5C5C5C] max-w-md mx-auto">
          "El amor no se mira con los ojos, sino con el alma."
        </p>

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-8" />
      </motion.div>
    </section>
  );
}