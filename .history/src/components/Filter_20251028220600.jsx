export default function Filter({ onFilterChange }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <select 
        onChange={(e) => onFilterChange(e.target.value)} 
        className="border p-2 rounded"
      >
        <option value="">Semua</option>
        <option value="Asia">Asia</option>
        <option value="Eropa">Eropa</option>
        <option value="Amerika">Amerika</option>
        <option value="4.7">Rating ≥ 4.7</option>
        <option value="4.8">Rating ≥ 4.8</option>
      </select>
    </div>
  );
}
