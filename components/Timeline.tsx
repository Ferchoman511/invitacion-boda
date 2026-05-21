export default function Timeline() {
  const events = [
    { time: "5:00 PM", title: "Ceremonia", desc: "Parroquia Principal" },
    { time: "7:30 PM", title: "Recepción", desc: "Jardín de Eventos" },
    { time: "9:00 PM", title: "El Gran Baile", desc: "¡A celebrar!" },
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-script text-6xl md:text-7xl text-[#C6A75E] mb-2 text-center">
        Itinerario
      </h2>

      {/* Contenedor relativo para la línea central */}
      <div className="relative border-l border-[#C6A75E] ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Punto brillante en la línea de tiempo */}
            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#C6A75E] rounded-full shadow-[0_0_12px_rgba(198,167,94,0.6)]" />

            {/* Tarjeta de información */}
            <div
              className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pl-16 text-left"
                  : "md:pr-16 md:text-right"
              } w-full`}
            >
              <span className="text-[#C6A75E] font-medium tracking-widest text-sm uppercase">
                {event.time}
              </span>
              <h3 className="font-serif text-2xl mt-2 mb-2 text-[#2E2E2E]">
                {event.title}
              </h3>
              <p className="text-[#6B6B6B] font-light">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
