// components/Timeline.tsx
export default function Timeline() {
  const eventos = [
    { hora: "15:30 HRS", titulo: "Llegada de Invitados", desc: "Por favor sé puntual, los novios estarán nerviosos y los suegros vigilando." },
    { hora: "16:00 HRS", titulo: "La Boda (El 'Sí, acepto')", desc: "El momento oficial donde ya no hay vuelta atrás. Pañuelos listos." },
    { hora: "17:30 HRS", titulo: "Cóctel y Chismes", desc: "A tomar fotos, abrazar a los novios y calentar motores para la fiesta." },
    { hora: "19:00 HRS", titulo: "Cena y Discursos", desc: "Comida rica y discursos breves (prometemos amenazar a los que hablen mucho)." },
    { hora: "21:00 HRS", titulo: "A Bailar Hasta que Duelan los Pies", desc: "Aquí se rompen las reglas y empieza la verdadera diversión." },
  ];

  return (
    <div className="text-center">
      <span className="text-[#C6A75E] tracking-[0.3em] uppercase text-xs block mb-2 font-medium">Itinerario</span>
      <h2 className="font-script text-5xl md:text-6xl text-[#C6A75E] mb-12">El Gran Delineado del Día</h2>

      <div className="space-y-8 max-w-2xl mx-auto text-left">
        {eventos.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-baseline gap-4 border-b border-[#F5F1EB] pb-6">
            <span className="font-serif text-[#C6A75E] font-semibold tracking-wider text-sm md:w-32">{item.hora}</span>
            <div>
              <h3 className="font-serif text-xl text-[#2E2E2E] font-medium">{item.titulo}</h3>
              <p className="font-serif text-[#6B6B6B] text-sm mt-1 italic">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}