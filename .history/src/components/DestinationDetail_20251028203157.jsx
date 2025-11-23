import React from "react";

export default function DestinationDetail({ destination }) {
  if (!destination) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4 text-gray-600 flex items-center justify-center h-full">
        <p>Pilih destinasi untuk melihat detailnya ✈️</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        {destination.name}
      </h2>
      <p className="text-gray-700">{destination.description}</p>
    </div>
  );
}
