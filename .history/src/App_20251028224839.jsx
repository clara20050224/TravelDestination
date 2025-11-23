import React, { useState } from "react";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

const destinations = [
  {
    id: 1,
    name: "Korea Selatan",
    image: "https://asset.kompas.com/crops/MEgSzm2u7Yob7JmbQ4GEns53NOg=/0x0:780x520/1200x800/data/photo/2020/09/30/5f749b2c7a20f.png",
    description:
      "Nikmati budaya modern dan tradisional Seoul, dengan kuliner khas seperti kimchi dan street food yang terkenal.",
  },
  {
    id: 2,
    name: "Jepang",
    image: "https://static.wixstatic.com/media/86fc66_bd7ad3339fe64d56b8d61028e74be955~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85/86fc66_bd7ad3339fe64d56b8d61028e74be955~mv2.jpg",
    description:
      "Rasakan keindahan bunga sakura, budaya disiplin, dan teknologi canggih di Tokyo dan Kyoto.",
  },
  {
    id: 3,
    name: "Swiss",
    image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/117/2023/10/23/55415861-e734-4166-917e-667381f53a57-2908549507.jpg",
    description:
      "Negara pegunungan Alpen dengan pemandangan salju yang menakjubkan dan cokelat terbaik di dunia.",
  },
  {
    id: 4,
    name: "New York",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/08/31/patung-liberty_169.jpeg?w=600&q=90",
    description:
      "Kota yang tidak pernah tidur, dengan gedung pencakar langit, Broadway, dan Central Park yang ikonik.",
  },
  {
    id: 5,
    name: "Jerman",
    image: "https://www.fodors.com/wp-content/uploads/2024/07/0_HERO_istock_1340628888.jpg",
    description:
      "Negara dengan sejarah yang kaya, arsitektur klasik, dan kota modern seperti Berlin dan Munich.",
  },
  {
    id: 6,
    name: "Thailand",
    image: "https://news.annisatravel.com/wp-content/uploads/2024/07/Thailand.webp",
    description:
      "Negara tropis dengan pantai eksotis, makanan lezat, dan keramahan budaya Asia Tenggara.",
  },
  {
    id: 7,
    name: "Belanda",
    image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01gzf7txpvgc6yhp1dkcyk6jnk.jpg",
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
