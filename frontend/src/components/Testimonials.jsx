import React from 'react';

// Function to generate random star ratings between 1 and 5
const generateRandomStars = () => {
  const randomStars = Math.floor(Math.random() * 5) + 1; // Generates random number between 1 and 5
  return randomStars;
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Avinash Kr",
      title: "Co-Founder at XYZ",
      quote: "TaskDo has completely changed the way I organize my daily tasks. The interface is clean and intuitive, making it easy to stay on top of my work.",
      image: "/images/testimonial1.png" // Update with your correct image path
    },
    {
      name: "Bharat Kunal",
      title: "Manager at ABC",
      quote: "Thanks to TaskDo, our team collaboration has improved significantly. We are able to assign tasks, track progress, and meet deadlines seamlessly.",
      image: "/images/testimonial1.png" // Update with your correct image path
    },
    {
      name: "Prabhakar D",
      title: "Founder / CEO at XYZ",
      quote: "Managing a large team can be chaotic, but TaskDo has made it simple and efficient. I can't imagine going back to our old way of working.",
      image: "/images/testimonial1.png" // Update with your correct image path
    },
    {
      name: "Samantha Lee",
      title: "Freelancer",
      quote: "As a freelancer, I need to manage multiple projects at once. TaskDo has been a lifesaver for keeping everything organized and on schedule.",
      image: "/images/testimonial1.png" // Update with your correct image path
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-customBlue mb-12">Testimonials</h2>

        {/* Testimonials Grid */}
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => {
            const stars = generateRandomStars(); // Generate random star rating for each testimonial
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105 duration-300 ease-in-out border-4 border-blue-600"
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-300"
                />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.title}</p>

                {/* Star Ratings */}
                <div className="flex justify-center my-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < stars ? "text-yellow-500" : "text-gray-300"}>
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
