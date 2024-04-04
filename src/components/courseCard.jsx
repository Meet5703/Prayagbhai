import React from "react";
import Img1 from "../assets/10782790_19197315-Photoroom.png-Photoroom.png";
import Image from "next/image";
import Link from "next/link";

const CourseCard = () => {
  return (
    <div className="flex flex-col md:flex-row  p-8 rounded-lg shadow-lg ">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <div
          className="w-full h-full rounded-lg overflow-hidden "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={Img1}
            alt="Data Analyst Course"
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-[rgb(255,168,60)] mb-2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Data Science and Generative AI course
        </h2>
        <p
          className="text-lg text-gray-800  mb-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Welcome to our Data Science and Generative AI Course! Our
          comprehensive course, designed to equip you with cutting-edge skills
          for real-world applications.
        </p>
        <div className="mb-4">
          <h3
            className="text-xl font-semibold mb-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Key Features:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-800 ">
            <li data-aos="fade-left" data-aos-duration="1000">
              Interactive Live Classes
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              One to One Doubt Session
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              Real-world case studies
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              Pay after Placement
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              Resume Building
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              Interview Mock call Practice
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              Support community
            </li>
          </ul>
        </div>
        <div className="flex justify-center flex-col gap-4">
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-white w-fit p-2 bg-yellow-500 font-semibold text-lg"
          >
            Limited Seats available
          </p>
          <Link
            href="/pay"
            className="text-white text-center  text-sm font-semibold border  bg-[rgb(83,15,184)] px-6 py-3 rounded-lg hover:text-[rgb(83,15,184)] hover:border-[rgb(83,15,184)] hover:bg-white ease-in-out duration-300"
            data-aos="flip-up"
            data-aos-duration="800"
          >
            Enroll Now
          </Link>
        </div>
        <div className="flex mt-4 gap-8 md:justify-around">
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            href="#"
            className="ov-btn-slide-left scale-75 md:scale-0"
          >
            <div className="flex items-center gap-2 bg-transparent">
              <span className="bg-transparent">Download Brochure</span>
              <span className="material-symbols-outlined bg-transparent">
                download
              </span>
            </div>
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="1000"
            href="#"
            className="ov-btn-slide-left scale-75 md:scale-0 "
          >
            <div className="flex items-center gap-2 bg-transparent">
              <span className="bg-transparent">Learn More</span>
              <span className="material-symbols-outlined bg-transparent">
                keyboard_double_arrow_right
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
