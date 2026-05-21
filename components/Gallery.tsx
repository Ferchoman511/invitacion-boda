// components/Gallery.tsx
export default function Gallery() {
  const photos = [
    { id: 1, rot: "-rotate-2" },
    { id: 2, rot: "rotate-3" },
    { id: 3, rot: "-rotate-1" },
    { id: 4, rot: "rotate-2" },
  ];

  return (
    <section className="py-24 text-center px-6">
      <h2 className="font-script text-6xl md:text-7xl text-[#C6A75E] mb-2">
        Nuestra Historia
      </h2>
      <p className="font-serif uppercase tracking-widest text-sm mb-16 text-[#6B6B6B]">
        Momentos favoritos
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`
              bg-white p-4 pb-16 
              shadow-[10px_10px_25px_-5px_rgba(0,0,0,0.1)] 
              hover:shadow-[15px_15px_35px_-5px_rgba(198,167,94,0.2)]
              transition-all duration-500 hover:-translate-y-2
              ${photo.rot}
            `}
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={`/gallery/${photo.id}.jpg`}
                alt="Boda"
                className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Texto pequeñito como si estuviera escrito a mano abajo de la foto */}
            <p className="font-script text-2xl text-[#6B6B6B] mt-6">
              Recuerdo #{photo.id}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
