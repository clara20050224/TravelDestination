export default function DestinationList({ destinations, onSelect, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {destinations.map(destination => (
        <div key={destination.id} className="card bg-white">
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{destination.name}</h2>
            <p className="text-gray-500">{destination.location}</p>
            <p className="mt-1 text-yellow-500">⭐ {destination.rating}</p>
            <button 
              onClick={() => onSelect(destination)} 
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Lihat Detail
            </button>
            {children(destination)}
          </div>
        </div>
      ))}
    </div>
  );
}
