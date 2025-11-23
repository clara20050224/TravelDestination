import React from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations, onSelect }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {destinations.map((item) => (
        <DestinationCard
          key={item.id}
          destination={item}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default DestinationList;
