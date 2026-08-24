// components/GiftRegistry.tsx
export default function GiftRegistry() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="text-[#C6A75E] tracking-[0.3em] uppercase text-xs block mb-2 font-medium">Detalles</span>
      <h2 className="font-script text-5xl md:text-6xl text-[#C6A75E] mb-6">Mesa de Regalos</h2>
      
      <p className="font-serif text-[#2E2E2E] text-base md:text-lg leading-relaxed mb-8 italic">
        "Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros para empezar nuestro hogar, aquí les dejamos algunas opciones."
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <div className="p-6 border border-[#C6A75E]/30 rounded-lg flex-1 bg-[#F8F5F0]/30">
          <h3 className="font-serif text-lg font-medium text-[#2E2E2E] mb-2">Liverpool / Palacio</h3>
          <p className="text-xs text-[#6B6B6B] mb-4">Número de evento: <span className="font-semibold text-[#2E2E2E]">12345678</span></p>
          <a 
            href="https://www.liverpool.com.mx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#2E2E2E] text-[#F5F1EB] text-xs font-serif uppercase tracking-widest py-2 px-6 hover:bg-[#C6A75E] transition-colors"
          >
            Ver Mesa
          </a>
        </div>

        <div className="p-6 border border-[#C6A75E]/30 rounded-lg flex-1 bg-[#F8F5F0]/30">
          <h3 className="font-serif text-lg font-medium text-[#2E2E2E] mb-2">Lluvia de Sobres</h3>
          <p className="text-xs text-[#6B6B6B] mb-4">Habrá buzón de sobres el día del evento o datos bancarios.</p>
          <button 
            onClick={() => alert("CLABE: 0000000000000000 (Banco XYZ)")} 
            className="inline-block bg-[#2E2E2E] text-[#F5F1EB] text-xs font-serif uppercase tracking-widest py-2 px-6 hover:bg-[#C6A75E] transition-colors cursor-pointer"
          >
            Ver Datos Bancarios
          </button>
        </div>
      </div>
    </div>
  );
}