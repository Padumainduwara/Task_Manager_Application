import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { toast } from 'react-toastify';

const TaskSection = ({ tasks, fetchTasks }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editMode, setEditMode] = useState(false); // To determine if it's edit mode or add mode
  const [currentTask, setCurrentTask] = useState(null);

  // Initialize form state
  const [taskForm, setTaskForm] = useState({
    taskName: '',
    description: '',
    status: 'pending',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  // Open the modal for editing a task
  const handleEditTask = (task) => {
    setEditMode(true);
    setCurrentTask(task);
    setTaskForm({
      taskName: task.task_name,
      description: task.description,
      status: task.status,
      startDate: task.start_date,
      startTime: task.start_time,
      endDate: task.end_date,
      endTime: task.end_time,
    });
    setShowTaskModal(true);
  };

  // Save the updated task
  const saveTask = () => {
    const endpoint = editMode
      ? `http://localhost:5000/api/tasks/${currentTask.id}` // Update endpoint (with backticks)
      : 'http://localhost:5000/api/add-task'; // Add new task endpoint

    const method = editMode ? 'PUT' : 'POST'; // Use PUT for update

    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          fetchTasks(); // Fetch tasks again to reflect the newly updated/added task
          toast.success(editMode ? 'Task updated successfully!' : 'Task added successfully!');
          setShowTaskModal(false); // Close modal after saving
        } else {
          toast.error('Failed to save task.');
        }
      })
      .catch((error) => {
        console.error('Error saving task:', error);
        toast.error('Something went wrong, please try again.');
      });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskForm({
      ...taskForm,
      [name]: value,
    });
  };

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">All Tasks</h1>

      {/* Task Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            taskName={task.task_name}
            description={task.description}
            status={task.status}
            startDate={task.start_date}
            startTime={task.start_time}
            endDate={task.end_date}
            endTime={task.end_time}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task)}
          />
        ))}

        {/* Add New Task Button */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-center items-center shadow-lg">
          <button className="text-gray-300 flex items-center" onClick={() => setShowTaskModal(true)}>
            <span className="text-2xl mr-2">➕</span> Add New Task
          </button>
        </div>
      </div>

      {/* Task Modal (For Adding/Editing Tasks) */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-200 mb-6">
              {editMode ? 'Edit Task' : 'Add New Task'}
            </h2>

            <label className="block text-gray-200 mb-2">Task Name:</label>
            <input
              type="text"
              name="taskName"
              className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
              placeholder="Enter Task Name"
              value={taskForm.taskName}
              onChange={handleInputChange}
            />

            <label className="block text-gray-200 mb-2">Description:</label>
            <textarea
              name="description"
              className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
              placeholder="Task description"
              value={taskForm.description}
              onChange={handleInputChange}
            />

            <label className="block text-gray-200 mb-2">Status:</label>
            <select
              name="status"
              className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
              value={taskForm.status}
              onChange={handleInputChange}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            {/* Conditional Fields for In Progress and Completed Tasks */}
            {(taskForm.status === 'in-progress' || taskForm.status === 'completed') && (
              <>
                <label className="block text-gray-200 mb-2">Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
                  value={taskForm.startDate}
                  onChange={handleInputChange}
                />
                <label className="block text-gray-200 mb-2">Start Time:</label>
                <input
                  type="time"
                  name="startTime"
                  className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
                  value={taskForm.startTime}
                  onChange={handleInputChange}
                />
              </>
            )}

            {taskForm.status === 'completed' && (
              <>
                <label className="block text-gray-200 mb-2">End Date:</label>
                <input
                  type="date"
                  name="endDate"
                  className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
                  value={taskForm.endDate}
                  onChange={handleInputChange}
                />
                <label className="block text-gray-200 mb-2">End Time:</label>
                <input
                  type="time"
                  name="endTime"
                  className="w-full p-2 mb-4 text-gray-900 bg-gray-100 rounded-md"
                  value={taskForm.endTime}
                  onChange={handleInputChange}
                />
              </>
            )}

            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={saveTask}
              >
                {editMode ? 'Save Changes' : 'Add Task'}
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                onClick={() => setShowTaskModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSection;
