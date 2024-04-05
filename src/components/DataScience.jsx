import Link from "next/link";
import React from "react";

const DataScience = () => {
  return (
    <main className="flex flex-col md:flex-row mt-0 relative">
      <section className="lg:mx-20 md:w-[40%] flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 items-center md:items-start flex flex-col gap-5">
          <strong
            className=" font-[900] text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p
              className="text-2xl lg:text-[40px] xl:text-6xl"
              style={{ lineHeight: 1.3 }}
            >
              Data Science &{" "}
              <span className="text-[#ffa72d]"> Generative AI</span>
            </p>
          </strong>
          <div className="w-16 rounded lg:w-32 h-1 bg-gradient-to-r from-[#530fb8] via-[#7328e3] to-[#8343e3]"></div>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="text-lg text-gray-500">
              Welcome to our Data Science and Generative AI Course! Our
              comprehensive course, designed to equip you with cutting-edge
              skills for real-world applications.
            </p>
          </span>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="text-sm p-1 shadow-xl shadow-gray-200 font-bold text-[#530fb8] bg-white">
              No coding skills required
            </p>
          </span>
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <div className="flex justify-evenly">
            <span className="flex flex-col ">
              <p className="text-base md:text-2xl line-through italic">
                10000 ₹
              </p>
              <p className="text-base md:text-2xl">8000 ₹</p>
            </span>
            <span>
              <p className="text-base md:text-2xl">50 seats left</p>
              <p className="text-base md:text-2xl">
                Batch Starts From 01-01-2023
              </p>
            </span>
          </div>
          <Link
            data-aos="fade-right"
            data-aos-duration="1000"
            href="/explore"
            className="ov-btn-slide-left   "
          >
            <div className=" text-center md:text-base md:px-8 px-0 flex items-center gap-4 bg-transparent">
              <span className="bg-transparent ml-[40%]">Enroll Now</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="w-full md:w-[36%] pt-20 pl-10 md:pl-20 hidden md:block">
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full"
          src="https://images.skillovilla.com/tracks/description-page/2022-10-07_16-21-31_4fyLJaXNsW5TQWwZgKXCTm.png?auto=format&q=35&cs=srgb"
          alt="main-2"
        />
      </section>
    </main>
  );
};

export default DataScience;
