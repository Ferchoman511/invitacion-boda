"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const eventos = [
    {
      hora: "15:00 HRS",
      titulo: "Recepción",
      desc: "Por favor sé puntual, los novios estarán nerviosos y los suegros vigilando.",
      // Icono: Puerta / Bienvenida
      icon: (
        <img 
          src="/images/4it.png" 
          alt="Llegada de novios" 
          className="w-10 h-10 object-contain"
        />
      ),
    },
    {
      hora: "16:00 HRS",
      titulo: "Cóctel",
      desc: "A tomar fotos, abrazar a los novios y calentar motores para la fiesta.",
      // Icono: Anillos / Iglesia
      icon: (
       <img 
          src="/images/3it.png" 
          alt="Cóctel" 
          className="w-10 h-10 object-contain"
        />
      ),
    },
    {
      hora: "17:30 HRS",
      titulo: "Cena y Discursos",
      desc: "Comida rica y discursos breves (prometemos amenazar a los que hablen mucho).",
      // Icono: Copas de brindis
      icon: (
        <img 
          src="/images/2it.png" 
          alt="Cena" 
          className="w-10 h-10 object-contain"
        />
      ),
    },
    {
      hora: "19:00 HRS",
      titulo: "A Bailar Hasta que Duelan los Pies",
      desc: "Aquí se rompen las reglas y empieza la verdadera diversión.",
      // Icono: Música / Baile
      icon: (
        <img 
          src="/images/1it.png" 
          alt="Baile" 
         className="w-10 h-10 object-contain"
        />
      ),
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
          Itinerario
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-[#C6A75E] mb-10 leading-snug">
          El Gran Delineado del Día
        </h2>

        {/* LÍNEA DE TIEMPO VERTICAL */}
        <div className="relative max-w-lg mx-auto text-left pl-2 sm:pl-4">
          
          {/* Línea vertical dorada (centrada con respecto al nuevo nodo w-16) */}
          <div className="absolute left-[38px] sm:left-[44px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#C6A75E]/30 via-[#C6A75E]/60 to-[#C6A75E]/30" />

          <div className="space-y-10 relative">
            {eventos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                {/* NODO CIRCULAR AMPLIADO (w-16 h-16) */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#F4F1ED] border-2 border-[#C6A75E] text-[#3B4D3C] flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>

                {/* DETALLES DEL EVENTO */}
                <div className="flex-1 pt-1.5">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C6A75E]/15 border border-[#C6A75E]/30 mb-1.5">
                    <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-[#8C7A4B]">
                      {item.hora}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg text-[#2E2E2E] font-medium leading-tight">
                    {item.titulo}
                  </h3>

                  <p className="font-serif text-xs sm:text-sm text-[#6B6B6B] mt-1 italic leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DIVISOR FINAL */}
        <div className="w-16 h-[1px] bg-[#DBC18C]/40 mx-auto mt-10" />
      </motion.div>
    </section>
  );
}