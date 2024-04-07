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
    <div className="w-3/4 m-auto mt-20">
      <h6 className="text-[#ffa83c] -ml-8 md:text-2xl ">TESTIMONIALS</h6>
      <p className="text-3xl font-semibold w-screen -ml-8 md:text-5xl">
        Explore Inspiring Alumni Journeys{" "}
      </p>
      <div className="mt-20  bg-black">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="space-x-4 ml-2 grid grid-flow-row-dense grid-rows-1 ">
              <div
                className="bg-white row-span-1 grid-flow-row border rounded-lg shadow-xl border-[#4c1d95] md:ml-2 md:mt-10 h-full md:mb-10 md:mr-5  md:scale-100  scale-[0.85] mb-8 px-4 py-2
             md:p-10 "
              >
                <div className="flex h-full items-center space-x-4 mb-6 bg-white ">
                  <img
                    className="bg-white rounded-full w-12 object-cover h-12"
                    src={d.img}
                    alt="imgs"
                  />
                  <span>
                    <p className="bg-white md:text-2xl">{d.name}</p>
                    <p className="bg-white md:text-xl">@{d.companyName}</p>
                  </span>
                </div>
                <div>
                  <p className="bg-white h-full">{d.review}</p>
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
    name: "Neha",
    companyName: "Paytm",
    img: "https://media.licdn.com/dms/image/C4E03AQEeX2of-D3SFw/profile-displayphoto-shrink_400_400/0/1609827977943?e=1718236800&v=beta&t=Bcq6PiHees3YLtRvQiXQn2NDqixescHBaV_rpEDp24E",
    review:
      " Data Skills Hub propelled my transition from sales to Data Science, providing expert guidance and practical training that secured my dream role. I'm grateful for their transformative support and dedication."
  },
  {
    name: "Dinesh",
    companyName: "PayPal",
    img: "https://media.licdn.com/dms/image/C5603AQFlNbR59UbmdQ/profile-displayphoto-shrink_400_400/0/1627823884516?e=1718236800&v=beta&t=s7dkNWSR0B10Tr7yjxq4PaAr-eOPBk8zUOy4KV2h1XU",
    review:
      "Transitioning from marketing, Data Skills Hub's comprehensive program equipped me for Data Science success. Their personalized approach and industry insights were invaluable in navigating this career shift."
  },
  {
    name: "Priyanka",
    companyName: "Deloitte",
    img: "https://media.licdn.com/dms/image/D4D03AQGiHPcgqTW-HQ/profile-displayphoto-shrink_400_400/0/1670687829390?e=1718236800&v=beta&t=RE6WYadlWXJ2lnpYM19fil3CuW9tEetejV8Izzt_V5g",
    review:
      "Coming from a QA background, transitioning to Data Science seemed daunting until I found Data Skills Hub. Their structured program and industry-focused curriculum empowered me to pursue my passion."
  },
  {
    name: "Nidhi",
    companyName: "Capgemini",
    img: "https://media.licdn.com/dms/image/D4D35AQFF1RXKkh6WEA/profile-framedphoto-shrink_400_400/0/1711532826373?e=1713096000&v=beta&t=h-gikA1vAFOWeGIiJoGyz6AmX9D41dLRVy0BYZbGoZI",
    review:
      "As a backend developer, Data Skills Hub provided me with the tools and knowledge to transition into Data Science. Their practical approach and supportive environment made the journey smooth and rewarding."
  },

  {
    name: "Nisha",
    companyName: "Myntra",
    img: "https://media.licdn.com/dms/image/C5103AQE_Cvncn9aSeQ/profile-displayphoto-shrink_400_400/0/1555229284094?e=1718236800&v=beta&t=2GnAHAYisJprXviQfe0j8CbMey6hJ992-b71BW5POrE",
    review:
      "Data Skills Hub helped me transition from networking to Data Science seamlessly. Their program provided me with the skills and confidence to pursue new opportunities in this rapidly evolving field of study ."
  },
  {
    name: "Naman",
    companyName: "Myntra",
    img: "https://media.licdn.com/dms/image/C5603AQFBqxiLWhethw/profile-displayphoto-shrink_400_400/0/1628322707632?e=1718236800&v=beta&t=hLCvG6OeVcF9rWkWYInfRZofwsx9nZvqX1hM7l-0bYs",
    review:
      "As a QA professional, Data Skills Hub empowered my transition to Data Science. Their tailored training and mentorship were instrumental in securing a rewarding role in this dynamic field."
  },
  {
    name: "Praneeta",
    companyName: "Zomato",
    img: "https://media.licdn.com/dms/image/D5603AQFPqEZwx-yxvA/profile-displayphoto-shrink_400_400/0/1706289420229?e=1718236800&v=beta&t=7dCh4s2Mkdz0AQN5Mxj6CkO8gE79EEPCi2In_R42gxE",
    review:
      "Data Skills Hub facilitated my transition from backend development to Data Science with their comprehensive training and supportive environment. I'm grateful for their guidance in navigating this career transition."
  },

  {
    name: "Sakshatha",
    companyName: "Swiggy",
    img: "https://media.licdn.com/dms/image/D4D03AQE59b9iqn86dQ/profile-displayphoto-shrink_400_400/0/1671101174952?e=1718236800&v=beta&t=MIMG9vfzRsSG4RR_CxyHaWd1pYyXHzXOdF2rJCeAboI",
    review:
      "Data Skills Hub enabled my transition to Data Science as a fresher, equipping me with essential skills and industry knowledge. Their program laid the foundation for my successful career journey."
  }
];
export default Testimonial;
