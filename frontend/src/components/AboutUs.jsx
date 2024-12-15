import React from 'react';

const AboutUs = () => {
  return (
    <section id="AboutUs" className="pt-28 pb-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section - Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/images/aboutus.png"  // Replace with your image path
            alt="About Us"
          />
        </div>

        {/* Right Section - Text */}
        <div className="md:w-1/2 text-center md:text-left md:pl-10">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">About TaskDo</h2>
          <br />
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            At TaskDo, we believe that effective task management is the key to unlocking productivity. 
            What started as a simple tool to help individuals stay organized has now grown into a powerful 
            platform used by teams and businesses of all sizes.
            <br /><br />
            Our mission is to simplify the way people organize their work, set priorities, and collaborate with their teams. 
            TaskDo provides an intuitive interface that keeps everything on track, from task creation to project completion, 
            with tools that help streamline workflow and enhance productivity.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
