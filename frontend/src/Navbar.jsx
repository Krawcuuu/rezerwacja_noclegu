import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from "./AuthModal"; // nowy komponent modala

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 shadow">
      <div className="text-xl font-bold text-pink-600">airbnb</div>

      <button onClick={() => setIsAuthOpen(true)}>
        <FaUserCircle className="text-2xl text-gray-700" />
      </button>

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
};

export default Navbar;
