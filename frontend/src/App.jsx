import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component: Navbar
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">🏡 Rezerwacje</div>
      <input className="search" placeholder="Wyszukaj kierunki" />
      <div className="profile">👤</div>
    </div>
  );
}

// Component: CategoryBar
function CategoryBar() {
  const categories = [
    { icon: "🏠", name: "Małe domki" },
    { icon: "🔥", name: "Ikony" },
    { icon: "🌲", name: "Na wsi" },
    { icon: "🌴", name: "W tropikach" },
    { icon: "🏞️", name: "Widoki" },
    { icon: "🏰", name: "Zamki" },
    { icon: "🏕️", name: "Chatki" },
    { icon: "🌊", name: "Nad jeziorem" },
    { icon: "🏖️", name: "Przy plaży" },
  ];

  return (
    <div className="category-bar">
      {categories.map((cat, idx) => (
        <div key={idx} className="category">
          <span className="icon">{cat.icon}</span>
          <span className="name">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}

// Component: Card
function Card({ id, image, title, location, price, rating }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/listing/${id}`)}>
      <img src={image} alt={title} />
      <div className="card-info">
        <div className="card-header">
          <span>{location}</span>
          <span>★ {rating}</span>
        </div>
        <h3>{title}</h3>
        <p>{price} zł / noc</p>
      </div>
    </div>
  );
}

// Main Application
function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch listings dynamically from an API
    async function fetchListings() {
      const response = await fetch('/api/listings'); // Replace with your API endpoint
      const data = await response.json();
      setListings(data);
    }

    fetchListings();
  }, []);

  return (
    <>
      <Navbar />
      <CategoryBar />
      <div className="container">
        <h1 className="heading">Małe domki</h1>
        <div className="grid">
          {listings.map((listing) => (
            <Card key={listing.id} {...listing} />
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </>
  );
}

export default App;
