import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  return (
    <section id="stats-section" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Left side: Text */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <h3 className="text-gray-500 text-sm uppercase mb-2">
              The Best Task Management Solution
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Organize your tasks, and boost productivity with TaskDo.
            </h2>
            <p className="text-gray-600 mb-6">
              TaskDo helps teams and individuals stay organized and on track. 
              Whether you need to manage your daily to-dos or handle complex project management, 
              TaskDo has the tools to help you succeed.
            </p>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
          {/* Right side: Stats */}
          <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-auto flex-1 border-4 border-blue-600">
              <CountUp start={0} end={100} duration={5} className="text-4xl font-bold text-black" suffix="+" />
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-auto flex-1 border-4 border-blue-600">
              <CountUp start={0} end={10} duration={5} className="text-4xl font-bold text-black" suffix="K" />
              <p className="text-gray-500 mt-2">Total Tasks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-auto flex-1 border-4 border-blue-600">
              <CountUp start={0} end={99} duration={5} className="text-4xl font-bold text-black" suffix="+" />
              <p className="text-gray-500 mt-2">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;