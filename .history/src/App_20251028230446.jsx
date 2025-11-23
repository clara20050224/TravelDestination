import { useState } from "react";
import DestinationList from "./components/DestinationList";
import FavoriteList from "./components/FavoriteList";
import DestinationDetail from "./components/DestinationDetail";

function App() {
  const [destinations] = useState([
    {
      id: 1,
      name: "Bali, Indonesia",
      description:
        "Surga tropis dengan pantai eksotis, budaya unik, dan keramahan penduduk lokal.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Kyoto, Jepang",
      description:
        "Kota bersejarah dengan kuil megah, taman tradisional, dan suasana tenang.",
      image:
        "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Paris, Prancis",
      description:
        "Kota cinta dengan menara Eiffel, kuliner lezat, dan keindahan arsitektur klasik.",
      image:
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [favorites, setFavorites] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const addToFavorites = (destination) => {
    if (!favorites.find((fav) => fav.id === destination.id)) {
      setFavorites([...favorites, destination]);
    }
  };

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">
        WanderList – Explore Your Next Travel Destination
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <DestinationList
            destinations={destinations}
            onSelect={selectDestination}
            onAddFavorite={addToFavorites}
          />
        </div>

        <div>
          <FavoriteList favorites={favorites} />
        </div>
      </div>

      {selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}

export default App;
