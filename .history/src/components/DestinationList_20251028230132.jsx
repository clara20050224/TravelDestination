function DestinationList({ destinations, onSelect, onAddFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
        >

          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-60 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-sky-600">
              {dest.name}
            </h2>
            <p className="text-gray-700 mb-4 text-sm">
              {dest.description}
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => onSelect(dest)}
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
              >
                View Details
              </button>
              <button
                onClick={() => onAddFavorite(dest)}
                className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-500"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationList;
