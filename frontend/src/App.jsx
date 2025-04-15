import './App.css';
import { useNavigate } from 'react-router-dom';

// Komponent: Pasek nawigacji
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">🏡 Rezerwacje</div>
      <input className="search" placeholder="Wyszukaj kierunki" />
      <div className="profile">👤</div>
    </div>
  );
}

// Komponent: Pasek kategorii
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

// Komponent: Karta z ofertą
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


// Główna aplikacja
function App() {
  const listings = [
    {
      id:1,
      image: '/image.jpg',
      title: 'Domek w lesie',
      location: 'Powiat kartuski, Polska',
      price: 622,
      rating: 4.92
    },
    {
      id:2,
      image: '/image.jpg',
      title: 'Nowoczesny dom z ogrodem',
      location: 'Borovnice, Czechy',
      price: 278,
      rating: 4.94
    },
    {
      id:3,
      image: '/image.jpg',
      title: 'Domek nad jeziorem',
      location: 'Komjatná, Słowacja',
      price: 673,
      rating: 4.9
    }
  ];

  return (
    <>
      <Navbar />
      <CategoryBar />
      <div className="container">
        <h1 className="heading">Małe domki</h1>
        <div className="grid">
          {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
