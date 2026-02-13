export default function Gallery() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-4xl font-serif mb-12">Nuestra Historia</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((img) => (
          <img
            key={img}
            src={`/gallery/${img}.jpg`}
            alt={`Foto ${img}`}
            className="
              rounded-xl
              shadow-md
              object-cover
              w-full
              h-64
              hover:scale-105
              transition duration-500
            "
          />
        ))}
      </div>
    </section>
  );
}
