import { useState } from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";
import Filter from "./components/Filter";
import Favorites from "./components/Favorites";

export default function App() {
  const destinations = [
    { id: 1, name: "Korea", location: "Asia", imageUrl: "/images/korea.jpg", rating: 4.8 },
    { id: 2, name: "Jepang", location: "Asia", imageUrl: "/images/japan.jpg", rating: 4.9 },
    { id: 3, name: "Swiss", location: "Eropa", imageUrl: "/images/swiss.jpg", rating: 4.7 },
    { id: 4, name: "New York", location: "Amerika", imageUrl: "/images/newyork.jpg", rating: 4.5 },
    { id: 5, name: "Jerman", location: "Eropa", imageUrl: "/images/germany.jpg", rating: 4.6 },
    { id: 6, name: "Thailand", location: "Asia", imageUrl: "/images/thailand.jpg", rating: 4.4 },
    { id: 7, name: "Belanda", location: "Eropa", imageUrl: "/images/netherlands.jpg", rating: 4.7 },
  ];

  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("");

  const handleAddFavorite = (destination) => {
    if (!favorites.find(f => f.id === destination.id)) {
      setFavorites([...favorites, destination]);
    }
  };

  const filtered = filter
    ? destinations.filter(d => d.location === filter || d.rating >= parseFloat(filter))
    : destinations;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <Filter onFilterChange={setFilter} />
        <DestinationList 
          destinations={filtered}
          onSelect={setSelected}
        >
          {(destination) => (
            <button 
              onClick={() => handleAddFavorite(destination)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Tambah ke Favorit
            </button>
          )}
        </DestinationList>

        {selected && <DestinationDetail destination={selected} onClose={() => setSelected(null)} />}
        <Favorites favorites={favorites} />
      </div>
    </div>
  );
}
