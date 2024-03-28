"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import times from "lodash/times";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "Amazing course! It helped me improve my skills significantly.",
    image: "https://i.ibb.co/8x9xK4H/team.jpg" // Example image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!",
    image: "https://www.isme.in/wp-content/uploads/2017/10/user9.jpg" // Example image URL
  },
  {
    id: 3,
    name: "Emily Johnson",
    testimonial:
      "I'm extremely satisfied with the services provided. The team has been incredibly helpful and professional throughout the process.",
    image: "https://i.ibb.co/8x9xK4H/team.jpg" // Using image from the first entry
  },
  {
    id: 4,
    name: "David Brown",
    testimonial:
      "The Lorem Ipsum Company exceeded my expectations. Their attention to detail and commitment to delivering quality results are commendable.",
    image: "https://www.isme.in/wp-content/uploads/2017/10/user9.jpg" // Using image from the second entry
  },
  {
    id: 5,
    name: "Sarah Wilson",
    testimonial:
      "I've worked with several agencies before, but The Lorem Ipsum Company stands out for their exceptional customer service and innovative solutions.",
    image: "https://i.ibb.co/8x9xK4H/team.jpg" // Using image from the first entry
  },
  {
    id: 6,
    name: "Michael Davis",
    testimonial:
      "Impressive work! The Lorem Ipsum Company helped us boost our online presence and attract more customers.",
    image: "https://www.isme.in/wp-content/uploads/2017/10/user9.jpg" // Using image from the second entry
  },
  {
    id: 7,
    name: "Emma Thompson",
    testimonial:
      "Highly recommended! The Lorem Ipsum Company's team is dedicated, knowledgeable, and always ready to go the extra mile.",
    image: "https://i.ibb.co/8x9xK4H/team.jpg" // Using image from the first entry
  },
  {
    id: 8,
    name: "Chris Roberts",
    testimonial:
      "Working with The Lorem Ipsum Company was a game-changer for our business. Their expertise and creativity brought our vision to life.",
    image: "https://www.isme.in/wp-content/uploads/2017/10/user9.jpg" // Using image from the second entry
  },
  {
    id: 9,
    name: "Olivia Martinez",
    testimonial:
      "Thank you, Lorem Ipsum Company, for your outstanding service. Your team's professionalism and talent are unmatched.",
    image: "https://i.ibb.co/8x9xK4H/team.jpg" // Using image from the first entry
  },
  {
    id: 10,
    name: "Daniel Clark",
    testimonial:
      "We've seen a significant improvement in our online engagement since partnering with The Lorem Ipsum Company. Truly remarkable!",
    image: "https://www.isme.in/wp-content/uploads/2017/10/user9.jpg" // Using image from the second entry
  }
  // Add more testimonials as needed
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Testimonial = () => {
  const shuffledTestimonials = shuffleArray(testimonials);

  // Split shuffledTestimonials into two parts: topTestimonials and bottomTestimonials
  const midpoint = Math.ceil(shuffledTestimonials.length / 2);
  const topTestimonials = shuffledTestimonials.slice(0, midpoint);
  const bottomTestimonials = shuffledTestimonials.slice(midpoint);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col ml-[10%] mt-10"
      >
        <h1 className=" font-bold text-[#ffa83c]">TESTIMONIALS</h1>
        <p className="text-2xl w-full font-bold">
          Read what our alumni are saying{" "}
        </p>
      </div>
      <div className="w-full h-full md:p-12 flex flex-col gap-10">
        <Marquee
          data-aos="fade-right"
          data-aos-duration="1000"
          pauseOnHover
          velocity={12}
          minScale={0.7}
          className="py-4 flex-grow "
        >
          {bottomTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-4 m-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400  `}
              style={{
                width: `${getRandomInt(300, 500)}px`,
                minWidth: "300px"
              }}
            >
              <div className="flex items-center mb-2 bg-white ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 bg-white"
                />
                <div>
                  <p className="font-bold text-gray-800 bg-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 bg-white">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 bg-white">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </Marquee>
        <Marquee
          data-aos="fade-right"
          data-aos-duration="1000"
          direction="right"
          pauseOnHover
          velocity={12}
          minScale={0.7}
          className="py-4 flex-grow"
        >
          {topTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-4 m-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400  `}
              style={{
                width: `${getRandomInt(300, 500)}px`,
                minWidth: "300px"
              }}
            >
              <div className="flex items-center mb-2 bg-white">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 bg-white"
                />
                <div>
                  <p className="font-bold text-gray-800 bg-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 bg-white">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
              <p className="text-gray-800 bg-white">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
