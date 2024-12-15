// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import StatsSection from './StatsSection';
import TaskSection from './TaskSection';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks from the backend
  const fetchTasks = () => {
    fetch('http://localhost:5000/api/tasks')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTasks(data.tasks); // Update state with the fetched tasks
        } else {
          toast.error('Failed to fetch tasks');
        }
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        toast.error('Failed to fetch tasks');
      });
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  return (
    <div className={`${darkMode ? 'dark bg-gray-800' : 'bg-gray-900'} min-h-screen flex`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar toggleDarkMode={toggleDarkMode} />

        {/* ToastContainer for displaying notifications */}
        <ToastContainer />

        {/* Statistics Section */}
        <StatsSection
          totalTasks={totalTasks}
          pendingTasks={pendingTasks}
          inProgressTasks={inProgressTasks}
          completedTasks={completedTasks}
        />

        {/* Task Section */}
        <TaskSection tasks={tasks} fetchTasks={fetchTasks} />
      </div>
    </div>
  );
};

export default Dashboard;
