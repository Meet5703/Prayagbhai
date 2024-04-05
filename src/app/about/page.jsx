import React from "react";

const About3 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-bold text-base md:text-4xl leading-3 text-[#4c1d95]  text-center pb-10">
        About US
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full  text-[#4c1d95] font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            Our <span className="text-[#ffa72d]"> Mission</span>
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Our mission at Data Skills Hub is to empower individuals with the
            knowledge, skills, and opportunities needed to achieve their career
            aspirations. Through innovative education programs, personalized
            support, and industry connections, we strive to bridge the gap
            between learning and employment, enabling our students and
            professionals to realize their full potential and thrive in their
            chosen fields.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About3;
