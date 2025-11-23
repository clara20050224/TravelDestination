import React, { useState } from "react";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

const App = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      description: "Pulau tropis dengan pantai indah dan budaya yang kaya.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "Kota modern dengan perpaduan budaya tradisional dan teknologi canggih.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Paris, France",
      description: "Kota cinta dengan menara Eiffel yang ikonik dan kuliner lezat.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
  ];

  // STATE untuk menyimpan destinasi yang dipilih
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🌍 Travel Destination App
      </h1>

      {/* Mengirim data via props */}
      <DestinationList
        destinations={destinations}
        onSelect={setSelectedDestination}
      />

      {/* Menampilkan detail jika ada yang dipilih */}
      {selectedDestination && (
        <DestinationDetail destination={selectedDestination} />
      )}
    </div>
  );
};

export default App;
