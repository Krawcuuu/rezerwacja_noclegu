import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function Listing() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      listingId: id,
      checkIn,
      checkOut,
      guests
    };
    console.log('Rezerwacja:', reservation);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/">← Powrót</Link>
      <h1>Szczegóły oferty #{id}</h1>
      <img src="/image.png" alt="listing" style={{ maxWidth: '500px', borderRadius: '10px' }} />

      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Zarezerwuj</h2>
        <label>Data przyjazdu:</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} required />

        <label>Data wyjazdu:</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} required />

        <label>Liczba gości:</label>
        <input type="number" value={guests} min="1" onChange={e => setGuests(e.target.value)} required />

        <button type="submit">Zarezerwuj</button>
      </form>
    </div>
  );
}

const formStyle = {
  marginTop: '2rem',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

export default Listing;
