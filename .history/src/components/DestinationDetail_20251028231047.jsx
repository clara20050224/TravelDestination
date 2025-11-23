import React from "react";

const DestinationDetail = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <p className="text-gray-600 mb-2">{destination.description}</p>
      <p className="text-yellow-500 font-semibold">⭐ {destination.rating}</p>
    </div>
  );
};

export default DestinationDetail;
