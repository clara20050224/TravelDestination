import React from "react";

function DestinationCard({ destination, onSelect, isSelected }) {
  return (
    <div
      onClick={() => onSelect(destination)}
      className={`cursor-pointer p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border ${
        isSelected ? "border-yellow-300 scale-105" : "border-transparent"
      }`}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <h3 className="mt-3 text-lg font-semibold text-center">
        {destination.name}
      </h3>
    </div>
  );
}

export default DestinationCard;
