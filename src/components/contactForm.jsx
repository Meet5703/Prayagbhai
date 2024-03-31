"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../assets/contact.png";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await submitContact({
        name: formData.get("name"),
        email: formData.get("email")
      });
      if (response.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center md:mx-20 justify-evenly ">
      <div className="md:block hidden">
        <Image
          className="w-3/4"
          width={1000}
          height={1000}
          src={img1}
          alt="image1"
        />
      </div>
      <div className="bg-purple-300">
        <div className="container mx-auto  py-12">
          <div className="max-w-lg mx-auto px-4 py-2 ">
            <h2 className="text-5xl bg-transparent  font-[900] text-gray-900 mb-4">
              How can we help you
            </h2>
            <p className="text-gray-700 bg-transparent  mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sagittis velit eget nisi lobortis dignissim.
            </p>
            <form
              action={handleSubmit}
              className="bg-white bg-transparent  rounded-lg px-6 py-8 shadow-md"
            >
              <div className="mb-4 bg-transparent ">
                <label
                  className="block bg-transparent  text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  name="name"
                  className="appearance-none bg-transparent  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4 bg-transparent ">
                <label
                  className="block bg-transparent  text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  className=" bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 bg-transparent ">
                <label
                  className="block bg-transparent  text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className=" bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex bg-transparent  justify-center">
                <button
                  className="bg-purple-500   hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
