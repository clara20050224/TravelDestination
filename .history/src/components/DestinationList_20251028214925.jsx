import DestinationCard from "./DestinationCard";

export default function DestinationList({ destinations, onSelect, children }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onSelect={onSelect}
        >
          {children(destination)}
        </DestinationCard>
      ))}
    </div>
  );
}
