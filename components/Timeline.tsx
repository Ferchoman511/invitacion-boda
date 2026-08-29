"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const eventos = [
    {
      hora: "15:30 HRS",
      titulo: "Llegada de Invitados",
      desc: "Por favor sé puntual, los novios estarán nerviosos y los suegros vigilando.",
      // Icono: Puerta / Bienvenida
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H9" />
        </svg>
      ),
    },
    {
      hora: "16:00 HRS",
      titulo: "Cóctel y Chismes",
      desc: "A tomar fotos, abrazar a los novios y calentar motores para la fiesta.",
      // Icono: Anillos / Iglesia
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      hora: "17:30 HRS",
      titulo: "Cena y Discursos",
      desc: "Comida rica y discursos breves (prometemos amenazar a los que hablen mucho).",
      // Icono: Copas de brindis
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693l-1.57-.393m15.6 0L12 21 4.2 15.3" />
        </svg>
      ),
    },
    {
      hora: "19:00 HRS",
      titulo: "A Bailar Hasta que Duelan los Pies",
      desc: "Aquí se rompen las reglas y empieza la verdadera diversión.",
      // Icono: Música / Baile
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.8 1.8 0 11-.996-3.46l1.948-.556V6.703a1.5 1.5 0 00-1.076-1.442L9 3.5m0 5.5v7.253a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.8 1.8 0 11-.996-3.46l1.948-.556V9" />
        </svg>
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

        {/* LÍNEA DE TIEMPO VERTICAL ESTILO TIKTOK */}
        <div className="relative max-w-lg mx-auto text-left pl-4 sm:pl-6">
          
          {/* Línea vertical dorada de fondo */}
          <div className="absolute left-[30px] sm:left-[38px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#C6A75E]/30 via-[#C6A75E]/60 to-[#C6A75E]/30" />

          <div className="space-y-8 relative">
            {eventos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                {/* NODO CIRCULAR CON ICONO */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#F4F1ED] border-2 border-[#C6A75E] text-[#3B4D3C] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#3B4D3C] group-hover:text-[#F4F1ED] transition-all duration-300">
                  {item.icon}
                </div>

                {/* DETALLES DEL EVENTO */}
                <div className="flex-1 pt-1">
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