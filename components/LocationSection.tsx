export default function LocationSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="font-script text-6xl md:text-7xl text-[#C6A75E] mb-2">
        Ubicación
      </h2>

      <p className="font-script text-4xl text-[#6B6B6B] max-w-xl mx-auto my-6">
        Nos encantará compartir este momento contigo
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Ceremonia */}
        <a
          href="https://maps.app.goo.gl/hhStRLQU5snr7ZSp7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-4
            border border-[#C6A75E]
            text-[#C6A75E]
            rounded-full
            hover:bg-[#C6A75E]
            hover:text-white
            transition-all duration-300
          "
        >
          Ver Ceremonia
        </a>

        {/* Recepción */}
        <a
          href="https://maps.app.goo.gl/prLDWtrZcKqRp9CJ8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-4
            border border-[#C6A75E]
            text-[#C6A75E]
            rounded-full
            hover:bg-[#C6A75E]
            hover:text-white
            transition-all duration-300
          "
        >
          Ver Recepción
        </a>
      </div>
    </section>
  );
}
