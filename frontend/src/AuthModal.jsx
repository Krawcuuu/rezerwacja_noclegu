import React, { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {isRegister ? "Zarejestruj się" : "Zaloguj się"}
        </h2>

        <form className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Imię"
              className="w-full border p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Hasło"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
          >
            {isRegister ? "Zarejestruj się" : "Zaloguj się"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isRegister ? "Masz już konto?" : "Nie masz konta?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-pink-600 underline"
          >
            {isRegister ? "Zaloguj się" : "Zarejestruj się"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
