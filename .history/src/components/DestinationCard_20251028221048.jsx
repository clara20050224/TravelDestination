<div className="card">
  <img src={destination.imageUrl} alt={destination.name} className="card-img" />
  <h3 className="card-title">{destination.name}</h3>
  <p className="card-desc">{destination.location}</p>
  <p className="card-price">⭐ {destination.rating}</p>
  <button className="btn-add">Tambah ke Favorit</button>
</div>
