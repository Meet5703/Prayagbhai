import Link from "next/link";
import React from "react";

const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row mt-10">
      <section className="md:ml-40 lg:ml-[10%] md:w-[40%] lg:w-full   flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 flex flex-col gap-5">
          <strong className="flex items-center text-lg md:text-2xl gap-4 text-green-500">
            <span
              data-aos="fade-right"
              data-aos-duration="1000"
              className="material-symbols-outlined scale-150"
            >
              check_circle
            </span>
            <span data-aos="fade-right" data-aos-duration="1000">
              Your Upskilling Partner
            </span>
          </strong>
          <strong
            className="text-3xl md:text-5xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>
              Your
              <span className="text-[rgba(255,163,34,0.95)]"> Dream job </span>
              Awaits: Let's Make It Happen
            </h1>
          </strong>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="w-4/5 text-lg text-gray-500">
              Discover new skills outside the classroom, with guidance from
              India's most accomplished industry mentors.
            </p>
          </span>
        </div>
        <div>
          <button
            data-aos="zoom-out "
            data-aos-duration="1000"
            className="px-6 py-3 md:px-8 md:py-4 bg-[rgb(83,15,184)] hover:bg-[rgb(103,19,230)] text-gray-50 rounded-xl"
          >
            <Link href="/explore">Explore Courses</Link>
          </button>
        </div>
        <div className="bg-white">
          <section className="w-full  flex">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex w-full justify-center md:w-1/2 bg-white py-6 px-3 items-center gap-4 border-r border-gray-600 lg:ml-6"
            >
              <span>
                <img
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/briefcase-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white w-full lg:w-1/2 lg:ml-6 ">
                <h3 className="text-base md:text-2xl text-center md:text-left bg-white font-bold">
                  90%
                </h3>
                <h3 className="text-[10px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Placements
                </h3>
              </span>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="flex w-full justify-center md:w-1/2 bg-white py-6 px-3 items-center gap-4"
            >
              <span>
                <img
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/rupee-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white w-full xl:w-1/2 lg:ml-6">
                <h3 className="text-base md:text-2xl text-center md:text-left bg-white font-bold">
                  35 Lac
                </h3>
                <h3 className="text-[10px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Packages upto
                </h3>
              </span>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full lg:w-full md:w-[60%] pt-20 scale-125 hidden md:block">
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          src="https://static-artifacts-assets.skillovilla.com/assets/backgrounds/homepage/md/banner-2x.png?auto=format&q=35&cs=srgb"
          alt="main-2"
        />
      </section>
    </main>
  );
};

export default Herosection;
