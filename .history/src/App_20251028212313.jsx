import React, { useState } from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      name: "Korea Selatan",
      description: "Negeri ginseng dengan budaya K-pop dan kuliner khas seperti kimchi.",
      image: "https://asset.kompas.com/crops/MEgSzm2u7Yob7JmbQ4GEns53NOg=/0x0:780x520/1200x800/data/photo/2020/09/30/5f749b2c7a20f.png",
    },
    {
      name: "Jepang",
      description: "Negeri sakura dengan teknologi maju dan keindahan kuil tradisional.",
      image: "https://www.peduliwni.com/wp-content/uploads/2023/11/ciri-khas-negara-Jepang.jpg",
    },
    {
      name: "Swiss",
      description: "Negara dengan pegunungan Alpen dan cokelat terbaik di dunia.",
      image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/117/2023/10/23/55415861-e734-4166-917e-667381f53a57-2908549507.jpg",
    },
    {
      name: "New York",
      description: "Kota yang tidak pernah tidur, pusat budaya dan ekonomi dunia.",
      image: "https://suratdunia.com/wp-content/uploads/sd_old/article/picture/43/new-york-city-Earth-768x414.jpg",
    },
    {
      name: "Jerman",
      description: "Negeri dengan sejarah panjang, kastil indah, dan sosis bratwurst.",
      image: "hhttps://isdayanaputrifinal.wordpress.com/wp-content/uploads/2017/04/wisata-jerman.png?w=584",
    },
    {
      name: "Thailand",
      description: "Negara tropis penuh kuliner lezat dan pantai yang eksotis.",
      image: "https://ik.imagekit.io/tvlk/blog/2025/02/bangkok-mob.png",
    },
    {
      name: "Belanda",
      description: "Negara kincir angin dan bunga tulip yang mempesona.",
      image: "https://img.okezone.com/content/2021/09/20/18/2473841/peneliti-belanda-negara-tertinggi-di-dunia-warganya-semakin-pendek-dfSJvwVGZU.jpg",
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
