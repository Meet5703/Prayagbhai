"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: "1",
        backgroundColor: "#4c1d95", // Change button background color to white
        padding: "7px 4px",
        width: "30px",
        height: "30px",
        borderRadius: "50%" // Change button text color to black
      }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        opacity: "1",
        backgroundColor: "#4c1d95", // Change button background color to white
        padding: "7px 4px",
        width: "30px",
        zIndex: "1",
        height: "30px",
        borderRadius: "50%" // Change button text color to black
      }}
      onClick={onClick}
    />
  );
};
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="space-x-4 ml-2 ">
              <div
                className="bg-white border rounded-lg shadow-xl border-[#4c1d95] md:ml-2 md:mt-10 md:mb-10 md:mr-5  md:scale-100  scale-[0.85] mb-8 px-4 py-2
             md:p-10 "
              >
                <div className="flex items-center space-x-4 mb-6 bg-white ">
                  <img
                    className="bg-white rounded-full w-12 object-cover h-12"
                    src={d.img}
                    alt="imgs"
                  />
                  <p className="bg-white md:text-2xl">{d.name}</p>
                </div>
                <div>
                  <p className="bg-white">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  },
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quidem."
  }
];
export default Testimonial;
