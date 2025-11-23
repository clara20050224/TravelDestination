import React, { useState } from "react";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

const App = () => {
  // Daftar destinasi
  const destinations = [
    {
      id: 1,
      name: "Tokyo, Jepang",
      description:
        "Kota modern dengan perpaduan budaya tradisional dan teknologi canggih.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Seoul, Korea Selatan",
      description:
        "Kota penuh kehidupan dengan budaya pop, makanan lezat, dan sejarah menarik.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Zermatt, Swiss",
      description:
        "Kota pegunungan dengan pemandangan salju dan Gunung Matterhorn yang menakjubkan.",
      image:
        "https://images.unsplash.com/photo-1602098082328-8c06e8d5efb4?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Bangkok, Thailand",
      description:
        "Kota yang hidup dengan kuil megah, pasar terapung, dan kuliner jalanan lezat.",
      image:
        "https://images.unsplash.com/photo-1587731497578-6811797f3c7a?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
    },
    {
      id: 5,
      name: "New York, Amerika Serikat",
      description:
        "Kota yang tidak pernah tidur dengan gedung pencakar langit dan budaya yang beragam.",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      rating: 4.8,
    },
  ];

  // STATE: destinasi yang dipilih
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        🌏 Travel Destination App
      </h1>

      {/* Kirim data ke komponen anak melalui props */}
      <DestinationList
        destinations={destinations}
        onSelect={setSelectedDestination}
      />

      {/* Jika ada yang diklik, tampilkan detail */}
      {selectedDestination && (
        <DestinationDetail destination={selectedDestination} />
      )}
    </div>
  );
};

export default App;
