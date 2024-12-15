import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TaskCard = ({ taskName, description, status, startDate, startTime, endDate, endTime, onDelete, onEdit }) => {
  // Conditional status class for styling based on task status
  const statusClass = 
    status === 'completed' ? 'bg-green-500' : 
    status === 'in-progress' ? 'bg-blue-500' : 
    'bg-red-500'; // Change the color to red for 'pending', blue for 'in-progress', green for 'completed'

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between space-y-2 relative">
      {/* Top Section: Task Name and Description */}
      <div className="mb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white mb-1">{taskName}</h2>
          {/* Edit button next to the task name */}
          <button onClick={onEdit} className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaEdit />
          </button>
        </div>
        <p className="text-gray-400 mb-2">{description}</p>
      </div>

      {/* Bottom Section: Start/End Date and Task Status */}
      <div className="flex justify-between items-center">
        <div className="text-left">
          <p className="text-m text-gray-400">
            <span className="font-bold">Start:</span> {startDate} {startTime}
          </p>
          <p className="text-m text-gray-400">
            <span className="font-bold">End:</span> {endDate} {endTime}
          </p>
        </div>

        {/* Task Status */}
        <div className="flex items-center space-x-4">
          <span className={`px-3 py-1 text-white text-sm rounded-lg ${statusClass}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          {/* Bin Icon for Deleting Task */}
          <button onClick={onDelete}>
            <FaTrash className="text-gray-400 hover:text-red-500 transition duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
