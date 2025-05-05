import React from "react";
import { useParams } from "react-router-dom";

const listings = {
  "1": {
    title: "Pół na pół",
    location: "Kowalowa, Polska",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    baths: 1,
    rating: 4.93,
    reviews: 28,
    mainImage: "/images/main.jpg",
    gallery: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"]
  },
  // Możesz dodać więcej obiektów tutaj
};

const ListingDetails = () => {
  const { id } = useParams();
  const listing = listings[id];

  if (!listing) return <p className="p-8">Nie znaleziono oferty.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-2">{listing.title}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
        <div className="md:col-span-2">
          <img
            src={listing.mainImage}
            alt="Main"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {listing.gallery.map((src, index) => (
            <img key={index} src={src} alt={`img-${index}`} className="rounded-lg h-60 object-cover" />
          ))}
        </div>
      </div>

      {/* Basic Info */}
      <div className="mb-4">
        <h2 className="text-xl font-medium">
          Chatka w: <span className="font-semibold">{listing.location}</span>
        </h2>
        <p className="text-gray-500">
          {listing.guests} gości · {listing.bedrooms} sypialnie · {listing.beds} łóżka · {listing.baths} łazienka
        </p>
      </div>

      {/* Review Badge */}
      <div className="flex items-center gap-4 border p-4 rounded-lg mb-6">
        <div>
          <span className="text-sm font-medium">🏅 Wybór gości</span>
          <p className="text-gray-600">
            Według gości to jeden z najbardziej lubianych domów na Airbnb
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xl font-bold">{listing.rating}</p>
          <p className="text-sm text-gray-500">{listing.reviews} recenzji</p>
        </div>
      </div>

      {/* Availability Note */}
      <div className="bg-pink-100 text-pink-800 p-4 rounded-lg mb-6">
        <strong>Wyjątkowa okazja!</strong> To miejsce jest zazwyczaj zarezerwowane
      </div>

      {/* Booking Box (dummy placeholder) */}
      <div className="bg-white border rounded-lg p-4 shadow-md w-full max-w-md">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <div>
            <p className="font-semibold">ZAMELDOWANIE</p>
            <p>7.05.2025</p>
          </div>
          <div>
            <p className="font-semibold">WYMELDOWANIE</p>
            <p>12.05.2025</p>
          </div>
        </div>
        <button className="w-full bg-pink-600 text-white py-2 mt-4 rounded-lg hover:bg-pink-700 transition">
          Zarezerwuj
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;
