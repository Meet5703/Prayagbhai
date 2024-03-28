"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../assets/mentored-by-best-removebg-preview.png";
import img2 from "../assets/learn-in-live-classes-removebg-preview.png";
import img3 from "../assets/level-up-resume-removebg-preview.png";
import img4 from "../assets/secure-a-job (1)-Photoroom.png-Photoroom.png";
import Link from "next/link";
import Aos from "aos";

const Card = () => {
  return (
    <section className="py-16 hidden md:block ">
      <h1
        className="text-center text-[#ffa83c] font-bold uppercase"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        Why Data Skills Hub
      </h1>
      <br />
      <h2
        className="text-center text-4xl font-bold"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        From learning to earning
      </h2>
      <br />
      <p
        className="text-center text-sm text-gray-500"
        data-aos="fade-down"
        data-aos-duration="400"
      >
        Take our courses and we’ll prepare you to be a talent that the industry
        is looking for!
      </p>
      <br />
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="p-20 grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
          <div
            className="col-span-1   bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-20 relative h-full"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="mb-12 space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Mentored by the industry's top 1%
              </h3>
              <p className="mb-6 bg-white">
                Learn exclusive insights on things you didn't learn in school
              </p>
            </div>
            <Image
              src={img}
              className="w-2/4 ml-auto -mb-12 absolute bg-transparent -bottom-4"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-right"
              data-aos-duration="800"
            />
          </div>
          <div
            className="col-span-1  bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-20 relative h-full"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <div className="mb-12 space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Learn in live classes
              </h3>
              <p className="mb-6 bg-white">
                Solve real-life problems, learn how to hack it with the experts!
              </p>
            </div>
            <Image
              src={img2}
              className="w-2/4 ml-auto -mb-14 absolute bg-transparent -bottom-8"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-up"
              data-aos-duration="800"
            />
          </div>
          <div
            className="col-span-1  bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-20 relative h-full"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="mb-12 space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Level up your resume
              </h3>
              <p className="mb-6 bg-white">
                Shines out your resume in a sea of candidates. Ace the
                interview!
              </p>
            </div>
            <Image
              src={img3}
              className="w-2/4 ml-auto -mb-14 absolute bg-transparent -bottom-5"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-down"
              data-aos-duration="800"
            />
          </div>
          <div
            className="col-span-1  bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-20 relative h-full"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <div className="mb-12 space-y-4 bg-white">
              <h3 className="text-2xl font-semibold bg-white text-purple-900">
                Secure a job in a dream company
              </h3>
              <p className="mb-6 bg-white">
                We'll help you get shortlisted by top recruiters, effortlessly!
              </p>
            </div>
            <Image
              src={img4}
              className="w-2/4 ml-auto -mb-14 absolute bg-transparent -bottom-5"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600}
              data-aos="fade-left"
              data-aos-duration="800"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <div className="hidden sm:flex sm:items-center">
          <Link
            href="/explore"
            className="text-white  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
            data-aos="flip-up"
            data-aos-duration="800"
          >
            Explore Programmes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
