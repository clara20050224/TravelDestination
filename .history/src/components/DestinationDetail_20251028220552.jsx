export default function DestinationDetail({ destination, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md text-center relative shadow-lg">
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >✕</button>
        <img src={destination.imageUrl} alt={destination.name} className="w-full h-56 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-3">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="text-yellow-500 font-semibold mt-2">⭐ {destination.rating}</p>
      </div>
    </div>
  );
}
