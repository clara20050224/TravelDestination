export default function DestinationCard({ destination, onSelect, children }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
      onClick={() => onSelect(destination)}
    >
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{destination.name}</h3>
        <p className="text-sm text-gray-500">{destination.location}</p>
        <p className="text-yellow-500 mt-1">⭐ {destination.rating}</p>
        {children}
      </div>
    </div>
  );
}
