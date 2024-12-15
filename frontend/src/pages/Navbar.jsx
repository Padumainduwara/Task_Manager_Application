import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="bg-gray-900 text-gray-200 p-4 flex justify-between items-center shadow-md">
      {/* Centered text: Welcome to Dashboard */}
      <div className="text-left flex-grow">
        <h1 className="font-bold text-xl">Welcome to Dashboard</h1>
      </div>

      {/* Right side: Buttons */}
      <div className="flex items-center space-x-4">
        {/* Dark/Light mode switch */}
        <button onClick={toggleDarkMode} className="flex items-center">
          <span className="mr-2">🌞</span> {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Settings button */}
        <button className="hover:text-gray-400">⚙️ Settings</button>

        {/* Logout button */}
        <button className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
