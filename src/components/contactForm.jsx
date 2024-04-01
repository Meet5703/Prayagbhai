"use client";
import React, { useState } from "react";
import submitContact from "@/app/action";
import Image from "next/image";
import img1 from "../assets/contact.png";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [isPhoneFieldTouched, setIsPhoneFieldTouched] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));

    if (name === "number") {
      setIsPhoneFieldTouched(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await submitContact(inputValues);
      if (response.status === 200) {
        setStatus("success");
        setInputValues({
          name: "",
          email: "",
          number: "",
          message: ""
        });
        setIsPhoneFieldTouched(false); // Reset phone field touch state after successful submission
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
              onSubmit={handleSubmit}
              className="bg-white bg-transparent shadow-purple-500 rounded-lg px-6 py-8 shadow-md"
            >
              <h1 className="text-3xl text-center mb-5 text-purple-500 bg-transparent font-[900]">
                Contact Us
              </h1>
              <div className="mb-4 bg-white relative flex">
                <input
                  name="name"
                  className="border-2 rounded-md peer p-2 bg-transparent  w-full focus:border-purple-500 focus:outline-none"
                  id="name"
                  type="text"
                  required
                  value={inputValues.name}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="name"
                  className={`absolute cursor-text bg-transparent top-3 ${
                    inputValues.name
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[5px]  peer-focus:bg-purple-500 peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Name
                </label>
              </div>
              <div className="mb-4 relative flex bg-transparent">
                <input
                  name="number"
                  className="border-2 pl-10 rounded-md peer p-2 bg-transparent w-full focus:border-purple-500 focus:outline-none"
                  id="number"
                  type="number"
                  required
                  value={inputValues.number}
                  onChange={handleInputChange}
                />
                <p
                  className={`absolute top-[25%] bg-transparent peer-focus-visible:block left-2 ${
                    isPhoneFieldTouched || inputValues.number
                      ? "peer-focus:block"
                      : "hidden"
                  }`}
                >
                  +91
                </p>
                <label
                  htmlFor="number"
                  className={`absolute cursor-text bg-transparent top-3 ${
                    inputValues.number
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[5px]  peer-focus:bg-purple-500 peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Mobile Number
                </label>
              </div>
              <div className="mb-4 bg-transparent relative flex ">
                <input
                  name="email"
                  className="border-2 rounded-md peer p-2 bg-transparent  w-full focus:border-purple-500 focus:outline-none"
                  id="email"
                  type="email"
                  required
                  value={inputValues.email}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="email"
                  className={`absolute cursor-text bg-transparent top-3 ${
                    inputValues.email
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[5px]  peer-focus:bg-purple-500 peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                >
                  Email
                </label>
              </div>
              <div className="mb-4 bg-transparent relative flex ">
                <textarea
                  name="message"
                  className="border-2 rounded-md peer p-2 bg-transparent  w-full focus:border-purple-500 focus:outline-none"
                  id="message"
                  rows="6"
                  value={inputValues.message}
                  onChange={handleInputChange}
                ></textarea>
                <label
                  className={`absolute cursor-text bg-transparent top-3 ${
                    inputValues.message
                      ? "hidden"
                      : "peer-focus:text-xs peer-focus:-top-2 peer-focus:uppercase peer-focus:tracking-[5px]  peer-focus:bg-purple-500 peer-focus:px-1 peer-focus:text-white left-2 text-gray-400 transition-all duration-150"
                  }`}
                  htmlFor="message"
                >
                  Message
                </label>
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
