import React, { useState } from "react";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

const destinations = [
  {
    id: 1,
    name: "Korea Selatan",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    description:
      "Nikmati budaya modern dan tradisional Seoul, dengan kuliner khas seperti kimchi dan street food yang terkenal.",
  },
  {
    id: 2,
    name: "Jepang",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b",
    description:
      "Rasakan keindahan bunga sakura, budaya disiplin, dan teknologi canggih di Tokyo dan Kyoto.",
  },
  {
    id: 3,
    name: "Swiss",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Negara pegunungan Alpen dengan pemandangan salju yang menakjubkan dan cokelat terbaik di dunia.",
  },
  {
    id: 4,
    name: "New York",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    description:
      "Kota yang tidak pernah tidur, dengan gedung pencakar langit, Broadway, dan Central Park yang ikonik.",
  },
  {
    id: 5,
    name: "Jerman",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    description:
      "Negara dengan sejarah yang kaya, arsitektur klasik, dan kota modern seperti Berlin dan Munich.",
  },
  {
    id: 6,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1555653401-3f306c3b8d04",
    description:
      "Negara tropis dengan pantai eksotis, makanan lezat, dan keramahan budaya Asia Tenggara.",
  },
  {
    id: 7,
    name: "Belanda",
    image: "https://images.unsplash.com/photo-1533934973987-16b5b3f1df34",
    description:
      "Negeri kincir angin dan bunga tulip yang menawan, dengan kanal indah di Amsterdam.",
  },
];

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-sans">
      <header className="text-center py-6 text-3xl font-bold drop-shadow-lg">
        🌏 Travel Destination Explorer
      </header>

      <div className="flex flex-col md:flex-row justify-center items-start px-6 gap-8">
        <DestinationList
          destinations={destinations}
          onSelect={setSelectedDestination}
          selectedId={selectedDestination?.id}
        />
        <DestinationDetail destination={selectedDestination} />
      </div>

      <footer className="text-center py-4 text-sm opacity-80 mt-6">
        © 2025 Travel Explorer by pa
      </footer>
    </div>
  );
}

export default App;
