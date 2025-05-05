function ListingCard({ image, title, location, price, rating }) {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold">{price} zł / noc</p>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
