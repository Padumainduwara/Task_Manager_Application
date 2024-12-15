import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <img src="/images/logo.png" alt="TaskDo Logo" className="mx-auto md:mx-0 w-24 h-24 object-contain" />
            <p className="mt-4">TaskDo</p>
            Colombo, Sri Lanka. <br/>
            info@taskdo.com
          </div>

          {/* Links Section - TaskDo */}
          <div>
            <h4 className="font-semibold text-white mb-4">TaskDo</h4>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Links Section - Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Task Management</a></li>
              <li><a href="#" className="hover:text-blue-500">Collaboration</a></li>
              <li><a href="#" className="hover:text-blue-500">Solutions</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 TaskDo. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
