import React from "react";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-col items-center bg-linear-to-r from-green-600 to-red-700 p-4 w-full shadow-md">
      <h1 className="text-2xl font-bold text-white mb-2">Happy New Year</h1>

      <div className="flex gap-4">
       
        <Link to="/form">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-all">
            Форма
          </button>
        </Link>

        <Link to="/cards">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-all">
            Картка
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
