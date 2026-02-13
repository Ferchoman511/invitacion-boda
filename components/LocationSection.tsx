export default function LocationSection() {
  return (
    <section className="py-24 bg-[#F5F1EB] text-center">
      <h2 className="text-4xl font-serif text-[#2E2E2E] mb-6">Ubicación</h2>

      <p className="mb-10 text-lg text-[#6B6B6B]">
        Nos encantará compartir este momento contigo
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Ceremonia */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-8 py-4
            bg-[#C6A75E]
            text-white
            rounded-full
            shadow-md
            hover:shadow-xl
            hover:scale-105
            transition-all duration-300
          "
        >
          Ver Ceremonia
        </a>

        {/* Recepción */}
        <a
          href="https://maps.google.com"
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
