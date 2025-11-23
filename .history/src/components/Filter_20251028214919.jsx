import { useState } from "react";

export default function Filter({ destinations, onFilter }) {
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);

  const uniqueLocations = [...new Set(destinations.map((d) => d.location))];

  const applyFilter = () => {
    onFilter({ location, rating });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="">Semua Lokasi</option>
        {uniqueLocations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 rounded-md"
      >
        <option value="0">Semua Rating</option>
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} ⭐</option>
        ))}
      </select>

      <button
        onClick={applyFilter}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Terapkan Filter
      </button>
    </div>
  );
}
