import React from "react";

const DestinationCard = ({ destination, onSelect }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
      onClick={() => onSelect(destination)}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{destination.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Rating: ⭐ {destination.rating}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
