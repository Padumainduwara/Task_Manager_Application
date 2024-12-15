import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-300 fixed top-0 left-0 p-4 flex flex-col justify-between">
      {/* Profile Section */}
      <div>
        <div className="flex items-center mb-6">
          <img
            src="/images/testimonial1.png"
            alt="User"
            className="rounded-full w-16 h-16 mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Maclinz Maclinz</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <Link to="/pending" className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
              <span className="mr-3">📋</span> All Tasks
            </Link>
          </li>
          <li>
          <Link to="/pending" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <span className="mr-3">🕒</span> Pending!
          </Link>
          </li>
          <li>
            <Link to="/completed" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <span className="mr-3">✔️</span> Completed!
            </Link>
          </li>
          <li>
            <Link to="/in-progress" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <span className="mr-3">🔄</span> In Progress
            </Link>
          </li>
          <li>
            <Link to="/do-it-now" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <span className="mr-3">🚀</span> Do It Now
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <span className="mr-3">⚙️</span> Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Real-Time Clock Section */}
      <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-100">Current Time</h2>
        <p className="text-xl font-bold text-gray-300">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </p>
        <p className="mt-2 text-lg text-gray-300">
          {currentTime.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;