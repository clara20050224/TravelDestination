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
        "https://media.japanesestation.com/images/750x422/2020/07/05/43873-pemandangan-kabukicho-tokyo-di-malam-hari.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Seoul, Korea Selatan",
      description:
        "Kota penuh kehidupan dengan budaya pop, makanan lezat, dan sejarah menarik.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Seoul_%28175734251%29.jpeg",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Zermatt, Swiss",
      description:
        "Kota pegunungan dengan pemandangan salju dan Gunung Matterhorn yang menakjubkan.",
      image:
        "https://image.idntimes.com/post/20191031/parish-church-of-st-mauritius-zermatt-1-1-93867ac39699bf38a8073482becf99db.jpg",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Bangkok, Thailand",
      description:
        "Kota yang hidup dengan kuil megah, pasar terapung, dan kuliner jalanan lezat.",
      image:
        "https://linkstravelandtours.co.uk/wp-content/uploads/2018/12/bangkok-temple-dawn-thailand.jpg",
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
