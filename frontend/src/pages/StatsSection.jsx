// StatsSection.jsx
import React from 'react';

const StatsBox = ({ title, value, icon, lastMonthValue }) => {
  return (
    <div className="bg-blue-900 p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-m font-bold text-white">{title}</h2>
        <p className="text-4xl font-bold text-white">{value}</p>
        <p className="text-xs text-gray-300">{lastMonthValue} last month</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  );
};

const StatsSection = ({ totalTasks, pendingTasks, inProgressTasks, completedTasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatsBox title="TOTAL TASK" value={totalTasks} icon="📋" lastMonthValue="12" />
      <StatsBox title="PENDING TASK" value={pendingTasks} icon="🕒" lastMonthValue="12" />
      <StatsBox title="TASK IN PROGRESS" value={inProgressTasks} icon="🔄" lastMonthValue="12" />
      <StatsBox title="COMPLETED TASK" value={completedTasks} icon="✔️" lastMonthValue="12" />
    </div>
  );
};

export default StatsSection;
