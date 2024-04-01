import Link from "next/link";
import React from "react";

const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row mt-10">
      <section className="md:ml-40 md:w-[40%] lg:w-full  lg:ml-8 flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 flex flex-col gap-5">
          <strong className="flex items-center text-2xl gap-4 text-green-500">
            <span
              data-aos="fade-right"
              data-aos-duration="1000"
              className="material-symbols-outlined scale-150"
            >
              check_circle
            </span>
            <span data-aos="fade-right" data-aos-duration="1000">
              {" "}
              Your Upskilling Partner
            </span>
          </strong>
          <strong
            className="text-3xl md:text-4xl"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p>
              Land your{" "}
              <span className="text-[rgba(255,163,34,0.95)]">dream job</span> by
              learning from the top 1%
            </p>
          </strong>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="text-lg text-gray-500">
              Learn skills you didn't get in school, directly from India's best
              experts
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
          <section className="w-full flex">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="flex w-full md:w-1/2 bg-white py-6 px-8 items-center gap-4 border-r pr-6"
            >
              <span>
                <img
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/briefcase-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white flex flex-col items-center justify-center">
                <h3 className="text-xl md:text-2xl text-center md:text-left bg-white font-bold">
                  92%
                </h3>
                <h3 className="text-[11px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Job Placements
                </h3>
              </span>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="flex w-full md:w-1/2 bg-white py-6 px-8 items-center gap-4"
            >
              <span>
                <img
                  src="https://static-artifacts-assets.skillovilla.com/assets/icons/rupee-colored.svg?auto=format&q=35&cs=srgb"
                  alt="HeroImg"
                />
              </span>
              <span className="bg-white">
                <h3 className="text-sm md:text-2xl text-center md:text-left bg-white font-bold">
                  30 Lac
                </h3>
                <h3 className="text-[10px] md:text-base bg-white text-gray-500 text-center md:text-left">
                  Packages upto
                </h3>
              </span>
            </div>
          </section>
        </div>
      </section>
      <section className="w-full lg:w-full md:w-[60%] pt-20 pl-10 md:pl-20 hidden md:block">
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
