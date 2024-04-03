// Pay.js
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Pay = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    course: "",
    status: "failed"
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const makePayment = async (e) => {
    e.preventDefault();
    const response = axios.post("/api/payment", user);
    console.log("submit success", response);

    if (!user) {
      console.error("User data is not available.");
      return;
    }

    const transactionId = "Tr-" + uuidv4().toString(36).slice(-6);

    const payload = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: transactionId,
      merchantUserId: user.sub, // Use user's unique identifier
      amount: 10000,
      redirectUrl: `http://localhost:3000/api/status/${transactionId}`,
      redirectMode: "POST",
      callbackUrl: `http://localhost:3000/api/status/${transactionId}`,
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL =
      dataBase64 + "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const dataSha256 = sha256(fullURL);
    const checksum = dataSha256 + "###" + "1";

    const UAT_PAY_API_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    try {
      const response = await axios.post(
        UAT_PAY_API_URL,
        { request: dataBase64 },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum
          }
        }
      );

      console.log("Payment response:", response.data.data.instrumentResponse);
      const redirectUrl =
        response.data.data.instrumentResponse.redirectInfo.url;
      router.push(redirectUrl);
    } catch (error) {
      console.error("Payment error:", error.message);
      // Handle payment error
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                value={user.name}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={user.email}
                onChange={onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                onChange={onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Course
            </label>
            <div className="mt-2">
              <select
                id="course"
                name="course"
                onChange={onChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={user.course} // Set the value attribute to user.course
              >
                <option value="">Select your course</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Data Scientist">Data Scientist</option>

                {/* Add other options here */}
              </select>
            </div>
          </div>

          <div>
            <button
              onClick={(e) => makePayment(e)}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Pay;
