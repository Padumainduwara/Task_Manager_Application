import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TaskDo?",
      answer:
        "TaskDo is an intuitive task management tool designed to streamline your workflow by helping you organize, prioritize, and collaborate on tasks effortlessly. Whether you're working individually or as part of a team, TaskDo offers a user-friendly interface where you can create task lists, set deadlines, assign tasks, and track progress. Its goal is to enhance productivity and simplify task management for businesses and individuals alike.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "If you've forgotten your password or want to change it, you can easily reset it through the login page. Simply click on 'Forgot Password', enter your registered email address, and follow the instructions in the email you'll receive. You will be prompted to create a new password, ensuring your account remains secure. If you encounter any issues during this process, our support team is available 24/7 to assist you.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "Absolutely! TaskDo is designed to support seamless collaboration among teams. You can assign tasks to team members, share updates in real-time, and communicate through integrated messaging tools. The platform also offers shared workspaces, task dependencies, and notifications to ensure that everyone stays on the same page and project goals are met efficiently. TaskDo's collaboration features are available across all devices, so you can work together whether you're in the office or working remotely.",
    },
    {
      question: "Is TaskDo available on mobile?",
      answer:
        "Yes, TaskDo is fully accessible on mobile devices. Our mobile-friendly design ensures that you can manage your tasks on the go, without missing a beat. Whether you're using an iOS or Android device, TaskDo's responsive design adjusts seamlessly, providing the same functionality as on desktop. You can create, update, and track tasks, collaborate with your team, and receive notifications, all from the convenience of your smartphone or tablet.",
    },
  ];

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the same index is clicked
    } else {
      setActiveIndex(index); // Expand the clicked FAQ
    }
  };

  return (
    <section id="FaqSection" className="py-20 bg-gray-100">
      {/* Service Section */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/images/service.png" // Replace with the correct path to your service image
            alt="Service Image"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>

        {/* Right Section - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Stay Organized, Stay Creative
          </h2>
          <p className="text-gray-600 mb-8">
            Join millions of people to capture ideas, organize life, and do
            something creative every day.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div> 

      {/* FAQ Section */}
      <div className="py-10 container mx-auto px-6 lg:px-20 mt-16">
        <h2 className="py-10 text-4xl font-bold text-center text-customBlue mb-12">
          Frequently Asked Questions
        </h2>
          
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b-2 border-gray-200 pb-4 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <h3
                className="text-xl font-semibold cursor-pointer text-gray-800"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </h3>
              <p
                className={`mt-4 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
