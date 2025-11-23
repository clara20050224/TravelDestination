export default function DestinationDetail({ destination }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 text-center">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="h-64 w-full object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold">{destination.name}</h2>
      <p className="text-gray-600">{destination.location}</p>
      <p className="text-yellow-500 mt-2">⭐ {destination.rating}</p>
    </div>
  );
}
