import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white "> {/* Default blue background */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h2> {/* Text in white */}
        
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-8 border-4 border-white-600 rounded-lg">
            {/* Address */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="text-customBlue text-3xl mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
              <p>TaskDo</p>
              <p>Colombo, Sri Lanka</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="text-customBlue text-3xl mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p>+94 71 234 5678</p>
              <p>Available 24/7</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="text-customBlue text-3xl mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p>info@taskdo.com</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 border-4 border-white-600 rounded-lg">
            <h3 className="text-3xl font-bold text-customBlue mb-6 text-center">Send Us a Message</h3>
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                rows="6"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-customBlue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
