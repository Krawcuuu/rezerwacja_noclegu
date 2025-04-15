import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom"; // jeśli używasz react-router

type Listing = {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  bedrooms: number;
  guests: number;
};

type Props = {
  listings: Listing[];
};

const ListingGrid: React.FC<Props> = ({ listings }) => {
  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {listings.map((listing) => (
          <Link
            to={`/listing/${listing.id}`}
            key={listing.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 cursor-pointer relative"
          >
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md hover:scale-105 transition">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold truncate">{listing.title}</h3>
                <span className="text-sm flex items-center gap-1">
                  ⭐ {listing.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs text-gray-500">{listing.location}</p>
              <p className="text-xs text-gray-500">
                {listing.bedrooms} sypialnie • {listing.guests} osób
              </p>
              <p className="text-sm font-semibold">{listing.price} zł / noc</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;
