"use client";
/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/excel.avif";
import Image from "next/image";

function Curriculum() {
  return (
    <div className="mt-36">
      <div className="md:ml-28 ml-4">
        <h1 className="text-[#FFB907] uppercase font-bold ">Syllabus</h1>

        <p className="text-3xl font-bold">
          SkilloVilla's world-class curriculum
        </p>
      </div>

      <div
        x-data="{ open: false }"
        className="md:h-fit flex flex-col  md:ml-28 relative overflow-hidden py-3 "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div
          onClick={() => {
            document.querySelector(".myPopup1").classList.toggle("hidden");
          }}
          className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-1/2 rounded flex justify-between items-center"
        >
          <div className="flex items-center gap-2 bg-white">
            <Image
              src={img1}
              alt="excel"
              className="w-16 h-16 bg-white"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center gap-3 bg-white">
              <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                Excel:Beginer to Expert
              </h4>

              <span className="flex gap-4 bg-white">
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="myPopup1 hidden md:w-1/2 bg-white p-4">
          <div className="flex flex-col gap-4 bgw">
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        x-data="{ open: false }"
        className="md:h-fit flex flex-col  md:ml-28 relative overflow-hidden py-3 "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          onClick={() => {
            document.querySelector(".myPopup2").classList.toggle("hidden");
          }}
          className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-1/2 rounded flex justify-between items-center"
        >
          <div className="flex items-center gap-2 bg-white">
            <Image
              src={img1}
              alt="excel"
              className="w-16 h-16 bg-white"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center gap-3 bg-white">
              <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                Excel:Beginer to Expert
              </h4>

              <span className="flex gap-4 bg-white">
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="myPopup2 hidden md:w-1/2 bg-white p-4">
          <div className="flex flex-col gap-4 bgw">
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        x-data="{ open: false }"
        className="md:h-fit flex flex-col  md:ml-28 relative overflow-hidden py-3 "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div
          onClick={() => {
            document.querySelector(".myPopup3").classList.toggle("hidden");
          }}
          className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-1/2 rounded flex justify-between items-center"
        >
          <div className="flex items-center gap-2 bg-white">
            <Image
              src={img1}
              alt="excel"
              className="w-16 h-16 bg-white"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center gap-3 bg-white">
              <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                Excel:Beginer to Expert
              </h4>

              <span className="flex gap-4 bg-white">
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="myPopup3 hidden md:w-1/2 bg-white p-4">
          <div className="flex flex-col gap-4 bgw">
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        x-data="{ open: false }"
        className="md:h-fit flex flex-col  md:ml-28 relative overflow-hidden py-3 "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          onClick={() => {
            document.querySelector(".myPopup4").classList.toggle("hidden");
          }}
          className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-1/2 rounded flex justify-between items-center"
        >
          <div className="flex items-center gap-2 bg-white">
            <Image
              src={img1}
              alt="excel"
              className="w-16 h-16 bg-white"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center gap-3 bg-white">
              <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                Excel:Beginer to Expert
              </h4>

              <span className="flex gap-4 bg-white">
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="myPopup4 hidden md:w-1/2 bg-white p-4">
          <div className="flex flex-col gap-4 bgw">
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        x-data="{ open: false }"
        className="md:h-fit flex flex-col  md:ml-28 relative overflow-hidden py-3 "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div
          onClick={() => {
            document.querySelector(".myPopup5").classList.toggle("hidden");
          }}
          className="md:px-6 px-3 py-3  bg-white hover:cursor-pointer md:w-1/2 rounded flex justify-between items-center"
        >
          <div className="flex items-center gap-2 bg-white">
            <Image
              src={img1}
              alt="excel"
              className="w-16 h-16 bg-white"
              width={1000}
              height={1000}
            />
            <div className="flex flex-col justify-center gap-3 bg-white">
              <h4 className="font-bold text-sm md:text-xl bg-white text-[#5210B6]">
                Excel:Beginer to Expert
              </h4>

              <span className="flex gap-4 bg-white">
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
                <p className="px-3 rounded-xl text-[#FFB907]">Excel</p>
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 bg-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="myPopup5 hidden md:w-1/2 bg-white p-4">
          <div className="flex flex-col gap-4 bgw">
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium py-1 px-4">Chapter 1</h4>
              <p className="text-sm text-slate-400 py-1 px-4">
                Now you can earn bitcoin in your wallet just by referring coinx
                to one of your friend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Curriculum;
