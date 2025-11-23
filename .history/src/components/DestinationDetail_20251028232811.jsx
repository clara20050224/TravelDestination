import React from "react";

function DestinationDetail({ destination }) {
  if (!destination)
    return (
      <div className="flex-1 text-center mt-10 md:mt-0">
        <p className="text-lg italic">Pilih destinasi untuk melihat detailnya ✈️</p>
      </div>
    );

  return (
    <div className="flex-1 bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-lg">
      <h2 className="text-2xl font-bold mb-3 text-yellow-300">
        {destination.name}
      </h2>
      <img
        src={destination.image}
        alt={destination.name}
        className="rounded-xl w-full h-56 object-cover mb-4"
      />
      <p className="text-base leading-relaxed">{destination.description}</p>
    </div>
  );
}

export default DestinationDetail;
