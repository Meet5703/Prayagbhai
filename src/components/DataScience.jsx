import Link from "next/link";
import React from "react";

const DataScience = () => {
  return (
    <main className="flex flex-col md:flex-row mt-0 relative">
      <section className="md:ml-40 md:w-[40%] flex flex-col justify-center gap-16 px-8">
        <div className="md:mt-24 items-center md:items-start flex flex-col gap-5">
          <strong
            className="text-2xl lg:text-5xl font-[900] text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p style={{ lineHeight: 1.3 }}>Data Science & Machine Learning</p>
          </strong>
          <div className="w-16 rounded lg:w-32 h-1 bg-gradient-to-r from-[#530fb8] via-[#7328e3] to-[#8343e3]"></div>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="text-lg text-gray-500">
              Grasp the math behind data science and learn advanced algorithms
              for Machine Learning.
            </p>
          </span>
          <span data-aos="fade-right" data-aos-duration="3000">
            <p className="text-sm p-1 shadow-xl shadow-gray-200 font-bold text-[#530fb8] bg-white">
              No coding skills required
            </p>
          </span>
        </div>
        <div className="flex mt-4 gap-4">
          <Link
            data-aos="fade-right"
            data-aos-duration="1000"
            href="/explore"
            className="ov-btn-slide-left   "
          >
            <div className=" text-center md:text-base md:px-6 px-0 flex items-center gap-4 bg-transparent">
              <span className="bg-transparent">Enroll Now</span>
            </div>
          </Link>
          <Link
            data-aos="fade-left"
            data-aos-duration="1000"
            href="#"
            className="ov-btn-slide-left scale-75 md:scale-0 "
          >
            <div className="px-4 text-center flex items-center gap-2 bg-transparent">
              <span className="bg-transparent">Try Masterclass</span>
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
