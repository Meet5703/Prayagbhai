"use client";
import React from "react";
import img1 from "../../assets/8918702_4020769_prev_ui.png";
import Image from "next/image";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
const JournyCard = () => {
  return (
    <section>
      <div>
        <h1 className="text-[#FFB907] font-bold text-lg ml-4 mr-4 md:ml-28 mt-32">
          LEARNING JOURNEY
        </h1>
        <p className=" font-bold text-3xl ml-4 mr-4  md:ml-28 mt-3">
          Learning journey at Data Skills Hub
        </p>
        <p className="text-[14px] ml-4 mr-4 md:ml-28 mt-10">
          Master the skills with short conceptual videos, reading materials and
          quizzes. Then work on industry projects to build your resume. Undergo
          mock interviews and land your dream job.
        </p>
      </div>
      <div className="w-full h-full md:gap-28 flex flex-col md:flex-row mt-20">
        <div className="left md:w-1/2 h-full">
          <Image
            className="w-full"
            src={img1}
            alt="img1"
            width={1000}
            height={1000}
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="ml-4 mr-4 md:mr-0 md:ml-0 md:w-1/2">
          <div className="bg-[#f7d1a2] rounded-xl shadow-xl shadow-gray-300 md:w-4/5 p-6">
            <Timeline className="md:w-3/4 bg-transparent">
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Application UI code in Tailwind CSS
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Application UI code in Tailwind CSS
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item className="bg-transparent text-black">
                <Timeline.Point />
                <Timeline.Content
                  className="bg-transparent"
                  data-aos="fade-left"
                  data-aos-duration="2500"
                >
                  <Timeline.Title className="bg-transparent text-black">
                    <span className="bg-transparent text-[#530fb8] font-bold">
                      Application UI code in Tailwind CSS
                    </span>
                  </Timeline.Title>
                  <Timeline.Body className="bg-transparent text-black">
                    <p className="bg-transparent text-black">
                      Get access to over 20+ pages including a dashboard layout,
                      charts, kanban board, calendar, and pre-order E-commerce &
                      Marketing pages.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournyCard;
