import { useState } from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import DestinationDetail from "./components/DestinationDetail";
import Favorites from "./components/Favorites";
import Filter from "./components/Filter";

const initialDestinations = [
  {
    id: 1,
    name: "Mount Fuji",
    location: "Japan",
    imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    rating: 5,
  },
  {
    id: 2,
    name: "Bali Beach",
    location: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    rating: 4,
  },
  {
    id: 3,
    name: "Swiss Alps",
    location: "Switzerland",
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    rating: 5,
  },
  {
    id: 4,
    name: "Bangkok City",
    location: "Thailand",
    imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad05",
    rating: 3,
  },
];

export default function App() {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState({ location: "", rating: 0 });

  const addToFavorites = (destination) => {
    if (!favorites.find((fav) => fav.id === destination.id)) {
      setFavorites([...favorites, destination]);
    }
  };

  const handleFilter = (criteria) => {
    setFilter(criteria);
  };

  const filteredDestinations = destinations.filter((d) => {
    const matchLocation = filter.location ? d.location === filter.location : true;
    const matchRating = filter.rating ? d.rating === filter.rating : true;
    return matchLocation && matchRating;
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <Filter destinations={destinations} onFilter={handleFilter} />

        <DestinationList
          destinations={filteredDestinations}
          onSelect={setSelectedDestination}
        >
          {(destination) => (
            <button
              onClick={() => addToFavorites(destination)}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-full mt-3"
            >
              Tambah ke Favorit
            </button>
          )}
        </DestinationList>

        {selectedDestination && (
          <DestinationDetail destination={selectedDestination} />
        )}

        <Favorites favorites={favorites} />
      </div>
    </div>
  );
}
