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
        "https://asset.kompas.com/crops/bKrKE_8A-PhNITbYZQxtzNn7vEU=/0x0:1000x667/1200x800/data/photo/2021/11/18/61960b99e785f.jpg",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      description: "Kota modern dengan perpaduan budaya tradisional dan teknologi canggih.",
      image:
        "https://asset-2.tribunnews.com/tribunnews/foto/bank/images/tokyo_20150619_164351.jpg",
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
        {
      id: 4,
      name: "Jerman, Germany",
      description: "Kota erman terkenal dengan industri otomotifnya yang canggih (BMW, Mercedes-Benz), warisan budayanya yang kaya (filosofi, musik, sastra, banyak kastil), dan makanan khasnya seperti sosis dan bir.",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01gz8sz7q7hj5bgc12qe58nk8v.jpg",
      rating: 4.7,
    },
  ];

  // STATE untuk menyimpan destinasi yang dipilih
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🌍 Travel Destination 
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
