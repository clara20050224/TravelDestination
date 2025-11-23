import React from "react";

export default function DestinationList({ destinations, onSelect }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Pilih Destinasi</h2>
      <ul className="space-y-3">
        {destinations.map((dest, index) => (
          <li
            key={index}
            className="p-3 rounded-xl cursor-pointer hover:bg-blue-100 transition"
            onClick={() => onSelect(dest)}
          >
            <span className="font-medium text-gray-800">{dest.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
