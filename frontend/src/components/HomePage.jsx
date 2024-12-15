import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Main content for the home page */}
      <section id="home" className="bg-customBlue text-white py-24 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Manage Your Tasks Efficiently with TaskDo
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Organize your tasks, track progress, and increase productivity
              with our easy-to-use task management tool.
            </p>
            <a
              href="#features"
              className="bg-white text-customBlue py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              Start Managing Tasks
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/task-image.jpg"
              alt="Person managing tasks"
              className="w-64 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Section - Features */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Effortless Task Management
                </h3>
                <p className="text-gray-600">
                  Organize, prioritize, and manage tasks with an intuitive
                  interface. Set deadlines, create subtasks, and never miss a
                  deadline again.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Real-Time Collaboration
                </h3>
                <p className="text-gray-600">
                  Assign tasks, share updates, and collaborate with your team
                  seamlessly in real-time.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Advanced Task Tracking
                </h3>
                <p className="text-gray-600">
                  Visualize progress, track time, and generate reports to keep
                  your project on track and your team accountable.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Cross-Device Access
                </h3>
                <p className="text-gray-600">
                  Access TaskDo on any device, whether desktop, tablet, or
                  phone. Your tasks are always synced and up to date.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  User-Friendly Interface
                </h3>
                <p className="text-gray-600">
                  TaskDo’s clean and intuitive design allows you to focus on
                  your work, with no steep learning curve.
                </p>
              </div>

              <div className="bg-white p-8 shadow-lg rounded-lg text-center border-blue-600 border-4">
                <h3 className="text-2xl font-semibold mb-4">
                  Customizable Workflows
                </h3>
                <p className="text-gray-600">
                  Tailor TaskDo to your team’s needs with customizable workflows,
                  task templates, and priority markers.
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center border border-dashed border-gray-400">
                <img
                  src="/images/why.jpg"
                  alt="Why Choose TaskDo"
                  className="w-64 md:w-80 lg:w-96"
                />
              </div>

              {/* Title Below Image */}
              <button className="mt-4 bg-customBlue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Why Choose TaskDo?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
