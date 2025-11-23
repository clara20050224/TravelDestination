import React, { useState } from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      name: "Korea",
      description: "Negeri ginseng dengan budaya K-pop dan kuliner khas seperti kimchi.",
      image: "https://images.unsplash.com/photo-1585123662034-916e3c2e8433",
    },
    {
      name: "Jepang",
      description: "Negeri sakura dengan teknologi maju dan keindahan kuil tradisional.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
    },
    {
      name: "Swiss",
      description: "Negara dengan pegunungan Alpen dan cokelat terbaik di dunia.",
      image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    },
    {
      name: "New York",
      description: "Kota yang tidak pernah tidur, pusat budaya dan ekonomi dunia.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    },
    {
      name: "Jerman",
      description: "Negeri dengan sejarah panjang, kastil indah, dan sosis bratwurst.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
      name: "Thailand",
      description: "Negara tropis penuh kuliner lezat dan pantai yang eksotis.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Belanda",
      description: "Negara kincir angin dan bunga tulip yang mempesona.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <DestinationList
          destinations={destinations}
          onSelect={setSelectedDestination}
        />
        <DestinationDetail destination={selectedDestination} />
      </div>
    </div>
  );
}
