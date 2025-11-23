export default function Favorites({ favorites }) {
  if (favorites.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">❤️ Destinasi Favoritmu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((f) => (
          <div key={f.id} className="card bg-pink-100">
            <img src={f.imageUrl} alt={f.name} className="h-40 w-full object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{f.name}</h3>
              <p className="text-sm text-gray-600">{f.location}</p>
              <p className="text-yellow-600 mt-1">⭐ {f.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
