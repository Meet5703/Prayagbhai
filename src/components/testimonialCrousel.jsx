"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function CarouselCard() {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700"
        }
      },
      breakpoints: {
        1024: {
          perView: 2
        },
        640: {
          perView: 1
        }
      }
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="w-full mt-20 h-full bg-white">
      <h1 className="text-center">Testimonial</h1>
      {/*<!-- Component: Card Carousel --> */}
      <div className="glide-06 h-full  relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
        {/*    <!-- Slides --> */}
        <div
          className="overflow-hidden px-4  bg-white h-full"
          data-glide-el="track"
        >
          <ul className="whitespace-no-wrap bg-white flex-no-wrap ml-0 px-5 [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-3 ">
            <li className="bg-white mb-10 px-4 py-2 rounded-lg mt-10 border border-black">
              <div className=" bg-white">
                <p className="flex bg-white items-center gap-4">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="rounded-full bg-white w-20"
                    alt="1"
                  />
                  <span className="bg-white">Jon doe</span>
                </p>
                <p className="text-lg bg-white text-gray-800 font-semibold mb-2">
                  "I'm extremely satisfied with the service provided by Data
                  Skills Hub."
                </p>
              </div>
            </li>
            <li className="bg-white mb-10 px-4 py-2 rounded-lg mt-10 border border-black">
              <div className=" bg-white">
                <p className="flex bg-white items-center gap-4">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="rounded-full bg-white w-20"
                    alt="1"
                  />
                  <span className="bg-white">Jon doe</span>
                </p>
                <p className="text-lg bg-white text-gray-800 font-semibold mb-2">
                  "I'm extremely satisfied with the service provided by Data
                  Skills Hub."
                </p>
              </div>
            </li>
            <li className="bg-white mb-10 px-4 py-2 rounded-lg mt-10 border border-black">
              <div className=" bg-white">
                <p className="flex bg-white items-center gap-4">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="rounded-full bg-white w-20"
                    alt="1"
                  />
                  <span className="bg-white">Jon doe</span>
                </p>
                <p className="text-lg bg-white text-gray-800 font-semibold mb-2">
                  "I'm extremely satisfied with the service provided by Data
                  Skills Hub."
                </p>
              </div>
            </li>
            <li className="bg-white mb-10 px-4 py-2 rounded-lg mt-10 border border-black">
              <div className=" bg-white">
                <p className="flex bg-white items-center gap-4">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="rounded-full bg-white w-20"
                    alt="1"
                  />
                  <span className="bg-white">Jon doe</span>
                </p>
                <p className="text-lg bg-white text-gray-800 font-semibold mb-2">
                  "I'm extremely satisfied with the service provided by Data
                  Skills Hub."
                </p>
              </div>
            </li>
            <li className="bg-white mb-10 px-4 py-2 rounded-lg mt-10 border border-black">
              <div className=" bg-white">
                <p className="flex bg-white items-center gap-4">
                  <img
                    src="https://i.ibb.co/8x9xK4H/team.jpg"
                    className="rounded-full bg-white w-20"
                    alt="1"
                  />
                  <span className="bg-white">Jon doe</span>
                </p>
                <p className="text-lg bg-white text-gray-800 font-semibold mb-2">
                  "I'm extremely satisfied with the service provided by Data
                  Skills Hub."
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 bg-white top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex mt-[124px] md:mt-0 h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 bg-white"
            >
              <title className="bg-white">prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex mt-[124px] md:mt-0 h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 bg-white"
            >
              <title className="bg-white">next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bg-white bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Carousel --> */}
    </div>
  );
}
