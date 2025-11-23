import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, onSelect, selectedId }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {destinations.map((dest) => (
        <DestinationCard
          key={dest.id}
          destination={dest}
          onSelect={onSelect}
          isSelected={selectedId === dest.id}
        />
      ))}
    </div>
  );
}

export default DestinationList;
