import React from "react";
import masterclassGif from "../assets/screen-shot-2021-03-17-at-10.19.22-pm.webp";
import Image from "next/image";
import img2 from "../assets/logocarduser.png";

const Card2 = () => {
  return (
    <div className="-mt-10 w-full flex flex-col items-center gap-4 ml-1 mr-6 md:gap-0 md:grid md:grid-cols-4 pb-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="cardSection__video col-span-2"
      >
        <Image
          className="scale-75"
          src={masterclassGif}
          alt="gif"
          width={1000}
          height={1000}
        />
      </div>

      <div className="cardSection__content col-span-1 mt-14">
        <h2
          className="md:text-lg font-bold text-[#ffa83c] "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          MASTERCLASS
        </h2>
        <p
          className="font-bold text-3xl w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Level up your skills, learn from the best
        </p>
        <br />
        <div
          className="flex md:grid md:grid-cols-4 items-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="md:col-span-1">
            <Image
              className="scale-[0.4] p-1  bg-purple-400 rounded-full"
              src={img2}
              alt="masterclass"
            />
          </span>
          <span className="md:col-span-3 space-y-4">
            <p className="text-xl font-bold w-full">
              Experience the masterclass
            </p>
            <p className="text-sm">Learn with the best</p>
          </span>
        </div>
        <br />
        <br />
        <span
          className="flex items-center gap-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Learn core concepts from experts in masterclass</p>
        </span>
        <br />
        <span
          className="flex items-center gap-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Get a headstart and kickoff your career</p>
        </span>
        <br />
        <span
          className="flex items-center gap-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Solve a real-life case study, live with the experts</p>
        </span>
        <br />
        <span
          className="flex items-center gap-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="material-symbols-outlined bg-[#ffa83c] rounded-full text-purple-950">
            arrow_right_alt
          </span>
          <p>Interact with mentors, ask your doubts away</p>
        </span>
      </div>
    </div>
  );
};

export default Card2;
