export default function Favorites({ favorites }) {
  if (favorites.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">❤️ Destinasi Favorit Kamu</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div key={fav.id} className="bg-pink-100 p-4 rounded-xl shadow text-center">
            <img
              src={fav.imageUrl}
              alt={fav.name}
              className="h-40 w-full object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">{fav.name}</h3>
            <p className="text-sm text-gray-600">{fav.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
